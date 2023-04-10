import {redCategoryList} from "@/API"
const state = {
    categorylist: [],
}

const mutations = {
    CATEGORYLIST(state, categorylist){ 
        state.categorylist = categorylist

    }
}
const actions = {
    async categoryList({commit}){
        let result = await redCategoryList();
        console.log(result)
        if(result.code == 200){
            commit('CATEGORYLIST', result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,
}