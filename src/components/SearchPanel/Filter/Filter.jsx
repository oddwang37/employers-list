import React from 'react';
import styled from 'styled-components';

const Filter = () => {

  return (
    <Root>
      <Item>All employees</Item>
      <Item>On rise</Item>
      <Item>Salary &gt; 1000$</Item>
    </Root>
  );
};

export default Filter;

const Root = styled.div`
  margin-top: 15px;
  width: 320px;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  min-width: 80px;
  height: 30px;
  padding: 5px;
  color: #fff;
  background-color: #f17474;
  font-weight: 500;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #e66363;
  }
`;
