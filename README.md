# jiguangchao.com


### 关于我
* 全栈开发，熟练掌握Vue、React、Nodejs技术栈；熟悉antd、elementUI等前端组件库，精通koa、egg.js后端框架；熟练掌握html/css的原生应用。
* python 爬虫，python web，python小工具，对python的异步、高阶函数、装饰器有较深入理解；java/C 也会，好久不用了。
* Excel VBA插件开发，mysql/oracle SQL编写，ETL进行经营数据统计分析。
* 网络运维、网络布置、做网线；SecureCrt脚本开发、linux系统运维、各种装系统；企业级路由器/交换机配置、按键精灵...修暖气片，疏通下水道...
* 英语狂热爱好者，精通新概念英语，对英语教学、语法、美式发音有较深入了解。
* 篮球爱好者，打篮球喊我！
* 事业编、公考报考以及学习指导、结构化面试陪练。
##### [email：253106788@qq.com]
---

### 关于本网站
本网站前端纯原生开发，采用了比较传统的SSR后端渲染技术；为了锻炼自己的写原生的能力，目前连jquery都没有使用；后端采用了阿里的egg.js框架以及egg生态下的各种插件，如nunjucks(模板引擎)、passport(第三方登录认证)；数据库使用了MongoDB
##### 本网站GitHub地址：https://github.com/tonygeegle/jiguangchao.com

---
## 如果你也想使用本网站作为自己的个人网站，请进行以下步骤进行部署
## 请先自行安装MongoDB
## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm i egg-scripts --save #if nessary
$ npm install --production
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.
### nginx配置如下，否则第GitHub登陆出错
```nginx
server {
listen 443 ssl;
server_name www.jiguangchao.com jiguangchao.com;
index index.html index.htm;
ssl_certificate cert/2862014_www.jiguangchao.com.pem;   #将domain name.pem替换成您证书的文件名。
ssl_certificate_key cert/2862014_www.jiguangchao.com.key;   #将domain name.key替换成您证书的密钥文件名。
ssl_session_timeout 5m;
ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:xxxxx:xxxx:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_prefer_server_ciphers on;
    location / {
        proxy_pass http://localhost:7001;
        #配置下面的两个指令，第三方登陆才不会报错
        proxy_set_header   x-forwarded-host  www.jiguangchao.com;
        proxy_set_header   x-forwarded-proto $scheme;
    }
	
	location ~ ^/favicon\.ico$ {
        root    /srv/test/images;
    }
}
```

[egg]: https://eggjs.org

