import {Axios} from "../../services/axios";
import {HomeApi} from '../../../api/webApi';
import {Events} from "../eventsEnum";

/**
 * 获取员工中心列表
 * @param params
 * @returns {any}
 */
export const getStaffCenterList = (params) => dispatch => {
    const param = {
        url: HomeApi.所有中心,
        data: params
    };
    return Axios.post(param).then((res) => {
        dispatch({
            type: Events.员工中心列表,
            data: res.data,
        });
        return res.data || [];
    })
};

 /**
  * 获取员工基本信息
  * @param params
  * @returns {any}
  */

 export const getBasicInfo=(params)=>dispatch=>{
     const param = {
         url: HomeApi.员工基本信息,
         data: params
     };
     return Axios.post(param).then((res) => {
         dispatch({
             type: Events.员工基本信息,
             data: res.data,
         });
         return res.data || [];
     })
 };

  /**
   * 获取高级查询列表
   * @param params
   * @returns {any}
   */

  export const getAbtnList=(params)=>dispatch=>{
      const param={
          url:HomeApi.获取高级查询按钮组,
          data:params,
      };
      return Axios.post(param).then((res)=>{
          dispatch({
              type:Events.高级查询按钮组,
              data:res.data||[]
          });
          return res.data||[];
      });
  };

   /**
    * 获取导航栏数量
    * @param params
    * @returns {any}
    */
   export const getNavList=(params)=>dispatch=>{
       const param={
           url:HomeApi.获取状态列表,
           data:params,
       };
       return Axios.post(param).then((res)=>{
           dispatch({
               type:Events.导航栏数量,
               data:res.data||[]
           });
           return res.data||[];
       });
   };

/**
 * 获取leads数量
 * @param params
 * @returns {any}
 */
export const getLeadsList=(params)=>dispatch=>{
    const param={
        url:HomeApi.获取分配客户列表,
        data:params,
    };
    return Axios.post(param).then((res)=>{
        dispatch({
            type:Events.leads列表,
            data:res.data||[]
        });
        return res.data||{};
    });
};

 /**
  * 存储navigation index
  * @param id
  * @returns {any}
  */

 export const saveTabIndex=(id)=>dispatch=>{
     return new Promise((resolve)=>{
         dispatch({
             type:Events.高亮tabId,
             data:id,
         });
         resolve(id);
     })
 }
