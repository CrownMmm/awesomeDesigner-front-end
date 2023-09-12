/*
 * react-router-dom v6 官方文档
 * https://reactrouter.com/en/v6.3.0/getting-started/installation
 */
import React from 'react';
import SuspenseLazy from '@/components/SuspenseLazy';
import {Navigate, RouteObject} from 'react-router-dom';

const Home = SuspenseLazy(() => import(/* webpackChunkName:"home" */ '@/view/Home'));
const HomeOne = SuspenseLazy(() => import(/* webpackChunkName:"home-one" */ '@/view/Home/HomeOne'));
const HomeThree = SuspenseLazy(() => import(/* webpackChunkName:"home-three" */ '@/view/Home/HomeThree'));
const HomeMobx = SuspenseLazy(() => import(/* webpackChunkName:"home-mobx" */ '@/view/Home/HomeMobx'));
const NotFound = SuspenseLazy(() => import(/* webpackChunkName:"not-found" */ '@/view/NotFound'));
const Designer = SuspenseLazy(() => import(/* webpackChunkName:"not-found" */ '@/designer'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='designer' /> // 重定向
  },
  {
    path: 'designer',
    element: Designer
  },
  {
    path: 'home',
    element: Home,
    children: [
      // 嵌套路由
      {
        path: 'one',
        element: HomeOne
      },
      {
        path: 'three',
        element: HomeThree
      },
      {
        path: 'mobx',
        element: HomeMobx
      }
    ]
  },
  // 未匹配到页面
  {
    path: '*',
    element: NotFound
  }
];

export default routes;
