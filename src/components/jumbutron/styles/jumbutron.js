import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 500px;
  width: 100%;
  margin-bottom: 300px;
`;
export const Background = styled.div`
  position: absolute;
  padding-left: 10px;
  margin-left: -5px;
  z-index: -100;
  height: 50%;
  max-height: 550px;
  width: 100%;
  transform: rotate(${({ direction }) => direction}) skew(${({ direction }) => direction});
  background: #32C7FA;
`;
export const Image = styled.img`
  width: 30%;
  margin-top: 8%;
`;
export const TextWrapper = styled.div`
`;
export const InfoWrapper = styled.div`
  max-width: 1600px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-around;
  align-items: center;
`;
export const Text = styled.p`
  max-width: 600px;
  font-size: 1.5rem;
`;
export const BigText = styled.h2`
  font-size: 2.7rem;
`;