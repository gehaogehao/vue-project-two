import {GETADDRESSOBJ,GETCATEGORYARR,GETSHOPSARR} from './mutation-type'
export default {
    [GETADDRESSOBJ](state,addressObj){
        state.addressObj = addressObj
    },
    [GETCATEGORYARR](state,categoryArr){
        state.categoryArr = categoryArr
    },
    [GETSHOPSARR](state,shopsArrs){
        state.shopsArr = shopsArrs
    }
}