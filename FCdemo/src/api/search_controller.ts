import request from "./request";

/*除了登录的都要这个*/
let token=window.sessionStorage.getItem("token")??""

/*)删除个人历史数据列表 */
export const historyDel = (searchKey:string,userId:string) => {
    console.log("historyDel",searchKey);
    let token=window.sessionStorage.getItem("token")??""
    return request({
        url: "/history/del",
        method: "POST",
        params: {
            searchKey:searchKey,
            userId:userId
          }
      });
  };

  /*搜索其相关最热的前十名*/
  export const searchGetHot = (searchKey:string) => {
    console.log("searchGetHot",searchKey);
    let token=window.sessionStorage.getItem("token")??""
    return request({
        url: "/history/getHot",
        method: "POST",
        params: {
            searchKey:searchKey,
           
          }
      });
  };

  /*(功能未实装)获取个人历史数据列表*/
  export const HistoryGetUser = (userId:string) => {
    console.log("searchGetHot",userId);
    let token=window.sessionStorage.getItem("token")??""
    return request({
        url: "/history/getUser",
        method: "POST",
        params: {
            userId:userId,
           
          }
      });
  };


  /*(功能未实装)将包含搜索内容（包括图片中的文字）的文档搜索出来,搜索完后会在data中返回文献列表 */
  export const searchWord = (searchKey:string) => {
    console.log("searchWord",searchKey);
    let token=window.sessionStorage.getItem("token")??""
    return request({
        url: "/history/searchWord",
        method: "POST",
        params: {
            searchKey:searchKey,
           
          }
      });
  };

  