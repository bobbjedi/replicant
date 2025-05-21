import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      // { path: 'interview/:id', component: () => import('pages/InterviewPage.vue') },
      { path: '/:id', component: () => import('pages/ReplicantIndexPage.vue') },
      { path: '/:id/interview', component: () => import('pages/InterviewPage.vue') },
      { path: '/:id/chats', component: () => import('pages/ChatsListPage.vue') },
      { path: '/:id/chats/:chatId', component: () => import('pages/ChatPage.vue') },
      { path: '/:id/user-cards', component: () => import('pages/UserCardsListPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes