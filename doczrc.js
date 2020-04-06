import { css } from 'docz-plugin-css'

export default {
    title: 'Coolfire Web',
    typescript: true,
    dest: '/docs',
    src: 'src',
    plugins: [
        css({
        preprocessor: 'sass',
        cssmodules: true,
    }),
    ],
  }