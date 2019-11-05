const moment = require('moment');
moment.locale('zh-cn');
const MarkdownIt = require('markdown-it');
// var hljs = require('highlight.js'); // https://highlightjs.org/
// Actual default values
// var md = require('markdown-it')({
//     highlight: function(str, lang) {
//         if (lang && hljs.getLanguage(lang)) {
//             try {
//                 return hljs.highlight(lang, str).value;
//             } catch (__) {}
//         }

//         return ''; // use external default escaping
//     }
// });
md = new MarkdownIt();

module.exports = {
    // UTC to realtime

    relativeTime: time => moment(new Date(time * 1000)).fromNow(),
    simpleTime: date => moment(date).format('YYYY-MM-DD'),
    articleTime: date => moment(date).fromNow(),
    // Mark To Html
    MarkToHtml: raw => md.render(raw)
};