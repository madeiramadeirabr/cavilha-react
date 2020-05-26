import React, { ReactNode } from 'react';
import {
  useLocation,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { DOCS_ROUTE } from "../../routes"
import { DOCS_ROUTES } from "./routes"
import { H5 } from "../../../packages/heading/index"
import { Row, Column } from "../../../packages/grid/index"
import { Container } from "../../../packages/container/index"
import { Collection } from "../../../packages/collection/index"
import queryString from 'query-string';

export const Docs = ({routerProps, ...props}: any) => {

  const location = useLocation();
  const routes: Array<any> = [];
  const sidebar:Array<ReactNode> = [];

  // @ts-ignore
  const { version } = queryString.parse(location.search)
  const { content, name } = useParams()
  const active = `${DOCS_ROUTE.location}/${content}/${name}`

  DOCS_ROUTES.map(
    (route) => {
      if (route.component) {
        routes.push(
          <Route path={route.name} children={route.component} version={version} />
        )
        sidebar.push(
          <Collection.Item>
            <Link className={`link ` + (active === route.name ? 'link--is-active' : '')} to={route.name}>{route.label}</Link>
          </Collection.Item>
        )
      } else {
        sidebar.push(
          <Collection.Item helpers={["helper--has-margin-vertical"]}>
            <H5>{route.label}</H5>
          </Collection.Item>
        )
      }
      if (route.pages) {
        route.pages.map(
          (page) => {
            if (page.component) {
              routes.push(
                <Route path={page.name} children={page.component} />
              )
              sidebar.push(
                <Collection.Item>
                  <Link className={`link ` + (active === page.name ? 'link--is-active' : '')} to={page.name}>{page.label}</Link>
                </Collection.Item>
              )
            } else {
              <Collection.Item helpers={["helper--has-margin-vertical"]}>
                <H5>{page.label}</H5>
              </Collection.Item>
            }
          }
        )
      }
    }
  )

  return (
    <Container>
      <Row>
        <Column desktop="three" tablet="four" mobile="twelve">
          <Collection hasDirection="vertical">
            {sidebar}
          </Collection>
        </Column>
        <Column desktop="nine" tablet="eight" mobile="twelve">
          <Switch location={location}>
            {routes}
          </Switch>
        </Column>
      </Row>
    </Container>
  );

};
