import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Section, {
  SectionHeading,
  SupportedApps,
  Buttons,
} from './integration.style';

const Integrations = () => {
  const data = useStaticQuery(graphql`
    query {
      dropboxLandingPageJson {
        appIntegration {
          sectionTitle
          sectionDesc
          apps {
            id
            icon {
              publicURL
            }
            name
            bgColor
            isBlurred
          }
        }
      }
    }
  `);
  return (
    <Section>
      <Container width="1200px">
        <SectionHeading>
          <Heading
            content={data.dropboxLandingPageJson.appIntegration.sectionTitle}
          />
          <Text
            content={data.dropboxLandingPageJson.appIntegration.sectionDesc}
          />
          <Buttons>
            <Button title="Explore app integrations" className="button-two" />
          </Buttons>
        </SectionHeading>
        <SupportedApps>
          {data.dropboxLandingPageJson.appIntegration.apps.map((app) => (
            <figure
              key={app.id}
              className={app.isBlurred ? 'blurred' : undefined}
              style={{ backgroundColor: app.bgColor ?? undefined }}
            >
              <Image src={app.icon.publicURL} alt={app.name} />
            </figure>
          ))}
        </SupportedApps>
      </Container>
    </Section>
  );
};

export default Integrations;
