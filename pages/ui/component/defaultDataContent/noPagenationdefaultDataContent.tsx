/**
 * desc: 默认显示
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2018/11/23
 * Time: 下午3:28
 */
import React from 'react';

class DefaultDataContentNoPagination extends React.Component<any, any>{

    render(){
        return(
            <div className={`gym-contract-info-wrap-noneContent`}>
                <div className={`gym-contract-info-noneContent-no-data`}>
                    <img className={`gym-contract-info-noneContent-no-data-img`} src={``} alt=""/>
                    <span className={`gym-contract-info-noneContent-no-data-text`}>暂无数据</span>
                </div>
            </div>
        )
    }
}

export {DefaultDataContentNoPagination}
