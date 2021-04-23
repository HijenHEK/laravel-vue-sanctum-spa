import Home from '../Views/Home.vue';
import Login from '../Views/Login.vue';
import Password from '../Views/Password.vue';
import Profile from '../Views/Profile.vue';
import Register from '../Views/Register.vue';
import Settings from '../Views/Settings.vue';
import Welcome from '../Views/Welcome.vue';

export default [
    { path: '/', component: Welcome , name : 'welcome' },
    { path: '/home', component: Home  , name : 'home'},
    { path: '/login', component: Login  , name : 'login'},
    { path: '/register', component: Register  , name : 'register'},
    {
        path: '/settings',
        component: Settings,
        redirect: {name : 'profile'},
        name: 'settings',
        children: [
            {
                path: 'profile',
                component: Profile,
                name: 'profile',
            },
            {
                path: 'password',
                component: Password,
                name: 'password',
            },
                    
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home'
    }
];


