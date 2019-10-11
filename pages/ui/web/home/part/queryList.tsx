/**
*Desc: 常用查询，高级查询list列表
*User: Debby.Deng
*Date: 2018/10/9,
*Time: 下午3:45
*/
import * as React from "react";
declare interface list {
    name:string,
    queryId:string,
    condition?:object,//高级查询按钮详细信息
}
declare interface queryConfig {
    type?:string,//'commonQuery':常用查询， 'advanceQuery': 高级查询
    list:Array<list>,
    onQueryClick:(condition,id,name,activeIndex)=>(void),
    width?:string,
    className?:string,
    onClearAdvanceQuery?:()=>(void),
    onAdvanceRef?:any,
    onCommonRef?:any,
    activeIndex:number,
}
class QueryList extends React.Component<queryConfig>{

    handleClick(queryCondition,id,name,index){
        this.props.onQueryClick(queryCondition,id,name,index);

    }
    getList=()=>{
        const {list,activeIndex}=this.props;
       // let activeIndex=this.state.activeIndex;
        return(
        <ul className={`queryWrap-ul`}>
            {
            list.map((item,index)=>{
            return (
                <li key={index} className={`${activeIndex===index? 'active' : ''} queryWrap-li`}
                onClick={this.handleClick.bind(this,item.condition,item.queryId,item.name,index)}>
                {item.name}
                </li>
                   )
                })
            }
        </ul>)

    };
    getCommonQuery =()=>{
        return (
            <div className={` queryWrap ${this.props.className}`} style={{width:this.props.width}}>
                <p className={`tableCell`} style={{width:'60px'}}>常用查询</p>
                <div className={`tableCell`}>
                    {this.getList()}
                </div>
            </div>
        )
    };
    getHighQuery =()=>{
        return (
            <div ref={`advanceQuery`}
                className={` queryWrap ${this.props.className}`} style={{width:this.props.width}}>
                <button onClick={this.handleClick.bind(this,'advanced')}
                        className={`gym-button-default gym-button-sm`}>高级查询</button>
                <div className={`queryWrap-advance`}>
                    {this.getList()}
                </div>
            </div>
        )
    };
    componentDidMount(){

    }
    render(){
        const type=this.props.type;
        return  type==='commonQuery'? this.getCommonQuery() : this.getHighQuery();
    }
}

export  {QueryList};
