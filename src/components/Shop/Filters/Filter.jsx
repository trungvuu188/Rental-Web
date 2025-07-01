// Filter.jsx
import React, { useState } from 'react';
import './Filter.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowDown } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import Slider from '@mui/material/Slider';
import { categoryWears } from '../../../data/StoreData';

const Filter = ({ handleChangeCategory }) => {
  const [value, setValue] = useState([99, 300]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Dynamically generate brands (shops) from categoryWears
  const brandsData = categoryWears
    .filter((category) => category.shopId) // Only include shops (categories with shopId)
    .map((category) => ({
      name: category.title,
      count: category.data.length, // Number of products in the shop
      id: category.id,
    }));

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredBrands = brandsData.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterColors = [
    '#0B2472',
    '#D6BB4F',
    '#282828',
    '#B0D6E8',
    '#9C7539',
    '#D29B47',
    '#E5AE95',
    '#D76B67',
    '#BABABA',
    '#BFDCC4',
  ];

  const filterSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div>
      <div className='filterSection'>
        <div className='filterCategories'>
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls='panel1-content'
              id='panel1-header'
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className='filterHeading'>Danh mục sản phẩm</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {categoryWears
                .filter((category) => !category.shopId) // Only show non-shop categories
                .map((category) => (
                  <p
                    key={category.id}
                    onClick={() => handleChangeCategory(category.id)}
                    className='filterItem'
                  >
                    {category.title} ({category.data.length})
                  </p>
                ))}
            </AccordionDetails>
          </Accordion>
        </div>
        <div className='filterBrands'>
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls='panel2-content'
              id='panel2-header'
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className='filterHeading'>Cửa hàng</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <div className='searchBar'>
                <BiSearch className='searchIcon' size={20} color={'#767676'} />
                <input
                  type='text'
                  placeholder='Tìm kiếm cửa hàng'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className='brandList'>
                {filteredBrands.length > 0 ? (
                  filteredBrands.map((brand) => (
                    <div className='brandItem' key={brand.id}>
                      <input
                        type='checkbox'
                        name='brand'
                        id={`brand-${brand.id}`}
                        className='brandRadio'
                        onChange={() => handleChangeCategory(brand.id)}
                      />
                      <label
                        htmlFor={`brand-${brand.id}`}
                        className='brandLabel'
                      >
                        {brand.name}
                      </label>
                      <span className='brandCount'>{brand.count}</span>
                    </div>
                  ))
                ) : (
                  <div className='notFoundMessage'>Không tìm thấy cửa hàng</div>
                )}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Uncomment to enable color filter */}
        {/* <div className="filterColors">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Màu sắc</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <div className="filterColorBtn">
                {filterColors.map((color, index) => (
                  <button
                    key={index}
                    className={`colorButton ${
                      selectedColors.includes(color) ? "selected" : ""
                    }`}
                    style={{
                      backgroundColor: color,
                    }}
                    onClick={() => handleColorChange(color)}
                  />
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div> */}
        {/* Uncomment to enable size filter */}
        {/* <div className="filterSizes">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel4-content"
              id="panel4-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Kích thước</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <div className="sizeButtons">
                {filterSizes.map((size, index) => (
                  <button
                    key={index}
                    className={`sizeButton ${
                      selectedSizes.includes(size) ? "selected" : ""
                    }`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div> */}
        {/* Uncomment to enable price filter */}
        {/* <div className="filterPrice">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel5-content"
              id="panel5-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Giá</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Slider
                getAriaLabel={() => "Khoảng giá"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value.toLocaleString()} VND`}
                min={0}
                max={1000000}
                sx={{
                  color: "black",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "white",
                    border: "2px solid black",
                    width: 18,
                    height: 18,
                  },
                }}
              />
              <div className="filterSliderPrice">
                <div className="priceRange">
                  <p>
                    Giá tối thiểu: <span>{value[0].toLocaleString()} VND</span>
                  </p>
                  <p>
                    Giá tối đa: <span>{value[1].toLocaleString()} VND</span>
                  </p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div> */}
      </div>
    </div>
  );
};

export default Filter;