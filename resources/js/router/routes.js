const Settings = () => import('../Views/Settings.vue');
const Profile = () => import('../Views/Profile.vue');
const Password = () => import('../Views/Password.vue');
const Login = () => import('../Views/Login.vue');
const ForgotPassword = () => import('../Views/ForgotPassword.vue');
const Register = () => import('../Views/Register.vue');
const Home = () => import('../Views/Home.vue');
const Welcome = () => import('../Views/Welcome.vue')

export default [
    { path: '/', component: Welcome , name : 'welcome' , meta : {authRequired : true}},
    { path: '/home', component: Home  , name : 'home' , meta : {authRequired : true}},
    { path: '/login', component: Login  , name : 'login'},
    { path: '/forgot-password', component: ForgotPassword  , name : 'forgot-password'},
    { path: '/register', component: Register  , name : 'register'},
    {
        path: '/settings',
        component: Settings,
        redirect: {name : 'profile'},
        name: 'settings',
         meta : {authRequired : true},
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


