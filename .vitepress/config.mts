import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fundamentos de programación",
  description: "Recopilación de notas del curso de fundamentos de programación con python y java",
  lang: 'es-MX',
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Python', link: '/python/'}
    ],

    sidebar: [
      {
        text: 'Python',
        items: [
          {text: 'Instalación', link: '/python/instalacion'},
          {text: 'Variables y tipos de datos', link: '/python/variables'},
          {text: 'Funciones para interactuar con el usuario', link: '/python/funciones-usuario'},
          {text: 'Operadores y operaciones aritméticas', link: '/python/operadores'},
          {text: 'Operadores y operaciones lógicas', link: '/python/operadores-logicos'},
          {text: 'Diccionarios y Listas', link: '/python/diccionarios-listas'},
        ]
      }
    ],

    // socialLinks: [
    //   {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    // ]
  }
})
