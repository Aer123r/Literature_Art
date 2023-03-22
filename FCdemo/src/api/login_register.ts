import request from "./request";

/*除了登录的都要这个*/
let token=window.sessionStorage.getItem("token")??""

/*手机号和密码登录 成功 */
export const login = (fdata: { phone_number: string; password: string;verification_code:string }) => {
    // console.log("login api",fdata);
    
    return request({
        url: "/user/login",
        method: "POST",
        params: {
          username: fdata.phone_number,
          password: fdata.password
        },
        headers:{
          "Content-type":"application/json"
        }
      });
  };

  
/* 用户注册*/
  export const Register = (fdata: { username: string; password: string,phone_number:string }) => {
    console.log("Register api",fdata);
    
    return request({
        url: "/user/registerUserWithPhone",
        method: "POST",
        params: {
          name: fdata.username,
          password: fdata.password,
          phone:fdata.phone_number
        },
        headers:{
          "Content-type":"application/json"
        }
      });
  };
