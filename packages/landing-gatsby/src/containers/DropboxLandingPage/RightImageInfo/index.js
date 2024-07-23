import GatsbyImage from 'common/components/GatsbyImage';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Section, { Content, FigureGroup, Grid } from './rightImageInfo.style';

const AnalyticsTool = () => {
  const data = useStaticQuery(graphql`
    query {
      graph1: file(
        relativePath: { eq: "image/dropboxLandingPage/graph1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      graph2: file(
        relativePath: { eq: "image/dropboxLandingPage/right1.png" }
      ) {
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
          <Content>
            <Heading content="Effortlessly organize your content" />
            <Text
              className="description"
              content="No more toggling between apps—you can organize and make edits to marketing plans and PDFs inside Dropbox, then share those files with a few clicks."
            />
          </Content>
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
        </Grid>
      </Container>
    </Section>
  );
};

export default AnalyticsTool;
