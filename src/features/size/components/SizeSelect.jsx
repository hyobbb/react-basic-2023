import React, { useState } from 'react';
import styled from 'styled-components';
import sizes from "assets/size-chart.json"

const SelectInput = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 10px;
  width: 100%;
`;

const SizeSelect = () => {
  const [category, setCategory] = useState('Pants');
  const [region, setRegion] = useState('US');
  const [selectedSize, setSelectedSize] = useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <>
      <label>Size:</label>
      <SelectInput value={category} onChange={handleChangeCategory}>
        {["Shoes", "Jackets", "Pants"].map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </SelectInput>
      <SelectInput value={region} onChange={handleChangeRegion}>
        {["US", "EU"].map((region, index) => (
          <option key={index} value={region}>{region}</option>
        ))}
      </SelectInput>
      <SelectInput value={selectedSize} onChange={handleChangeSize}>
        <option value="" disabled>Select size</option>
        {sizes[category][region].map((size, index) => (
          <option key={index} value={size}>{size}</option>
        ))}
      </SelectInput>
    </>
  );
};

export default SizeSelect;
