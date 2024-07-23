import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import Section, { SectionHeading, Grid, Item } from './howItWorks.style';

const HowItWorks = () => {
  const data = useStaticQuery(graphql`
    query {
      dropboxLandingPageJson {
        howTos {
          icon {
            publicURL
          }
          id
          link
          linkLabel
          text
          title
        }
      }
    }
  `);
  return (
    <Section id="how-to">
      <Container width="1360px">
        <SectionHeading>
          <Heading content="You’re in good company" />
        </SectionHeading>
        <Grid>
          {data.dropboxLandingPageJson.howTos.map((howTo) => (
            <Item key={howTo.id}>
              <figure>
                <Image src={howTo.icon.publicURL} alt="icon" />
              </figure>
              <Heading as="h4" content={howTo.title} />
              <Text content={howTo.text} />
              {/* <Link href={howTo.link}>
                {howTo.linkLabel}
                <img src={rightArrow} alt="right arrow icon" />
              </Link> */}
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default HowItWorks;
