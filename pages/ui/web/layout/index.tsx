import * as React from "react";
import {User} from "../../../common/beans/user";
import {Router} from '../../../../pageRoutes/home'
import {connect} from 'react-redux'
import {getBasicInfo, getStaffCenterList} from "../../../redux/action/home";

class Layout extends React.Component<any,any>{
    state={
        centerList:[]
    };

    handleChange=(centerId)=>{
        const {centerList} = this.state;
        const newCenter = centerList.filter((item:any) => item.id === centerId)[0]||{};
        User.user = Object.assign({}, User.user, {
            currentCenterName: newCenter.centerName,
            currentCenterId: newCenter.id,
            centerCode: newCenter.centerCode,
            isHQ: centerId === 'C_HQ001'
        });
        //this.props.commonInit({staffId: User.userId, currentCenterId: newCenter.id});
        console.log(User.user)
       // Router.pushRoute('/home');
    }

    componentDidMount(){
        const {init}=this.props;
        init({
            currentCenterId:User.currentCenterId,
            staffId:User.userId
        }).then((res)=>{
            console.log(res)
        })
    }

    render(){
        const {centerList}=(this.props.homeReducer||{});
        return (<div className={`wrap`}>
            <div className={`p-layout`}>
                <select
                    onChange={this.handleChange}
                >
                    {(centerList||[]).map((item,index)=>(
                        <option key={index} value={item.id}>{item.centerName}-{item.centerCode}</option>
                    ))}
                </select>
            </div>
            {this.props.children}
        </div>)
    }
}

const mapStateToProps= (state)=>{
    const {homeReducer} = state;
    return {homeReducer}
};

const mapDispatchToProps=(dispatch)=>({
    init: (params)=>{
        return Promise.all([
            dispatch(getStaffCenterList(params)),
            dispatch(getBasicInfo(params))
        ])
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Layout)
