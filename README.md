## 个人网站

[网站地址](www.buzhidangxue.com)

个人学习react相关demo，提升对react、webpack、以及前端部署等内容的了解

## 开发内容

- [x] 域名备案
- [x] 项目简单搭建
- [x] travis 自动部署
- [x] CDN
- [x] HTTPS
- [ ] lint相关
- [ ] webpack
- [ ] ...

## 遇到的问题
### travis 部署相关
参考配置 [使用 Travis CI 实现 GitHub + Server 自动部署](https://blog.lbinin.com/frontEnd/Git/Travis-CI.html#%E4%BB%93%E5%BA%93%E7%9B%91%E6%8E%A7)

travis部署时（travis login --auto），安装依赖花了很久，各种配置问题🤷‍♀️，当时也没记录，只找见这一个了

[incorrect fallback to Ruby 2.3](https://github.com/CocoaPods/CocoaPods/issues/8955)

### nginx

主域名访问(buzhifangxue.com)，一直打不到www*下面，开始以为是NGINX的问题，调了好久。添加CDN的时候才知道没有给域名添加相关主机记录（阿里云的文档还是挺好的）。

### HTTPS
使用了[letsencrypt](https://letsencrypt.org/)和Symantec(阿里云可免费申请，个人，一年)
- letsencrypt三个月需更新一次，可设置脚本自动更新。
- Symantec，阿里云上申请，需要自己配置NGINX服务

nginx 不在默认安装位置时
./certbot-auto --nginx --nginx-server-root=/etc/nginx/conf

使用了阿里云的CDN，需要在CDN的HTTPS设置中增加相关认证信息。
