import { segment } from "oicq";
import fetch from "node-fetch";

//项目路径
const _path = process.cwd();

//简单应用示例

//1.定义命令规则
export const rule = {
  wife: {
    reg: "^#?(来个老婆|二次元|随机老婆)$", //匹配消息正则，命令正则
    priority: 0.5, //优先级，越小优先度越高
    describe: "【二次元】", //【命令】功能说明
  },
  random: {
    reg: "^#?(来个头像|随机头像)$", //匹配消息正则，命令正则
    priority: 0.5, //优先级，越小优先度越高
    describe: "【随机头像】", //【命令】功能说明
  },
    calendar: {
    reg: "^#?(摸鱼日历)$", //匹配消息正则，命令正则
    priority: 0.5, //优先级，越小优先度越高
    describe: "【摸鱼日历】", //【命令】功能说明
  },
};

//2.编写功能方法
//方法名字与rule中的examples保持一致
//测试命令 npm test 例子
export async function wife(e) {
  //e.msg 用户的命令消息
  console.log("用户命令：", e.msg);
  //执行的逻辑功能
  let url = `https://api.oick.cn/random/api.php?type=pc`;
  
  let msg = [ 
    segment.at(e.user_id),  
    segment.image(url),
  ];
    
  //发送消息
  e.reply(msg);
  
  return true; //返回true 阻挡消息不再往下
}

export async function random(e) {
  //e.msg 用户的命令消息
  console.log("用户命令：", e.msg);
  //执行的逻辑功能
  let url = `https://api.vvhan.com/api/avatar`;
  
  let msg = [ 
    segment.at(e.user_id),  
    segment.image(url),
  ];
    
  //发送消息
  e.reply(msg);
  
  return true; //返回true 阻挡消息不再往下
}

export async function calendar(e) {
  //e.msg 用户的命令消息
  console.log("用户命令：", e.msg);
  //执行的逻辑功能
  let url = `https://api.vvhan.com/api/moyu`;
  
  let msg = [ 
    segment.at(e.user_id),  
    segment.image(url),
  ];
    
  //发送消息
  e.reply(msg);
  
  return true; //返回true 阻挡消息不再往下
}