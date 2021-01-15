import styled from 'styled-components';

export const BaseButton = styled.button`
    box-shadow: 0px 0px 0px 2px #9fb4f2; 
    background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
    font-size: 18px;
    font-family: Arial;
    border-radius: 10px;
    cursor: pointer;
    color: #ffffff;
    padding: 8px 35px;
    text-decoration: none;
    ${props => {
        if(props.children === '구매'){
            return `            
                &:hover {
                    background: red;
                }                        
            `
        }
        else if(props.children === '품절'){
            return ` 
                    background: red;
                
            `
        }        
    }}
        
`