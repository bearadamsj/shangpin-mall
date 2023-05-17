import { reqShoppingCart, deleteShoppingCart, checkedItem } from "@/API"


const actions = {
    async getShoppingCart({commit}){
        let result = await reqShoppingCart()
        console.log(result);
        if(result.code == 200){
            commit('GETSHOPPINGCART', result.data)
        }
    },

    async deleteCart({commit}, skuid){
        let result = await deleteShoppingCart(skuid)
            if(result.code == 200){
                return 'ok'
            }else{
                return Promise.reject(new Error('failure'))
            }
    },

    async changeItemInCart({commit}, {skuId, isChecked}){
        let result = await checkedItem(skuId, isChecked)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failure'))
        }
    },

    deleteAllSelectedAction({dispatch, getters}){
        let promiseALL = []
        getters.cartlist.cartInfoList.foreach(item=>{
            let promise = item.isChecked==1?dispatch('deleteCart', item.skuId):''
            promiseALL.push(promise)
        })
        return Promise.all(promiseALL)
    },

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