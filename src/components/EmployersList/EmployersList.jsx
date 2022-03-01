import React from 'react';
import styled from 'styled-components';
import EmployersItem from './EmployersItem/EmployersItem';


const EmployersList = ({employers, onDelete, onFavourite}) => {

    return (
        <Root>
            {employers.map((employer) => {
                return <EmployersItem 
                        name={employer.name} 
                        salary={employer.salary}
                        isFavourite={employer.favourite}
                        key={employer.id + ''}
                        onDelete={() => onDelete(employer.id)}
                        onFavourite={() => onFavourite(employer.id)}
                        />
            })    
            }
        </Root>
    )
}

export default EmployersList

const Root = styled.ul`
    margin-top: 25px;
`
