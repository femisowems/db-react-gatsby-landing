import React, { useEffect, useState } from 'react';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import Section, {
  BannerContentWrapper,
  BannerContent,
  Buttons,
  Figure,
} from './banner.style';
import bubble1 from 'common/assets/image/dropboxLandingPage/banner-bubble-1.png';
import bubble2 from 'common/assets/image/dropboxLandingPage/banner-bubble-2.png';
import bubble3 from 'common/assets/image/dropboxLandingPage/banner-bubble-3.png';

import videoPlaceholder from 'common/assets/image/dropboxLandingPage/banner-image.webp';
import videoBanner from 'common/assets/image/dropboxLandingPage/video-background3.mp4';

const Banner = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <Section id="home">
      <Container width="1360px">
        <BannerContentWrapper>
          <BannerContent>
            <h2 className="animate__animated animate__fadeInUp">
              Spend less time juggling apps and more time dazzling your
              customers.
            </h2>
            <Text
              className="animate__animated animate__fadeInUp"
              content="Dropbox makes it easy for marketing teams to zip through creative reviews and collaborate with teams and agencies—freeing up more time to create campaigns that customers love."
            />
            <Buttons>
              <Button title="Try for Free" className="button-one" />
              <Button title="Contact Sales" className="button-two" />
            </Buttons>
          </BannerContent>
          <Figure id="hero-banner" className="hero-banner">
            <video
              autoPlay
              loop
              muted
              className="dashboard-video"
              poster={videoPlaceholder}
            >
              <source src={videoBanner} type="video/mp4" />
            </video>
            <Image
              src={bubble1}
              alt="bubble 1"
              className={`banner-bubble bubble-1 ${domLoaded ? 'active' : ''}`}
            />
            <Image
              src={bubble2}
              alt="bubble 2"
              className={`banner-bubble bubble-2 ${domLoaded ? 'active' : ''}`}
            />
            <Image
              src={bubble3}
              alt="bubble 3"
              className={`banner-bubble bubble-3 ${domLoaded ? 'active' : ''}`}
            />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
