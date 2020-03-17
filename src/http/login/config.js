export default {
    // baseURL:"http://localhost:4000",
    timeout:10000,
    api:{
        getCode:{
            url:"/sendcode",
            method:"get",
            crosUrl:"/4000"
        },
        getUserByPhone:{
           url:"/login_sms",
           method:"post",
           crosUrl:"/4000"
        },
        getUserByName:{
            url:"/login_pwd",
            method:"post",
            crosUrl:"/4000"
         },
    },
    hooks:{
        beforeReq(){
        },
        afterReq(){}
    }
}