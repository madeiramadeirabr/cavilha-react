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
import ChipComponent from "./contents/ChipComponent"
import AlertComponent from "./contents/AlertComponent"
import DialogComponent from "./contents/DialogComponent"
import CardComponent from "./contents/CardComponent"
import HeroComponent from "./contents/HeroComponent"
import ChoiceComponent from "./contents/ChoiceComponent"
import TabComponent from "./contents/TabComponent"
import DropdownComponent from "./contents/DropdownComponent"
import PaginationComponent from "./contents/PaginationComponent"
import TextFieldComponent from "./contents/TextFieldComponent"
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
  label: 'Button',
  anchor: true,
  component: ButtonComponent,
  pages: undefined
}

export const BADGE_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/components/badge`,
  label: 'Badge ⚒',
  anchor: true,
  component: BadgeComponent,
  pages: undefined
}

export const CHIP_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/components/chip`,
  label: 'Chip',
  anchor: true,
  component: ChipComponent,
  pages: undefined
}

export const ALERT_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/components/alert`,
  label: 'Alert',
  anchor: true,
  component: AlertComponent,
  pages: undefined
}

export const TAB_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/components/tab`,
  label: 'Tab ⚒',
  anchor: true,
  component: TabComponent,
  pages: undefined
}

export const CHOICE_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/components/choice`,
  label: 'Choice',
  anchor: true,
  component: ChoiceComponent,
  pages: undefined
}

export const CARD_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/components/card`,
  label: 'Card',
  anchor: true,
  component: CardComponent,
  pages: undefined
}

export const HERO_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/components/hero`,
  label: 'Hero ⚒',
  anchor: true,
  component: HeroComponent,
  pages: undefined
}

export const TEXT_FIELD_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/components/textfield`,
  label: 'Textfield',
  anchor: true,
  component: TextFieldComponent,
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
  label: 'Table ⚒',
  anchor: true,
  component: TableElement,
  pages: undefined
}

export const DIALOG_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/elements/dialog`,
  label: 'Dialog',
  anchor: true,
  component: DialogComponent,
  pages: undefined
}

export const PAGINATION_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/elements/pagination`,
  label: 'Pagination ⚒',
  anchor: true,
  component: PaginationComponent,
  pages: undefined
}

export const DROPDOWN_COMPONENT_ROUTE: DocsRouteProps = {
  name: `${DOCS_ROUTE.location}/elements/dropdown`,
  label: 'Dropdown',
  anchor: true,
  component: DropdownComponent,
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
      BUTTON_COMPONENT_ROUTE,
      CARD_COMPONENT_ROUTE,
      CHIP_COMPONENT_ROUTE,
      HERO_COMPONENT_ROUTE,
      TEXT_FIELD_COMPONENT_ROUTE,
      CHOICE_COMPONENT_ROUTE,
      TAB_COMPONENT_ROUTE,
      DIALOG_COMPONENT_ROUTE,
      ALERT_COMPONENT_ROUTE,
      PAGINATION_COMPONENT_ROUTE,
      DROPDOWN_COMPONENT_ROUTE
    ]
  } as DocsRouteProps,
]
