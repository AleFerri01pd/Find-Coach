import { createRouter, createWebHistory } from "vue-router";
import Coach from './pages/coaches/Coach.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import Requests from './pages/requests/Requests.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches'
        },
        {
            path: '/coaches', 
            component: CoachesList
        },
        {
            path: '/coaches/:id',
            component: Coach,
            props: true,
            children: [ 
                {
                    path: 'contact', //coaches/id/contact
                    component: ContactCoach
                }
            ]
        },
        {
            path:'/register', 
            component: CoachRegistration
        },
        {
            path: '/requests',
            component: Requests
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        },
    ],
});

export default router;