import { registerPhoneOtpCode, registerUser, loginUser, autologin, logout } from "@/API";

const actions = {
    async getOtpCode({commit}, phone){
        let result = await registerPhoneOtpCode(phone)
        if(result.code>=200&&result.code<=300){
            commit('GETOTPCODE', result.data)
        }
    },

    async registerUserAction({commit}, data){
        let result = await registerUser(data)
        console.log(result)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failure3'))
        }
    },

    async userLoginAction({commit}, data){
        let result = await loginUser(data);
        console.log(result)
        if(result.code==200){
            commit('USERLOGIN', result.data.token)
            localStorage.setItem('TOKEN', result.data.token)
        }else{
            return Promise.reject(new Error('failure'))
        }
    },

    async autoLoginAction({commit}){
        let result = await autologin();
        if(result.code==200){
            commit('AUTOLOGIN', result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('failure'))
        }
    },

    async logoutAction({commit}){
        let result = await logout()
        if(result.code==200){
            commit('LOGOUT')
            return 'ok'
        }else{
            return Promise.reject(new Error('failure'))
        }
    }
}
const getters = {

}
const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
    userinfo: {},
}
const mutations = {
    GETOTPCODE(state, data){
        state.code = data
    },

    USERLOGIN(state,data){
        state.token = data
    },

    AUTOLOGIN(state, data){
        state.userinfo = data
    },

    LOGOUT(state){
        state.userinfo= {};
        state.token = '';
        localStorage.removeItem('TOKEN')

    }
}

export default {
    actions,
    getters,
    state,
    mutations,
}