/**
 * desc: 发送请求时候的遮罩
 * User: Renjian.Tang/trj8772@aliyun.com
 * Date: 2018/8/1
 * Time: 下午3:47
 */
import './loading.scss';

class Loading {
    static tagsCount = 0;
    static show(){
        let loadingWraper:HTMLElement = document.getElementById('gym-loading');
        if(loadingWraper){
            loadingWraper.setAttribute("class","show");
        }else{
            loadingWraper = document.createElement('div');
            loadingWraper.setAttribute("id","gym-loading");
            loadingWraper.setAttribute("class","show");
            document.body.appendChild(loadingWraper);
        }

    };
    static close(){
        let loadingWraper:HTMLElement = document.getElementById('gym-loading');
        if(loadingWraper){
            loadingWraper.classList.remove("show");
            loadingWraper.setAttribute("class","hide");
        }
    };
    static add(){
        this.tagsCount++;
        this.show();
    };
    static remove(){
        this.tagsCount--;
        if(this.tagsCount > 0){
            return false;
        }else{
            this.close();
            return true;
        }
    };
}

export {Loading}