import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
export const Link = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
  width: 300px;
  background-color: white;
  margin: 20px;
  box-shadow: 1px 1px 25px 1px rgba(0,0,0,0.75);
  -webkit-box-shadow: 1px 1px 25px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 25px 1px rgba(0,0,0,0.75);
  transition: ease-in-out all 0.3s;
  border-radius: 10px;
  :hover{
    transform: scale(1.1);
  }
`;
export const Images = styled.img`
  margin-top: -20px;
  height: ${({ illustration }) => illustration};
  width: ${({ illustration }) => illustration};
`;
export const Card = styled.div`
  width: 100%;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 200px;
`;
export const Text = styled.p`
  position: absolute;
  bottom: 0;
  color: black;
  text-decoration: none;
  font-size: 1.3rem;
`;
export const TextBig = styled.h2`
  margin: 100px;
  font-size: 3.2rem;
`;