let html = document.querySelector("#html");//通过css选择器找到"demo"元素。
let style = document.querySelector("#style");

let string = `
/* 你好，我叫卓越，一名前端新人
 * 接下来我要演示一下八卦图的制作过程
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦有阴有阳
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let string2 = "";
console.log(string.length);//打出字符串的长度
let n = 0;

//设置demo里的内容从第0个到第n个。
let step = () => {
    setTimeout(() => {
        if (string[n] === "\n"){
            string2 += "<br>";//如果是回车，就不照搬
        } else if (string[n] === " "){
            string2 += "&nbsp;";//如果不是回车就照搬
        }else{
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if (n < string.length-1){
            n += 1
            step();
        }//如果n不是最后一个，就继续
    }, 50);
};

step();
