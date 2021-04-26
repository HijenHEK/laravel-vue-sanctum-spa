import axios from 'axios';
import { createStore } from 'vuex'


export default createStore({
    state() {
        return {
            user: null
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        verified(state) {
            return state.user.email_verified_at
        },
        id(state) {
            return state.user.id
        }
    },
    mutations: {

        setUser(state, payload) {
            state.user = payload;
        }

    },

    actions: {

        async login({ dispatch }, payload) {
            try {
                await axios.get('/sanctum/csrf-cookie');

                await axios.post('/api/login', payload).then((res) => {
                    return dispatch('getUser');
                }).catch((err) => {
                    throw err.response
                });
                // const res = await axios.post('/api/login', payload);

                // if (res.status != 200) throw res;

                // if (res.data.status_code != 200) throw res.data.message;
                
                
                
            } catch (e) {
                throw e
            }
    
        },

        async register({ dispatch }, payload) {
            try {

                await axios.post('/api/register' , payload).then((res) => {
                    return dispatch('login' , { 'email' : payload.email , 'password' : payload.password})
                }).catch((err) => {
                    throw(err.response)
                })
            } catch (e) {
                throw (e)
            }
        },
        async logout({ commit }) {
                await axios.post('/api/logout').then((res) => {
                    commit('setUser', null);
                }).catch((err) => {
                    
                })
            
        },
        async getUser({commit}) {
            await axios.get('/api/user').then((res) => {
                commit('setUser', res.data);
            }).catch((err) => {
                
            })
        },
        async profile({commit},payload) {
            await axios.patch('/api/profile', payload).then((res) => {
                commit('setUser', res.data.user);
            }).catch((err) => {
                throw err.response
            })
        },
        async password({commit},payload) {
            await axios.patch('/api/password', payload).then((res) => {
                
            }).catch((err) => {
                throw err.response
            })
        }

    }


})
