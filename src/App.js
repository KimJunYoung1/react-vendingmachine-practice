import React, { useEffect, useState } from 'react';
import { Header } from './page/Header';
import { Main } from './page/Main';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    spinnerLoader();
  })

  const spinnerLoader = () => {
    setTimeout(() => {
        setLoading(false);
    }, 3000);
  }

  return (
    <div>
      {loading ?
        <StyleSpinner>
          <Loader
                type="TailSpin"
                color="#0ac980"
                height={100}
                width={100}
                timeout={3000} //3 secs                   
          />          
        </StyleSpinner>
      :         
        <div> 
          <Header /> 
          <Main />
        </div>
      }          
    </div>
  )
}

const StyleSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export default App;
