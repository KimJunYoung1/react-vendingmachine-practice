import React from 'react';
import { Drinks } from '../component/Drinks';
import { BaseButton } from '../component/BaseButton';
import { Icon } from "../assets/Icon";
import styled from 'styled-components';

export const Main = () => {
    return (
        <Container>
            { Drinks.map(drink => {
                return <Items key={drink.id}>
                            <Icon width="100" height="100" fill="blue" />
                            {drink.name}
                            <br />
                            {drink.price}
                            <br />
                            <BaseButton>
                                {drink.count > 0 ? "구매" : "품절"}
                            </BaseButton>
                        </Items>
            })}
            <ButtonCantainer>
                <BaseButton>10000</BaseButton>
                <BaseButton>5000</BaseButton>
                <BaseButton>1000</BaseButton>
                <BaseButton>500</BaseButton>
            </ButtonCantainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 1205.330px;
    height: 600px;
    align-items: center;
    flex-wrap: wrap;
    margin: 50px 250px;
    border: 1px solid black;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
const Items = styled.div`
    flex-basis: 140px;
    text-align: center;
    font-size: 20px;
    padding: 10px 40px;
    margin: 5px;
    
`

const ButtonCantainer = styled.div`
    
`