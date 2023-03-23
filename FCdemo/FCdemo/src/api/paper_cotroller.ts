import { time } from "console";
import request from "./request";

/*除了登录的都要这个*/
let token=window.sessionStorage.getItem("token")??""

/*下载PDF */
export const loadPDF = (Pid:number) => {
    console.log("loadPDF",Pid);
    let token=window.sessionStorage.getItem("token")??""
    return request({
        url: "/paper/DownloadEssays",
        method: "POST",
        params: {
           Pid:Pid
          }
      });
  };


/*多个PDF文件上传,该功能无法使用swagger文档自带的接口调试，请在前端项目或者postman中测试*/
export const uploads = (Pid:number) => {
    console.log("loadPDF",Pid);
    let token=window.sessionStorage.getItem("token")??""
    return request({
        url: "/paper/uploads",
        method: "POST",
        headers:{

        },
        params: {
           Pid:Pid
          }
      });
  };

  /*单篇文章手动上传,成功后message返回“文章添加成功”*/
  export const writeNewEssays = (fdata:{author:string,classification:string,file:FormData,signtime:string,title:string}) => {
    console.log("writeNewEssays",fdata);
    let token=window.sessionStorage.getItem("token")??""
    return request({
        url: "/paper/writeNewEssays",
        method: "POST",
        headers:{
            
        },
        params:{
            author:fdata.author,
            classification:fdata.classification,
            signtime:fdata.signtime,
            title:fdata.title
        }
      });
  };