// Export tất cả mock data từ các file riêng biệt

// Products
export {
  mockApiProducts,
  mockUiProducts, 
  mockProductDetail,
  mockRelatedProducts,
  productFilterOptions,
  type UiProduct
} from './products';

// Users
export {
  mockAuthUsers,
  mockManagementUsers,
  roleAccess,
  type ManagementUser
} from './users';

// Admin
export {
  mockAdminProducts,
  mockOrders,
  mockCategories,
  mockDashboardStats,
  mockRecentActivities,
  type AdminProduct,
  type Order,
  type Category,
  type DashboardStats,
  type RecentActivity
} from './admin'; 