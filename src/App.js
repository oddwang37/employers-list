import React, { useState } from 'react';
import styled from 'styled-components';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Info from './components/Info/Info';
import EmployersList from './components/EmployersList/EmployersList';
import AddForm from './components/AddForm/AddForm';

const App = () => {
  const [data, setData] = useState([
    { name: 'Ivan Alexandrov', salary: 1000, favourite: false, id: 0 },
    { name: 'Vladislav Selivanov', salary: 500, favourite: false, id: 1 },
    { name: 'Rick Sanzchez', salary: 10000, favourite: false, id: 2 },
  ]);

  const onDelete = (id) => {
    const newArr = data.filter((elem) => elem.id !== id);
    setData(newArr);
  };

  const addEmployer = (name, salary) => {
    const id = data.length;
    const newArr = data.slice();
    newArr.push({
      name: name,
      salary: salary,
      id: id,
    });
    setData(newArr);
  };

  const onFavourite = (id) => {
    const newArr = data.slice();
    newArr.forEach((item) => {
      if (item.id === id) {
        const prevValue = item.favourite;
        item.favourite = !prevValue;
      }
    });
    setData(newArr);
  };

  return (
    <Root>
      <Info />
      <SearchPanel />
      <EmployersList employers={data} onDelete={onDelete} onFavourite={onFavourite} />
      <AddForm addEmployer={addEmployer} />
    </Root>
  );
};

export default App;

const Root = styled.div`
  width: 70%;
  margin: 0 auto;
`;
