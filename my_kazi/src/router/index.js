import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '@/views/jobs/JobDetails.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  //creating redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catchAll 404
  {
    path: '/:catchAll(.*)',
    //(.*): This is the important part. The asterisk (*) acts as a wildcard, matching any characters or sequence of characters in the URL path.
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
