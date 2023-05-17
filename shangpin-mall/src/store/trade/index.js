import { getUserAddress, getUserOrderList } from "@/API"

const state = {
    addresses: [],
    orderList: {},
}
const actions = {
    async getUserAddressAction({commit}){
        let result = await getUserAddress()
        if(result.code==200){
            commit('GETUSERADDRESS', result.data)
        }
    },

    async getUserOrderAction({commit}){
        let result = await getUserOrderList()

        if(result.code==200){
            commit('GETUSERORDER', result.data)
        }
    }
}
const mutations = {
    GETUSERADDRESS(state, data){
        state.addresses = data
    },
    GETUSERORDER(state, data){
        state.orderList = data
    },

}
const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters,
}