import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background: #1E1919;
  padding-top: 100px;
  padding-bottom: 180px;
  @media (max-width: 1280px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media (max-width: 1024px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 120px;
  }
  @media (max-width: 768px) {
    padding-bottom: 80px;
  }
`;
export default Section;

export const SectionHeading = styled.div`
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 60px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
  h2 {
    color: ${themeGet('colors.white')};
    font-weight: 800;
    font-size: 26px;
    line-height: 36px;
    letter-spacing: -0.2px;
    font-family: 'Noto Serif KR',serif;
    @media only screen and (max-width: 480px) {
      font-size: 24px;
      line-height: 1.5;
    }
  }
  p {
    color: ${themeGet('colors.textColorLight')};
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 2.22;
    margin-bottom: 0;
    @media only screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 2;
    }
  }
`;

export const SupportedApps = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    max-width: 1080px;
  }
  figure {
    margin: 0 7.5px 15px;
    border-radius: 32px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    );
    box-shadow: rgb(105 109 121 / 4%) 4px 8px 8px,
      rgb(105 109 121 / 15%) 1px 1px 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    min-height: 120px;
    &.blurred {
      opacity: 0.4;
      filter: blur(6px);
    }
    @media only screen and (max-width: 1024px) {
      border-radius: 20px;
      min-width: 98px;
      min-height: 98px;
    }
    @media only screen and (max-width: 768px) {
      min-width: 85px;
      min-height: 85px;
    }
    @media only screen and (max-width: 480px) {
      border-radius: 20px;
      min-width: 60px;
      min-height: 60px;
    }
    img {
      @media only screen and (max-width: 1024px) {
        max-width: 55px;
      }
      @media only screen and (max-width: 768px) {
        max-width: 45px;
      }
      @media only screen and (max-width: 480px) {
        max-width: 30px;
      }
    }
  }
`;

export const Buttons = styled.div`
  gap: 15px;
  display: inline-grid;
  margin-top: 35px;
  grid-template-columns: repeat(1, 1fr);
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
