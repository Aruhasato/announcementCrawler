const puppeteer = require("puppeteer");
const fetch = require("node-fetch");
const dotenv = require("dotenv")

dotenv.config()

let temp = ""
const crawlerFn = async () => {
    //创建一个Browser（浏览器）实例
    const browser = await puppeteer.launch({
        //设置有头模式（默认为true，无头模式）
        headless: true
    });
    //在浏览器中创建一个新的页面
    const page = await browser.newPage();
    //打开指定页面
    await page.goto("https://www.binance.com/zh-CN/support/announcement/c-48?navId=48")
    await page.waitForSelector(".css-k5e9j4");
    let data = []
    let elementsHandle = await page.$$(".css-k5e9j4 > a");
    for (let i=0; i<elementsHandle.length; i++) {
        const url = await page.evaluate(anchor => anchor.getAttribute('href'), elementsHandle[i]);
        const title = await page.evaluate(anchor => anchor.firstChild.innerText, elementsHandle[i]);
        // let url = elements[i].firstChild.getAttribute('href');
        //将获取到的标题和链接地址添加到数组中
        data.push({
            title,
            url: `https://www.binance.com${url}`
        });
    }
    const { title, url } = data[0]
    if (temp !== title) {
        temp = title
        fetch(`https://xizhi.qqoq.net/${process.env.TOKEN}?title=${title}&content=${url}`)
    }
    // 关闭浏览器实例
    await browser.close();
}
//使用async/await处理异步
setInterval(crawlerFn, 30000)
