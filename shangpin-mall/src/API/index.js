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
        data: params,
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
        method: 'post',
    })
}
// api getting items in shopping cart
export const reqShoppingCart = () => {
    return requests({
        url: 'cart/cartList',
        method: 'get'
    })
}
// delete items in shopping cart 
export const deleteShoppingCart = (skuId) => {
    return requests({
        url: `cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}

//change checked item status in shopping cart 

export const checkedItem = (skuId, isChecked) => {
    return requests({
        url: `cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
}

// user/passport/sendCode/{phone} register api for user

export const registerPhoneOtpCode = (phone) => {
    return requests({
        url: `user/passport/sendCode/${phone}`,
        method: 'get'
    })
}

//register user

export const registerUser = (data) => {
    return requests({
        url: 'user/passport/register',
        method: 'post',
        data
    })
}

//login user
export const loginUser = (data) => {
    return requests({
        url: 'user/passport/login',
        method: 'post',
        data
    })
}

//auto login
export const autologin = () => {
    return requests({
        url: 'user/passport/auth/getUserInfo',
        method: 'get',
    })
}

//user log out
export  const logout = () => {
    return requests({
        url: 'user/passport/logout',
        method: 'get'
    })
}
//get user address
export const getUserAddress = () => {
    return requests({
        url: 'user/userAddress/auth/findUserAddressList',
        method: 'get',
    })
}

//get user order item list 

export const getUserOrderList = () => {
    return requests({
        url: 'order/auth/trade',
        method: 'get',
    })
}

export const submitOrder = (tradeNo, data) => {
    return requests({
        url: `order/auth/submitOrder?tradeNO=${tradeNo}`,
        data, 
        method: 'post',
    })
}

//get payment info from backend

export const reqPayInfo = (orderId) => {
    return requests({
        url: `payment/weixin/createNative/${orderId}`,
        method: 'get',
    })
}

export const checkPayStatus = (orderId) => {
    return requests({
        url: `payment/weixin/queryPayStatus/${orderId}`,
        method: 'get',
    })
}

//get user orders
export const reqCenterOrder = (page, limit) => {
    return requests({
        url: `order/auth/${page}/${limit}`,
        method: 'get',
    })
}