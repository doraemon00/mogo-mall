import {
    ADD_COUNTER,
    ADD_TO_CART
}from './mutations-types'

export default {
    addCart(context, payload) {
        //payload 新添加的商品
        // let oldProduct = null
        // for(let item of state.cartList){
        //     if(item.iid === payLoad.iid){
        //         oldProduct = item;
        //     }
        // }
        // 1. 查找之前数组中是否有该商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        // 2. 判断 oldProduct
        if (oldProduct) {
            // oldProduct.count += 1
            context.commit(ADD_COUNTER, oldProduct)
        } else {
            payload.count = 1
            // context.state.cartList.push(payLoad)
            context.commit(ADD_TO_CART, payload)
        }
    },
}