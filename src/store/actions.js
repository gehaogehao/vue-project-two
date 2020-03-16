import {GETADDRESSOBJ,GETCATEGORYARR,GETSHOPSARR} from './mutation-type'
import http from '@/http'
const OK = 0
export default {
    async [GETADDRESSOBJ](store){
        let result = await http.msite.getPosition()
        if(result.code === OK){
            store.commit(GETADDRESSOBJ,result.data)
        }
    },
    async [GETCATEGORYARR](store){
        let result = await http.msite.getIndexCategory()
        if(result.code === OK){
            store.commit(GETCATEGORYARR,result.data)
        }
    },
    async [GETSHOPSARR](store){
        let result = await http.msite.getShops()
        if(result.code === OK){
            store.commit(GETSHOPSARR,result.data)
        }
    }
}