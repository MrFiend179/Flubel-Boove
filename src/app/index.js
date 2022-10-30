const {ipcRenderer} = require('electron')
const ipc = ipcRenderer
const mc = require('mineflayer')
const antiafk = require('mineflayer-antiafk')
const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear } = require('mineflayer-pathfinder').goals
const autoeat = require('mineflayer-auto-eat')
const si = require('systeminformation')
//#2f3238 bg clr
console.log('ola')
closeBtn.addEventListener('click', ()=>{
    ipc.send('closeApp')
})

minimizeApp.addEventListener('click', ()=>{
    ipc.send('minimizeApp')
})
async function join() {

    document.getElementById('bos').style.backgroundColor = '#e05a00'
var namein = document.getElementById("userin").value;
var portin = document.getElementById("portin").value;
var verin = document.getElementById("verin").value;
var hostin = document.getElementById("hostin").value;
var passin = document.getElementById("passin").value;

var pingint = setInterval(()=>{
    si.inetLatency(hostin).then(data =>{
        document.getElementById('pingd').innerText = data
    })
},1000)

if(namein === ''){
    document.getElementById("errtxt").style.display = 'flex'
    document.getElementById('userin').style.border = '1px solid #FF5555'
}
if(namein != ''){
    document.getElementById("errtxt").style.display = 'none'
    document.getElementById('userin').style.border = '1px solid #202020'
    document.getElementById('icon').style.stroke = '#55FFFF'
    document.getElementById('status').innerText = 'Starting'
    document.getElementById('status').style.color = 'white'
}
if(hostin === ''){
    document.getElementById("errtxth").style.display = 'flex'
    document.getElementById('hostin').style.border = '1px solid #FF5555'
    document.getElementById('pingd').innerText = 'N/A'
    clearInterval(pingint)
}
if(hostin != ''){
    document.getElementById("errtxth").style.display = 'none'
    document.getElementById('hostin').style.border = '1px solid #202020'

}
if(portin === ''){
    document.getElementById("errtxtp").style.display = 'flex'
    document.getElementById('portin').style.border = '1px solid #FF5555'
}
if(portin != ''){
    document.getElementById('portin').style.border = '1px solid #202020'
    document.getElementById("errtxtp").style.display = 'none'
}

var bot = mc.createBot({
    username: namein,
    version: verin,
    port: portin,
    host: hostin,
    password: passin,
})
bot.loadPlugin(antiafk);
bot.loadPlugin(pathfinder);
//bot.loadPlugin(armorManager);
bot.loadPlugin(autoeat);
bot.on('login', ()=>{
    bot.setQuickBarSlot(0)
    document.getElementById('valw').style.backgroundColor = '#e05a00'
    document.getElementById('icon').style.stroke = '#55FF55'
    document.getElementById('status').innerText = 'Connected'
    document.getElementById('status').style.color = 'white'
    document.getElementById('btn1').style.borderBottom = '1px solid red'
    document.getElementById('btn1').style.height = '29px'
    document.getElementById('bos').style.backgroundColor = '#50C878'
    document.getElementById('indphy').style.backgroundColor = '#e05a00'
    document.getElementById('afkstat').style.backgroundColor = '#e05a00'
})
bot.on('spawn', ()=>{
    document.getElementById('valw').style.backgroundColor = '#e05a00'
    document.getElementById('bos').style.backgroundColor = '#50C878'
    document.getElementById('indphy').style.backgroundColor = '#e05a00'
    document.getElementById('afkstat').style.backgroundColor = '#e05a00'
    bot.setQuickBarSlot(0)
    const defaultMove = new Movements(bot)
})

msgsend.addEventListener('click', ()=>{
    var msg = document.getElementById("userInputmsg").value
    bot.chat(msg)
    var scrollchat = document.getElementById('mchat')
    scrollchat.scrollBy(0,100)
    var clrint = setInterval(()=>{
        document.getElementById("userInputmsg").value = ''
        clearInterval(clrint)
    },1000)
})
bot.on('chat', (username,message)=>{
    var bc = message
    var nc = username
    var node = document.createElement('span')
    var textnode = document.createTextNode(`${nc}: ${bc}`)
    node.appendChild(textnode)
    document.getElementById("mchat").appendChild(node)
    var scrollchat = document.getElementById('mchat')
    scrollchat.scrollBy(0,100)
})
bot.on('playerJoined', (player)=>{
    var pis = player
    var node = document.createElement('span')
    var textnode = document.createTextNode(pis.username)
    node.appendChild(textnode)
    document.getElementById("plist").appendChild(node)
})
bot.on('kicked', ()=>{
    document.getElementById("icon").style.stroke = '#AA0000'
    document.getElementById('status').innerText = 'Kicked'
    document.getElementById('status').style.color = 'white'
})
quit.addEventListener('click', ()=>{
    bot.quit()
    document.getElementById("status").innerText = ''
    document.getElementById('mchat').innerHTML = "";
    document.getElementById('plist').innerHTML = "";
    document.getElementById('icon').style.stroke = '#FF5555'
    document.getElementById('status').innerText = 'Disconnected'
    document.getElementById('status').style.color = 'white'
    document.getElementById('btn1').style.borderBottom = '0px'
    document.getElementById('btn1').style.height = '30px'
    document.getElementById('btn2').style.borderBottom = '0px'
    document.getElementById('btn2').style.height = '30px'
    document.getElementById('btn3').style.borderBottom = '0px'
    document.getElementById('btn3').style.height = '30px'
    document.getElementById('btn4').style.borderBottom = '0px'
    document.getElementById('btn4').style.height = '30px'
    document.getElementById('btn5').style.borderBottom = '0px'
    document.getElementById('btn5').style.height = '30px'
    document.getElementById('btn6').style.borderBottom = '0px'
    document.getElementById('btn6').style.height = '30px'
    document.getElementById('btn7').style.borderBottom = '0px'
    document.getElementById('btn7').style.height = '30px'
    document.getElementById('btn8').style.borderBottom = '0px'
    document.getElementById('btn8').style.height = '30px'
    document.getElementById('btn9').style.borderBottom = '0px'
    document.getElementById('btn9').style.height = '30px'
    document.getElementById('hnd').innerText = ''
    document.getElementById('fnd').innerText = ''
    document.getElementById('valw').style.backgroundColor = 'transparent'
    document.getElementById('bos').style.backgroundColor = '#e05a00'
    document.getElementById('afkstat').style.backgroundColor = ''
    document.getElementById('indphy').style.backgroundColor = ''
    document.getElementById('item36').innerText = ''
    document.getElementById('item37').innerText = ''
    document.getElementById('item38').innerText = ''
    document.getElementById('item39').innerText = ''
    document.getElementById('item40').innerText = ''
    document.getElementById('item41').innerText = ''
    document.getElementById('item42').innerText = ''
    document.getElementById('item43').innerText = ''
    document.getElementById('item44').innerText = ''
    clearInterval(invitmint)
    clearInterval(pingint)
    document.getElementById('pingd').innerText = 'N/A'
    clearInterval(invitmint1)
    clearInterval(invitmint2)
    clearInterval(invitmint3)
    clearInterval(invitmint4)
    clearInterval(invitmint5)
    clearInterval(invitmint6)
    clearInterval(invitmint7)
    clearInterval(invitmint8)
})
wincls.addEventListener('click', ()=>{
    bot.closeWindow(window)
    document.getElementById('valw').style.backgroundColor = '#e05a00'
})
bot.on('health', ()=>{
    document.getElementById('hnd').innerText = bot.health.toFixed(0)
    document.getElementById('fnd').innerText = bot.food
})
act.addEventListener('click', ()=>{
    bot.activateItem()
})
bot.on('windowOpen', ()=>{
    document.getElementById('valw').style.backgroundColor = '#50C878'
})
bot.on('windowClose', ()=>{
    document.getElementById('valw').style.backgroundColor = '#e05a00'
})
bot.on('death', ()=>{
    var node = document.createElement('span')
    var textnode = document.createTextNode('Bot died Respawning.....')
    node.appendChild(textnode)
    document.getElementById("mchat").appendChild(node)

    
    document.getElementById('item36').innerText = ''
    document.getElementById('item37').innerText = ''
    document.getElementById('item38').innerText = ''
    document.getElementById('item39').innerText = ''
    document.getElementById('item40').innerText = ''
    document.getElementById('item41').innerText = ''
    document.getElementById('item42').innerText = ''
    document.getElementById('item43').innerText = ''
    document.getElementById('item44').innerText = ''
})
var checkbox = document.getElementById('afkswt');
checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    bot.afk.start();
    document.getElementById('afkstat').style.backgroundColor = '#50C878'
  } else {
    bot.afk.stop();
    document.getElementById('afkstat').style.backgroundColor = '#e05a00'
  }
});
btn1.addEventListener('click', ()=>{
    bot.setQuickBarSlot(0)
    document.getElementById('btn1').style.borderBottom = '1px solid red'
    document.getElementById('btn1').style.height = '29px'
    document.getElementById('btn2').style.borderBottom = '0px'
    document.getElementById('btn2').style.height = '30px'
    document.getElementById('btn3').style.borderBottom = '0px'
    document.getElementById('btn3').style.height = '30px'
    document.getElementById('btn4').style.borderBottom = '0px'
    document.getElementById('btn4').style.height = '30px'
    document.getElementById('btn5').style.borderBottom = '0px'
    document.getElementById('btn5').style.height = '30px'
    document.getElementById('btn6').style.borderBottom = '0px'
    document.getElementById('btn6').style.height = '30px'
    document.getElementById('btn7').style.borderBottom = '0px'
    document.getElementById('btn7').style.height = '30px'
    document.getElementById('btn8').style.borderBottom = '0px'
    document.getElementById('btn8').style.height = '30px'
    document.getElementById('btn9').style.borderBottom = '0px'
    document.getElementById('btn9').style.height = '30px'
})
btn2.addEventListener('click', ()=>{
    bot.setQuickBarSlot(1)
    document.getElementById('btn2').style.borderBottom = '1px solid red'
    document.getElementById('btn2').style.height = '29px'
    document.getElementById('btn1').style.borderBottom = '0px'
    document.getElementById('btn1').style.height = '30px'
    document.getElementById('btn3').style.borderBottom = '0px'
    document.getElementById('btn3').style.height = '30px'
    document.getElementById('btn4').style.borderBottom = '0px'
    document.getElementById('btn4').style.height = '30px'
    document.getElementById('btn5').style.borderBottom = '0px'
    document.getElementById('btn5').style.height = '30px'
    document.getElementById('btn6').style.borderBottom = '0px'
    document.getElementById('btn6').style.height = '30px'
    document.getElementById('btn7').style.borderBottom = '0px'
    document.getElementById('btn7').style.height = '30px'
    document.getElementById('btn8').style.borderBottom = '0px'
    document.getElementById('btn8').style.height = '30px'
    document.getElementById('btn9').style.borderBottom = '0px'
    document.getElementById('btn9').style.height = '30px'
})
btn3.addEventListener('click', ()=>{
    bot.setQuickBarSlot(2)
    document.getElementById('btn3').style.borderBottom = '1px solid red'
    document.getElementById('btn3').style.height = '29px'
    document.getElementById('btn1').style.borderBottom = '0px'
    document.getElementById('btn1').style.height = '30px'
    document.getElementById('btn2').style.borderBottom = '0px'
    document.getElementById('btn2').style.height = '30px'
    document.getElementById('btn4').style.borderBottom = '0px'
    document.getElementById('btn4').style.height = '30px'
    document.getElementById('btn5').style.borderBottom = '0px'
    document.getElementById('btn5').style.height = '30px'
    document.getElementById('btn6').style.borderBottom = '0px'
    document.getElementById('btn6').style.height = '30px'
    document.getElementById('btn7').style.borderBottom = '0px'
    document.getElementById('btn7').style.height = '30px'
    document.getElementById('btn8').style.borderBottom = '0px'
    document.getElementById('btn8').style.height = '30px'
    document.getElementById('btn9').style.borderBottom = '0px'
    document.getElementById('btn9').style.height = '30px'
})
btn4.addEventListener('click', ()=>{
    bot.setQuickBarSlot(3)
    document.getElementById('btn4').style.borderBottom = '1px solid red'
    document.getElementById('btn4').style.height = '29px'
    document.getElementById('btn1').style.borderBottom = '0px'
    document.getElementById('btn1').style.height = '30px'
    document.getElementById('btn2').style.borderBottom = '0px'
    document.getElementById('btn2').style.height = '30px'
    document.getElementById('btn3').style.borderBottom = '0px'
    document.getElementById('btn3').style.height = '30px'
    document.getElementById('btn5').style.borderBottom = '0px'
    document.getElementById('btn5').style.height = '30px'
    document.getElementById('btn6').style.borderBottom = '0px'
    document.getElementById('btn6').style.height = '30px'
    document.getElementById('btn7').style.borderBottom = '0px'
    document.getElementById('btn7').style.height = '30px'
    document.getElementById('btn8').style.borderBottom = '0px'
    document.getElementById('btn8').style.height = '30px'
    document.getElementById('btn9').style.borderBottom = '0px'
    document.getElementById('btn9').style.height = '30px'
})
btn5.addEventListener('click', ()=>{
    bot.setQuickBarSlot(4)
    document.getElementById('btn5').style.borderBottom = '1px solid red'
    document.getElementById('btn5').style.height = '29px'
    document.getElementById('btn1').style.borderBottom = '0px'
    document.getElementById('btn1').style.height = '30px'
    document.getElementById('btn2').style.borderBottom = '0px'
    document.getElementById('btn2').style.height = '30px'
    document.getElementById('btn3').style.borderBottom = '0px'
    document.getElementById('btn3').style.height = '30px'
    document.getElementById('btn4').style.borderBottom = '0px'
    document.getElementById('btn4').style.height = '30px'
    document.getElementById('btn6').style.borderBottom = '0px'
    document.getElementById('btn6').style.height = '30px'
    document.getElementById('btn7').style.borderBottom = '0px'
    document.getElementById('btn7').style.height = '30px'
    document.getElementById('btn8').style.borderBottom = '0px'
    document.getElementById('btn8').style.height = '30px'
    document.getElementById('btn9').style.borderBottom = '0px'
    document.getElementById('btn9').style.height = '30px'
})
btn6.addEventListener('click', ()=>{
    bot.setQuickBarSlot(5)
    document.getElementById('btn6').style.borderBottom = '1px solid red'
    document.getElementById('btn6').style.height = '29px'
    document.getElementById('btn1').style.borderBottom = '0px'
    document.getElementById('btn1').style.height = '30px'
    document.getElementById('btn2').style.borderBottom = '0px'
    document.getElementById('btn2').style.height = '30px'
    document.getElementById('btn3').style.borderBottom = '0px'
    document.getElementById('btn3').style.height = '30px'
    document.getElementById('btn4').style.borderBottom = '0px'
    document.getElementById('btn4').style.height = '30px'
    document.getElementById('btn5').style.borderBottom = '0px'
    document.getElementById('btn5').style.height = '30px'
    document.getElementById('btn7').style.borderBottom = '0px'
    document.getElementById('btn7').style.height = '30px'
    document.getElementById('btn8').style.borderBottom = '0px'
    document.getElementById('btn8').style.height = '30px'
    document.getElementById('btn9').style.borderBottom = '0px'
    document.getElementById('btn9').style.height = '30px'
})
btn7.addEventListener('click', ()=>{
    bot.setQuickBarSlot(6)
    document.getElementById('btn7').style.borderBottom = '1px solid red'
    document.getElementById('btn7').style.height = '29px'
    document.getElementById('btn1').style.borderBottom = '0px'
    document.getElementById('btn1').style.height = '30px'
    document.getElementById('btn2').style.borderBottom = '0px'
    document.getElementById('btn2').style.height = '30px'
    document.getElementById('btn3').style.borderBottom = '0px'
    document.getElementById('btn3').style.height = '30px'
    document.getElementById('btn4').style.borderBottom = '0px'
    document.getElementById('btn4').style.height = '30px'
    document.getElementById('btn5').style.borderBottom = '0px'
    document.getElementById('btn5').style.height = '30px'
    document.getElementById('btn6').style.borderBottom = '0px'
    document.getElementById('btn6').style.height = '30px'
    document.getElementById('btn8').style.borderBottom = '0px'
    document.getElementById('btn8').style.height = '30px'
    document.getElementById('btn9').style.borderBottom = '0px'
    document.getElementById('btn9').style.height = '30px'
})
btn8.addEventListener('click', ()=>{
    bot.setQuickBarSlot(7)
    document.getElementById('btn8').style.borderBottom = '1px solid red'
    document.getElementById('btn8').style.height = '29px'
    document.getElementById('btn1').style.borderBottom = '0px'
    document.getElementById('btn1').style.height = '30px'
    document.getElementById('btn2').style.borderBottom = '0px'
    document.getElementById('btn2').style.height = '30px'
    document.getElementById('btn3').style.borderBottom = '0px'
    document.getElementById('btn3').style.height = '30px'
    document.getElementById('btn4').style.borderBottom = '0px'
    document.getElementById('btn4').style.height = '30px'
    document.getElementById('btn5').style.borderBottom = '0px'
    document.getElementById('btn5').style.height = '30px'
    document.getElementById('btn6').style.borderBottom = '0px'
    document.getElementById('btn6').style.height = '30px'
    document.getElementById('btn7').style.borderBottom = '0px'
    document.getElementById('btn7').style.height = '30px'
    document.getElementById('btn9').style.borderBottom = '0px'
    document.getElementById('btn9').style.height = '30px'
})
btn9.addEventListener('click', ()=>{
    bot.setQuickBarSlot(8)
    document.getElementById('btn9').style.borderBottom = '1px solid red'
    document.getElementById('btn9').style.height = '29px'
    document.getElementById('btn1').style.borderBottom = '0px'
    document.getElementById('btn1').style.height = '30px'
    document.getElementById('btn2').style.borderBottom = '0px'
    document.getElementById('btn2').style.height = '30px'
    document.getElementById('btn3').style.borderBottom = '0px'
    document.getElementById('btn3').style.height = '30px'
    document.getElementById('btn4').style.borderBottom = '0px'
    document.getElementById('btn4').style.height = '30px'
    document.getElementById('btn5').style.borderBottom = '0px'
    document.getElementById('btn5').style.height = '30px'
    document.getElementById('btn6').style.borderBottom = '0px'
    document.getElementById('btn6').style.height = '30px'
    document.getElementById('btn7').style.borderBottom = '0px'
    document.getElementById('btn7').style.height = '30px'
    document.getElementById('btn8').style.borderBottom = '0px'
    document.getElementById('btn8').style.height = '30px'
})

const wv = document.getElementById('winslt').value
lbtn.addEventListener('click', ()=>{
    bot.clickWindow(wv,0,0)
})
rbtn.addEventListener('click', ()=>{
    bot.clickWindow(wv,1,0)
})



actphybtn.addEventListener('click', ()=>{
    const defaultMove = new Movements(bot)
    const name = document.getElementById('pntp').value
    const target = bot.players[name].entity
    const p = target.position
    bot.pathfinder.setMovements(defaultMove)
    document.getElementById('indphy').style.backgroundColor = '#50C878'
    bot.pathfinder.setGoal(new GoalNear(p.x, p.y, p.z, 1))
})
bot.on('goal_reached', ()=>{
    document.getElementById('indphy').style.backgroundColor = '#e05a00'
})
bot.on('error', ()=>{
    console.log('err check ping')
})
var checkboxwlk = document.getElementById('wlkp');
checkboxwlk.addEventListener('change', function () {
  if (checkboxwlk.checked) {
    bot.setControlState('forward', true)
    bot.setControlState('sprint', true)
  } else {
    bot.setControlState('forward', false)
    bot.setControlState('sprint', false)
  }
});
let show = true
var checkboxbln = document.getElementById('w');
checkboxbln.addEventListener('change', function () {
    var stintl = setInterval(()=>{
        if (checkboxbln.checked) {
            show = !show
          bot.setSettings({
          skinParts: {
          showJacket: show,
          showHat: show,
          showRightPants: show,
          showLeftPants: show,
          showLeftSleeve: show,
          showRightSleeve: show
         }})
        } else {
            clearInterval(stintl)
        }
    },500)
});
var checkboxlllk = document.getElementById('pllk');
checkboxlllk.addEventListener('change', function () {
   var stintl = setInterval(()=>{
  if (checkboxlllk.checked) {
    const entity = bot.nearestEntity()
    bot.lookAt(entity.position.offset(0, 1.6, 0))
  }
  else {
    clearInterval(stintl)
  }
},30)
});

var checkboxarmr = document.getElementById('armr');
checkboxarmr.addEventListener('change', function () {
    var ints = setInterval(()=>{
  if (checkboxarmr.checked) {
    const helmet = bot.inventory.items().find(item => item.name.includes('helmet'))
    if(helmet) bot.equip(helmet, 'head')
  }if(checkboxarmr.checked) {
    const chestplate = bot.inventory.items().find(item => item.name.includes('chestplate'))
    if(chestplate) bot.equip(chestplate, 'torso')
  }
  if (checkboxarmr.checked) {
    const legs = bot.inventory.items().find(item => item.name.includes('leggings'))
    if(legs) bot.equip(legs, 'legs')
  }if(checkboxarmr.checked) {
    const feet = bot.inventory.items().find(item => item.name.includes('boots'))
    if(feet) bot.equip(feet,'feet')
  }
  else {
    clearInterval(ints)
  }
},200)
});
var invitmint = setInterval(()=>{
    document.getElementById('item36').innerText = bot.inventory.slots[36].displayName
},100)
var invitmint1 = setInterval(()=>{
    document.getElementById('item37').innerText = bot.inventory.slots[37].displayName
},100)
var invitmint2 = setInterval(()=>{
    document.getElementById('item38').innerText = bot.inventory.slots[38].displayName
},100)
var invitmint3 = setInterval(()=>{
    document.getElementById('item39').innerText = bot.inventory.slots[39].displayName
},100)
var invitmint4 = setInterval(()=>{
    document.getElementById('item40').innerText = bot.inventory.slots[40].displayName
},100)
var invitmint5 = setInterval(()=>{
    document.getElementById('item41').innerText = bot.inventory.slots[41].displayName
},100)
var invitmint6 = setInterval(()=>{
    document.getElementById('item42').innerText = bot.inventory.slots[42].displayName
},100)
var invitmint7 = setInterval(()=>{
    document.getElementById('item43').innerText = bot.inventory.slots[43].displayName
},100)
var invitmint8 = setInterval(()=>{
    document.getElementById('item44').innerText = bot.inventory.slots[44].displayName
},100)

setInterval(()=>{
    document.getElementById('item36').innerText = ''
    document.getElementById('item37').innerText = ''
    document.getElementById('item38').innerText = ''
    document.getElementById('item39').innerText = ''
    document.getElementById('item40').innerText = ''
    document.getElementById('item41').innerText = ''
    document.getElementById('item42').innerText = ''
    document.getElementById('item43').innerText = ''
    document.getElementById('item44').innerText = ''
},1000)
}
si.osInfo().then(data =>{
    document.getElementById('plat').innerText = data.platform
    document.getElementById('hostt').innerText = data.hostname
    document.getElementById('dist').innerText = data.distro
    document.getElementById('arch').innerText = data.arch
})

intint.addEventListener('click',()=>{
    document.getElementById('owninfo').style.display = 'flex'
})
closeprof.addEventListener('click',()=>{
    document.getElementById('owninfo').style.display = 'none'
})
