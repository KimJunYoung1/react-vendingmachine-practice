import React from 'react';
import styled from 'styled-components';

export const Header = () => {
    return (
        <Container>
            여기는 날씨
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