/**
 * desc: 工具
 * User: Renjian.Tang/trj8772@aliyun.com
 * Date: 2018/8/15
 * Time: 上午10:04
 */
import {Base64Util} from "./crypto";
import moment from 'moment';

class CommonUtils {
    /**
     * 路由参数加密
     * @param {object} params
     * @returns {string}
     */
    static stringify(params: object) {
        return Base64Util.stringify(JSON.stringify(params));
    }

    /**
     * 是否有路由参数
     * @param props
     * @returns {any}
     */
    static hasParams(props: any) {
        return props.match && props.match.params && props.match.params.params;
    }

    /**
     * 路由参数解密
     * @param props
     * @returns {any}
     */
    static parse(props: any) {
        const params = Base64Util.parse(props.match.params.params);
        return JSON.parse(params);
    }

    /**
     * 过滤请求参数
     * @param {object} params
     * @returns {{}}
     */
    static filterParams(params: object) {
        let filterObj = {};
        for (let key in params) {
            const val = params[key];
            if (key === 'signTime' || key === 'delayTo' || key === 'approvalStartDate' || key === 'approvalEndDate') {
                val ? filterObj[key] = moment(val).valueOf() : filterObj[key] = null;

                continue;
            }

            if (val || val === 0 || val === false || val === '') {
                if (typeof val === 'object' && !(val instanceof Array)) {
                    filterObj[key] = CommonUtils.filterParams(val);
                } else if (typeof val === 'string') {
                    // @todo 空字符串设置null
                    // filterObj[key] = val !== '' ? val.trim() : null;
                    filterObj[key] = val.trim();
                } else {
                    filterObj[key] = val;
                }
            }
        }
        return filterObj;
    }

    /**
     * 替换数组某个元素
     * @param {Array<any>} arr
     * @param {number} index
     * @param object
     * @returns {(any)[]}
     * @constructor
     */
    static EditArrayElementByIndex(arr: Array<any>, index: number, object: any) {
        return [
            ...arr.slice(0, index),
            object,
            ...arr.slice(index + 1)
        ]
    }

    /**
     * 数组删除某个元素
     * @param {Array<any>} arr
     * @param {number} index
     * @returns {(any)[]}
     * @constructor
     */
    static DelectArrayElementByIndex(arr: Array<any>, index: number) {
        return [
            ...arr.slice(0, index),
            ...arr.slice(index + 1)
        ]
    }

    /**
     * 深度遍历对象，为定义的值为null
     * @param {object} obj
     * @returns {any}
     * @constructor
     */
    static TraversalObject(obj: object) {
        let newObj = {};
        for (let key in obj) {
            const val = obj[key];
            if (val && typeof val === "object") {
                if (val instanceof Array) {//数组直接转换为字符串
                    newObj[key] = JSON.stringify(val);
                } else {
                    CommonUtils.TraversalObject(val); //递归遍历
                }
            } else {
                if (!val) {
                    newObj[key] = null;
                } else {
                    newObj[key] = val;
                }
            }
        }
        return newObj;
    }
    static PlainObj(obj){
        const newObj={};
        const traversal=(obj)=>{
            for (let key in obj) {
                const val = obj[key];
                if(!(typeof val==='undefined' || val===null)){//值为非空(排除0)
                    if (typeof val === "object") {
                        if (val instanceof Array && val.length) {//数组直接转换为字符串
                            newObj[key] = JSON.stringify(val);
                        } else {
                            traversal(val); //递归遍历
                        }
                    }else{
                        newObj[key]=val;
                    }
                }
            }
        };
        traversal(obj);
        return newObj;
    }


    /**
     * 时间戳转时间-format:年-月-日
     * @param {date} date
     * @returns {any}
     */

    static transferDate(date: Date) {
        let formDate = new Date(date);
        let y = formDate.getFullYear(), m = formDate.getMonth() + 1, d = formDate.getDate();
        let mm = m < 10 ? "0" + m : m;
        let dd = d < 10 ? "0" + d : d;
        return `${y}-${mm}-${dd}`;

    }

    /**
     * 判断数组是否包含有一个或多个元素
     * @param {Array<string>} parentArray
     * @param {any} child
     * @returns {any}
     */

    static isInclude(parentArray, child) {
        if (typeof child != "object" && parentArray instanceof Array) {//单个字符
            return parentArray.includes(child)
        } else if (child instanceof Array) {//判断是否包含数组
            for (let i = 0; i < child.length; i++) {
                if (CommonUtils.isInclude(parentArray, child[i])) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * 将权限树不完全选择选项加上
     * @param {Array<string>} funsArr
     * @returns {Array<string>}
     */

    static fullfillPermission(funsArr) {
        let treeNode = funsArr;
        funsArr.map((func) => {
            const zero = func.substring(4, 6);
            const first = func.substring(6, 8);
            const second = func.substring(8, 10);
            const third = func.substring(10);
            if (third !== '00') {//三级菜单
                const secondNode = `FUNC${zero}${first}${second}00`;
                const firstNode = `FUNC${zero}${first}0000`;
                const zeroNode = `FUNC${zero}000000`;
                treeNode = treeNode.concat([firstNode, secondNode, zeroNode]);
            } else {
                if (second !== '00') {//二级菜单
                    const firstNode = `FUNC${zero}${first}0000`;
                    const zeroNode = `FUNC${zero}000000`;
                    treeNode = treeNode.concat([firstNode, zeroNode]);
                } else {
                    if (first !== '00') {//一级菜单
                        const zeroNode = `FUNC${zero}000000`;
                        treeNode = treeNode.concat([zeroNode]);
                    }
                }
            }
        });
        const setArr = new Set(treeNode);
        return [...setArr];
    }

    /**
     * 打印页面内容
     * @param {html<string>} printHtml
     * @returns undefined
     */
    static printPage(printHtml, container) {
        const href = window.location.href;
        const iframe = window.document.createElement('iframe');
        iframe.src = href;
        iframe.style.display = 'none';
        if(container){
            container.appendChild(iframe);
        }else {
            window.document.body.appendChild(iframe);
        }
        iframe.contentWindow.onload = function () {
            iframe.contentDocument.body.innerHTML = printHtml;
            iframe.contentWindow.print();
        }
    }

    /**
     * 数字格式化
     * @param {number} num
     */
    static toThousands(num:number){
        let _num = (num || 0).toFixed(2).toString();
        let integter = _num.slice(0,_num.indexOf('.'));
        let float = _num.slice(_num.indexOf('.')+1);
        let result = '';
        while (integter.length > 3) {
            result = ',' + integter.slice(-3) + result;
            integter = integter.slice(0, integter.length - 3);
        }
        if (integter) {
            result = `${integter + result}.${float}`;
        }
        return result;
    };
}

class SafeCalculate {
    /**
     * 两个浮点数求和
     * @param {string | number}
     * @returns {number}
     */
    static getDecimalsLen(obj) {
        let decimalsLen = 0;
        for (let value of obj) {
            const decimalsPart = (value || 0).toString().split('.')[1];
            if (decimalsPart && decimalsPart.length > decimalsLen) {
                decimalsLen = decimalsPart.length;
            }
        }
        return decimalsLen;
    }

    static add(...rest) {
        let sum = 0;
        const decimalsLen = SafeCalculate.getDecimalsLen(rest);
        const pow = Math.pow(10, decimalsLen);
        for (let value of rest) {
            sum += (value * pow);
        }
        return sum / pow;
    }

    // 两个浮点数相减
    static sub(...rest) {
        let sub = rest[0];
        const decimalsLen = SafeCalculate.getDecimalsLen(rest);
        const pow = Math.pow(10, decimalsLen);
        sub *= pow;
        for (let value of rest.slice(1)) {
            sub -= (value * pow);
        }
        return sub / pow;
    }

    // 两数相除
    static divide(...rest) {
        let divNum = rest[0];
        const decimalsLen = SafeCalculate.getDecimalsLen(rest);
        const pow = Math.pow(10, decimalsLen);
        divNum *= pow;
        for (let value of rest.slice(1)) {
            divNum /= (value * pow);
        }
        return divNum;
    }

    static mul(...rest) {
        let decimalsLen = 0, mul = 1;
        for (let value of rest) {
            const decimalsPart = (value || 0).toString().split('.')[1];
            if (decimalsPart) {
                decimalsLen += decimalsPart.length;
            }
        }
        for (let value of rest) {
            mul *= (value || 0).toString().replace(".", "")
        }
        return mul / Math.pow(10, decimalsLen)
    }
}

export {CommonUtils, SafeCalculate}
