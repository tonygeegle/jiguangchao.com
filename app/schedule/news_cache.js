module.exports = {
    schedule: {
        interval: '15m', // 1 分钟间隔
        type: 'all', // 指定所有的 worker 都需要执行
    },
    async task(ctx) {
        console.log('重新获取新闻数据中...');
        const serverUrl = 'https://unidemo.dcloud.net.cn/api/news';
        const res = await ctx.curl(serverUrl, {
            timeout: 20000,
            data: {},
            dataType: 'json',
        })
        res.data && console.log(`共获取到${res.data.length}条数据！`);
        ctx.app.cache = res.data;
    },
};