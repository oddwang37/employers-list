import React from 'react';
import styled from 'styled-components';

const EmployersItem = ({ salary, name, onDelete, isFavourite, onFavourite }) => {

  return (
    <Root favourite={isFavourite}>
      <Name>{name}</Name>
      <Info>
        <Salary type="text" defaultValue={salary + '$'} favourite={isFavourite} />
        <Actions>
          <Delete onClick={onDelete} />
          <Favourite onClick={onFavourite} />
        </Actions>
      </Info>
    </Root>
  );
};

export default EmployersItem;

const Root = styled.li`
  width: 100%;
  height: 60px;
  background-color: rgb(81, 141, 168);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 5px;
  color: ${(p) => (p.favourite ? `gold` : `#fff`)};
`;

const Name = styled.div`
  font-weight: 700;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
`;
const Salary = styled.input`
  font-weight: 500;
  border: none;
  background-color: rgb(81, 141, 168);
  color: ${(p) => (p.favourite ? `gold` : `#fff`)};
  font-size: 20px;
  max-width: 100px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
`;

const Delete = styled.button`
  border: none;
  width: 40px;
  background-color: #fd2a2a;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
const Favourite = styled.div`
  border: none;
  width: 40px;
  height: 40px;
  background-color: gold;
  border-radius: 50%;
  cursor: pointer;
`;
