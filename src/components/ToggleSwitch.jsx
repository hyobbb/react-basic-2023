import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleLabel = styled.label`
  font-size: 16px;
  margin-right: 10px;
`;

const ToggleInput = styled.input`
  appearance: none;
  height: 20px;
  width: 40px;
  border-radius: 30px;
  background-color: #ddd;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:checked {
    background-color: #33c9dc;
  }
  &::after {
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #fff;
    transition: transform 0.3s;
  }
  &:checked::after {
    transform: translateX(20px);
  }
`;

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <ToggleContainer>
      <ToggleLabel>Toggle:</ToggleLabel>
      <ToggleInput type="checkbox" checked={isToggled} onChange={handleToggle} />
    </ToggleContainer>
  );
};

export default ToggleSwitch;
