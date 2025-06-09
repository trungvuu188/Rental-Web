import React, { useState, useMemo } from 'react';
import './DataTable.scss';

export interface Column<T> {
  key: keyof T | string;
  title: string;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  filterable?: boolean;
  filterType?: 'text' | 'select' | 'date' | 'number';
  filterOptions?: { label: string; value: any }[];
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
  rowSelection?: {
    selectedRowKeys: (string | number)[];
    onChange: (selectedRowKeys: (string | number)[], selectedRows: T[]) => void;
    getCheckboxProps?: (record: T) => { disabled?: boolean };
  };
  onRow?: (record: T, index: number) => {
    onClick?: () => void;
    onDoubleClick?: () => void;
  };
  size?: 'small' | 'medium' | 'large';
  bordered?: boolean;
  showHeader?: boolean;
  scroll?: { x?: number; y?: number };
  expandable?: {
    expandedRowRender: (record: T, index: number) => React.ReactNode;
    expandedRowKeys?: (string | number)[];
    onExpand?: (expanded: boolean, record: T) => void;
  };
  emptyText?: string;
  className?: string;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  pagination,
  rowSelection,
  onRow,
  size = 'medium',
  bordered = false,
  showHeader = true,
  scroll,
  expandable,
  emptyText = 'Không có dữ liệu',
  className = ''
}: DataTableProps<T>) {
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [expandedRows, setExpandedRows] = useState<Set<string | number>>(new Set());

  // Memoized sorted and filtered data
  const processedData = useMemo(() => {
    let result = [...data];

    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== '' && value !== null) {
        result = result.filter(item => {
          const itemValue = getNestedValue(item, key);
          if (typeof value === 'string') {
            return String(itemValue).toLowerCase().includes(value.toLowerCase());
          }
          return itemValue === value;
        });
      }
    });

    // Apply sorting
    if (sortField) {
      result.sort((a, b) => {
        const aValue = getNestedValue(a, sortField);
        const bValue = getNestedValue(b, sortField);
        
        if (aValue === bValue) return 0;
        
        const comparison = aValue < bValue ? -1 : 1;
        return sortDirection === 'asc' ? comparison : -comparison;
      });
    }

    return result;
  }, [data, filters, sortField, sortDirection]);

  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleFilter = (field: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSelectAll = (checked: boolean) => {
    if (!rowSelection) return;
    
    if (checked) {
      const allKeys = processedData.map((_, index) => index);
      rowSelection.onChange(allKeys, processedData);
    } else {
      rowSelection.onChange([], []);
    }
  };

  const handleSelectRow = (record: T, index: number, checked: boolean) => {
    if (!rowSelection) return;

    const newSelectedKeys = checked
      ? [...rowSelection.selectedRowKeys, index]
      : rowSelection.selectedRowKeys.filter(key => key !== index);
    
    const newSelectedRows = newSelectedKeys.map(key => processedData[key as number]).filter(Boolean);
    rowSelection.onChange(newSelectedKeys, newSelectedRows);
  };

  const toggleRowExpansion = (record: T, index: number) => {
    const key = index;
    const newExpandedRows = new Set(expandedRows);
    
    if (expandedRows.has(key)) {
      newExpandedRows.delete(key);
    } else {
      newExpandedRows.add(key);
    }
    
    setExpandedRows(newExpandedRows);
    expandable?.onExpand?.(!expandedRows.has(key), record);
  };

  const renderCell = (column: Column<T>, record: T, index: number) => {
    const value = getNestedValue(record, column.key as string);
    
    if (column.render) {
      return column.render(value, record, index);
    }
    
    return value;
  };

  const renderFilterInput = (column: Column<T>) => {
    if (!column.filterable) return null;

    const filterKey = column.key as string;
    const filterValue = filters[filterKey] || '';

    switch (column.filterType) {
      case 'select':
        return (
          <select
            value={filterValue}
            onChange={(e) => handleFilter(filterKey, e.target.value)}
            className="filter-select"
          >
            <option value="">Tất cả</option>
            {column.filterOptions?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'number':
        return (
          <input
            type="number"
            value={filterValue}
            onChange={(e) => handleFilter(filterKey, e.target.value)}
            className="filter-input"
            placeholder="Lọc..."
          />
        );
      
      case 'date':
        return (
          <input
            type="date"
            value={filterValue}
            onChange={(e) => handleFilter(filterKey, e.target.value)}
            className="filter-input"
          />
        );
      
      default:
        return (
          <input
            type="text"
            value={filterValue}
            onChange={(e) => handleFilter(filterKey, e.target.value)}
            className="filter-input"
            placeholder="Lọc..."
          />
        );
    }
  };

  if (loading) {
    return (
      <div className="data-table-loading">
        <div className="loading-spinner">
          <span className="material-icons">autorenew</span>
        </div>
        <span>Đang tải dữ liệu...</span>
      </div>
    );
  }

  const isAllSelected = rowSelection?.selectedRowKeys.length === processedData.length && processedData.length > 0;
  const isIndeterminate = rowSelection && rowSelection.selectedRowKeys.length > 0 && rowSelection.selectedRowKeys.length < processedData.length;

  const scrollStyle = scroll ? {
    overflowX: scroll.x ? 'auto' as const : undefined,
    overflowY: scroll.y ? 'auto' as const : undefined,
    maxWidth: scroll.x ? `${scroll.x}px` : undefined,
    maxHeight: scroll.y ? `${scroll.y}px` : undefined,
  } : {};

  return (
    <div className={`data-table-container ${className}`}>
      <div className={`data-table ${size} ${bordered ? 'bordered' : ''}`} style={scrollStyle}>
        <table>
          {showHeader && (
            <thead>
              <tr>
                {expandable && <th className="expand-column"></th>}
                {rowSelection && (
                  <th className="selection-column">
                    <label className={`checkbox ${isIndeterminate ? 'indeterminate' : ''}`}>
                      <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </th>
                )}
                {columns.map((column, index) => (
                  <th
                    key={index}
                    style={{ 
                      width: column.width,
                      textAlign: column.align || 'left'
                    }}
                    className={column.sortable ? 'sortable' : ''}
                  >
                    <div className="th-content">
                      <span
                        className="th-title"
                        onClick={() => column.sortable && handleSort(column.key as string)}
                      >
                        {column.title}
                        {column.sortable && (
                          <span className="sort-icons">
                            <span className={`material-icons sort-icon ${
                              sortField === column.key && sortDirection === 'asc' ? 'active' : ''
                            }`}>
                              keyboard_arrow_up
                            </span>
                            <span className={`material-icons sort-icon ${
                              sortField === column.key && sortDirection === 'desc' ? 'active' : ''
                            }`}>
                              keyboard_arrow_down
                            </span>
                          </span>
                        )}
                      </span>
                      {renderFilterInput(column)}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {processedData.length === 0 ? (
              <tr>
                <td 
                  colSpan={
                    columns.length + 
                    (rowSelection ? 1 : 0) + 
                    (expandable ? 1 : 0)
                  }
                  className="empty-cell"
                >
                  <div className="empty-content">
                    <span className="material-icons">inbox</span>
                    <span>{emptyText}</span>
                  </div>
                </td>
              </tr>
            ) : (
              processedData.map((record, index) => (
                <React.Fragment key={index}>
                  <tr
                    className={`data-row ${
                      rowSelection?.selectedRowKeys.includes(index) ? 'selected' : ''
                    }`}
                    onClick={() => onRow?.(record, index)?.onClick?.()}
                    onDoubleClick={() => onRow?.(record, index)?.onDoubleClick?.()}
                  >
                    {expandable && (
                      <td className="expand-column">
                        <button
                          className="expand-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleRowExpansion(record, index);
                          }}
                        >
                          <span className={`material-icons ${
                            expandedRows.has(index) ? 'expanded' : ''
                          }`}>
                            expand_more
                          </span>
                        </button>
                      </td>
                    )}
                    {rowSelection && (
                      <td className="selection-column">
                        <label className="checkbox">
                          <input
                            type="checkbox"
                            checked={rowSelection.selectedRowKeys.includes(index)}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleSelectRow(record, index, e.target.checked);
                            }}
                            disabled={rowSelection.getCheckboxProps?.(record)?.disabled}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                    )}
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        style={{ textAlign: column.align || 'left' }}
                      >
                        {renderCell(column, record, index)}
                      </td>
                    ))}
                  </tr>
                  {expandable && expandedRows.has(index) && (
                    <tr className="expanded-row">
                      <td
                        colSpan={
                          columns.length + 
                          (rowSelection ? 1 : 0) + 
                          (expandable ? 1 : 0)
                        }
                      >
                        <div className="expanded-content">
                          {expandable.expandedRowRender(record, index)}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination && (
        <div className="data-table-pagination">
          <div className="pagination-info">
            Hiển thị {Math.min((pagination.current - 1) * pagination.pageSize + 1, pagination.total)} - {Math.min(pagination.current * pagination.pageSize, pagination.total)} của {pagination.total} mục
          </div>
          <div className="pagination-controls">
            <button
              disabled={pagination.current <= 1}
              onClick={() => pagination.onChange(pagination.current - 1, pagination.pageSize)}
              className="pagination-btn"
            >
              <span className="material-icons">chevron_left</span>
            </button>
            <span className="page-info">
              Trang {pagination.current} / {Math.ceil(pagination.total / pagination.pageSize)}
            </span>
            <button
              disabled={pagination.current >= Math.ceil(pagination.total / pagination.pageSize)}
              onClick={() => pagination.onChange(pagination.current + 1, pagination.pageSize)}
              className="pagination-btn"
            >
              <span className="material-icons">chevron_right</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 