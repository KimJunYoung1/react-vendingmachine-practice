import React, { useState } from 'react';
import { Drinks } from '../component/Drinks';
import { BaseButton } from '../component/BaseButton';
import { Icon } from "../assets/Icon";
import styled from 'styled-components';

export const Main = () => {

    const [userMoney, setUserMoney] = useState(0);
    
    const receiveUserMoneyEvent = (e) => {      
        const copyUserMoney = Number(e.target.innerText);
        const addUserMoney =  copyUserMoney + userMoney;
        setUserMoney(addUserMoney);
    }

    const returnUserMoneyEvent = () => {
        setUserMoney(0);
    }

    const handleUserMoneyChange = (price) => {
        if(userMoney > price){
            const minusUserMoney = userMoney - price;
            setUserMoney(minusUserMoney);
        }
        else if(userMoney < price){
            return alert('금액이 부족합니다');
        }        
    }

    return (
        <Container>
            { Drinks.map(drink => {
                return <Items key={drink.id}>
                            <Icon width="140" height="140" fill={drink.color} />
                            {drink.name}
                            <br />
                            {drink.price}
                            <br />
                            <BaseButton onClick={() => {handleUserMoneyChange(drink.price)}}>
                                {drink.count > 0 ? "구매" : "품절"}
                            </BaseButton>
                        </Items>
            })}
            <ButtonCantainer>
                <BaseButton onClick={receiveUserMoneyEvent}>10000</BaseButton>
                <BaseButton onClick={receiveUserMoneyEvent}>5000</BaseButton>
                <BaseButton onClick={receiveUserMoneyEvent}>1000</BaseButton>
                <BaseButton onClick={receiveUserMoneyEvent}>500</BaseButton>
                <BaseButton onClick={returnUserMoneyEvent}>반환</BaseButton>
            </ButtonCantainer>
            <ShowMoneyDiv>
                {userMoney}
            </ShowMoneyDiv>
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

const ShowMoneyDiv = styled.div`
    padding-left: 50px;
`