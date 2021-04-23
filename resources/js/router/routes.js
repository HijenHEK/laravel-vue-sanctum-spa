import Home from '../Views/Home.vue';
import Login from '../Views/Login.vue';
import Register from '../Views/Register.vue';
import Welcome from '../Views/Welcome.vue';

export default [
    { path: '/', component: Welcome , name : 'welcome' },
    { path: '/home', component: Home  , name : 'home'},
    { path: '/login', component: Login  , name : 'login'},
    { path: '/register', component: Register  , name : 'register'},
];


