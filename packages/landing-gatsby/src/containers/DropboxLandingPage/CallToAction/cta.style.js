import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background:${themeGet('colors.secondaryBG')};
  padding-top: 90px;
  padding-bottom: 90px;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 60px;
  }
`;
export default Section;

export const Content = styled.div`
  max-width: 765px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  .slogan {
    color: ${themeGet('colors.secondary')};
    font-family: 'Caveat', cursive;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
    @media (max-width: 480px) {
      font-size: 22px;
      margin-bottom: 6px;
    }
  }
  h2 {
    font-family: 'Noto Serif KR', serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.6;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    @media only screen and (min-width: 768px) {
      font-size: 26px;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 36px;
      line-height: 1.39;
    }
  }
  .description {
    color: ${themeGet('colors.textColor')};
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 0;
    @media only screen and (min-width: 1024px) {
      max-width: 600px;
      margin: 0 auto;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 15px;
    }
  }
`;

export const DownloadCenter = styled.div`
  gap: 25px;
  margin-top: 35px;
  align-items: center;
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  figure {
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    img {
      max-width: 120px;
    }
  }
`;

export const Buttons = styled.div`
  gap: 15px;
  display: inline-grid;
  margin-top: 35px;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (min-width: 768px) {
    gap: 20px;
  }
  button {
    font-family: Inter, sans-serif;
    font-size: 14px;
    cursor: pointer;
    
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .button-one {
    border-radius: 20px;
    min-height: 50px;
    padding: 0 20px;
    @media only screen and (min-width: 768px) {
      min-height: 65px;
      padding: 0 25px;
    }
  }
  .button-two {
    background-color: transparent;
    border: 0;
    padding: 0;
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    color: ${themeGet('colors.headingColor')};
    line-height: 22px;
    .play-icon {
      align-items: center;
      border: 1px solid ${themeGet('colors.borderColor')};
      display: inline-flex;
      height: 55px;
      width: 55px;
      border-radius: 50%;
      justify-content: center;
      margin-right: 15px;
      @media only screen and (max-width: 480px) {
        img {
          margin-left: 2px;
          width: 17px;
        }
      }
      @media only screen and (min-width: 768px) {
        height: 65px;
        width: 65px;
      }
    }
    .btn-txt {
      text-align: left;
    }
    .primary {
      color: ${themeGet('colors.primary')};
      display: block;
      font-weight: 600;
    }
  }
`;
