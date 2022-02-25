import React from 'react';
import styled from 'styled-components';
import Filter from './Filter/Filter';

const SearchPanel = () => {
  return (
    <Root>
      <Input placeholder="Enter name of employee..." type="text" />
      <Filter />
    </Root>
  );
};

export default SearchPanel;

const Root = styled.div`
  margin-top: 25px;
  height: 150px;
  width: 100%;
  background-color: rgb(81, 141, 168);
  padding: 35px;
  border-radius: 5px;
`;

const Input = styled.input`
  height: 35px;
  padding: 5px 10px;
  width: 100%;
  border: none;
  &::placeholder {
    color: rgb(66, 66, 66);
  }
  border-radius: 5px;
`;
