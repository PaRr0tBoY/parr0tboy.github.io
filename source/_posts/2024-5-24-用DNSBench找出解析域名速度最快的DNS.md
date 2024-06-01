---
title: 用DNSBench找出解析域名速度最快的DNS
date: 2024-05-24 21:14:33
tags: 
- DNS
- 测试
- 日记
cover: https://img.picui.cn/free/2024/06/01/665b025fb553f.jpeg
---

不挂t总是上不去Github，要不就是加载得巨慢无比，一个延迟点的公共DNS或许可以解决问题，遂在网络上搜索相关信息，找到一个叫做**DNSBench**的软件<!--more-->，内含许多公共DNS服务器的ip，而且支持自己添加DNS，只需一键就可开始测试不同DNS的解析速度，并对比：
```
223.5.5.5 alibaba
119.29.29.29 tencent
```
https://img2.imgtp.com/2024/05/24/stBIkkhZ.png

得出腾讯和阿里的公共DNS解析速度较快，于是把阿里DNS设置成首选DNS，腾讯的设为备用。