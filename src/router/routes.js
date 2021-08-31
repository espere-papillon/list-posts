import {About} from '../pages/About'
import {Posts} from '../pages/Posts'
import {Error} from '../pages/Error'
import {Login} from '../pages/Login'
import {PostPage} from '../pages/PostPage'

export const privateRoutes = [
  {path: "/about", component: About, exact: true},
  {path: "/posts", component: Posts, exact: true},
  {path: "/posts/:id", component: PostPage, exact: true},
  {path: "/error", component: Error, exact: true},
]

export const publicRoutes = [
  {path: "/about", component: About, exact: true},
  {path: "/login", component: Login, exact: true},
  {path: "/error", component: Error, exact: true},
]