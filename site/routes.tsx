export type RouteProps = {
  location: string,
  label: string,
  isExternal?: boolean
}

export const HOME_ROUTE: RouteProps = {
  location: '/',
  label: 'Cavilha'
}

export const GET_STARTED_ROUTE: RouteProps = {
  location: '/docs/pages/get-started',
  label: 'Get started'
}

export const DESIGN_ROUTE: RouteProps = {
  location: '/design',
  label: 'Design'
}

export const SHOWCASE_ROUTE: RouteProps = {
  location: '/showcase',
  label: 'Showcase'
}

export const THEMES_ROUTE: RouteProps = {
  location: '/themes',
  label: 'Themes'
}

export const DOCS_ROUTE: RouteProps = {
  location: '/docs',
  label: 'Documentation'
}

export const DOCUMENTATION_ROUTE: RouteProps = {
  location: '/docs/pages/index',
  label: 'Documentation'
}

export const CHANGELOG_ROUTE: RouteProps = {
  location: '/changlog',
  label: 'Changelog'
}
