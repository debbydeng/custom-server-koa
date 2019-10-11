/**
 *Desc: 分配客户页面各阶段表头
 *User: Debby.Deng
 *Date: 2018/11/14,
 *Time: 下午2:19
 */

import * as React from "react";
import moment from 'moment';
import {appearanceType, channelTypeList, charLevel, recycleReason, recycleType, reNewStatus} from "../enum";
function mapLabel(arr,text){
    let value=null;
    arr.map((item)=>{
        if(item.value===text){
            value= item.label||item.name;
        }
    });
    return value;
}
function getApperanceType(text){
    return  mapLabel(appearanceType,text);
}
function getChannelType(text){
    return  mapLabel(channelTypeList,text);
}
const newRecycleReason=recycleReason.concat(recycleType);
function getHeader(sortedInfo){
    return {
        '待分配-关键信息':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'10%'
        }, {
            title: '月龄',
            dataIndex: 'monthValue',
            key: 'monthValue',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='monthValue' && sortedInfo.sortOrder,
            width:'8%'
        }, {
            title: '出现方式',
            dataIndex: 'appearanceType',
            key: 'appearanceType',
            render: getApperanceType
        }, {
            title: '渠道来源',
            dataIndex: 'channelType',
            key: 'channelType',
            render: getChannelType,
        },{
            title:'创建',
            dataIndex:'createDate',
            key:'createDate',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='createDate' && sortedInfo.sortOrder,
            render:(text)=>(text && moment(text).format('YYYY-MM-DD'))
        },{
            title: 'PROMOTOR',
            dataIndex: 'promoterName',
            key: 'promoterName',
        }, {
            title: '回炉时间',
            dataIndex: 'recycleTime',
            key: 'recycleTime',
            render:(text)=>(text && moment(text).format('YYYY-MM-DD'))
        },{
            title: '回炉原因',
            key: 'recycleReason',
            dataIndex:'recycleReason',
            render:(text,record)=>(mapLabel(newRecycleReason,text))
        },{
            title: '客户360',
            key: '360',
            render:(text,record)=>(
                <a target={`_blank`}>
                    <button className={`gym-button-white-xxs`}>查看</button>
                </a>)
        }],
        '已分配-关键信息':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'10%'
        }, {
            title: '月龄',
            dataIndex: 'monthValue',
            key: 'monthValue',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='monthValue' && sortedInfo.sortOrder,
            width:'10%'
        }, {
            title: '出现方式',
            dataIndex: 'appearanceType',
            key: 'appearanceType',
            render: getApperanceType
        }, {
            title: '渠道来源',
            dataIndex: 'channelType',
            key: 'channelType',
            render: getChannelType,
        },{
            title: '分配',
            key: 'distributeTime',
            dataIndex:'distributeTime',
            render:(text)=>(text && moment(text).format('YYYY-MM-DD')),
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='distributeTime' && sortedInfo.sortOrder
        },{
            title: '到期',
            key: 'unReceiveDays',//未领取
            dataIndex:'unReceiveDays',
            render:(text,record)=>(`${text||'--'}天`),
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='unReceiveDays' && sortedInfo.sortOrder
        },{
            title: 'GB',
            key: 'primaryGbStaffName',
            dataIndex:'primaryGbStaffName'
        },{
            title: 'GA',
            key: 'primaryGaStaffName',
            dataIndex:'primaryGaStaffName'
        },{
            title: '客户360',
            key: '360',
            render:(text,record)=>(
                <a target={`_blank`}>
                    <button className={`gym-button-white-xxs`}>查看</button>
                </a>)    }
        ],
        '已领取-关键信息':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'10%'
        }, {
            title: '月龄',
            dataIndex: 'monthValue',
            key: 'monthValue',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='monthValue' && sortedInfo.sortOrder

        }, {
            title: '出现方式',
            dataIndex: 'appearanceType',
            key: 'appearanceType',
            render: getApperanceType
        }, {
            title: '渠道来源',
            dataIndex: 'channelType',
            key: 'channelType',
            render: getChannelType,
        },{
            title: '领取',
            key: 'receiveTime',
            dataIndex:'receiveTime',
            render:(text)=>(text && moment(text).format('YYYY-MM-DD')),
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='receiveTime' && sortedInfo.sortOrder
        },{
            title: '到期',
            key: 'unContactDays',//到期未联系
            dataIndex:'unContactDays',
            render:(text,record)=>(`${text||'--'}天`),
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='unContactDays' && sortedInfo.sortOrder
        },{
            title: 'GB',
            key: 'primaryGbStaffName',
            dataIndex:'primaryGbStaffName'
        },{
            title: 'GA',
            key: 'primaryGaStaffName',
            dataIndex:'primaryGaStaffName'
        },{
            title: '客户360',
            key: '360',
            render:(text,record)=>(
                <a  target={`_blank`}>
                    <button className={`gym-button-white-xxs`}>查看</button>
                </a>)
        }],
        '已联络-关键信息':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'10%'
        }, {
            title: '月龄',
            dataIndex: 'monthValue',
            key: 'monthValue',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='monthValue' && sortedInfo.sortOrder

        }, {
            title: '意向度',
            dataIndex: 'intentionLevel',
            key: 'intentionLevel',
            render:(text)=>(mapLabel(charLevel,text))

        }, {
            title: '最近联系',
            dataIndex: 'lastContactDate',
            key: 'lastContactDate',
            sorter:true,
            render:(text)=>(text && moment(text).format('YYYY-MM-DD')),
            sortOrder:sortedInfo && sortedInfo.sortName==='lastContactDate' && sortedInfo.sortOrder
        },{
            title: '是否试听',
            key: 'hasPreviewLesson',
            dataIndex:'hasPreviewLesson',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='hasPreviewLesson' && sortedInfo.sortOrder
        },{
            title: 'GB',
            key: 'primaryGbStaffName',
            dataIndex:'primaryGbStaffName'
        },{
            title: 'GA',
            key: 'primaryGaStaffName',
            dataIndex:'primaryGaStaffName'
        },{
            title: '客户360',
            key: '360',
            render:(text)=>("")

        }],
        '诺访-关键信息':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'10%'

        }, {
            title: '月龄',
            dataIndex: 'monthValue',
            key: 'monthValue',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='monthValue' && sortedInfo.sortOrder

        }, {
            title: '意向度',
            dataIndex: 'intentionLevel',
            key: 'intentionLevel',
            render:(text)=>(mapLabel(charLevel,text))

        }
            , {
                title: '最近联系',
                dataIndex: 'lastContactDate',
                key: 'lastContactDate',
                sorter:true,
                render:(text)=>(text && moment(text).format('YYYY-MM-DD')),
                sortOrder:sortedInfo && sortedInfo.sortName==='lastContactDate' && sortedInfo.sortOrder
            }, {
                title: '诺访',
                dataIndex: 'appTime',
                key: 'appTime',
                sorter:true,
                render:(text)=>(text && moment(text).format('YYYY-MM-DD')),
                sortOrder:sortedInfo && sortedInfo.sortName==='appTime' && sortedInfo.sortOrder
            },{
                title: '是否试听',
                key: 'hasPreviewLesson',
                dataIndex:'hasPreviewLesson'
            },{
                title: 'GB',
                key: 'primaryGbStaffName',
                dataIndex:'primaryGbStaffName'
            },{
                title: 'GA',
                key: 'primaryGaStaffName',
                dataIndex:'primaryGaStaffName'
            },{
                title: '客户360',
                key: '360',
                render:(text)=>("")

            }],
        '已到访-关键信息':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'13%'
        }, {
            title: '月龄',
            dataIndex: 'monthValue',
            key: 'monthValue',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='monthValue' && sortedInfo.sortOrder

        }, {
            title: '意向度',
            dataIndex: 'intentionLevel',
            key: 'intentionLevel',
            render:(text)=>(mapLabel(charLevel,text))

        }
            , {
                title: '诺访',
                dataIndex: 'appTime',
                key: 'appTime',
                sorter:true,
                sortOrder:sortedInfo && sortedInfo.sortName==='appTime' && sortedInfo.sortOrder,
                render:(text)=>(text && moment(text).format('YYYY-MM-DD')),
            },{
                title: '首次到访',
                key: 'oppTime',
                dataIndex:'oppTime',
                sorter:true,
                render:(text)=>(text && moment(text).format('YYYY-MM-DD')),
                sortOrder:sortedInfo && sortedInfo.sortName==='oppTime' && sortedInfo.sortOrder
            },{
                title: 'GB',
                key: 'primaryGbStaffName',
                dataIndex:'primaryGbStaffName'
            },{
                title: 'GA',
                key: 'primaryGaStaffName',
                dataIndex:'primaryGaStaffName'
            },{
                title: '客户360',
                key: '360',
                render:(text)=>("")

            }],
        '新会员-老会员-关键信息':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'10%'

        }, {
            title: '月龄',
            dataIndex: 'monthValue',
            key: 'monthValue',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='monthValue' && sortedInfo.sortOrder
        }, {
            title: '课程包名称',
            dataIndex: 'packageName',
            key: 'packageName',
        }, {
            title: '最近分配时间',
            dataIndex: 'distributeGaTime',
            key: 'distributeGaTime',
            render:(text)=>(text && moment(text).format('YYYY-MM-DD'))
        }
            , {
                title: '签约',
                dataIndex: 'signTime',
                key: 'signTime',
                sorter:true,
                render:(text)=>(text && moment(text).format('YYYY-MM-DD')),
                sortOrder:sortedInfo && sortedInfo.sortName==='signTime' && sortedInfo.sortOrder

            },{
                title: '开课',
                key: 'firstClassTime',
                dataIndex:'firstClassTime',
                render:(text)=>(text && moment(text).format('YYYY-MM-DD')),
                sorter:true,
                sortOrder:sortedInfo && sortedInfo.sortName==='firstClassTime' && sortedInfo.sortOrder
            },{
                title: '到期',
                dataIndex: 'endDate',
                key: 'endDate',
                sorter:true,
                sortOrder:sortedInfo && sortedInfo.sortName==='endDate' && sortedInfo.sortOrder

            },{
                title: 'GB',
                key: 'primaryGbStaffName',
                dataIndex:'primaryGbStaffName'
            },{
                title: 'GA',
                key: 'primaryGaStaffName',
                dataIndex:'primaryGaStaffName'
            },{
                title: '客户360',
                key: '360',
                render:(text)=>("")
            }],
        '待续会员-关键信息':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'10%'

        }, {
            title: '月龄',
            dataIndex: 'monthValue',
            key: 'monthValue',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='monthValue' && sortedInfo.sortOrder,
            width:'10%'
        }, {
            title: '课程包名称',
            dataIndex: 'packageName',
            key: 'packageName',
        },{
            title: '到期',
            dataIndex: 'endDate',
            key: 'endDate',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='endDate' && sortedInfo.sortOrder,

        },{
            title: '剩余课时',
            key: 'remainingCourseNum',
            dataIndex:'remainingCourseNum',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='remainingCourseNum' && sortedInfo.sortOrder
        },{
            title: '续约沟通',
            key: 'lastRenewContactDate',
            dataIndex:'lastRenewContactDate',
            render:(text)=>(text && moment(text).format('YYYY-MM-DD')),
        },{
            title: '续约状态',
            key: 'lastRenewContactStatus',
            dataIndex:'lastRenewContactStatus',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='lastRenewContactStatus' && sortedInfo.sortOrder,
            render:(text)=>(mapLabel(reNewStatus,text))
        },{
            title: 'GB',
            key: 'primaryGbStaffName',
            dataIndex:'primaryGbStaffName'
        },{
            title: 'GA',
            key: 'primaryGaStaffName',
            dataIndex:'primaryGaStaffName'
        },{
            title: '客户360',
            key: '360',
            render:(text)=>("")

        }],
        '基本信息':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'10%'

        },{
            title: '月龄',
            dataIndex: 'monthValue',
            key: 'monthValue',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='monthValue' && sortedInfo.sortOrder
        },{
            title: '主要联系人',
            dataIndex: 'contactRelation',
            key: 'contactRelation',
        },{
            title: '区县',
            dataIndex: 'district',
            key: 'district',
        },{
            title: '居住小区',
            dataIndex: 'quarter',
            key: 'quarter',
        },{
            title: '客户360',
            key: '360',
            render:(text)=>("")
        }
        ],
        'leads信息':[
            {
                title: '宝宝姓名',
                dataIndex: 'babyName',
                key: 'babyName',
                width:'20%'
            },
            {
                title: '出现方式',
                dataIndex: 'appearanceType',
                key: 'appearanceType',
                render: getApperanceType
            },
            {
                title: '渠道来源',
                dataIndex: 'channelType',
                key: 'channelType',
                render: getChannelType,
            },
            {
                title: '渠道备注',
                dataIndex: 'channelComment',
                key: 'channelComment',
                width:'20%'
            },
            {
                title: '客户360',
                key: '360',
                render:(text)=>("")
            }
        ],
        '跟进信息':[
            {
                title: '宝宝姓名',
                dataIndex: 'babyName',
                key: 'babyName',
                width:'10%'

            },
            {
                title: '试听',
                dataIndex: 'previewTime',
                key: 'previewTime',
                sorter:true,
                sortOrder:sortedInfo && sortedInfo.sortName==='previewTime' && sortedInfo.sortOrder,
                render:(text)=>(text && moment(text).format('YYYY-MM-DD'))
            },
            {
                title: '到访次数',
                dataIndex: 'visitTimes',
                key: 'visitTimes',
                sorter:true,
                sortOrder:sortedInfo && sortedInfo.sortName==='visitTimes' && sortedInfo.sortOrder,
                render:(text)=>(!!text? text : '')
            },
            {
                title: '跟进次数',
                dataIndex: 'followTimes',
                key: 'followTimes',
                sorter:true,
                sortOrder:sortedInfo && sortedInfo.sortName==='followTimes' && sortedInfo.sortOrder,
                render:(text)=>(!!text? text : '')

            },
            {
                title: '定金',
                dataIndex: 'depositTime',
                key: 'depositTime',
                sorter:true,
                sortOrder:sortedInfo && sortedInfo.sortName==='depositTimes' && sortedInfo.sortOrder,
                render:(text)=>(text && moment(text).format('YYYY-MM-DD'))
            },
            {
                title: '意向度',
                dataIndex: 'intentionLevel',
                key: 'intentionLevel',
                render:(text)=>(mapLabel(charLevel,text))
            },
            {
                title: '客户360',
                key: '360',
                render:(text)=>("")

            },
        ],
        '合同信息':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'10%'

        },{
            title: '课程包名称',
            dataIndex: 'packageName',
            key: 'packageName',
        },{
            title: '签约',
            dataIndex: 'signTime',
            key: 'signTime',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='lastEffectiveDate' && sortedInfo.sortOrder,
            render:(text)=>(text && moment(text).format('YYYY-MM-DD'))

        },{
            title: '到期',
            dataIndex: 'endDate',
            key: 'endDate',
            render:(text)=>(text && moment(text).format('YYYY-MM-DD')),
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='endDate' && sortedInfo.sortOrder
        },{
            title: '剩余课时',
            dataIndex: 'remainingCourseNum',
            key: 'remainingCourseNum',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='remainingCourseNum' && sortedInfo.sortOrder
        },{
            title: '客户360',
            key: '360',
            render:(text)=>("")

        },],
        '课程教学':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'10%'

        },{
            title: '所选课程',
            dataIndex: 'selectLessons',
            key: 'selectLessons',
        },{
            title: '近6个月平均周耗课',
            dataIndex: 'lastHalfyrAverageExpends',
            key: 'lastHalfyrAverageExpends',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='lastHalfyrAverageExpends' && sortedInfo.sortOrder
        },{
            title: '三周未出席',
            dataIndex: 'isThrwksNoAttendance',
            key: 'isThrwksNoAttendance',
            sorter:true,
            sortOrder:sortedInfo && sortedInfo.sortName==='isThrwksNoAttendance' && sortedInfo.sortOrder,
            render:(text)=>(text && (Number(text)? '是' : ''))
        },{
            title: '客户360',
            key: '360',
            render:(text)=>("")

        },],
        '客户成长':[{
            title: '宝宝姓名',
            dataIndex: 'babyName',
            key: 'babyName',
            width:'15%'

        },{
            title: '参加迎新会',
            dataIndex: 'isAttendNewComes',
            key: 'isAttendNewComes',
            render:(text)=>(text? '是' : '')
        },{
            title: '恳谈会',
            dataIndex: 'isAttendTalkfest',
            key: 'isAttendTalkfest',
            render:(text)=>(text? '是' : '')
        },{
            title: '原GB',
            dataIndex: 'oldPimaryGbStaffName',
            key: 'oldPimaryGbStaffName',
        },{
            title: 'GB',
            dataIndex: 'primaryGbStaffName',
            key: 'primaryGbStaffName',
        },{
            title: 'GA',
            dataIndex: 'primaryGaStaffName',
            key: 'primaryGaStaffName',
        },{
            title: '客户360',
            key: '360',
            render:(text)=>("")

        },],
    };
}
export {getHeader}
