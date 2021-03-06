import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 100px;
  max-width: 1920px;
  
`;
export const Image = styled.img`
    width: ${({ size }) => size};
    margin: 50px;
    margin:${({ margin }) => margin};
    
    @media screen and (max-width:  600px){
      width: 80%;
      margin: ${({ margin }) => margin};
    }
  
`;
export const ArrowButtons = styled.button`
`;
export const Text = styled.div`
`;
export const BigText = styled.p`
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
`;
export const SponsorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GalleryWrapper = styled.div`
  max-width: 1920px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;

`;