const axios=require('axios');
const {User}=require('./user');
/*
module.exports = (url,args) => {
    return new Promise( (resolve,reject) => {
        let options = {
            headers: {
                'Content-Type': 'application/json',
                'token':'b0cd9b5656bb44a7be12daf54ee743a7',
            }
        }
        axios.post(`http://new-test-api.gymbomate.com/${url}`,args,options).then((res)=>{
            if(res.code===0){
                resolve(res.message);
            }else{
                resolve(res.data);
            }
        },(e)=>{
            console.log('error:',e.message)
            reject(e.message)
        })
    } )
}*/


const proxy={
    backUrl:'http://new-dev-api.gymbomate.com',
    mergeOptions(ctx,options={}){
        return {
            headers:Object.assign({},{
                token:ctx.url==='/mate-basic/login'? null : ctx.header.token,
                'Content-Type':'application/json'
            })
        }
    },
    get(ctx,options){
        const url=ctx.url;
        return new Promise((resolve,reject)=>{
             axios.get(`${this.backUrl}${url}`,this.mergeOptions(ctx)).then((res)=>{
                resolve (res.data);
            },(e)=>{
                 reject({
                     code:0,
                     msg:e.message,
                     data:[]
                 })
            })
        }
    )
    },
    post(ctx,options){
        const url=ctx.url,args=ctx.request.body;
        return new Promise((resolve,reject)=>{
            axios.post(`${this.backUrl}${url}`,args,this.mergeOptions(ctx)).then((res)=>{
                console.log(res.data)
                resolve (res.data);
            },(e)=>{
                reject({
                    code:0,
                    msg:e.message,
                    data:[]
                })
            })
        })
    }
};
module .exports=proxy;

