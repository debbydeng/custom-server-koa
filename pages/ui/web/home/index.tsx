import "./index.scss";
import * as React from "react";
import {connect} from 'react-redux'
import {getAbtnList, getLeadsList, getNavList, saveTabIndex} from "../../../redux/action/home";
import {User} from "../../../common/beans/user";
import {QueryList} from "./part/queryList";
import {commonQueryList, navConfig} from "./enum";
import Navigation from "../../component/navigation";
import StatusTable from "./part/statusTable";

class Home extends React.Component<any,any>{
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}
        return {pageProps}
    }
    state={
        commonQueryIndex:null,
        advanceQueryIndex:null,
        navId:'1',

    }
    handleClick=(condition,id,name,index)=>{
        console.log(index)
    };
    changeRoute=(id)=>{
        this.setState({navId:id});
        this.props.setNavId('key');
    };
    handleTabChange=(id)=>{

    };
    componentDidMount(){
        const {aBtnGroups}=this.props;
        aBtnGroups({
            currentCenterId:User.currentCenterId
        })
    }
    render(){
        const {advanceBtnList,navList,leadsList}=this.props;
        const {advanceQueryIndex,commonQueryIndex,navId}=this.state;
        navConfig.map((nav:any)=>{
            return nav.number=navList[nav.name];
        });
        return (
            <div>
                <div className={`flex p15`}>
                    <QueryList activeIndex={commonQueryIndex}
                               type={`commonQuery`}
                               list={commonQueryList}
                               onQueryClick={this.handleClick}
                               width={`calc(50% - 10px)`}
                               className={`mr20`}
                    />
                    <QueryList activeIndex={advanceQueryIndex}
                               type={`highQuery`}
                               list={advanceBtnList}
                               onQueryClick={this.handleClick}
                               width={`calc(50% - 10px)`}
                    />
                </div>
                <Navigation className={'mtd20'}
                            navList={navConfig}
                            activeId={this.state.navId}
                            onClick={this.changeRoute}/>
                <StatusTable phaseId={navId} tableData={leadsList} onTabChange={this.handleTabChange}/>

            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    const {homeReducer} = state;
    return {
        advanceBtnList:homeReducer.aBtnGroups||[],
        navList:homeReducer.navList||[],
        leadsList:homeReducer.leadsList||{},
    }
};
const mapDispatchToProps=(dispatch)=>({
    aBtnGroups(params){
        dispatch(getAbtnList(params))
    },
    getNavListProps(params){
        dispatch(getNavList(params))
    },
    getLeadsListProps(params){
        dispatch(getLeadsList(params))
    },
    setNavId:(id)=>{dispatch(saveTabIndex(id))}



});

export default connect(mapStateToProps,mapDispatchToProps)(Home)

