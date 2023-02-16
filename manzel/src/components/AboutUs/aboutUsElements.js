import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#02233C" : "#010606")};
  overflow: hidden;
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    overflow: hidden;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-top: 15px;
  padding: 0 15px;
  grid-area: col1;
  position: relative;
  left: 50px;

  @media screen and (max-width: 960px) {
    left: 0;
  }
`;

export const Column2 = styled.div`
  margin-top: 15px;
  padding: 0 15px;
  grid-area: col2;
  position: relative;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #fc9614;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 45px;
  line-height: 1.8;
  font-weight: 900;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#fff")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 420px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 22px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 960px) {
    max-width: 380px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
