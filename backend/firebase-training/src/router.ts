import Vue from 'vue'
import Router from 'vue-router'
import TopPage from './views/TopPage.vue'
import CreateFormPage from './views/firestore/CreateFormPage.vue'
import RosterListPage from './views/firestore/RosterListPage.vue'
import UserHealthListPage from './views/firestore/UserHealthListPage.vue'
import ShopItemBuyPage from './views/firestore/ShopItemBuyPage.vue'
import ShopItemBuyPageOriginalModel from './views/firestore/ShopItemBuyPageOriginalModel.vue'
import AnonymouslyPage from './views/authentication/AnonymouslyPage.vue'
import SignInFinishPage from './views/authentication/SignInFinishPage.vue'
import EmailAuthPage from './views/authentication/EmailAuthPage.vue'
import EmailAuthWithCreateUserPage from './views/authentication/EmailAuthWithCreateUserPage.vue'
import SecurityRuleLessonPage from './views/authentication/SecurityRuleLessonPage.vue'
import SocialLoginPage from './views/authentication/SocialLoginPage.vue'
import ImageOperationPage from './views/storage/ImageOperationPage.vue'
import ImageOperationFirestorePage from './views/storage/ImageOperationFirestorePage.vue'
import ImageOperationSecurePage from './views/storage/ImageOperationSecurePage.vue'
import ImageOperationVariousFilesPage from './views/storage/ImageOperationVariousFilesPage.vue'
import UserListPage from './views/functions/UserListPage.vue'
import AuthUserListPage from './views/functions/AuthUserListPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top_page',
      component: TopPage,
    },
    {
      path: '/create_form_page',
      name: 'create_form_page',
      component: CreateFormPage,
    },
    {
      path: '/roster_list_page',
      name: 'roster_list_page',
      component: RosterListPage,
    },
    {
      path: '/user_health_list_page',
      name: 'user_health_list_page',
      component: UserHealthListPage,
    },
    {
      path: '/shop_item_buy_page',
      name: 'shop_item_buy_page',
      component: ShopItemBuyPage,
    },
    {
      path: '/shop_item_buy_page_original_model',
      name: 'shop_item_buy_page_original_model',
      component: ShopItemBuyPageOriginalModel,
    },
    {
      path: '/anonymously_page',
      name: 'anonymously_page',
      component: AnonymouslyPage,
    },
    {
      path: '/sign_in_finish_page',
      name: 'sign_in_finish_page',
      component: SignInFinishPage,
    },
    {
      path: '/email_auth_page',
      name: 'email_auth_page',
      component: EmailAuthPage,
    },
    {
      path: '/email_auth_with_create_user_page',
      name: 'email_auth_with_create_user_page',
      component: EmailAuthWithCreateUserPage,
    },
    {
      path: '/security_rule_lesson_page',
      name: 'security_rule_lesson_page',
      component: SecurityRuleLessonPage,
    },
    {
      path: '/social_login_page',
      name: 'social_login_page',
      component: SocialLoginPage,
    },
    {
      path: '/image_operation_page',
      name: 'image_operation_page',
      component: ImageOperationPage,
    },
    {
      path: '/image_operation_firestore_page',
      name: 'image_operation_firestore_page',
      component: ImageOperationFirestorePage,
    },
    {
      path: '/image_operation_secure_page',
      name: 'image_operation_secure_page',
      component: ImageOperationSecurePage,
    },
    {
      path: '/image_operation_various_files_page',
      name: 'image_operation_various_files_page',
      component: ImageOperationVariousFilesPage,
    },
    {
      path: '/user_list_page',
      name: 'user_list_page',
      component: UserListPage,
    },
    {
      path: '/auth_user_list_page',
      name: 'auth_user_list_page',
      component: AuthUserListPage,
    },
  ],
})
