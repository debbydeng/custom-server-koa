import {Events} from "../eventsEnum";

export const homeReducer=(state={},action)=>{
    switch(action.type){
        case Events.员工中心列表:{
            return Object.assign({},state,{
                centerList:action.data||[]
            })
        }
        case Events.高级查询按钮组:{
            return {...state,advanceBtnList:action.data}
        }
        case Events.导航栏数量:{
            return {...state,navList:action.data}
        }
        case Events.leads列表:{
            return {...state,leadsList:action.data}
        }
        case Events.高亮tabId:{
            return {...state,activeTabId:action.data}
        }
        default:
            return state
    }
}
