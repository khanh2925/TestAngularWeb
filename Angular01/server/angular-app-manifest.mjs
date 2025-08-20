
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TestAngularWeb/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/TestAngularWeb"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 449, hash: '09954ae4fe2493c0607f9c5ab37a314d4a0bb5a4f3a6e4d8bcb48e72f171ec4c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 962, hash: '1b05f51a32184609152f590c689a12997aeee583a3f581c66884ed1dee5a20f9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 899, hash: '44caec144cd44c92ece2473c1fcb41e94925bd581b14eb9408245db13a6e464b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
