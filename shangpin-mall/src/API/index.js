import requests from "./request";

function redCategoryList() {
    return requests({
        url: 'product/getBaseCategoryList',
        method: 'get'
    })
}

export default redCategoryList
