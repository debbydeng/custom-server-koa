
import axios from 'axios';
import {Loading} from "../ui/component/loading";
import {User} from "../common/beans/user";
import {Router} from '../../pageRoutes/home'
import {message} from "antd";

declare interface AxiosParams {
    url: string;
    data?: object;
    header?: object;
    silence?: boolean;
    onProgress?: () => void;
    [propsName:string]:any,
}

class Axios {
    static timeout: number = 10000;

    static get = (params: AxiosParams) => {
        const {url, data, header,silence} = params;
        if (silence) {
            Loading.add();
        }
        let headers = {
            'Content-Type': "application/json",
            'token':User.user.token,
        };
        return axios.get(url, {
            params: data || {},
            responseType: 'json',
            timeout: Axios.timeout,
            withCredentials: false,
            headers: Object.assign({}, headers, header),
        }).then((res: any) => {
            if (silence) {
                Loading.remove();
            }
            return Promise.resolve(res.data)
        }, (err: any) => {
            if (silence) {
                Loading.remove();
            }
            return Promise.reject({
                code: err.code,
                message: err.message
            })
        });
    };
    static post = (params: AxiosParams) => {
        let {url, data, header, responseType,silence, onProgress} = params;
        if (silence) {
            Loading.add();
        }
        // Todo 传递文件
        let headers = {
            'Content-Type': "application/json",
            'token':User.user.token,
        };
        return axios.post(url, data || {}, {
            responseType: responseType || 'json',
            timeout: Axios.timeout,
            withCredentials: false,
            headers: Object.assign({}, headers, header),
            onUploadProgress: onProgress
        }).then((res: any) => {
            if (silence) {
                Loading.remove();
            }
            const data=res.data;
            if(data && data.code===2){//token unvalid
                Router.pushRoute('/login');
                return Promise.resolve(data);
            }else if(data && data.code===0){
                message.error(data.msg);
                return Promise.reject(data);
            }
            return Promise.resolve(res.data)
        }, (err: any) => {
            if (silence) {
                Loading.remove();
            }
            return Promise.reject({
                code: err.code,
                message: err.message
            })
        });
    };
    /**
     * @todo 改进需求
     * 提交formdata
     * @param {AxiosParams} params
     * @returns {Promise<AxiosResponse<any>>}
     */
    static postFormData = (params: AxiosParams) => {
        let {url, data, header,silence, onProgress} = params;
        if (silence) {
            Loading.add();
        }

        let headers = {};
        return axios.post(Axios.getUrl(url), data || {}, {
            responseType: 'json',
            timeout: Axios.timeout,
            withCredentials: false,
            headers: Object.assign({}, headers, header),
            onUploadProgress: onProgress,
            transformRequest: [function (data) {
                let ret = '';
                for (let it in data) {
                    ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
                }
                return ret
            }],
        }).then((res: any) => {
            if (silence) {
                Loading.remove();
            }
            return Promise.resolve(res.data)
        }, (err: any) => {
            if (silence) {
                Loading.remove();
            }
            return Promise.reject({
                code: err.code,
                message: err.message
            })
        });
    };
}

export {Axios}
