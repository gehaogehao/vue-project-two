export default {
    // baseURL:"http://localhost:4000",
    timeout:10000,
    api:{
        getPosition:{
            url:'/position/40.10038,116.36867',
            method:'get',
            coseUrl:"/4000"
        }
    },
    hooks:{
        beforeReq(){},
        afterReq(){}
    }
}