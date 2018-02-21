# 微信小程序-v2ex


## 前言

**微信小程序** 如果还不知道微信小程序的，请这边了解[官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html).

<del>最新版[0.9.092300](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)(下载按钮被箭头挡住，需要审查元素找到下载链接)，已经可以支持绝大部分api的调试，不需要再破解了。</del>

2018-2-21：开发者工具[1.02.1802080](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html) 对应Windows 64、windows 32、 mac

## 运行
  
下载微信开发者工具最新版[1.02.1802080](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，创建新项目，导入即可看到运行效果

2018-2-21：导入完成后需要在这微信后台[设置-开发设置](https://mp.weixin.qq.com/wxopen/devprofile?action=get_profile&token=557154643&lang=zh_CN)中添加 request 合法域名；打开项目后将项目详情里面的不校验安全域名也勾上。

## 说明

本人出于兴趣，完成了这个简单的v2ex的微信小程序，只是为了熟悉api，纯粹好玩，欢迎star  

<del>由于微信小程序现在正在内测，还有不少问题，因此这个v2ex小程序最新tab内容点击主题会报错  

现在代码和样式尚且粗陋，也有一些可待优化地方，因此欢迎有兴趣的同行与我一起继续完善，thx。 

2018-2-21：优化部分显示，修复在实体机预览时不加载图片；

如有转载，请注明出处，谢谢！

效果预览：  

![Alt text](./wechat-v2ex-1.gif)  
![Alt text](./wechat-v2ex-2.gif)  

## 感谢  

v2ex数据api基本上使用了samuel1112的仓库[v2er](https://github.com/samuel1112/v2er)里封装的方法，特此表示感谢
