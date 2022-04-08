
const puppeteer = require('puppeteer');
const email = ''
const password = ''
const username = ''

let browser = null;
let page = null;

const userList = [
  '@VVecchionacce ','@jennyhincapie5 ', '@HolgharS ', '@Camilosg300 ', '@pabloyarce7 ', '@pabloyarce7 ', '@AndariasNFT ', '@Valenmprado ', '@JhonatanForeroo ',
  '@felipeignacio6e ', '@frankdr1993 ', '@JulianEscobar ', '@Jork4 ', '@IslandDollDR ', '@_yamamah_ ', '@abdullaalakbary ', '@Hamtar093 ', '@krist3n7 ',
  '@JessaMaeEduart1 ', '@kaoiNFT ', '@ZxZoe ', '@cryptoNFTstuffs ', '@MzaithChamp ', '@ZiynettAkar ', '@fahirsenerr ', '@BumShakalakaRS ', '@eylulkizilkaya9 ',
  '@Kaunght202246 ', '@jbsgsmile ', '@NeslihanKiz ', '@sairyazarlar ', '@PhantomVN3 ', '@KerimeUcarr ', '@sahudin_k ', '@0penseaa ', '@CapyBaraswrld ',
  '@SupliAbi ', '@ShuehHan ', '@harlemIsdaNft ', '@ozguradalim ', '@SosyalKizAsli ', '@GregorZagorc ', '@MeloLai1015 ', '@Melonghost25 ', '@melonmuskust ',
  '@MelonWor1d ', '@Melou21E2 ', '@melpinnn ', '@melt_welly ', '@MeltomSharday ', '@MeltyzOff ', '@melva_sandoval ', '@Melvin10662718 ', '@melvincapital__ ', '@MelvinGsy ',
  '@melvinnones ', '@melwritesmiami ', '@mem01010101 ']

const getRandomUser = (userList, max) => {
  const result = [];
  let count = userList.length;
  for (var i = 0; i < max; i++) {
      var index = ~~(Math.random() * count) + i;
      if(result.includes(userList[index])){
          continue;
      }
      result[i] = userList[index];
      userList[index] = userList[i];
      count--;
  }
  return result
}

const reply = '#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x.r-1potc6q > div > div > div > div.css-1dbjc4n.r-iphfwy > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1h8ys4a.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div.css-1dbjc4n.r-184en5c > div > div > div > div > div > div > div > div > div > label > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2 > div > div > div > div > div.DraftEditor-editorContainer > div'
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const prevfn = async () => {
  browser = await puppeteer.launch({ headless: true, slowMo: 100 });

  // page = await browser.newPage();
  page = (await browser.pages())[0] //不会新建tab页
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36');


  await page.setViewport({
      width: 1280,
      height: 800,
      isMobile: false
  });

  await page.goto('https://twitter.com/login', {waitUntil: 'networkidle2'});
  // await page.goto('https://twitter.com/search?q=wl%20follow&src=typed_query&f=live', {waitUntil: 'networkidle2'});
  // LOGIN
  try {
    //账号
    await page.waitForSelector('input[autocomplete="username"]');
    await page.type('input[autocomplete="username"]',email,{delay: 100});
    await page.keyboard.press('Enter');
    // await page.click(`${prefix}.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div:nth-child(6)`)
    //异常登陆
    await page.waitForSelector('input[data-testid="ocfEnterTextTextInput"]');
    await page.screenshot({ path: "login.png" });
    await page.type('input[data-testid="ocfEnterTextTextInput"]', username, { delay: 100 });
    await page.keyboard.press('Enter');
    // await page.click(`${prefix}.r-hhvx09.r-1dye5f7.r-ttdzmv > div > div > div`)
    // await page.waitForTimeout(5000)
    // await page.screenshot({ path: "screenshot1.png" });
    //密码
    await page.waitForSelector('input[autocomplete="current-password"]');
    await page.type('input[autocomplete="current-password"]',password,{delay: 100});
    await page.keyboard.press('Enter');
    // await page.click(`${prefix}.r-hhvx09.r-1dye5f7.r-ttdzmv > div > div.css-18t94o4.css-1dbjc4n.r-sdzlij.r-1phboty.r-rs99b7.r-ywje51.r-usiww2.r-peo1c.r-1ps3wis.r-1ny4l3l.r-1guathk.r-o7ynqc.r-6416eg.r-lrvibr.r-13qz1uu`);
  } catch (e) {
    //密码
    await page.screenshot({ path: "screenshot.png" });
    await page.waitForSelector('input[autocomplete="current-password"]');
    await page.type('input[autocomplete="current-password"]',password,{delay: 100});
    await page.keyboard.press('Enter');
    console.log(e)
  }

  // // SEARCH TERM
  await page.screenshot({ path: "sear.png" });
  await page.waitForSelector('input[data-testid="SearchBox_Search_Input"]');
  await page.type('input[data-testid="SearchBox_Search_Input"]', 'wl follow', {delay:100});
  await page.keyboard.press('Enter');
  //点击最新
  await page.click('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-1e5uvyk.r-aqfbo4.r-5zmot.r-gtdqiz.r-1gn8etr.r-1g40b8q > div:nth-child(2) > nav > div > div.css-1dbjc4n.r-1adg3ll.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1udh08x > div > div:nth-child(2) > a')
}
const main = async () => {

    // await page.goto('https://twitter.com/search?q=wl%20follow&src=typed_query&f=live', {waitUntil: 'networkidle2'});
    //SCROLL DOWN + GET AUTHORS
    let authorsSet = new Set()
    try {
        // let previousHeight;
        await page.screenshot({ path: "main.png" });
        await page.waitForSelector('div[class="css-901oao r-1nao33i r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0"]');
        // for (let i = 0; i < 1; i++) {
            //const elementHandles = await page.$$('div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > a');
            const contentHandles = await page.$$('div[class="css-901oao r-1nao33i r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0"]')
            const utilsBarHandles = await page.$$('div[class="css-1dbjc4n r-1ta3fxp r-18u37iz r-1wtj0ep r-1s2bzr4 r-1mdbhws"]')
            console.log(211, contentHandles.length, utilsBarHandles.length)
            for(let i = 0; i < utilsBarHandles.length; i++) {
              for (let j = 0; j < 3; j++) {
                await page.waitForTimeout(1000);
                await page.evaluate((anchor, j) => {
                  anchor.children[j].firstChild.click()
                }, utilsBarHandles[i], j)
                if(j === 0) {
                  try {
                    const userRandom = getRandomUser(userList, 3)
                    await page.waitForSelector(reply);
                    await page.type(reply, userRandom.toString(), {delay: 100});
                    await page.waitForTimeout(1000);
                    await page.waitForSelector('#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x.r-1potc6q > div > div > div > div.css-1dbjc4n.r-iphfwy > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1h8ys4a.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div:nth-child(3) > div > div > div:nth-child(2) > div.css-18t94o4.css-1dbjc4n.r-l5o3uw.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-19u6a5r.r-2yi16.r-1qi8awa.r-1ny4l3l.r-ymttw5.r-o7ynqc.r-6416eg.r-lrvibr');
                    await page.waitForTimeout(1000);
                    await page.click('#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x.r-1potc6q > div > div > div > div.css-1dbjc4n.r-iphfwy > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1h8ys4a.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div:nth-child(3) > div > div > div:nth-child(2) > div.css-18t94o4.css-1dbjc4n.r-l5o3uw.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-19u6a5r.r-2yi16.r-1qi8awa.r-1ny4l3l.r-ymttw5.r-o7ynqc.r-6416eg.r-lrvibr')
                  } catch (e) {
                    console.log(e)
                  }
                }
                if(j === 1 ) {
                  try {
                    await page.waitForSelector('div[data-testid="retweetConfirm"]')
                    await page.click('div[data-testid="retweetConfirm"]')
                  } catch (e) {
                    console.log(e)
                  }
                }
                await sleep(2000);
              }
            }
            // const propertyJsHandles = await Promise.all(
            //   elementHandles.map(handle => handle.getProperty('href'))
            // );
            const contentList = await Promise.all(
              contentHandles.map(handle => page.evaluate(anchor => anchor.innerText, handle))
            )
            const contentListUrls = contentList.reduce((acc,curr) => {
              const list = curr.match(/@(\S*)+\n/g) || []
              const arr = list.map(item => `https://twitter.com/${item.replace('@', '').replace('\n', '')}`)
              return [
                ...acc,
                ...arr
              ]
            }, []);
            console.log(contentListUrls)
            contentListUrls.forEach(item => authorsSet.add(item))
            // await page.waitForTimeout(2000);
            // previousHeight = await page.evaluate('document.body.scrollHeight');
            // await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
            // await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
            // await page.waitForTimeout(2000);
        // }
    } catch(e) {
      console.log(e);
    }

    console.log("-----")
    console.log(authorsSet);


    //VISIT ALL AUTHORS AND CLICK FOLLOW BUTTON
    const urls = Array.from(authorsSet)
    for (let i = 0; i < urls.length; i++) {
      try {
        const url = urls[i];
        console.log(url);
        await page.goto(`${url}`);

        await page.waitForTimeout(3000)
        await page.click('div[class="css-18t94o4 css-1dbjc4n r-42olwf r-sdzlij r-1phboty r-rs99b7 r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]')
        await page.waitForTimeout(3000)
        await page.goBack();
        await page.waitForTimeout(3000)
      }
      catch(error) {
        console.error(error);
        await page.goBack();
      }
    }
      const previousHeight = await page.evaluate('document.body.scrollHeight');
      await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
      await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
      await page.waitForTimeout(2000);
  }

  const run = async () => {
    await prevfn()
    await main()
  }
run()
setInterval(main, 60000 * 5)