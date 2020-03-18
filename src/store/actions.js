import {GETADDRESSOBJ,GETCATEGORYARR,GETSHOPSARR,GETUSER,CLEARUSER,AUTOLOGIN} from './mutation-type'
import http from '@/http'
import {Toast} from 'vant'
import router from '@/router'
const OK = 0
const ERROR = 1
function loginSuccess(commit,data,changeUrl,show){
    commit(GETUSER,data)
    if(show === 'password')
        changeUrl()
    localStorage.setItem('ele-token',data.token)    
    router.replace('/profile')
}
function loginFail(changeUrl,show){
    Toast.fail({
        message:"登录失败!请检查用户名或密码!",
        duration:2000
    })
    if(show === 'password')
        changeUrl()
}
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
    },
    async [GETUSER]({commit},{show,phone,code,name,pwd,captcha,changeUrl}){
        let result
        if(show === 'message'){
            result = await http.login.getUserByPhone({phone,code})
        }else if(show === 'password'){
            result = await http.login.getUserByName({name,pwd,captcha})
        }
        result.code === OK && loginSuccess(commit,result.data,changeUrl,show)
        result.code === ERROR && loginFail(changeUrl,show)
    },
    [CLEARUSER]({commit}){
        commit(CLEARUSER)
    },
    async [AUTOLOGIN]({commit}){
        try {
            let result = await http.login.getAutoLogin()
            if(result.code === OK){
                commit(AUTOLOGIN,result.data)
            }else if(result.code === ERROR){
                alert(result.msg)
                router.replace('/login')
            }
        } catch (error) {
            alert(error.response.data.message)
            router.replace("/Login");
        }
    }
}