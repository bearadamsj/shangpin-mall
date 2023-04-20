import { reqShoppingCart } from "@/API"


const actions = {
    async getShoppingCart({commit}){
        let result = await reqShoppingCart()
        console.log(result);
        if(result.code == 200){
            commit('GETSHOPPINGCART', result.data)
        }
    }
}
const mutations = {
    GETSHOPPINGCART(state, data){
        state.cartlist = data
    }
}
const state = {
    cartlist: []
}
const getters = {
    cartlist(state){
        return state.cartlist[0] || {}
    }
}

export default {
    state,
    actions,
    mutations,
    getters,
}