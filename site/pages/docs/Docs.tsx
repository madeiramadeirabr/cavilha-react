import React, { ReactNode } from 'react';
import {
  useLocation,
  Switch,
  Route
} from "react-router-dom";
import { DOCS_ROUTES } from "./routes"
import { H4 } from "../../../packages/heading/index"
import { Button } from "../../../packages/button/index"
import { Row, Column } from "../../../packages/grid/index"
import { Container } from "../../../packages/container/index"
import queryString from 'query-string';

export const Docs = () => {
  const location = useLocation();
  const routes: Array<any> = [];
  const sidebar:Array<ReactNode> = [];

  // @ts-ignore
  const { version } = queryString.parse(location.search)

  DOCS_ROUTES.map(
    (route) => {
      if (route.component) {
        routes.push(
          <Route path={route.name} children={route.component} version={version} />
        )
        sidebar.push(
          <Button helpers={["helper--is-full-width"]} href={route.name}>{route.label}</Button>
        )
      } else {
        sidebar.push(
          <H4>{route.label}</H4>
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
                <Button helpers={["helper--is-full-width"]} href={page.name}>{page.label}</Button>
              )
            } else {
              <H4>{page.label}</H4>
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
          {sidebar}
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
