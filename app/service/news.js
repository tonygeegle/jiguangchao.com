const Service = require('egg').Service;
// 这个service不用了。直接通过定时任务schedule代替了
class NewsService extends Service {
    constructor(ctx) {
        super(ctx);
        this.data = [];
    }
    async getList() {
        // read config
        // const { serverUrl, pageSize } = this.config.news;
        if (this.data.length) {
            return this.date;
        }
        console.log('重新获取新闻数据...');

        const serverUrl = 'https://unidemo.dcloud.net.cn/api/news';
        // use build-in http client to GET hacker-news api
        // const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
        //     data: {
        //         orderBy: '"$key"',
        //         startAt: `"${pageSize * (page - 1)}"`,
        //         endAt: `"${pageSize * page - 1}"`,
        //     },
        //     dataType: 'json',
        // });
        const { data } = await this.ctx.curl(serverUrl, {
                data: {},
                dataType: 'json',
            })
            // parallel GET detail
            // const newsList = await Promise.all(
            //     Object.keys(idList).map(key => {
            //         const url = `${serverUrl}/item/${idList[key]}.json`;
            //         return this.ctx.curl(url, { dataType: 'json' });
            //     })
            // );
            // return newsList.map(res => res.data);
        this.data = data;
        return data;
    }
}

module.exports = NewsService;