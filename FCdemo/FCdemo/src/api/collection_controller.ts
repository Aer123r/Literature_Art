import request from "./request";

/*除了登录的都要这个*/
let token=window.sessionStorage.getItem("token")??""

/*查看是否存在该收藏 */
export const checkCollection = (fdata: { Pid: number; Uid: number }) => {
    console.log("checkCollection",fdata);
    
    return request({
        url: "/star/checkCollection",
        method: "POST",
        params: {
            Pid: fdata.Pid,
            Uid: fdata.Uid
        }
      });
};

/*删除收藏 */
export const deleteCollection = (fdata: { Pid: number; Uid: number }) => {
    console.log("deleteCollection",fdata);
    
    return request({
        url: "/star/deleteCollection",
        method: "POST",
        params: {
            Pid: fdata.Pid,
            Uid: fdata.Uid
        }
      });
};

/*获取用户所有收藏的内容 */
export const getCollection = (Uid: number) => {
    console.log("getCollection",Uid);
    
    return request({
        url: "/star/getCollection",
        method: "POST",
        params: {
            Uid: Uid
        }
      });
};

/*添加新收藏，成功message里返回“success”，否则提示“already collected” */
export const setCollection = (fdata: { Pid: number; Uid: number }) => {
    console.log("setCollection",fdata);
    
    return request({
        url: "/star/setCollection",
        method: "POST",
        params: {
            Pid: fdata.Pid,
            Uid: fdata.Uid
        }
      });
};