import requests from "./request";
import mockrequests from "./mockAjax"
export const reqCategoryList = () => {
    return requests({
        url: 'product/getBaseCategoryList',
        method: 'get'
    })
}

export const reqBannerList = () => {
    return mockrequests({
        url: 'banner',
        method: 'get'
    })
}

export const reqFloorList = () => {
    return mockrequests({
        url: 'floor',
        method: 'get'
    })
}

export const reqSearchData = (params) => {
    return requests({
        url: 'list',
        method: 'post',
        data: params
    })
}

export const reqGoodsInfo = (skuid) => {
    return requests({
        url: `item/${skuid}`,
        method: 'get',

    })
}
// api to add item into cart or update item count
export const addItemCart = (skuId, skuNum) => {
    return requests({
        url: `cart/addToCart/${skuId}/${skuNum}`,
        methods: 'post',
    })
}
// api getting items in shopping cart
export const reqShoppingCart = () => {
    return requests({
        url: 'cart/cartList',
        methods: 'get'
    })
}