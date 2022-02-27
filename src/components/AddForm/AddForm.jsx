import React, { useState } from 'react';
import styled from 'styled-components';

const AddForm = ({ addEmployer }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  return (
    <Root>
      <Title>Добавьте нового сотрудника</Title>
      <Form>
        <Input type="text" placeholder="Как его зовут?" onChange={handleNameChange} value={name} />
        <Input type="number" placeholder="З/П в $" onChange={handleSalaryChange} value={salary} />
        <Button onClick={(e) => {
        e.preventDefault();
        addEmployer(name, salary);
        setName('');
        setSalary('');
        }}>
          Добавить
        </Button>
      </Form>
    </Root>
  );
};

export default AddForm;

const Root = styled.div`
  margin-top: 25px;
  min-height: 100px;
  width: 100%;
  background-color: rgb(81, 141, 168);
  padding: 30px;
  border-radius: 5px;
`;

const Title = styled.div`
  font-weight: 700;
  color: #fff;
  font-size: 20px;
`;
const Form = styled.form`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const Input = styled.input`
  width: 35%;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Button = styled.button`
  min-width: 80px;
  padding: 5px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 10px #fff;
  }
`;
