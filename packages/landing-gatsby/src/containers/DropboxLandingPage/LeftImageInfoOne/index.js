import GatsbyImage from 'common/components/GatsbyImage';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Section, { Content, FigureGroup, Grid } from './leftImageInfoOne.style';

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
      graph2: file(relativePath: { eq: "image/dropboxLandingPage/left1.png" }) {
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
            <Heading content="Fast-track video, image, and audio review" />
            <Text
              className="description"
              content="Review and mark up video, audio, or image files with frame-accurate, time-stamped comments—in real time or when you’re ready—then store and organize your creative file versions in one place."
            />
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AnalyticsTool;
