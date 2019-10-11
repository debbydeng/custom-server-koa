const proxy=require("../../server/proxy.ts");
const HomeApi=require('../../api/homeApi');
const {User}=require('../../server/user');

const commonResponse=async (ctx,next)=>{
    try{
        ctx.body=await proxy.post(ctx);
    }catch(e){
        ctx.body={
            code:0,
            msg:'server error',
        };
    }
    await next();
};

const login= async (ctx,next)=>{
    try{
        ctx.body=await proxy.post(ctx);
    }catch(e){
        ctx.body=e;
    }
    await next();
};

const centerList= async (ctx, next)=>{
    try{
        ctx.body=await proxy.post(ctx);
    }catch(e){
        console.log(e,'---------outside err')
    }
    await next();
};



const getPermission= async(ctx, next)=>{
    try{
        ctx.body=await proxy.post(ctx);
    }catch(e){
        console.log(e,'---------outside err')
    }
    await next();
};

const getConfig= async(ctx, next)=>{
    try{
        ctx.body=await proxy.post(ctx);
    }catch(e){
        console.log(e,'---------outside err')
    }
    await next();
};

const getEmployeeInfo= async(ctx, next)=>{
    try{
        ctx.body=await proxy.post(ctx);
    }catch(e){
        console.log(e,'---------outside err')
    }
    await next();
};


module.exports={
    [`POST ${HomeApi.登录}`]: login,
    [`POST ${HomeApi.所有中心}`]: centerList,
    [`POST ${HomeApi.所有权限列表}`]: getPermission,
    [`POST ${HomeApi.获取中心基本配置}`]: getConfig,
    [`POST ${HomeApi.员工基本信息}`]: getEmployeeInfo,
    [`POST ${HomeApi.获取高级查询按钮组}`]: commonResponse,
    [`POST ${HomeApi.获取状态列表}`]: commonResponse,

};


