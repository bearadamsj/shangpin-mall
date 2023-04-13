import { reqCategoryList, reqBannerList, reqFloorList } from "@/API"
const state = {
    categorylist: [],
    bannerlist: [],
    floorlist: [],
}

const mutations = {
    CATEGORYLIST(state, categorylist){ 
        state.categorylist = categorylist

    },

    BANNERLIST(state, bannerlist){
        state.bannerlist = bannerlist
    },

    FLOORLIST(state, floorlist){
        state.floorlist = floorlist
    }
}
const actions = {
    //get typeNav three level list
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200){
            commit('CATEGORYLIST', result.data)
        }
    },
    //get banner list
    async getBannerList({commit}){
        let result = await reqBannerList()

        if(result.code == 200){
            commit('BANNERLIST', result.data)
        }
    },

    async getFloorList({commit}){
        let result = await reqFloorList()
        if(result.code=='200'){
            commit('FLOORLIST', result.data)
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