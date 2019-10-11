/**
 * desc: 用户类
 * User: Renjian.Tang/trj8772@aliyun.com
 * Date: 2018/8/6
 * Time: 下午1:52
 */
//import {Storage} from "../utils/storage";

declare interface UserModal {
    userName?:string,
    userId:string,
    englishName? :string,
    chineseName?: string,
    currentCenterId?:any,
    isHQ?: boolean,
    currentCenterName?: string,
    role?:Array<string>,
    permissionList?:Array<string>,
    centerCode?:string,
    token?:string,
}

class User {
    static _key = "_user";
    static _user:UserModal=null;

    /**
     * 获取当前员工ID
     * @returns {string}
     */
    static get userId (){
        return this.user.userId
    }

    /**
     * 获取当前登录中心ID
     * @returns {string}
     */
    static get currentCenterId (){
        return this.user.currentCenterId
    }

    /**
     * 获取用户信息
     * @returns {UserModal}
     */
    static get user():UserModal {
        if(!this._user){
            this._user=JSON.parse(window.localStorage.getItem(this._key));
        }
        return this._user;
    }

    /**
     * 设置用户信息
     * @param {UserModal} user
     */
    static set user(user:UserModal){
        this._user = user;
        window.localStorage.setItem(this._key, JSON.stringify(user));
    }

    /**
     * 获取用户中文名
     * @returns {string}
     */
    static get chineseName(){
        return this.user.chineseName
    }

    /**
     * 获取用户英文名
     * @returns {string}
     */
    static get englishName(){
        return this.user.englishName
    }

    /**
     * 获取用户当前中心
     * @returns {any}
     */
    static get currentCenterName(){
        return this.user.currentCenterName
    }

    /**
     * 是否为总部
     * @returns {any}
     */
    static get isHQ(){
        return this.user.isHQ
    }
    /**
     * 角色信息
     * @returns {any}
     */
    static get role(){
        return this.user.role
    }
    /**
     * 用户权限
     * @returns {any}
     */
    static get permissionList(){
        if((this.user.permissionList) instanceof Array){
            return this.user.permissionList
        }else{
            return [];
        }
    }

    /**
     * 获取中心编号
     * @returns {string | undefined}
     */
    static get centerCode(){
        return this.user.centerCode
    }
}

export {User}
