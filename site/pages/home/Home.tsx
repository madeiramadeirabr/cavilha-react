import React from 'react';
import { Container} from "../../../packages/container/index"
import { Hero } from "../../../packages/hero/index"
import { Block } from "../../../packages/block/index"
import { Row, Column } from "../../../packages/grid/index"
import { H1, H3 } from "../../../packages/heading/index"
import { Text } from "../../../packages/text/index"
import { ButtonWithRouter } from "../../../packages/button/index"
import { GET_STARTED_ROUTE, DOCUMENTATION_ROUTE } from "../../routes"

export const Home = ({routerProps, ...props}: any) => {

  return (
    <>
      <Hero isNavbar>
        <Container helpers={["helper--has-items-center", "helper--has-content-center"]}>
          <Block>
            <Row>
              <Column desktop="eight" tablet="twelve" mobile="twelve">
                <H1 isHero helpers={["helper--has-margin-bottom"]}>Cavilha Design System</H1>
                <H3>
                  UX guidelines, HTML/CSS framework, and React components working together to craft exceptional experiences
                </H3>
                <Block helpers={["helper--has-margin-vertical-large"]}>
                  <ButtonWithRouter hasColor="primary" to={GET_STARTED_ROUTE.location}>
                    GET STARTED
                  </ButtonWithRouter>
                  <ButtonWithRouter isLink to={DOCUMENTATION_ROUTE.location}>
                    DOCUMENTATION
                  </ButtonWithRouter>
                </Block>
                <Block helpers={["helper--has-margin-vertical"]}>
                  <Text>View the <a href="http://github.com/madeiramadeirabr/cavilha" target="_blank">source</a> on GitHub</Text>
                </Block>
              </Column>
              <Column desktop="four" tablet="twelve" mobile="twelve">

              </Column>
            </Row>
          </Block>
        </Container>
      </Hero>
    </>
  );
};
