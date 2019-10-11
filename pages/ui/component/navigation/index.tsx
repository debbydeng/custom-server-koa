/**
 *Desc: 页面椭圆状导航栏
 *User: Debby.Deng
 *Date: 2018/9/25,
 *Time: 上午10:53
 */
import * as React from "react";
import './index.scss';


declare interface navProps {
    name?: string,//阶段后台字段
    title: any,//阶段名称
    phaseId: string,//阶段ID
    number?: string,//阶段数量
    onClick?: (i) => (void),
}

declare interface navConfig {
    navList: Array<navProps>,//导航栏文本数组，可写元素
    className?: string,
    onClick?: (id) => (void),//最外层点击事件
    activeId?: string,//哪个导航高亮
}

class Navigation extends React.Component <navConfig, any> {
    state = {
        activeId: this.props.activeId
    };
    handleClick = (phaseId) => {
        if (phaseId !== this.state.activeId) {
            this.setState({activeId: phaseId});
            this.props.onClick(phaseId);
        }
    };

    componentDidMount() {

    }

    render() {
        const activeId = this.state.activeId;
        const idx=this.props.navList.findIndex((item)=>(item.phaseId===activeId));
        return (
            <ul className={`gym-round-nav ${this.props.className}`}>
                {(this.props.navList || []).map((nav, index) => {
                    return (
                        <li key={index}
                            className={` gym-round-nav-li ${index === idx-1 ? 'bgDefault' : ''}`}>
                            <div className={`${nav.phaseId === activeId ? 'active' : ''} gym-round-nav-li-inside`}
                             onClick={this.handleClick.bind(this, nav.phaseId)}>
                                <div>{nav.title}<p>{nav.number}</p></div>
                            </div>
                    </li>)
                })}
            </ul>
        )
    }
}

export default Navigation;
