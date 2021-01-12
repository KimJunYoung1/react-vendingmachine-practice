import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const API_KEY = "29b4b116455aa9b96f3e35cd7af9a759";

export const Header = () => {

    const [userTemperature, setUserTemperature] = useState(0);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            console.log("현재온도 : "+ (json.main.temp- 273.15) );
            console.log("현재습도 : "+ json.main.humidity);
            console.log("날씨 : "+ json.weather[0].main );
            console.log("상세날씨설명 : "+ json.weather[0].description );
            console.log("날씨 이미지 : "+ json.weather[0].icon );
            console.log("바람   : "+ json.wind.speed );
            console.log("나라   : "+ json.sys.country );
            console.log("도시이름  : "+ json.name );
            console.log("구름  : "+ (json.clouds.all) +"%" );                 
        
            setUserTemperature(Math.floor(json.main.temp - 273.15));
            setUserName(json.weather[0].main)
        })
    })

    return (
        <Container>
            <h3>온도 : {userTemperature}°C</h3>
            <h3>날씨 : {userName}</h3>       
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    justify-content: flex-end;
    height: 100px;
    align-items: center;
    margin: 0 20px 0 0;
`