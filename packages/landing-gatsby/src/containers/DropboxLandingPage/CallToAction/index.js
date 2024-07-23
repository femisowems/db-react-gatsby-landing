import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Section, { Content, DownloadCenter, Buttons } from './cta.style';

const CallToAction = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Heading content="Go from pitch to publish with Dropbox" />
          <Text
            className="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <DownloadCenter>
          <Buttons>
              <Button title="Try for Free" className="button-one" />
              <Button title="Contact Sales" className="button-two" />
            </Buttons>
            {/* <Link href="#">
              <figure>
                <Image src={playStore} alt="google play store" />
              </figure>
            </Link>
            <Link href="#">
              <figure>
                <Image src={appStore} alt="apple app store" />
              </figure>
            </Link> */}
          </DownloadCenter>
        </Content>
      </Container>
    </Section>
  );
};

export default CallToAction;
