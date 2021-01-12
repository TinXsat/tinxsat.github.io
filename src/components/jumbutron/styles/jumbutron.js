import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 500px;
  width: 100%;
  margin-bottom: 300px;
  @media screen and (max-width: 1024px){
    height: 1000px;
    display: flex;
    align-items: center;
  }
`;
export const Background = styled.div`
  position: absolute; 
  margin-left: -5px;
  padding-right: 8px;
  z-index: -100;
  height: 550px;
  width: 100%;
  transform: rotate(${({ direction }) => direction}) skew(${({ direction }) => direction});
  background: #32C7FA;
  @media screen and (max-width: 1024px){
    padding-right: 7px;
    height: 1000px;
  }
`;
export const Image = styled.img`
  width: 30%;
  margin-top: 8%;
  @media screen and (max-width: 1024px){
    width: 70%;
  }
`;
export const TextWrapper = styled.div`
  margin-top: ${({ margin }) => margin};
`;
export const InfoWrapper = styled.div`
  max-width: 1600px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1024px){
    flex-direction: column;
    text-align: center;
  }
`;
export const Text = styled.p`
  max-width: 600px;
  font-size: 1.5rem;
`;
export const BigText = styled.h2`
  font-size: 2.7rem;
`;