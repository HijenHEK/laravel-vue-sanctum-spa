const Settings = () => import('../Views/Settings.vue');
const Profile = () => import('../Views/Profile.vue');
const Password = () => import('../Views/Password.vue');
const Login = () => import('../Views/Login.vue');
const Register = () => import('../Views/Register.vue');
const Home = () => import('../Views/Home.vue');
const Welcome = () => import('../Views/Welcome.vue')

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


