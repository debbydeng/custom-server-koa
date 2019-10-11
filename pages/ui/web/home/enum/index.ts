/**
 *Desc: 分配客户常量
 *User: Debby.Deng
 *Date: 2018/9/29,
 *Time: 上午11:52
 */

export const reNewStatus=[//续约状态
    {
        name:'已续',
        value:'78003'
    },
    {
        name:'已定',
        value:'78002'
    },
    {
        name:'待定',
        value:'78001'
    },

];
/**
 * 客户中心待分配，已分配...阶段常量
 * @returns {any}
 */
export const navConfig =[
    {
        name:'toAllocate',
        title:'待分配',
        phaseId:'1',
    },
    {
        name:'allocate',
        title:'已分配',
        phaseId:'2',
    },
    {
        name:'receive',
        title:'已领取',
        phaseId:'3',
    },
    {
        name:'contact',
        title:'已联络',
        phaseId:'4',
    },
    {
        name:'promise',
        title:'诺访',
        phaseId:'5',
    },
    {
        name:'visit',
        title:'已到访',
        phaseId:'6',
    },
    {
        name:'newMember',
        title:'新会员',
        phaseId:'7',
    },
    {
        name:'oldMember',
        title:'老会员',
        phaseId:'8',
    },
    {
        name:'expiredMember',
        title:'待续会员',
        phaseId:'9',
    },
    {
        name:'history',
        title:'历史名单',
        phaseId:'10',
    },
];

/**
 * 常用查询常量
 * @returns {any}
 */

export const commonQueryList=[
    {
        name:'冲业绩',
        queryId:'1'
    },
    {
        name:'定金客户',
        queryId:'2'
    },
    {
        name:'待分配会员',
        queryId:'3'
    },
    {
        name:'已分配会员',
        queryId:'4'
    },
    {
        name:'今明到访',
        queryId:'5'
    },
    {
        name:'今明上课',
        queryId:'6'
    },
    {
        name:'两周未开课',
        queryId:'7'
    },
    {
        name:'三周未出席',
        queryId:'8'
    },
    {
        name:'两周内升班',
        queryId:'9'
    },
    {
        name:'本月过生日',
        queryId:'10'
    },
    {
        name:'待排课宝宝',
        queryId:'11'
    },
    {
        name:'今日待联系',
        queryId:'12'
    },
    {
        name:'今日待签约',
        queryId:'13'
    },

];


/**
 *
 * 加入回收站常量
 */

export const recycleType=[
    {
        value:'80003',
        name:'其他品牌'
    },
    {
        value:'80001',
        name:'联系未果-错/空号',
    },
    {
        value:'80002',
        name:'其他中心'
    },

    {
        value:'80004',
        name:'未知'
    }
];


/**
 *客户获取
 */
export const gender = [
    {
        value: '1',
        name: '男'
    },{
        value: '0',
        name: '女'
    },
];
export const districtOption=[
    {
        value:'1',
        name:'华东'
    },
    {
        value:'2',
        name:'华北'
    },

];
export const appearanceType=[//出现方式
    {
        value:'02001',
        label:'Net-in'
    },
    {
        value:'02002',
        label:'Call-in'
    },
    {
        value:'02003',
        label:'Walk-in'
    },
    {
        value:'02004',
        label:'Call-out'
    },
];

export const channelTypeList=[//渠道来源
    {
        value:'72001',
        label:'地推'
    },
    {
        value:'72002',
        label:'小区活动'
    },
    {
        value:'72003',
        label:'网络推广'
    },
    {
        value:'72004',
        label:'户外广告'
    },
    {
        value:'72005',
        label:'市场合作'
    },
    {
        value:'72006',
        label:'会员推荐'
    },
    {
        value:'72007',
        label:'口碑介绍'
    },
    {
        value:'72008',
        label:'其他'
    },
    {
        value:'72009',
        label:'路演/巡展'
    },
    {
        value:'72010',
        label:'非会员推荐'
    },
    {
        value:'72011',
        label:'官网'
    },
    {
        value:'72012',
        label:'总部微信订阅号'
    },
    {
        value:'72013',
        label:'总部微信服务号'
    },
    {
        value:'72014',
        label:'中心微信'
    },
    {
        value:'72015',
        label:'Online广告'
    },
    {
        value:'72016',
        label:'Gymboclub'
    },
    {
        value:'72017',
        label:'大众点评'
    },
    {
        value:'72018',
        label:'口碑APP'
    },
    {
        value:'72019',
        label:'糯米'
    },
    {
        value:'72020',
        label:'美团'
    },
    {
        value:'72021',
        label:'微课堂'
    },
    {
        value:'72022',
        label:'社交推广'
    },
    {
        value:'72023',
        label:'百度品专'
    },
    {
        value:'72024',
        label:'微信小程序'
    },
    {
        value:'72025',
        label:'百度SEM'
    },
    {
        value:'72026',
        label:'H5平台'
    },
    {
        value:'72027',
        label:'天猫'
    },
];

export const checkStatus=[//推荐会员
    {
        value:'0',
        label:'待审核'
    },
    {
        value:'1',
        label:'已审核'
    },
];

export const contractType=[//合同类型
    {
        value:'17001',
        label:'赠送'
    },
    {
        value:'17002',
        label:'新合约'
    },
    {
        value:'17003',
        label:'续约'
    },
    {
        value:'17004',
        label:'转入'
    },
];

export const charLevel=[//意向度
    {
        value:'73001',
        name:'A 高'
    },
    {
        value:'73002',
        name:'B'
    },
    {
        value:'73003',
        name:'C'
    },
    {
        value:'73004',
        name:'D 低'
    },
];

export const recycleReason=[//回炉原因
    {
        value:'90001',
        label:'未领取'
    },
    {
        value:'90002',
        label:'未联系'
    },
    {
        value:'90003',
        label:'长期未联系'
    },
    {
        value:'90004',
        label:'长期未签约'
    },
];

/**
 * 客户成长
 */

export const lastRenewContactStatus=[//续约沟通
    {
        value:'78002',
        label:'已定'
    },
    {
        value:'78003',
        label:'已续'
    },
    {
        value:'78001',
        label:'待定'
    },
];


/**
 *布尔值判断
 */
export const bool=[
    {
        value:0,
        name:'否'
    },
    {
        value:1,
        name:'是'
    },
];

/**
 *close2u
 */

export const levelRange=[
    {
        value:'gt',
        name:'大于'
    },
    {
        value:'lt',
        name:'小于'
    },
    {
        value:'ge',
        name:'大于等于'
    },
    {
        value:'le',
        name:'小于等于'
    },
    {
        value:'eq',
        name:'等于'
    },
];

export const levelNum=[
    {
        value:1,
        name:1
    },
    {
        value:2,
        name:2
    },
    {
        value:3,
        name:3
    },
    {
        value:4,
        name:4
    },
    {
        value:5,
        name:5
    },
    {
        value:6,
        name:6
    },
    {
        value:7,
        name:7
    },
    {
        value:8,
        name:8
    },
    {
        value:9,
        name:9
    },
    {
        value:10,
        name:10
    },

];
