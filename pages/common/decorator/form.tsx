/**
*Desc: form装饰器
*User: Debby.Deng
*Date: 2019/3/6,
*Time: 9:28 AM
*/
import {Form} from "antd";

function form(options?:any) {
    return function wrapWithConnect(target) {
        return Form.create(options)(target) as any;
    }
}

export {form};
