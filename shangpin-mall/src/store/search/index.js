import { reqSearchData } from "@/API"

const state = {
    searchData: {}
}

const mutations = {
    GETSEARCHDATA(state, searchdata){
        state.searchData = searchdata
    }
}
const actions = {
    async reqSearchData({commit}, params={}){
        let result = await reqSearchData(params)
        console.log(result)
        if(result.code == '200'){
            commit('GETSEARCHDATA', result.data)
        }
    }
}


const getters = {
    goodsList(state){
        return state.searchData.goodsList
    },
    trademarkList(state){
        return state.searchData.trademarkList
    },

    attrsList(state){
        return state.searchData.attrsList
    }

}

export default {
    state,
    mutations,
    actions,
    getters,
}