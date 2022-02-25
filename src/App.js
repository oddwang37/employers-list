import React from 'react';
import styled from 'styled-components';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Info from './components/Info/Info';
import EmployersList from './components/EmployersList/EmployersList';

const App = ({data}) => {
  return (
    <Root>
      <Info />
      <SearchPanel />
      <EmployersList employers={data.employers}/>
    </Root>
  );
};

export default App;

const Root = styled.div`
  width: 70%;
  margin: 0 auto;
`;
