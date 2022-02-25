import React from 'react';
import styled from 'styled-components';

const Filter = () => {

  return (
    <Root>
      <Item>It's</Item>
      <Item>Some</Item>
      <Item>Filter</Item>
    </Root>
  );
};

export default Filter;

const Root = styled.div`
  margin-top: 10px;
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  min-width: 80px;
  height: 30px;
  padding: 3px;
  color: #fff;
  background-color: #f17474;
  font-weight: 500;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;
