
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular01/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular01"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 444, hash: 'bb2f7a13d0754fb15339bc9ea592c83e9fe220d1405d54ac7a7db157aae6d9af', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: '83dae2a3f1cd71908c49e531950b6dcd70ad3e68ec796263edfee4c9bd5ec6a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 894, hash: 'f2b7208acfe5978e5d52b05eff35a44413c0449ab4d3b3877570dd0325cca130', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
