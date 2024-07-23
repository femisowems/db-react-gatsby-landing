import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, { SectionHeading, Figure } from './marketingVideo.style';

import videoBanner from 'common/assets/image/dropboxLandingPage/video-marketing.mp4';
import videoPlaceholder from 'common/assets/image/dropboxLandingPage/video-background.png';

const OurCommunity = () => {
  return (
    <Section>
      <Container>
        <SectionHeading>
          <Heading content="How Dropbox helps marketing teams win" />
          <Text
            className="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a. Tristique risus nec feugiat in fermentum."
          />
        </SectionHeading>
        <Fade up>
          <Figure>
            <video
              autoPlay
              loop
              muted
              className="dashboard-video"
              poster={videoPlaceholder}
            >
              <source src={videoBanner} type="video/mp4" />
            </video>
          </Figure>
        </Fade>
      </Container>
    </Section>
  );
};

export default OurCommunity;
