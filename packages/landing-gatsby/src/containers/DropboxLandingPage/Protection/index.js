import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Section, {
  SectionHeading,
  Grid,
  PortfolioItem,
  Figure,
} from './protection.style';

const Protection = () => {
  const data = useStaticQuery(graphql`
    query {
      dropboxLandingPageJson {
        portfolios {
          id
          title
          description
          bgColor
          media {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `);
  const portfolios = data.dropboxLandingPageJson.portfolios;
  return (
    <Section id="protection">
      <Container width="1360px">
        <SectionHeading>
          <Heading content="Protect your content and your reputations" />
        </SectionHeading>
        <Grid>
          {portfolios.map((portfolio) => (
            <PortfolioItem key={portfolio.id} bgColor={portfolio.bgColor}>
              <Heading as="h3" content={portfolio.title} />
              <Text content={portfolio.description} />
              <Figure>
                <GatsbyImage
                  src={
                    (portfolio.media !== null) | undefined
                      ? portfolio.media.childImageSharp.gatsbyImageData
                      : {}
                  }
                  alt={portfolio.title}
                />
              </Figure>
            </PortfolioItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Protection;
