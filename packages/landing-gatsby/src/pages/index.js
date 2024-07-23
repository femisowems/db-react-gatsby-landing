import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'animate.css';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/dropboxLandingPage';
import Seo from 'components/seo';
import LeftImageInfoOne from 'containers/DropboxLandingPage/LeftImageInfoOne';
import RightImageInfo from 'containers/DropboxLandingPage/RightImageInfo';
import LeftImageInfoTwo from 'containers/DropboxLandingPage/LeftImageInfoTwo';
import Banner from 'containers/DropboxLandingPage/Banner';
import CallToAction from 'containers/DropboxLandingPage/CallToAction';
import Collaboration from 'containers/DropboxLandingPage/Features';
import GoodCompany from 'containers/DropboxLandingPage/HowItWorks';
import Integrations from 'containers/DropboxLandingPage/Integrations';
import Protection from 'containers/DropboxLandingPage/Protection';
import {
  ContentWrapper,
  GlobalStyle,
} from 'containers/DropboxLandingPage/dropboxLandingPage.style';
import MarketingVideo from 'containers/DropboxLandingPage/MarketingVideo';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

const DropboxLandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Seo title="Interview: Dropbox for Marketing Landing Page | Done by Femi Sowemimo!" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider></DrawerProvider>
          </Sticky>
          <Banner />
          <Collaboration />
          <LeftImageInfoOne />
          <RightImageInfo />
          <LeftImageInfoTwo />
          <Protection />
          <GoodCompany />
          <Integrations />
          <MarketingVideo />
          <CallToAction />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default DropboxLandingPage;
