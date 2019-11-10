# jiguangchao.com



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

