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
        }
    }


})
