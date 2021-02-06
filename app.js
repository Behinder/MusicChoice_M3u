const fs = require('fs');
const axios = require('axios');
const p = require('puppeteer');
const util = require('util');
const sleep = util.promisify(setTimeout);
require('dotenv').config();



function writeM3Uline(channelnumber,tvguideid,channelname,streamurl) {
str = "#EXTINF:"+channelnumber+" tvg-chno=\""+channelnumber+"\" grouptitle='Music Choice' tvg-id=\""+tvguideid+"\" tvc-guide-title=\""+tvguideid+"\" channel-id=\""+channelname+"\" "+channelname+"\n";
fs.appendFileSync("musicchoice.m3u",str);
fs.appendFileSync("musicchoice.m3u",streamurl+"\n"); 

}



(async () => {
fs.writeFileSync("musicchoice.m3u","#EXTM3U\n");

let dtvemail = process.env.dtvemail;
let dtvpass = process.env.dtvpass;

let baseplayerurl = "https://webplayer.musicchoice.com/?_branch_match_id=752994999252840127&utm_source=Website&utm_campaign=Everyday&utm_medium=marketing";
    var channel_info = [
  //   {"link":"#channel/228/couch-fest-2020",
  // "number":"228",
  // "name":"MC Couch Fest 2020 "
  // },
  //   {"link":"#channel/602/hit-list",
  // "number":"602",
  // "name":"MC Hit List"
  // },
    {"link":"#channel/605/hiphop-and-rb",
  "number":"605",
  "name":"MC Hiphop & R&B"
  },
  //   {"link":"#channel/662/teen-beats",
  // "number":"662",
  // "name":"MC Teen Beats"
  // },
  //   {"link":"#channel/603/todays-country",
  // "number":"603",
  // "name":"MC Todays Country"
  // },
  //   {"link":"#channel/633/pop-hits",
  // "number":"633",
  // "name":"MC Pop Hits"
  // },
  //   {"link":"#channel/651/pop-country",
  // "number":"651",
  // "name":"MC Pop Country"
  // },
  //   {"link":"#channel/645/90s",
  // "number":"645",
  // "name":"MC 90s"
  // },
  //   {"link":"#channel/611/rb-soul",
  // "number":"611",
  // "name":"MC R&B Soul"
  // },
  //   {"link":"#channel/608/light-classical",
  // "number":"608",
  // "name":"MC Light Classical"
  // },
  //   {"link":"#channel/653/rock",
  // "number":"653",
  // "name":"MC Rock"
  // },
  //   {"link":"#channel/607/smooth-jazz",
  // "number":"607",
  // "name":"MC Smooth Jazz"
  // },
  //   {"link":"#channel/603/todays-country",
  // "number":"603",
  // "name":"MC Today's Country"
  // },
  //   {"link":"#channel/646/country-hits",
  // "number":"646",
  // "name":"MC Country Hits"
  // },
  //   {"link":"#channel/651/pop-country",
  // "number":"651",
  // "name":"MC Pop Country"
  // },
  //   {"link":"#channel/629/classic-country",
  // "number":"629",
  // "name":"MC Classic Country"
  // },
  //   {"link":"#channel/1237/country-songwriters",
  // "number":"1237",
  // "name":"MC Country Songwriters"
  // },
  //   {"link":"#channel/773/honky-tonk",
  // "number":"773",
  // "name":"MC Honky Tonk"
  // },
  //   {"link":"#channel/650/americana",
  // "number":"650",
  // "name":"MC Americana"
  // },
  //   {"link":"#channel/656/bluegrass",
  // "number":"656",
  // "name":"MC Bluegrass"
  // },
  //   {"link":"#channel/682/folk",
  // "number":"682",
  // "name":"MC Folk"
  // },
  //   {"link":"#channel/648/pop-latino",
  // "number":"648",
  // "name":"MC Pop Latino"
  // },
  //   {"link":"#channel/639/musica-urbana",
  // "number":"639",
  // "name":"MC Musica Urbana"
  // },
  //   {"link":"#channel/627/tropicales",
  // "number":"627",
  // "name":"MC Tropicales"
  // },
  //   {"link":"#channel/635/romances",
  // "number":"635",
  // "name":"MC Romances"
  // },
  //   {"link":"#channel/628/mexicana",
  // "number":"628",
  // "name":"MC Mexicana"
  // },
  //   {"link":"#channel/1222/latin-trap-hits",
  // "number":"1222",
  // "name":"MC Latin Trap Hits"
  // },
  //   {"link":"#channel/681/latin-jazz",
  // "number":"681",
  // "name":"MC Latin Jazz"
  // },
  //   {"link":"#channel/679/rock-latino",
  // "number":"679",
  // "name":"MC Rock Latino"
  // },
  //   {"link":"#channel/615/alternative",
  // "number":"615",
  // "name":"MC Alternative"
  // },
  //   {"link":"#channel/623/adult-alternative",
  // "number":"623",
  // "name":"MC Adult alternative"
  // },
  //   {"link":"#channel/634/classic-alternative",
  // "number":"634",
  // "name":"MC Classic Alternative"
  // },
  //   {"link":"#channel/610/indie",
  // "number":"610",
  // "name":"MC Indie"
  // },
  //   {"link":"#channel/659/coffee-shop-cuts",
  // "number":"659",
  // "name":"MC Coffee Shop Cuts"
  // },
  //    {"link":"#channel/713/new-wave",
  //   "number":"713",
  //   "name":"MC New Wave"
  //   },
  //   {"link":"#channel/625/gospel",
  // "number":"625",
  // "name":"MC Gospel"
  // },
  //   {"link":"#channel/789/gospel-hallelujah",
  // "number":"789",
  // "name":"MC Gospel Hallelujah"
  // },
  //   {"link":"#channel/617/contemporary-christian",
  // "number":"617",
  // "name":"MC Contemporary Christian"
  // },
  //   {"link":"#channel/687/classic-christmas",
  // "number":"687",
  // "name":"MC Classic Christmas"
  // },
  //   {"link":"#channel/636/sounds-of-the-seasons",
  // "number":"636",
  // "name":"MC Sounds of the Seasons"
  // },
  //   {"link":"#channel/619/singers-swing",
  // "number":"619",
  // "name":"MC Singers Swing"
  // },
  //   {"link":"#channel/704/big-band",
  // "number":"704",
  // "name":"MC Big Band"
  // },
  //   {"link":"#channel/655/blues",
  // "number":"655",
  // "name":"MC Blues"
  // },
  //   {"link":"#channel/780/movie-scores",
  // "number":"780",
  // "name":"MC Movie Scores"
  // },
  //   {"link":"#channel/771/broadway",
  // "number":"771",
  // "name":"MC Broadway"
  // },
  //   {"link":"#channel/1239/covers",
  // "number":"1239",
  // "name":"MC Covers"
  // },
  //   {"link":"#channel/684/new-age",
  // "number":"684",
  // "name":"MC New Age"
  // },
  //   {"link":"#channel/692/nature-sounds",
  // "number":"692",
  // "name":"MC Nature Sounds"
  // },
  //   {"link":"#channel/667/lounge",
  // "number":"667",
  // "name":"MC Lounge"
  // },
  //   {"link":"#channel/1228/sleep-noise",
  // "number":"1228",
  // "name":"MC Sleep Noise"
  // },
  //   {"link":"#channel/631/contemporary-instrumentals",
  // "number":"631",
  // "name":"MC Contemporary Instrumentals"
  // },
  //   {"link":"#channel/784/workout",
  // "number":"784",
  // "name":"MC Workout"
  // },
  //   {"link":"#channel/781/retro-workout",
  // "number":"781",
  // "name":"MC Retro Workout"
  // },
  //   {"link":"#channel/1224/mc-workout-cardio",
  // "number":"1224",
  // "name":"MC Workout Cardio"
  // },
  //   {"link":"#channel/1225/mc-workout-yoga",
  // "number":"1225",
  // "name":"MC Workout Yoga"
  // },
  //   {"link":"#channel/614/danceedm",
  // "number":"614",
  // "name":"MC Dance EDM"
  // },
  //   {"link":"#channel/710/classic-dance",
  // "number":"710",
  // "name":"MC Classic Dance"
  // },
  //   {"link":"#channel/637/party-favorites",
  // "number":"637",
  // "name":"MC Party Favorites"
  // },
    {"link":"#channel/644/80s",
  "number":"644",
  "name":"MC 80s"
  },
    {"link":"#channel/642/70s",
  "number":"642",
  "name":"MC 70s"
  }
  ];

    const browser = await p.launch({headless:false,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
    const page = await browser.newPage();
    // await page.goto("https://musicchoice.com",{
    //     waitUntil:"networkidle2",
    // });
var dtvlogin ="https://idp.dtvce.com/entitlementlogin/login.do?siteId=IDP_MusicChoice_C01&providerName=IDP_MusicChoice_C01&stateInfo=eJwFwdmiQkAAANAP8iDKqIf7IEuMoZHdmyxD9m2kr7%2FnCBqKzg9h7mD2t8Y0HUJYa%2Fwkgrv%2Bg68GabsikUt6bRyo3XyxTlQFtfnqy5Xb9Z%2BeBqdEJy2wUMFU0NVkw6XZaXe21rqr9sQ%2FT6OFwO0eR77jegeXwyzZaCtknlMSq51s7Ph6zoZm96UVSGPrQGwCrlUtpMREjTRWofysEh2QPPIfuwJ444o76YHn%2B17BefOGV2h8%2B%2FfB15Ij7XnkqtnIqUgVikCKlExYgmSZu7fzXSgzy3c3wdqyG7%2FwgugnuSDdbVforS%2FJEZvhns%2FF3JZQelPaKSnHyfrIVb4eJ94x4DMbryKpv1VKxEOah1Hszelh4gUzorm8B2mTyWbK2D5%2FFRiEF1i%2FZoaLct%2B78J3QIwZkIHyw2vlqBT9EVfMDYnypfUCqsuEV4ZPap6LX3OwZNj0PSFk1OVXMsuoMiHFtAUbWcg4EbhhxBZi8JjF%2BysNnsy9LTQsoIZics14bYlSrm4KH08ifynhvS2IPgEOFbYuxnHEbGLL3UOurpW0b4VY1WOQcx7F4KwoawmyeZ%2BdgKK9enzUeVJb8%2Ff0D%2Fa%2B2Vw%3D%3D";
// await page.setUserAgent('Mozilla/5.0 (iPad; CPU OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148');
await page.goto(dtvlogin);



await page.$eval(
    "#usernameInputId",
    (el,dtvemail) => {(el.value = dtvemail)},dtvemail);

  await page.$eval('.inputFieldPass',(el,dtvpass) => {el.value =dtvpass},dtvpass);
  await page.click("#loginSubmitId");
  await page.waitForNavigation();
  



let streamurl = "";

  

console.log("Getting channel links\n");
  await page.setRequestInterception(true);
  page.on('request', async interceptedRequest => {
    if (interceptedRequest.url().includes("m3u8")) {
        console.log("request found");
         fs.writeFileSync("request.txt",interceptedRequest.url());
         streamurl = interceptedRequest.url();
         console.log("Request intercepted="+streamurl);
       interceptedRequest.abort();
    }
    else
      interceptedRequest.continue();
    });
    
  for (const ch of channel_info) {
   const l = ch.link;
   const n = ch.name;
   const number = ch.number;
   console.log("Checking channel "+number);
   console.log("Trying url "+baseplayerurl+l);  
  //  await page.waitForNavigation();
  // intercepting requests in a loop
  
  try {
  

    await page.goto(baseplayerurl+l,{waitUntil:"networkidle2"});
    await sleep(10000).then(()=>{
     console.log("Writing to M3U file"); 
    });
    writeM3Uline(number,n,n,streamurl);
    
  } catch (error) {
    console.log(error);
  }



  }

await browser.close();
})();
