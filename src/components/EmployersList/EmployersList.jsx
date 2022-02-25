import React from 'react';
import styled from 'styled-components';
import EmployersItem from './EmployersItem/EmployersItem';


const EmployersList = ({employers}) => {

    return (
        <Root>
            {employers.map((employer, index) => {
                return <EmployersItem 
                        name={employer.name} 
                        salary={employer.salary} 
                        favourite={employer.favourite}
                        key={index + ''}/>
            })
            }
        </Root>
    )
}

export default EmployersList

const Root = styled.ul`
    margin-top: 25px;
`
