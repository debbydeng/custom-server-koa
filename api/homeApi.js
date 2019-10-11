const PRE='/mate-basic';
const customerPRE="/mate-customer";

const HomeApi={
    登录:`${PRE}/login`,
    所有中心:`${PRE}/basic/common/centerlist`,
    所有权限列表:`${PRE}/basic/common/functions`,
    获取中心基本配置 : `${PRE}/basic/common/codeInfoList`,
    员工基本信息 : `${PRE}/basic/staff/findBasicInfo`,
    // 高级查询模块
    获取高级查询按钮组:`${customerPRE}/userDefinedQuery/define/list`,
    删除自定义查询:`${customerPRE}/userDefinedQuery/define/remove`,
    保存自定义查询:`${customerPRE}/userDefinedQuery/define/save`,
    获取状态列表:`${customerPRE}/advancedQuery/phase/num`,
    获取分配客户列表:`${customerPRE}/advancedQuery/info/list`,
};

module.exports=HomeApi;

