import { ReactNode } from "react"
import GetStarted from "./contents/GetStarted"
import Documentation from "./contents/Documentation"
import GridElement from "./contents/GridElement"
import TypographElement from "./contents/TypographElement"
import ColorsElement from "./contents/ColorsElement"
import TableElement from "./contents/TableElement"
import ContainerElement from "./contents/ContainerElement"
import BadgeComponent from "./contents/BadgeComponent"
import ButtonComponent from "./contents/ButtonComponent"
import { DOCS_ROUTE } from "../../routes"

export type DocsRouteProps = {
  name: string
  label: string
  anchor: boolean
  component: ReactNode | null
  pages: Array<DocsRouteProps> | undefined
}

export const BUTTON_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/components/button`,
  label: 'Buttons',
  anchor: true,
  component: ButtonComponent,
  pages: undefined
}

export const BADGE_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/components/badge`,
  label: 'Badges',
  anchor: true,
  component: BadgeComponent,
  pages: undefined
}

export const GRID_ELEMENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/elements/grid`,
  label: 'Grid',
  anchor: true,
  component: GridElement,
  pages: undefined
}

export const TYPOGRAPH_ELEMENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/elements/typograph`,
  label: 'Typograph',
  anchor: true,
  component: TypographElement,
  pages: undefined
}

export const COLORS_ELEMENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/elements/colors`,
  label: 'Colors',
  anchor: true,
  component: ColorsElement,
  pages: undefined
}

export const TABLE_ELEMENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/elements/table`,
  label: 'Tables',
  anchor: true,
  component: TableElement,
  pages: undefined
}

export const CONTAINER_ELEMENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/elements/container`,
  label: 'Container',
  anchor: true,
  component: ContainerElement,
  pages: undefined
}

export const GET_STARTED_PAGE_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/pages/get-started`,
  label: 'Get started',
  anchor: true,
  component: GetStarted,
  pages: undefined
}

export const DOCUMENTATION_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/pages/index`,
  label: 'Documentation',
  anchor: true,
  component: Documentation,
  pages: undefined
}

export const DOCS_ROUTES: Array<DocsRouteProps> = [
  DOCUMENTATION_ROUTE,
  GET_STARTED_PAGE_ROUTE,
  {
    name: `${DOCS_ROUTE.location}/elements`,
    label: 'Elements',
    anchor: false,
    component: null,
    pages: [
      CONTAINER_ELEMENT_ROUTE,
      GRID_ELEMENT_ROUTE,
      COLORS_ELEMENT_ROUTE,
      TYPOGRAPH_ELEMENT_ROUTE,
      TABLE_ELEMENT_ROUTE
    ]
  } as DocsRouteProps,
  {
    name: `${DOCS_ROUTE.location}/components`,
    label: 'Components',
    anchor: false,
    component: null,
    pages: [
      BADGE_COMPONENT_ROUTE,
      BUTTON_COMPONENT_ROUTE
    ]
  } as DocsRouteProps,
]
