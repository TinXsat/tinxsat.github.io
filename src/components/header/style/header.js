import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 80vh;
  margin: 0 auto;
  max-width: 1920px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media screen and (max-width: 1024px){
    flex-direction: column-reverse;
    justify-content: center;
  }
`;
export const Background = styled.div`
  overflow: hidden;
  height: 80%; 
  width: 10vw;
  z-index: -100;
  position: absolute;
  right: ${({ background }) => background};
  transform: skew(20deg);
  background-color: ${({ color }) => color};
  top: 0;
  @media screen and (max-width: 1024px){
    right: ${({ backgroundSmall }) => backgroundSmall};
  }
  @media screen and (max-width:  674px){
    display: none;
  }

`;
export const Image = styled.img`
    width: 30%;
`;
export const TextWrapper = styled.div`
  @media screen and (max-width: 1024px){
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const Text = styled.p`
  max-width: 600px;
  font-size: 2rem;
`;
export const BigText = styled.h1`
  font-size: 4rem;
`;
export const SectionContainer = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;
export const Button = styled.button`
    background: none;
    border: none;
    height: 50px;
    width: 50px;
`;
