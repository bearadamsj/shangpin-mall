import { reqGoodsInfo, addItemCart } from "@/API";
import { getUUID } from "@/utils/user_token";

const state = {
    goodsinfo: {},
    user_token: getUUID(),
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

        if (result.code >= 200 ||result.code <=300) {
            return 'ok'
        }else{
            return Promise.reject(new Error('failure'))
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

