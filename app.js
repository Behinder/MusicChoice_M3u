const fs = require('fs');
const axios = require('axios');
const p = require('puppeteer');


(async () => {
    var channel_links = [
    "#channel/228/couch-fest-2020",
    "#channel/602/hit-list",
    "#channel/605/hiphop-and-rb",
    "#channel/662/teen-beats",
    "#channel/603/todays-country",
    "#channel/633/pop-hits",
    "#channel/651/pop-country",
    "#channel/645/90s",
    "#channel/611/rb-soul",
    "#channel/608/light-classical",
    "#channel/653/rock",
    "#channel/607/smooth-jazz",
    "#channel/603/todays-country",
    "#channel/646/country-hits",
    "#channel/651/pop-country",
    "#channel/629/classic-country",
    "#channel/1237/country-songwriters",
    "#channel/773/honky-tonk",
    "#channel/650/americana",
    "#channel/656/bluegrass",
    "#channel/682/folk",
    "#channel/648/pop-latino",
    "#channel/639/musica-urbana",
    "#channel/627/tropicales",
    "#channel/635/romances",
    "#channel/628/mexicana",
    "#channel/1222/latin-trap-hits",
    "#channel/681/latin-jazz",
    "#channel/679/rock-latino",
    "#channel/615/alternative",
    "#channel/623/adult-alternative",
    "#channel/634/classic-alternative",
    "#channel/610/indie",
    "#channel/659/coffee-shop-cuts",
    "#channel/713/new-wave",
    "#channel/625/gospel",
    "#channel/789/gospel-hallelujah",
    "#channel/617/contemporary-christian",
    "#channel/687/classic-christmas",
    "#channel/636/sounds-of-the-seasons",
    "#channel/619/singers-swing",
    "#channel/704/big-band",
    "#channel/655/blues",
    "#channel/780/movie-scores",
    "#channel/771/broadway",
    "#channel/1239/covers",
    "#channel/684/new-age",
    "#channel/692/nature-sounds",
    "#channel/667/lounge",
    "#channel/1228/sleep-noise",
    "#channel/631/contemporary-instrumentals",
    "#channel/784/workout",
    "#channel/781/retro-workout",
    "#channel/1224/mc-workout-cardio",
    "#channel/1225/mc-workout-yoga",
    "#channel/614/danceedm",
    "#channel/710/classic-dance",
    "#channel/637/party-favorites",
  ];

    const browser = await p.launch({headless:false});
    const page = await browser.newPage();
    // await page.goto("https://musicchoice.com",{
    //     waitUntil:"networkidle2",
    // });
var dtvlogin ="https://idp.dtvce.com/entitlementlogin/login.do?siteId=IDP_MusicChoice_C01&providerName=IDP_MusicChoice_C01&stateInfo=eJwFwdmiQkAAANAP8iDKqIf7IEuMoZHdmyxD9m2kr7%2FnCBqKzg9h7mD2t8Y0HUJYa%2Fwkgrv%2Bg68GabsikUt6bRyo3XyxTlQFtfnqy5Xb9Z%2BeBqdEJy2wUMFU0NVkw6XZaXe21rqr9sQ%2FT6OFwO0eR77jegeXwyzZaCtknlMSq51s7Ph6zoZm96UVSGPrQGwCrlUtpMREjTRWofysEh2QPPIfuwJ444o76YHn%2B17BefOGV2h8%2B%2FfB15Ij7XnkqtnIqUgVikCKlExYgmSZu7fzXSgzy3c3wdqyG7%2FwgugnuSDdbVforS%2FJEZvhns%2FF3JZQelPaKSnHyfrIVb4eJ94x4DMbryKpv1VKxEOah1Hszelh4gUzorm8B2mTyWbK2D5%2FFRiEF1i%2FZoaLct%2B78J3QIwZkIHyw2vlqBT9EVfMDYnypfUCqsuEV4ZPap6LX3OwZNj0PSFk1OVXMsuoMiHFtAUbWcg4EbhhxBZi8JjF%2BysNnsy9LTQsoIZics14bYlSrm4KH08ifynhvS2IPgEOFbYuxnHEbGLL3UOurpW0b4VY1WOQcx7F4KwoawmyeZ%2BdgKK9enzUeVJb8%2Ff0D%2Fa%2B2Vw%3D%3D";
// await page.setUserAgent('Mozilla/5.0 (iPad; CPU OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148');
await page.goto(dtvlogin);

await page.$eval(
    "#usernameInputId",
    (el) => (el.value = "YOUREMAIL)
  );
  await page.$eval('.inputFieldPass',el => el.value = "YOURPASSWORD");
  await page.click("#loginSubmitId");
//   await page.goto("https://webplayer.musicchoice.com/?_branch_match_id=752994999252840127&utm_source=Website&utm_campaign=Everyday&utm_medium=marketing#channel/637/party-favorites");
//   await page.waitForNavigation();
    
//     let streamlink = await page.evaluate( () => {
// //    let item = document.getElementsByTagName("video")[1].attributes[6].nodeValue;
// //     console.log(item);


//         });


// await page.waitForSelector();
//await browser.close();
})();
