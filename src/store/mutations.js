import {GETADDRESSOBJ,GETCATEGORYARR,GETSHOPSARR,GETUSER} from './mutation-type'
export default {
    [GETADDRESSOBJ](state,addressObj){
        state.addressObj = addressObj
    },
    [GETCATEGORYARR](state,categoryArr){
        state.categoryArr = categoryArr
    },
    [GETSHOPSARR](state,shopsArrs){
        state.shopsArr = shopsArrs
    },
    [GETUSER](state,user){
        state.user = user
    }
}