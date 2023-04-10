import requests from "./request";

export const redCategoryList = () => {
    return requests({
        url: 'product/getBaseCategoryList',
        method: 'get'
    })
}

export default redCategoryList
