const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: { title: 'Wybierz samochód' }
      }
    ]
  },
  {
    path: '/fuel/:id',
    component: () => import('layouts/DetailsCarLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Fuel.vue'),
        meta: { title: 'Tankowania' },
        name: 'fuel'
      }
    ]
  },
  {
    path: '/service/:id',
    component: () => import('layouts/DetailsCarLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Service.vue'),
        meta: { title: 'Przeglądy' },
        name: 'service'
      }
    ]
  },
  {
    path: '/report/:id',
    component: () => import('layouts/DetailsCarLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Report.vue'),
        meta: { title: 'Podsumowanie' },
        name: 'report'
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
