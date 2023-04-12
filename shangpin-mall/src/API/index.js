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
