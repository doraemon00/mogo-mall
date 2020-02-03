import axios from 'axios'

export function request(config){
    //1.创建 axios 实例
    const instance = axios.create({
        baseURL:"http://123.207.32.32:8000/api/hy",
        // baseURL:"http://106.54.54.237:8000/api/hy",
        timeout:5000
    })
    //2.axios 的拦截器
    //2.1.请求拦截的作用
    instance.interceptors.request.use(config=>{
        return config
    },err => {
        return err
    })

    //2.2.拦截响应
    instance.interceptors.response.use(res=>{
        return res.data
    },err => {
        return err
    })

    //3.发送真正的网络请求
    return instance(config)
}