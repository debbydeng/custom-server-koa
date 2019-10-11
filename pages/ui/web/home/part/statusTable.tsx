/**
*Desc: 分配客户查询得到的表格
*User: Debby.Deng
*Date: 2018/10/10,
*Time: 上午10:44
*/
import * as React from "react";
import {Tabs} from "../../../component/tabs";
import {getHeader} from "./customerTableHeader";
import {navConfig} from "../enum";
import {TablePagination} from "../../../component/tablePagination";
import {connect} from 'react-redux'
import {saveTabIndex} from "../../../../redux/action/home";

const tabList=[
    {
        title:'关键信息',
        id:'key'
    },
    {
        title:'基本信息',
        id:'basic'
    },
    {
        title:'leads信息',
        id:'leads'
    },
    {
        title:'跟进信息',
        id:'follow'
    },
    {
        title:'合同信息',
        id:'contract'
    },
    {
        title:'课程教学',
        id:'lesson'
    },
    {
        title:'客户成长',
        id:'growth'
    },

];
interface propType {
    phaseId:string,//阶段id
    tableData:any,
    onTabChange:(id)=>(void),
    [propName:string]:any,
}
const defaultTabId='key';
class StatusTable extends React.Component<propType>{
    status=0;
    state={
        activeKey:'key',//tab 选中项

        lastNavIndex:null,//导航栏上次选中
        columns:[],
        type:'待分配',//按钮组
        activeIndex:0,//tabsquare 关键信息、基本信息...选中项
        searchInitial:[],//GB/GA筛选默认值
    };

    componentDidMount(){

    }


    handleChangePage=(pageInfo)=>{
        this.props.onPageChange(pageInfo);
    };
    handleSort=(pagination,filters,sorter)=>{//排序
        const columns=this.state.columns;
        columns.map((column)=>{
            column.sortOrder= column.key===sorter.field? sorter.order : '';
        });
        this.setState({columns});
        this.props.onTableSort(sorter);
    };

    onTableSelectChange=(selectedRowKeys, selectedRows)=>{//选中行回调事件
        const keys=selectedRows.map((item)=>{
            return item.key;
        });
        this.props.onLeadsArrChange(keys);
       // this.setState({selectedRowKeys:keys});
    };

     /**
      * 获取不同阶段排序信息
      * @param id: 阶段ID
      * @returns {any}
      */
     getInitQuery=(id)=>{
         switch(parseInt(id)){
             case 1:{//待分配
                 return{
                     sortName:'monthValue',
                     sortOrder:'ascend',
                 }
             }
             case 2:{//已分配
                 return {
                     sortName:'distributeTime',
                     sortOrder:'descend',
                 }
             }
             case 3:{//已领取
                 return {
                     sortName:'receiveTime',
                     sortOrder:'descend',
                 }
             }
             case 4:{//已联络
                 return {
                     sortName:'lastContactDate',
                     sortOrder:'descend',
                 }
             }
             case 5:{//诺访
                 return {
                     sortName:'lastContactDate',
                     sortOrder:'descend',
                 }
             }
             case 6:{//已到访
                 return {
                     sortName:'oppTime',
                     sortOrder:'descend',
                 }
             }
             case 7:{//新会员
                 return {
                     sortName:'signTime',
                     sortOrder:'descend',
                 }
             }
             case 8:{//老会员
                 return {
                     sortName:'signTime',
                     sortOrder:'descend',
                 }
             }
             case 9:{//待续会员
                 return {
                     sortName:'endDate',
                     sortOrder:'ascend',
                 }
             }
             default:{
                 return {
                     sortName:'',
                     sortOrder:'',
                 }
             }
         }
     };
      /**
       * 关键信息，基本信息，leads信息等切换
       * @param id: tabID
       * @returns {any}
       */
      handleTabChange=(id)=>{
          //this.setState({activeKey:id});
          this.props.onTabChange(id);
          this.props.saveTabIndex(id);
      }

    getTable=(id,phaseId,tabIndex)=>{
        const {tableData}=this.props;
        let phaseTitle=navConfig.filter((item)=>{return item.phaseId===phaseId})[0].title;
        const tabName=tabList[tabIndex].title;
        const sortInfo=this.getInitQuery(phaseId);
        if(phaseTitle==='新会员'||phaseTitle==='老会员'){
            phaseTitle="新会员-老会员-";
        }else{
            phaseTitle=`${phaseTitle}-`
        }
        if(tabName!=='关键信息'){
            phaseTitle="";
        }
        const columns=getHeader(sortInfo)[`${phaseTitle}${tabName}`];
        return <TablePagination columns={columns}
                                dataSource={tableData.list||[]}
                                rowKey={'leadsId'}
                                totalSize={tableData.totalSize}
                                pageSize={tableData.pageSize}
                                handleChangePage={this.handleChangePage}
                                pageNo={tableData.pageNo}
        />
    };
    getTabPanes=()=>{
        const {phaseId}=this.props;
        return tabList.map((item,index)=>({
            tabTitle:item.title,
            key:item.id,
            tabPane:this.getTable(item.id,phaseId,index)
        }))
    };
    render(){
        const {activeKey}=this.props;
        return (
            <div>
                <Tabs tabPanes={this.getTabPanes()} onChange={this.handleTabChange} activeKey={activeKey}/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    const {homeReducer} = state;
    return {
        activeKey:homeReducer.activeTabId||defaultTabId
    }
};


export default connect(mapStateToProps,{saveTabIndex})(StatusTable)
