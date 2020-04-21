import React, { Suspense, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '../packages/container/index';
import { Navbar, NavbarItemWithRouter } from '../packages/navbar/index';
import { Button } from '../packages/button/index';
import { Sidebar } from '../packages/sidebar/index';
import { Collection } from '../packages/collection/index';
import { Home as HomePage } from './pages/home/index';
import { Changelog as ChangelogPage } from './pages/changelog/index';
import { Showcase as ShowcasePage } from './pages/showcase/index';
import { Design as DesignPage } from './pages/design/index';
import { Docs as DocsPage } from './pages/docs/index';
import { Themes as ThemesPage } from './pages/themes/index';
import {
  HOME_ROUTE,
  DOCS_ROUTE,
  DESIGN_ROUTE,
  SHOWCASE_ROUTE,
  THEMES_ROUTE,
  CHANGELOG_ROUTE,
  DOCUMENTATION_ROUTE,
  RouteProps
} from "./routes"


type SiteMenuArray = Array<RouteProps>

const menu: SiteMenuArray = [
  DOCUMENTATION_ROUTE,
  DESIGN_ROUTE,
  SHOWCASE_ROUTE,
  THEMES_ROUTE,
  CHANGELOG_ROUTE
]

export default function App() {
  const [sidebar, setSidebar] = useState(false)
  const [isDefaultTheme, setIsDefaultTheme] = useState(true)

  function onMenuClick(e: React.MouseEvent<HTMLButtonElement>): void {
    setSidebar(!sidebar)
  }

  return (
    <Router basename="/">
      <Navbar isFixedTop>
        <Container>
          <Navbar.Container>
            <Navbar.Menu helpers={["helper--is-hidden-desktop"]} onClick={onMenuClick}/>
            <Navbar.Logo to={HOME_ROUTE.location} src="../public/logo-b.png" title="Cavilha UI" />
            <Navbar.Items>
              {menu.map(({ location, label}) => (
                <NavbarItemWithRouter to={location}>
                  {label}
                </NavbarItemWithRouter>
              ))}
            </Navbar.Items>
          </Navbar.Container>
        </Container>
      </Navbar>
      <Sidebar isFloating isOpen={sidebar} isFullwidth hasBackground="gray-seven" id="sidebar">
        <Sidebar.Button onClick={onMenuClick} isBackButton isPosition="bottom-center" />
        <Collection hasDirection="vertical" helpers={["helper--has-gap", "helper--has-items-center", "helper--has-content-center"]}>
        {menu.map(({ location, label}) => (
          <Collection.Item helpers={["helper--is-full-width"]}>
            <Button.LinkWithRouter to={location} isLink helpers={["helper--is-full-width"]}>
              {label}
            </Button.LinkWithRouter>
          </Collection.Item>
        ))}
        </Collection>
      </Sidebar>
      <Switch>
        <Suspense fallback={ <h1>Rendering...</h1> }>
          <Route exact path={HOME_ROUTE.location} render={(routerProps) => <HomePage routerProps={routerProps} />} />
          <Route path={`${DOCS_ROUTE.location}/:content/:name`} render={(routerProps) => <DocsPage routerProps={routerProps} />} />
          <Route path={SHOWCASE_ROUTE.location} render={(routerProps) => <ShowcasePage routerProps={routerProps} />} />
          <Route path={DESIGN_ROUTE.location} render={(routerProps) => <DesignPage routerProps={routerProps} />} />
          <Route path={CHANGELOG_ROUTE.location} render={(routerProps) => <ChangelogPage routerProps={routerProps} />} />
          <Route path={THEMES_ROUTE.location} render={(routerProps) => <ThemesPage routerProps={routerProps} />} />
        </Suspense>
      </Switch>
    </Router>
  );
}
