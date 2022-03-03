import React from 'react';
import styled from 'styled-components';

const Info = ({length, award}) => {
  return (
    <Root>
      <Title>Учёт сотрудников в компании N</Title>
      <Text>Общее число сотрудников: {length}</Text>
      <Text>Премию получат: {award}</Text>
    </Root>
  );
};

export default Info;

const Root = styled.div`
  margin-top: 35px;
  min-height: 150px;
  width: 100%;
  background-color: rgb(81, 141, 168);
  padding: 30px;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: #fff;
`;

const Text = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #fff;
  font-weight: 500;
`;
