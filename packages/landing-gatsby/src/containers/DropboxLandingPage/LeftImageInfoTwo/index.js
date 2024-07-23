import GatsbyImage from 'common/components/GatsbyImage';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Section, { Content, FigureGroup, Grid } from './leftImageInfoTwo.style';

const AnalyticsTool = () => {
  const data = useStaticQuery(graphql`
    query {
      graph1: file(
        relativePath: { eq: "image/dropboxLandingPage/graph1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      graph2: file(relativePath: { eq: "image/dropboxLandingPage/left2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);
  return (
    <Section>
      <Container width="1360px">
        <Grid>
          <FigureGroup>
            <Fade up>
              <GatsbyImage
                src={
                  (data.graph1 !== null) | undefined
                    ? data.graph1.childImageSharp.gatsbyImageData
                    : {}
                }
                alt="graph1"
              />
            </Fade>
            <div className="graph-2">
              <Fade up delay={200}>
                <GatsbyImage
                  src={
                    (data.graph2 !== null) | undefined
                      ? data.graph2.childImageSharp.gatsbyImageData
                      : {}
                  }
                  alt="graph2"
                />
              </Fade>
            </div>
          </FigureGroup>
          <Content>
            <Heading content="Deliver campaigns sooner, simplify the rest" />
            <Text
              className="description"
              content="Simplify your team’s processes by automating manual admin work. Clear the clutter off your desk with easy-to-use document eSignatures and files that stay synced across devices and apps."
            />
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AnalyticsTool;
