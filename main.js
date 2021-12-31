const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./tempatdata/welcome.json'))
number = '6283146208804@s.whatsapp.net'
require('./herman.js')
nocache('./herman.js', module => console.log(`${module} telah di update!`))

const starts = async (simple = new WAConnection()) => {
    simple.logger.level = 'warn'
    simple.version = [2, 2143, 3]
 simple.browserDescription = [ 'Herman Chanel', 'Browser', '3.0' ]
console.log(color('?Allo Ges'))
console.log(color('TNGKYIU TOO'))
console.log(color(' >>>>>>>>>>>>>>>>>>>?|||||||||||||'))
console.log(color('? Allah Swt                '))
console.log(color('? Yeni                '))
console.log(color('? Kahfz                '))
console.log(color('? Herman (Gue)                      '))
console.log(color('  >>>>>>>>>>>>>>>??????>>||||||||||||'))
    console.log(banner)
    simple.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan Scan Kode Qr Nya...!'))
    })
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await simple.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    simple.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }
 
    fs.existsSync('./session.json') && simple.loadAuthInfo('./session.json')
    simple.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    simple.on('open', () => {
        success('2', 'Done Udah Nyambung  Subscribe Herman Chanel' )
    })
    await simple.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(simple.base64EncodedAuthInfo(), null, '\t'))

    simple.on('chat-update', async (message) => {
        require('./herman.js')(simple, message, _welkom)
    })
simple.on('group-participants-update', async (anu) => {
try {
const isWelkom = _welkom.includes(anu.jid)
var mdata = await simple.groupMetadata(anu.jid)
groupMet = await simple.groupMetadata(anu.jid)
groupMembers = groupMet.participants
groupAdmins = getGroupAdmins(groupMembers)
mem = anu.participants[0]
console.log(anu)
try {
pp_user = await simple.getProfilePicture(mem)
} catch (e) {
pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
}
try {
pp_grup = await simple.getProfilePicture(anu.jid)
} catch (e) {
pp_grup =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
if (anu.action == "add" && mem.includes(simple.user.jid)) {
simple.sendMessage(anu.jid, "_*Terima Kasih Sudah Invit Saya..*_")
}
      
if (anu.action == 'add') {
num = anu.participants[0]
let v = simple.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = v.vname || v.notify || num.split("@")[0]
try {
ppUr = await simple.getProfilePicture(num)
} catch {
ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
}
img = await getBuffer(ppUrl)
teks = `Hallo @${anu_user}\nSelamat Datang Di Group: ${mdata.subject}\n\n*INFO USER*\nメ _*NAMA : @${anu_user}*_\nメ _*NOMER : @${num.split('@')[0]}*_\nSemoga Betah*_`
sendButImage(anu.jid, teks, `© Hêrmåñ メ Bo†z ×͜×`, img,but = [{buttonId:`hallo`, 
buttonText:{displayText: 'WELCOME👋!'},type:1}], options = {contextInfo: {mentionedJid: [num, number]},thumbnail: Buffer.alloc(0)})
} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppUrl = await simple.getProfilePicture(num)
} catch {
ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
}
img = await getBuffer(ppUrl)
teks = `Bye 👋@${num.split('@')[0]}\nSelamat Tinggal Di Group:\n${mdata.subject}`
sendButImage(anu.jid, teks, `©Hêrmåñ メ Bo†z ×͜×`, img,but= [{buttonId: `byebye`, buttonText: {displayText: `See You Broo?👋!`}, type: 1}], options = {contextInfo: {mentionedJid: [num, number]}, thumbnail: Buffer.alloc(0)})
} if (anu.action == "promote") {
        const mdata = await simple.groupMetadata(anu.jid)
        anu_user = simple.contacts[mem]
        num = anu.participants[0]
        try {
          ppimg = await simple.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }
        let buff = await getBuffer(ppimg)
        teks = `@${num.split("@")[0]} Telah dipromote`
        simple.sendMessage(mdata.id, teks, MessageType.text)
      }

      if (anu.action == "demote") {
        anu_user = simple.contacts[mem]
        num = anu.participants[0]
        const mdata = await simple.groupMetadata(anu.jid)
        try {
          ppimg = await simple.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }

        let buff = await getBuffer(
          `https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        )
        teks = `@${num.split("@")[0]} Telah didemote`
        simple.sendMessage(mdata.id, teks, MessageType.text)
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Diawasi Oleh Lord Herman Chanel')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
