import { reqGoodsInfo, addItemCart } from "@/API"

const state = {
    goodsinfo: {}
}
const actions = {
    async getGoodsInfo({ commit }, skuid) {
        let result = await reqGoodsInfo(skuid)
        if (result.code == 200) {
            commit('GETGOODSINFO', result.data)
        }
    },

    async addItemCartAction({ commit }, { skuId, skuNum }) {
        let result = await addItemCart(skuId, skuNum)
        console.log(result)
        if (result.code == 200) {
            console.log(result)
        }
    }
}
const getters = {
    categoryView(state) {
        return state.goodsinfo.categoryView || {}
    },

    spuSaleAttrList(state) {
        return state.goodsinfo.spuSaleAttrList || {}
    },

    skuInfo(state) {
        return state.goodsinfo.skuInfo || {}
    }
}
const mutations = {
    GETGOODSINFO(state, data) {
        state.goodsinfo = data
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}

