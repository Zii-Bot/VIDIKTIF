// S C R I P T  O R I  B Y  Bochilgaming And KANNACHAN 🔭
// Ditulis Ulang Oleh WH MODS DEV
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • FahriAdison
// • The.Sad.Boy01
// • Rlxfly
// • Rasel comel
// • ImYanXiao
// • WH MODS DEV
// • Xtreshe
// • Dll

//[!] Jangan Lupa Ganti Ownernya

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v

global.sig = 'https://instagram.com/addfauzii' // ig
global.sgh = 'https://github.com/VIDIKTIF/' // github
global.sgc = 'https://chat.whatsapp.com/-' // group whatsapp
global.sdc = 'https://www.discord.com'//discord
global.snh = 'https://www.youtube.com/channel/-' // my youtube channel
global.sfb = 'https://www.facebook.com/' // facebook
global.syt = 'https://www.youtube.com/' // my youtube channel "kalau ada yt ke 2 tarok link nya disini"

/*============== PAYMENT ==============*/
global.pdana = '085320499721' //dana
global.povo = '085320499721' //ovo
global.pgopay = '085320499721' //gopay
global.plinkaja = '085320499721' //link aja
global.ppulsa = '085320499721' //telkomsel
global.ppulsa2 = '08XXXXXXXXXX' // kalau ada kartu lain isi aja
global.psaweria = 'https://saweria.com/mrw4h1d'

/*============== NOMOR ==============*/
global.nomorbot = '62XXXXXXXXXXX'
global.nomorown = '6285320499721'
global.namebot = 'VIDIKTIF-BOT'
global.nameown = 'VIDIKTIF-BOT'

/*============== Github Thanks To ==============*/
global.namagithub = 'VIDIKTIF' // nama github lu
global.linkgithub = sgh // EDIT LINK GITHUB DI global.sgh

// klau kgk ada github kasih tanda '-' aja biar kgk error

/*============== APIKEY SIMPEL ==============*/
global.zenzkey = 'b8040941f7'
global.lolkey = 'e54205a4ca2caa368cc067bb' // PUNYA WAHID  8e66d0934cf741bfd2182c16
/*OpenAi*/
global.openaikey = "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"

/*============== STAFF ==============*/
global.owner = [
  ['6282120499721', 'ADMIN BOT', true],
  ['6281220406207', 'ADMIN', true],
  ['6289692373366', 'FOUNDER', true],
  ['-', 'ISI KALAU ADA', true],
  ['-', 'ISI KALAU ADA', true]
    //Ganti jd nomormu sama Namamu
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: "https://api.neoxr.my.id",
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  violetics : 'https://violetics.pw',
  bg: "http://bochil.ddns.net",
  dzx: "https://api.dhamzxploit.my.id",
  fdci: "https://api.fdci.se",
  xcdr: "https://wudysoft.up.railway.app",
  zeks: "https://api.zeks.xyz",
  zenz: "https://api.zahwazein.xyz",
  btchx: "https://api.botcahx.biz.id",
  males : 'https://malesin.xyz'


  //nrtm: 'https://nurutomo.herokuapp.com',
  //rey: 'https://server-api-rey.herokuapp.com',
  //zahir: 'https://zahirr-web.herokuapp.com',
  //ana: 'https://anabotofc.herokuapp.com/',
  //botstyle: 'https://botstyle-api.herokuapp.com',
  //adiisus: 'https://adiixyzapi.herokuapp.com',
  //kanx: 'https://kannxapi.herokuapp.com/', 
  //ziy : 'https://ziy.herokuapp.com',
  
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  //'https://api.xteam.xyz': 'ebb6251cc00f9c63',
  'https://api.lolhuman.xyz': 'e54205a4ca2caa368cc067bb',// 8e66d0934cf741bfd2182c16
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik', //manHkmst
  'https://hardianto.xyz': 'hardianto',
  "https://api.neoxr.my.id": "5VC9rvNx",
  "https://api.xteam.xyz": "HIRO",
  "https://api.zeks.xyz": "apivinz",
  "https://wudysoft.up.railway.app": "Lann",
  "https://api.zahwazein.xyz": "LuOlangNgentot",
  "https://api.botcahx.biz.id": "Admin",
  'https://violetics.pw': 'beta'


  //'https://anabotofc.herokuapp.com/': 'AnaBot',
  //'https://zahirr-web.herokuapp.com': 'zahirgans',
  //'https://neoxr-api.herokuapp.com': 'yntkts',
  //'https://server-api-rey.herokuapp.com': 'apirey',
  //'https://botstyle-api.herokuapp.com': 'Apikeymu',
  //'https://ziy.herokuapp.com' : 'xZiyy'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = '                「 VIDIKTIF-BOT 」' //Main Watermark
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘VIDIKTIF-BOT ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
global.wm3 = "⫹⫺ VIDIKTIF-BOT"
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ TIME: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.titlebot = `⫹⫺ WhatsApp Bot | By VIDIKTIF-BOT`
global.packname = '☂︎ ᴄʀᴇᴀᴛᴇᴅ ʙʏ'
global.author = "VIDIKTIF DEV 乂 VIDIKTIF BOT"

/*Fake*/
global.fsizedoc = SizeDoc()
global.fpagedoc = PageDoc()
global.thumbdoc = ImgEstetik()
/*=========== FAKE SIZE ===========*/
//global.fsizedoc = '99999999999999' // default 10TB
//global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = pickRandom(["┅═┅═❏ *DASHBOARD* ❏═┅═┅", "☰ *D A S B O A R D* ☰"])
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = pickRandom(["◈", "➭", "ଓ", "⟆•", "⳻⳻", "•", "↬", "◈▻", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "⛥", "✗", "⚜", "⚚", "♪"]) //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = pickRandom(["Ⓟ", "🅟"]) //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = pickRandom(["⛶", "❏", "⫹⫺", "☰", "⎔", "✦", "⭔", "⬟", "⛊", "⚝"])    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = 'VIDIKTIF-BOT'
global.stickauth = `By ©VIDIKTIF-BOT`

global.multiplier = 69 // The higher, The harder levelup

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

//------ FUNCTION
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function SizeDoc() {
  return Math.pow(10, 15)
}
function PageDoc() {
  return Math.pow(10, 10)
}

/* Apa Kabar */
function Sapa() {
  let Apa = pickRandom(["Apa kabar ", "Halo ", "Hai "])
  return Apa
}

/* Selamat Pagi */
function Pagi() {
  let waktunya = moment.tz("Asia/Jakarta").format("HH")
  let ucapin = "Selamat malam 🌙"
  if (waktunya >= 1) {
      ucapin = "Selamat Pagi 🗿"
  }
  if (waktunya >= 4) {
      ucapin = "Selamat pagi 🌄"
  }
  if (waktunya > 10) {
      ucapin = "Selamat siang ☀️"
  }
  if (waktunya >= 15) {
      ucapin = "Selamat sore 🌅"
  }
  if (waktunya >= 18) {
      ucapin = "Selamat malam 🌙"
  }
  if (waktunya >= 24) {
      ucapin = "Selamat Begadang 🗿"
  }
  return ucapin
}
