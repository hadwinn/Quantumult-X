/******************************

脚本功能：看理想-看见另一种可能+解锁VIP
下载地址：https://is.gd/CjkkBS
软件版本：3.14.3
脚本作者：彭于晏💞
更新时间：2022-10-6
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.vistopia\.com\.cn url script-request-header https://raw.githubusercontent.com/hadwinn/Quantumult-X/main/ycdz/kanlixiang.js

[mitm] 

hostname = api.vistopia.com.cn

*******************************/

var Url = $request.url;
// var Url = "https://api.vistopia.com.cn/api/v1/user/check-unread?api_token=zLd3bkR5sJybHIGT6Br37dWoYXGtpLgf3T1vgiDSAzsS3eLVgHhiTReADFmF4mo4&req_time=1665668856&sign=5c697999cc61507c6ec87c8828464c96"
function setQueryString(key, val) { 
    var url = Url.split('?'), search=url[1];
    var query = {};
    if (search) {
        search.split('&').forEach((item) => {
            var arr = item.split('=');
            query[arr[0]] = arr[1];
        });
    }
    query[key] = val;
    var queryArr = [];
    for (var p in query) {
        queryArr.push(p + '=' + query[p]);
    }
    return url[0]+'?'+queryArr.join('&');
};
setQueryString("api_token","zLd3bkR5sJybHIGT6Br37dWoYXGtpLgf3T1vgiDSAzsS3eLVgHhiTReADFmF4mo4");

Url = setQueryString("api_token","zLd3bkR5sJybHIGT6Br37dWoYXGtpLgf3T1vgiDSAzsS3eLVgHhiTReADFmF4mo4");
Url = setQueryString("sign","5c697999cc61507c6ec87c8828464c96");
console.log(Url);
// var modifiedHeaders = $request.query;

// modifiedHeaders['api_token'] = '60ONiZRsgFEFpbGXBp8orRTm3avSET4WVwnzYRP8NoMTDBZeB8jr6tyy1BHNxYax';


// modifiedHeaders['sign'] = 'f4d5833dc8183d7cd3e1c09a70ae7f07';

// console.log(modifiedHeaders)

// $done({ headers: modifiedHeaders });
$done({ url:Url });
