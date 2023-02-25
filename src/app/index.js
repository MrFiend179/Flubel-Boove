maincntdmx.addEventListener('click',()=>{
    const mdvl = document.getElementById('mainvaltrdb')
     let value = parseInt(mdvl.textContent);
     if (value < 20) {
        mdvl.textContent = value + 1;
    }
    
})

maincntdmc.addEventListener('click',()=>{
    const mdvl = document.getElementById('mainvaltrdb')
    let value = parseInt(mdvl.textContent);
     if (value > 1) {
        mdvl.textContent = value - 1;
    }
      
})
mnvgpg3.addEventListener('mouseenter',()=>{
    micnnn.classList.add('rotate-360');
})
mnvgpg3.addEventListener('mouseleave',()=>{
    micnnn.classList.remove('rotate-360');
})
const changrbnr = document.getElementById('bnrtclrchngr')
changrbnr.addEventListener('change',()=>{
    if(changrbnr.checked){
        document.getElementById('mchatbnry').style.display = 'flex'
    }
    else{
        document.getElementById('mchatbnry').style.display = 'none'
    }
})

window.onload = function(){
    setTimeout(() => {
        document.getElementById("mavblr").style.backdropFilter = 'blur(5px)'
        document.getElementById('mcsingle').style.opacity = '1'
        document.getElementById('disc').style.opacity = '1'
        document.getElementById('settings').style.opacity = '1'
    }, 500);
}
const {ipcRenderer,shell} = require('electron')
const fs = require('fs');
const ipc = ipcRenderer
const mc = require('mineflayer')
const antiafk = require('mineflayer-antiafk')
const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear } = require('mineflayer-pathfinder').goals
const si = require('systeminformation')
const vec3 = require('vec3')
const lottie = require('lottie-web')
const {goals} = require('mineflayer-pathfinder')
const pvp = require('mineflayer-pvp').plugin;

const openLink = (url) => {
    shell.openExternal(url);
}
const myDiv = document.getElementById('ltstvrsn');
myDiv.addEventListener('click', () => {
  const url = 'https://github.com/MrFiend179/Flubel-Boove';
  openLink(url);
});
const animationContainer = document.getElementById("ltidnfrmrai");
    const player = lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "https://assets6.lottiefiles.com/packages/lf20_qf1pt6ua.json"
    });
    player.setSpeed(0);
    btnmtokcnsnt.addEventListener('click',()=>{
        document.getElementById('ntcfrmrai').style.display = 'none'
        document.getElementById('noticedesc').style.display = 'none'
        document.getElementById('btnmtokcnsnt').style.display = 'none'
        document.getElementById('ltidnfrmrai').style.display = 'flex'
        player.setSpeed(1.3);
        setTimeout(() => {
            document.getElementById('flbfrmrailckr').style.transform = 'translateY(500px)';
            setTimeout(()=>{
                document.getElementById('flbfrmrailckr').style.display = 'none'
            },300)
        }, 4200);
        
    })


console.log('ola')
closeBtn.addEventListener('click', ()=>{
    ipc.send('closeApp')
})
minimizeApp.addEventListener('click', ()=>{
    ipc.send('minimizeApp')
})
async function join() {
var namein = document.getElementById("userin").value;
var portin = document.getElementById("portin").value;
var verin = document.getElementById("verin").value;
var hostin = document.getElementById("hostin").value;
var passin = document.getElementById("passin").value;

var pingint = setInterval(()=>{
    si.inetLatency(hostin).then(data =>{
        if(data < 100 && data > 0){
            document.getElementById('lsstsbtmc2').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="#5f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18v-3m4 3v-6m4 6V9m4 9V6"/></svg>'
        }
        if(data > 100&& data < 200){
            document.getElementById('lsstsbtmc2').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="#3ed57d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18v-3m4 3v-6m4 6V9m4 9v.01"/></svg>'
        }
        if(data > 200&& data < 300){
            document.getElementById('lsstsbtmc2').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="#ffa144" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18v-3m4 3v-6m4 6v.01m4-.01v.01"/></svg>'
        }
        if(data > 300&& data < 400){
            document.getElementById('lsstsbtmc2').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="#f55" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18v-3m4 3v.01m4-.01v.01m4-.01v.01"/></svg>'
        }
    })
},1000)

if(namein === ''){
    document.getElementById("errtxt").style.display = 'flex'
    document.getElementById('userin').style.border = '1px solid #FF5555'
    clearInterval(pingint)
}
if(namein != ''){
    document.getElementById("errtxt").style.display = 'none'
    document.getElementById('userin').style.border = '1px solid #262626'
    document.getElementById('lsstsbtmc1').innerText = 'Starting'
}
if(hostin === ''){
    document.getElementById("errtxth").style.display = 'flex'
    document.getElementById('hostin').style.border = '1px solid #FF5555'
    //document.getElementById('pingd').innerText = 'N/A'
    //clearInterval(pingint)
    clearInterval(pingint)
}
if(hostin != ''){
    document.getElementById("errtxth").style.display = 'none'
    document.getElementById('hostin').style.border = '1px solid #262626'
}
if(portin === ''){
    document.getElementById("errtxtp").style.display = 'flex'
    document.getElementById('portin').style.border = '1px solid #FF5555'
    clearInterval(pingint)
}
if(portin != ''){
    document.getElementById('portin').style.border = '1px solid #262626'
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
bot.loadPlugin(pvp);
bot.on('login',()=>{
    document.getElementById('lsstsbtmc2').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="#5f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18v-3m4 3v-6m4 6V9m4 9V6"/></svg>'
    console.log('logged in')
    document.getElementById('lsstsbtmc1').innerText = 'connected'
    bot.setQuickBarSlot(0)
    document.getElementById('htbritmcntrls36').style.display = 'flex'
    document.getElementById('bgitm36').style.border = '1px solid #009FFD'
    if(document.getElementById('onjoincht').value != ''){
        setTimeout(() => {
            bot.chat(document.getElementById('onjoincht').value)
        }, 500);
    }
    var node = document.createElement('span')
    var botname = document.getElementById('userin').value;
    var servername = document.getElementById('hostin').value;
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot (${botname}) has started and is in the server (${servername})`)
    node.appendChild(textnode)
    node.style.color = '#55FF55'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
    document.getElementById('blobwinmcbt').style.backgroundColor = '#e05a00'
    document.getElementById('botcntrlcordsind').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcbtgtp').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcbtplr').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcbtafk').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcbtplrfrmr').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcgrd').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcbtplrpvp').style.backgroundColor = '#e05a00'

})
bot.on('spawn',()=>{
    bot.setQuickBarSlot(0)
    document.getElementById('htbritmcntrls36').style.display = 'flex'
    document.getElementById('bgitm36').style.border = '1px solid #009FFD'
    document.getElementById('blobwinmcbt').style.backgroundColor = '#e05a00'
    document.getElementById('botcntrlcordsind').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcbtgtp').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcbtplr').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcbtplrpvp').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcbtafk').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcbtplrfrmr').style.backgroundColor = '#e05a00'
    document.getElementById('blobwinmcgrd').style.backgroundColor = '#e05a00'
    document.getElementById('itmn5').innerText = ''
    document.getElementById('itmn6').innerText = ''
    document.getElementById('itmn7').innerText = ''
    document.getElementById('itmn8').innerText = ''
    document.getElementById('itmn9').innerText = ''
    document.getElementById('itmn10').innerText = ''
    document.getElementById('itmn11').innerText = ''
    document.getElementById('itmn12').innerText = ''
    document.getElementById('itmn13').innerText = ''
    document.getElementById('itmn14').innerText = ''
    document.getElementById('itmn15').innerText = ''
    document.getElementById('itmn16').innerText = ''
    document.getElementById('itmn17').innerText = ''
    document.getElementById('itmn18').innerText = ''
    document.getElementById('itmn19').innerText = ''
    document.getElementById('itmn20').innerText = ''
    document.getElementById('itmn21').innerText = ''
    document.getElementById('itmn22').innerText = ''
    document.getElementById('itmn23').innerText = ''
    document.getElementById('itmn24').innerText = ''
    document.getElementById('itmn25').innerText = ''
    document.getElementById('itmn26').innerText = ''
    document.getElementById('itmn27').innerText = ''
    document.getElementById('itmn28').innerText = ''
    document.getElementById('itmn29').innerText = ''
    document.getElementById('itmn30').innerText = ''
    document.getElementById('itmn31').innerText = ''
    document.getElementById('itmn32').innerText = ''
    document.getElementById('itmn33').innerText = ''
    document.getElementById('itmn34').innerText = ''
    document.getElementById('itmn35').innerText = ''
    document.getElementById('itmn36').innerText = ''
    document.getElementById('itmn37').innerText = ''
    document.getElementById('itmn38').innerText = ''
    document.getElementById('itmn39').innerText = ''
    document.getElementById('itmn40').innerText = ''
    document.getElementById('itmn41').innerText = ''
    document.getElementById('itmn42').innerText = ''
    document.getElementById('itmn43').innerText = ''
    document.getElementById('itmn44').innerText = ''
    document.getElementById('itmn45').innerText = ''
    document.getElementById('itmcnt5').innerText = ''
    document.getElementById('itmcnt6').innerText = ''
    document.getElementById('itmcnt7').innerText = ''
    document.getElementById('itmcnt8').innerText = ''
    document.getElementById('itmcnt9').innerText = ''
    document.getElementById('itmcnt10').innerText = ''
    document.getElementById('itmcnt11').innerText = ''
    document.getElementById('itmcnt12').innerText = ''
    document.getElementById('itmcnt13').innerText = ''
    document.getElementById('itmcnt14').innerText = ''
    document.getElementById('itmcnt15').innerText = ''
    document.getElementById('itmcnt16').innerText = ''
    document.getElementById('itmcnt17').innerText = ''
    document.getElementById('itmcnt18').innerText = ''
    document.getElementById('itmcnt19').innerText = ''
    document.getElementById('itmcnt20').innerText = ''
    document.getElementById('itmcnt21').innerText = ''
    document.getElementById('itmcnt22').innerText = ''
    document.getElementById('itmcnt23').innerText = ''
    document.getElementById('itmcnt24').innerText = ''
    document.getElementById('itmcnt25').innerText = ''
    document.getElementById('itmcnt26').innerText = ''
    document.getElementById('itmcnt27').innerText = ''
    document.getElementById('itmcnt28').innerText = ''
    document.getElementById('itmcnt29').innerText = ''
    document.getElementById('itmcnt30').innerText = ''
    document.getElementById('itmcnt31').innerText = ''
    document.getElementById('itmcnt32').innerText = ''
    document.getElementById('itmcnt33').innerText = ''
    document.getElementById('itmcnt34').innerText = ''
    document.getElementById('itmcnt35').innerText = ''
    document.getElementById('itmcnt36').innerText = ''
    document.getElementById('itmcnt37').innerText = ''
    document.getElementById('itmcnt38').innerText = ''
    document.getElementById('itmcnt39').innerText = ''
    document.getElementById('itmcnt40').innerText = ''
    document.getElementById('itmcnt41').innerText = ''
    document.getElementById('itmcnt42').innerText = ''
    document.getElementById('itmcnt43').innerText = ''
    document.getElementById('itmcnt44').innerText = ''
    document.getElementById('itmcnt45').innerText = ''
})
actbtnrccqt.addEventListener('click',()=>{
    document.getElementById('lsstsbtmc2').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.4rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="#AAAAAA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18v-3m4 3v-6m4 6v-4m0-4V9m4 5V6M3 3l18 18"/></svg>'
    console.log('quitting')
    document.getElementById('lsstsbtmc1').innerText = 'disconnected'
    bot.quit()
    document.getElementById('tmabtbt').innerHTML = '<div>-</div>'
    document.getElementById('bgitm36').style.border = 'none'
    setTimeout(() => {
        bot.quit()
        document.getElementById('lsstsbtmc2').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.4rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="#AAAAAA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18v-3m4 3v-6m4 6v-4m0-4V9m4 5V6M3 3l18 18"/></svg>'
    }, 200);
    setTimeout(() => {
        bot.quit()
        document.getElementById('lsstsbtmc2').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.4rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="#AAAAAA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18v-3m4 3v-6m4 6v-4m0-4V9m4 5V6M3 3l18 18"/></svg>'
    }, 400);
    document.getElementById('blobwinmcbtgtp').style.backgroundColor = 'transparent'
    document.getElementById('blobwinmcbt').style.backgroundColor = 'transparent'
    document.getElementById('blobwinmcbtafk').style.backgroundColor = 'transparent'
    document.getElementById('blobwinmcbtplr').style.backgroundColor = 'transparent'
    document.getElementById('actclrofaihndlr').style.backgroundColor = 'transparent'
    document.getElementById('blobwinmcgrd').style.backgroundColor = 'transparent'
    document.getElementById('blobwinmcbtplrpvp').style.backgroundColor = 'transparent'
    document.getElementById('actclrofaihndlr').style.width = `0%`
    var node = document.createElement('span')
    var botname = document.getElementById('userin').value;
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot (${botname}) is now offline`)
    node.appendChild(textnode)
    node.style.color = '#FF5555'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
    document.getElementById('botcntrlcordsind').style.backgroundColor = 'transparent'
    document.getElementById('blobwinmcbtplrfrmr').style.backgroundColor = 'transparent'
    clearInterval(pingint)
    document.getElementById('mhltdt').innerText = ''
    document.getElementById('mfoddt').innerText = ''
    document.getElementById('mchat').innerHTML = ''
    document.getElementById('actplrttllstmcfnc').innerHTML = ''
    clearInterval(invitmint5)
    clearInterval(invitmint6)
    clearInterval(invitmint7)
    clearInterval(invitmint8)
    clearInterval(invitmint9)
    clearInterval(invitmint10)
    clearInterval(invitmint11)
    clearInterval(invitmint12)
    clearInterval(invitmint13)
    clearInterval(invitmint14)
    clearInterval(invitmint15)
    clearInterval(invitmint16)
    clearInterval(invitmint17)
    clearInterval(invitmint18)
    clearInterval(invitmint19)
    clearInterval(invitmint20)
    clearInterval(invitmint21)
    clearInterval(invitmint22)
    clearInterval(invitmint23)
    clearInterval(invitmint24)
    clearInterval(invitmint25)
    clearInterval(invitmint26)
    clearInterval(invitmint27)
    clearInterval(invitmint28)
    clearInterval(invitmint29)
    clearInterval(invitmint30)
    clearInterval(invitmint31)
    clearInterval(invitmint32)
    clearInterval(invitmint33)
    clearInterval(invitmint34)
    clearInterval(invitmint35)
    clearInterval(invitmint36)
    clearInterval(invitmint37)
    clearInterval(invitmint38)
    clearInterval(invitmint39)
    clearInterval(invitmint40)
    clearInterval(invitmint41)
    clearInterval(invitmint42)
    clearInterval(invitmint43)
    clearInterval(invitmint44)
    clearInterval(invitmint45)
    document.getElementById('itmn5').innerText = ''
    document.getElementById('itmn6').innerText = ''
    document.getElementById('itmn7').innerText = ''
    document.getElementById('itmn8').innerText = ''
    document.getElementById('itmn9').innerText = ''
    document.getElementById('itmn10').innerText = ''
    document.getElementById('itmn11').innerText = ''
    document.getElementById('itmn12').innerText = ''
    document.getElementById('itmn13').innerText = ''
    document.getElementById('itmn14').innerText = ''
    document.getElementById('itmn15').innerText = ''
    document.getElementById('itmn16').innerText = ''
    document.getElementById('itmn17').innerText = ''
    document.getElementById('itmn18').innerText = ''
    document.getElementById('itmn19').innerText = ''
    document.getElementById('itmn20').innerText = ''
    document.getElementById('itmn21').innerText = ''
    document.getElementById('itmn22').innerText = ''
    document.getElementById('itmn23').innerText = ''
    document.getElementById('itmn24').innerText = ''
    document.getElementById('itmn25').innerText = ''
    document.getElementById('itmn26').innerText = ''
    document.getElementById('itmn27').innerText = ''
    document.getElementById('itmn28').innerText = ''
    document.getElementById('itmn29').innerText = ''
    document.getElementById('itmn30').innerText = ''
    document.getElementById('itmn31').innerText = ''
    document.getElementById('itmn32').innerText = ''
    document.getElementById('itmn33').innerText = ''
    document.getElementById('itmn34').innerText = ''
    document.getElementById('itmn35').innerText = ''
    document.getElementById('itmn36').innerText = ''
    document.getElementById('itmn37').innerText = ''
    document.getElementById('itmn38').innerText = ''
    document.getElementById('itmn39').innerText = ''
    document.getElementById('itmn40').innerText = ''
    document.getElementById('itmn41').innerText = ''
    document.getElementById('itmn42').innerText = ''
    document.getElementById('itmn43').innerText = ''
    document.getElementById('itmn44').innerText = ''
    document.getElementById('itmn45').innerText = ''
    document.getElementById('itmcnt5').innerText = ''
    document.getElementById('itmcnt6').innerText = ''
    document.getElementById('itmcnt7').innerText = ''
    document.getElementById('itmcnt8').innerText = ''
    document.getElementById('itmcnt9').innerText = ''
    document.getElementById('itmcnt10').innerText = ''
    document.getElementById('itmcnt11').innerText = ''
    document.getElementById('itmcnt12').innerText = ''
    document.getElementById('itmcnt13').innerText = ''
    document.getElementById('itmcnt14').innerText = ''
    document.getElementById('itmcnt15').innerText = ''
    document.getElementById('itmcnt16').innerText = ''
    document.getElementById('itmcnt17').innerText = ''
    document.getElementById('itmcnt18').innerText = ''
    document.getElementById('itmcnt19').innerText = ''
    document.getElementById('itmcnt20').innerText = ''
    document.getElementById('itmcnt21').innerText = ''
    document.getElementById('itmcnt22').innerText = ''
    document.getElementById('itmcnt23').innerText = ''
    document.getElementById('itmcnt24').innerText = ''
    document.getElementById('itmcnt25').innerText = ''
    document.getElementById('itmcnt26').innerText = ''
    document.getElementById('itmcnt27').innerText = ''
    document.getElementById('itmcnt28').innerText = ''
    document.getElementById('itmcnt29').innerText = ''
    document.getElementById('itmcnt30').innerText = ''
    document.getElementById('itmcnt31').innerText = ''
    document.getElementById('itmcnt32').innerText = ''
    document.getElementById('itmcnt33').innerText = ''
    document.getElementById('itmcnt34').innerText = ''
    document.getElementById('itmcnt35').innerText = ''
    document.getElementById('itmcnt36').innerText = ''
    document.getElementById('itmcnt37').innerText = ''
    document.getElementById('itmcnt38').innerText = ''
    document.getElementById('itmcnt39').innerText = ''
    document.getElementById('itmcnt40').innerText = ''
    document.getElementById('itmcnt41').innerText = ''
    document.getElementById('itmcnt42').innerText = ''
    document.getElementById('itmcnt43').innerText = ''
    document.getElementById('itmcnt44').innerText = ''
    document.getElementById('itmcnt45').innerText = ''
    document.getElementById('bgitm36').style.border = 'none'
    document.getElementById('bgitm37').style.border = 'none'
    document.getElementById('bgitm38').style.border = 'none'
    document.getElementById('bgitm39').style.border = 'none'
    document.getElementById('bgitm40').style.border = 'none'
    document.getElementById('bgitm41').style.border = 'none'
    document.getElementById('bgitm42').style.border = 'none'
    document.getElementById('bgitm43').style.border = 'none'
    document.getElementById('bgitm44').style.border = 'none'
    bgitm36.addEventListener('click',()=>{
        document.getElementById('bgitm36').style.border = 'none'
        document.getElementById('htbritmcntrls36').style.display = 'none'
    })
    bgitm37.addEventListener('click',()=>{
        document.getElementById('bgitm37').style.border = 'none'
        document.getElementById('htbritmcntrls37').style.display = 'none'
    })
    bgitm38.addEventListener('click',()=>{
        document.getElementById('bgitm38').style.border = 'none'
        document.getElementById('htbritmcntrls38').style.display = 'none'
    })
    bgitm39.addEventListener('click',()=>{
        document.getElementById('bgitm39').style.border = 'none'
        document.getElementById('htbritmcntrls39').style.display = 'none'
    })
    bgitm40.addEventListener('click',()=>{
        document.getElementById('bgitm40').style.border = 'none'
        document.getElementById('htbritmcntrls40').style.display = 'none'
    })
    bgitm41.addEventListener('click',()=>{
        document.getElementById('bgitm41').style.border = 'none'
        document.getElementById('htbritmcntrls41').style.display = 'none'
    })
    bgitm42.addEventListener('click',()=>{
        document.getElementById('bgitm42').style.border = 'none'
        document.getElementById('htbritmcntrls42').style.display = 'none'
    })
    bgitm43.addEventListener('click',()=>{
        document.getElementById('bgitm43').style.border = 'none'
        document.getElementById('htbritmcntrls43').style.display = 'none'
    })
    bgitm44.addEventListener('click',()=>{
        document.getElementById('bgitm44').style.border = 'none'
        document.getElementById('htbritmcntrls44').style.display = 'none'
    })
})
bot.on('kicked',(reason)=>{
    console.log('kicked')
    document.getElementById('lsstsbtmc1').innerText = 'kicked'
    document.getElementById('lsstsbtmc2').innerHTML = ('<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="#f55" d="M12 13q.425 0 .713-.288Q13 12.425 13 12V7.975q0-.425-.287-.7Q12.425 7 12 7t-.712.287Q11 7.575 11 8v4.025q0 .425.288.7q.287.275.712.275Zm0 4q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm0 5q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/></svg>')
    var node = document.createElement('span')
    var botname = document.getElementById('userin').value;
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot (${botname}) was kicked for the reason ${reason}`)
    node.appendChild(textnode)
    node.style.color = '#FF5555'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
bot.on('death',()=>{
    var node = document.createElement('span')
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot died, Respawning now`)
    node.appendChild(textnode)
    node.style.color = '##ff5555'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
bot.on('health', ()=>{
    document.getElementById('mhltdt').innerText = bot.health.toFixed(0)
    document.getElementById('mfoddt').innerText = bot.food
    if(bot.food <= 10){
    var node = document.createElement('span')
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot hunger is less than 10 hearts`)
    node.appendChild(textnode)
    node.style.color = '#FF5555'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
    }
    if(bot.health.toFixed(0) <= 10){
        var node = document.createElement('span')
    var botname = document.getElementById('userin').value;
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot health is less than 10 hearts`)
    node.appendChild(textnode)
    node.style.color = '#FF5555'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
    }
})
let shouldAutoScroll = true;

document.getElementById("mchat").addEventListener("mouseenter", function() {
  shouldAutoScroll = false;
});

document.getElementById("mchat").addEventListener("mouseleave", function() {
  shouldAutoScroll = true;
});

bot.on("message", (m) => {
  const t = document.createElement("div");
  var c = '';
  if (m.json.extra instanceof Array) {
    m.json.extra.forEach(e => {
        if(e.color){
            c += `<span  style=" font-family:'Minecraft Regular'; color: ${e.color.replace('_','')}; ${e.bold ? 'font-weight: bold;' : ''} ${e.italic ? 'font-style: italic;' : ''} ${e.strikethrough && e.underlined ? 'text-decoration: line-through underline' : e.strikethrough ? 'text-decoration: line-through' : e.underlined ? 'text-decoration: underline' : ''}">${e.text.replace('<', '&lt').replace('>', '&gt')}</span>`.replace(/\\n/g, '<br>')
        }
        else{
            c += `<span  style=" font-family:'Minecraft Regular'; color: ${e.color}; ${e.bold ? 'font-weight: bold;' : ''} ${e.italic ? 'font-style: italic;' : ''} ${e.strikethrough && e.underlined ? 'text-decoration: line-through underline' : e.strikethrough ? 'text-decoration: line-through' : e.underlined ? 'text-decoration: underline' : ''}">${e.text.replace('<', '&lt').replace('>', '&gt')}</span>`.replace(/\\n/g, '<br>')
        }
    });
  } else if (m.json.text) {
    c += `<span>${m.json.text.replace('<', '&lt;').replace('>', '&gt;')}</span>`.replace(/\\n/g, '<br>').replace(/&.{1}/g, '')
    //§
  }
  if (shouldAutoScroll) {
    setTimeout(() => {
        const chatDiv = document.getElementById("mchat");
        chatDiv.scrollTop = chatDiv.scrollHeight;
    }, 50);
  }
  if(m.extra){
  var c1 = '';
    if(m.extra instanceof Array) {
        m.extra.forEach(etra =>{
            if(etra.extra instanceof Array){
                etra.extra.forEach(exxtra=>{
                    if(exxtra.color){
                        c1 += `<span style=" font-family:'Minecraft Regular'; color: ${exxtra.color.replace('_','')}; ${exxtra.bold ? 'font-weight: bold;' : ''} ${exxtra.italic ? 'font-style: italic;' : ''} ${exxtra.strikethrough && exxtra.underlined ? 'text-decoration: line-through underline' : exxtra.strikethrough ? 'text-decoration: line-through' : exxtra.underlined ? 'text-decoration: underline' : ''}">${exxtra.text.replace('<', '&lt').replace('>', '&gt')}</span>`.replace(/\\n/g, '<br>')
                    }
                    else{
                        c1 += `<span style=" font-family:'Minecraft Regular'; color: ${exxtra.color}; ${exxtra.bold ? 'font-weight: bold;' : ''} ${exxtra.italic ? 'font-style: italic;' : ''} ${exxtra.strikethrough && exxtra.underlined ? 'text-decoration: line-through underline' : exxtra.strikethrough ? 'text-decoration: line-through' : exxtra.underlined ? 'text-decoration: underline' : ''}">${exxtra.text.replace('<', '&lt').replace('>', '&gt')}</span>`.replace(/\\n/g, '<br>')

                    }
                })
            }
        })
    }
    
    t.innerHTML = `${c1}${c}`;
    document.getElementById('mchat').appendChild(t);
    //t1.innerHTML = c1;
    //document.getElementById('mchat').appendChild(t1);
}
});
let shouldAutoScroll1 = true;

document.getElementById("mchatbnry").addEventListener("mouseenter", function() {
  shouldAutoScroll1 = false;
});

document.getElementById("mchatbnry").addEventListener("mouseleave", function() {
  shouldAutoScroll1 = true;
});
bot.on('chat',(username,message)=>{
    var bc = message
    var nc = username
    var node = document.createElement('div')
    var textnode = document.createTextNode(`${nc}: ${bc}`)
    node.appendChild(textnode)
    document.getElementById("mchatbnry").appendChild(node)
    if (shouldAutoScroll1) {
        setTimeout(() => {
            const chatDiv = document.getElementById("mchatbnry");
            chatDiv.scrollTop = chatDiv.scrollHeight;
        }, 50);
      }
})
sndbtn.addEventListener('click', ()=>{
    var msg = document.getElementById("usermsgsnd").value
    bot.chat(msg)
    setTimeout(() => {
        document.getElementById("usermsgsnd").value = ''
    }, 300);
})
let messages = []

mainclbtncht.addEventListener('click',()=>{
    const div = document.getElementById('mchatbnry');
    const textSpans = div.querySelectorAll('div');
    textSpans.forEach(textSpan => {
      messages.push(textSpan.innerText);
    });
    const textToSave = messages.join("\n");
    //console.log(textToSave)
    const folderPath = './MinecraftBot-Chat';

  // Use the `fs` module to create the folder
    fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      alert("An error occurred creating the folder: " + err.message);
      return;
    }
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();
    let currentDate = `${day}-${month}-${year}-${hour}-${minute}-${sec}`;

    const filePath = `${folderPath}/chat(${currentDate}).txt`;
    fs.writeFile(filePath, textToSave, (err) => {
      if(err) {
        alert("An error occurred creating the file: " + err.message);
        return;
      }
      alert("The file has been successfully saved!");
        var node = document.createElement('span')
        var textnode = document.createTextNode(`[ ${displayTime()} ] Bot's chat file saved sucessfully`)
        node.appendChild(textnode)
        node.style.color = '##55ff55'
        document.getElementById("actlogsmcb").appendChild(node)
        document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
    });
  })
});
bot.on('heldItemChanged', (item) => {
        document.getElementById('bgitm36').style.border = 'none'
        document.getElementById('bgitm37').style.border = 'none'
        document.getElementById('bgitm38').style.border = 'none'
        document.getElementById('bgitm39').style.border = 'none'
        document.getElementById('bgitm40').style.border = 'none'
        document.getElementById('bgitm41').style.border = 'none'
        document.getElementById('bgitm42').style.border = 'none'
        document.getElementById('bgitm43').style.border = 'none'
        document.getElementById('bgitm44').style.border = 'none'
        document.getElementById('htbritmcntrls36').style.display = 'none'
        document.getElementById('htbritmcntrls37').style.display = 'none'
        document.getElementById('htbritmcntrls38').style.display = 'none'
        document.getElementById('htbritmcntrls39').style.display = 'none'
        document.getElementById('htbritmcntrls40').style.display = 'none'
        document.getElementById('htbritmcntrls41').style.display = 'none'
        document.getElementById('htbritmcntrls42').style.display = 'none'
        document.getElementById('htbritmcntrls43').style.display = 'none'
        document.getElementById('htbritmcntrls44').style.display = 'none'
    if(bot.getEquipmentDestSlot('hand') === 36){
        document.getElementById('bgitm36').style.border = '1px solid #009FFD'
        document.getElementById('htbritmcntrls36').style.display = 'flex'
    }if(bot.getEquipmentDestSlot('hand') === 37){
        document.getElementById('bgitm37').style.border = '1px solid #009FFD'
        document.getElementById('htbritmcntrls37').style.display = 'flex'
    }if(bot.getEquipmentDestSlot('hand') === 38){
        document.getElementById('bgitm38').style.border = '1px solid #009FFD'
        document.getElementById('htbritmcntrls38').style.display = 'flex'
    }if(bot.getEquipmentDestSlot('hand') === 39){
        document.getElementById('bgitm39').style.border = '1px solid #009FFD'
        document.getElementById('htbritmcntrls39').style.display = 'flex'
    }if(bot.getEquipmentDestSlot('hand') === 40){
        document.getElementById('bgitm40').style.border = '1px solid #009FFD'
        document.getElementById('htbritmcntrls40').style.display = 'flex'
    }if(bot.getEquipmentDestSlot('hand') === 41){
        document.getElementById('bgitm41').style.border = '1px solid #009FFD'
        document.getElementById('htbritmcntrls41').style.display = 'flex'
    }if(bot.getEquipmentDestSlot('hand') === 42){
        document.getElementById('bgitm42').style.border = '1px solid #009FFD'
        document.getElementById('htbritmcntrls42').style.display = 'flex'
    }if(bot.getEquipmentDestSlot('hand') === 43){
        document.getElementById('bgitm43').style.border = '1px solid #009FFD'
        document.getElementById('htbritmcntrls43').style.display = 'flex'
    }if(bot.getEquipmentDestSlot('hand') === 44){
        document.getElementById('bgitm44').style.border = '1px solid #009FFD'
        document.getElementById('htbritmcntrls44').style.display = 'flex'
    }
});
bot.on('time',()=>{
    const time = bot.time.timeOfDay;
    if (time >= 0 && time < 12000) {
        document.getElementById('tmabtbt').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24"><path fill="#ffe87c" d="M12 5q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm4.95 2.05q-.275-.275-.275-.688q0-.412.275-.712l1.4-1.425q.3-.3.712-.3q.413 0 .713.3q.275.275.275.7q0 .425-.275.7L18.35 7.05q-.275.275-.7.275q-.425 0-.7-.275ZM20 13q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8 10q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275q.425 0 .7.275L7.05 5.65q.275.275.275.7q0 .425-.275.7q-.3.275-.7.275q-.4 0-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.712q0-.413.275-.688q.275-.275.688-.275q.412 0 .712.275l1.425 1.4q.3.275.287.7q-.012.425-.287.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm2.225 6.775q-.275-.275-.275-.7q0-.425.275-.7L5.65 16.95q.275-.275.688-.275q.412 0 .712.275q.3.3.3.713q0 .412-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Zm0 0q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 1.65-1.175 2.825Q13.65 16 12 16Z"/></svg>'
      } else {
        document.getElementById('tmabtbt').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width=".8rem" height=".8rem" viewBox="0 0 24 24"><path fill="#f0c420" d="M13.1 23q-2.1 0-3.938-.8q-1.837-.8-3.199-2.162Q4.6 18.675 3.8 16.837Q3 15 3 12.9q0-3.65 2.325-6.438Q7.65 3.675 11.25 3q-.45 2.475.275 4.837q.725 2.363 2.5 4.138t4.138 2.5q2.362.725 4.837.275q-.65 3.6-3.45 5.925Q16.75 23 13.1 23Z"/></svg>'
      }
})
mainclrbtnmchatr.addEventListener('click',()=>{
    document.getElementById('mchat').innerHTML = ''
    var node = document.createElement('span')
        var textnode = document.createTextNode(`[ ${displayTime()} ] Bot's chat cleared successfully`)
        node.appendChild(textnode)
        node.style.color = '##ff5555'
        document.getElementById("actlogsmcb").appendChild(node)
        document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
bgitm36.addEventListener('click',()=>{
    bot.setQuickBarSlot(0)
    document.getElementById('bgitm36').style.border = '1px solid #009FFD'
    document.getElementById('bgitm37').style.border = 'none'
    document.getElementById('bgitm38').style.border = 'none'
    document.getElementById('bgitm39').style.border = 'none'
    document.getElementById('bgitm40').style.border = 'none'
    document.getElementById('bgitm41').style.border = 'none'
    document.getElementById('bgitm42').style.border = 'none'
    document.getElementById('bgitm43').style.border = 'none'
    document.getElementById('bgitm44').style.border = 'none'
    document.getElementById('htbritmcntrls36').style.display = 'flex'
    document.getElementById('htbritmcntrls37').style.display = 'none'
    document.getElementById('htbritmcntrls38').style.display = 'none'
    document.getElementById('htbritmcntrls39').style.display = 'none'
    document.getElementById('htbritmcntrls40').style.display = 'none'
    document.getElementById('htbritmcntrls41').style.display = 'none'
    document.getElementById('htbritmcntrls42').style.display = 'none'
    document.getElementById('htbritmcntrls43').style.display = 'none'
    document.getElementById('htbritmcntrls44').style.display = 'none'
    var node = document.createElement('span')
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot's quickbar slot set to 1 [36]`)
    node.appendChild(textnode)
    node.style.color = '#838383'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
bgitm37.addEventListener('click',()=>{
    bot.setQuickBarSlot(1)
    document.getElementById('bgitm36').style.border = 'none'
    document.getElementById('bgitm37').style.border = '1px solid #009FFD'
    document.getElementById('bgitm38').style.border = 'none'
    document.getElementById('bgitm39').style.border = 'none'
    document.getElementById('bgitm40').style.border = 'none'
    document.getElementById('bgitm41').style.border = 'none'
    document.getElementById('bgitm42').style.border = 'none'
    document.getElementById('bgitm43').style.border = 'none'
    document.getElementById('bgitm44').style.border = 'none'
    document.getElementById('htbritmcntrls36').style.display = 'none'
    document.getElementById('htbritmcntrls37').style.display = 'flex'
    document.getElementById('htbritmcntrls38').style.display = 'none'
    document.getElementById('htbritmcntrls39').style.display = 'none'
    document.getElementById('htbritmcntrls40').style.display = 'none'
    document.getElementById('htbritmcntrls41').style.display = 'none'
    document.getElementById('htbritmcntrls42').style.display = 'none'
    document.getElementById('htbritmcntrls43').style.display = 'none'
    document.getElementById('htbritmcntrls44').style.display = 'none'
    var node = document.createElement('span')
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot's quickbar slot set to 2 [37]`)
    node.appendChild(textnode)
    node.style.color = '#838383'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
bgitm38.addEventListener('click',()=>{
    bot.setQuickBarSlot(2)
    document.getElementById('bgitm36').style.border = 'none'
    document.getElementById('bgitm37').style.border = 'none'
    document.getElementById('bgitm38').style.border = '1px solid #009FFD'
    document.getElementById('bgitm39').style.border = 'none'
    document.getElementById('bgitm40').style.border = 'none'
    document.getElementById('bgitm41').style.border = 'none'
    document.getElementById('bgitm42').style.border = 'none'
    document.getElementById('bgitm43').style.border = 'none'
    document.getElementById('bgitm44').style.border = 'none'
    document.getElementById('htbritmcntrls36').style.display = 'none'
    document.getElementById('htbritmcntrls37').style.display = 'none'
    document.getElementById('htbritmcntrls38').style.display = 'flex'
    document.getElementById('htbritmcntrls39').style.display = 'none'
    document.getElementById('htbritmcntrls40').style.display = 'none'
    document.getElementById('htbritmcntrls41').style.display = 'none'
    document.getElementById('htbritmcntrls42').style.display = 'none'
    document.getElementById('htbritmcntrls43').style.display = 'none'
    document.getElementById('htbritmcntrls44').style.display = 'none'
    var node = document.createElement('span')
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot's quickbar slot set to 3 [38]`)
    node.appendChild(textnode)
    node.style.color = '#838383'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
bgitm39.addEventListener('click',()=>{
    bot.setQuickBarSlot(3)
    document.getElementById('bgitm36').style.border = 'none'
    document.getElementById('bgitm37').style.border = 'none'
    document.getElementById('bgitm38').style.border = 'none'
    document.getElementById('bgitm39').style.border = '1px solid #009FFD'
    document.getElementById('bgitm40').style.border = 'none'
    document.getElementById('bgitm41').style.border = 'none'
    document.getElementById('bgitm42').style.border = 'none'
    document.getElementById('bgitm43').style.border = 'none'
    document.getElementById('bgitm44').style.border = 'none'
    document.getElementById('htbritmcntrls36').style.display = 'none'
    document.getElementById('htbritmcntrls37').style.display = 'none'
    document.getElementById('htbritmcntrls38').style.display = 'none'
    document.getElementById('htbritmcntrls39').style.display = 'flex'
    document.getElementById('htbritmcntrls40').style.display = 'none'
    document.getElementById('htbritmcntrls41').style.display = 'none'
    document.getElementById('htbritmcntrls42').style.display = 'none'
    document.getElementById('htbritmcntrls43').style.display = 'none'
    document.getElementById('htbritmcntrls44').style.display = 'none'
    var node = document.createElement('span')
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot's quickbar slot set to 4 [39]`)
    node.appendChild(textnode)
    node.style.color = '#838383'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
bgitm40.addEventListener('click',()=>{
    bot.setQuickBarSlot(4)
    document.getElementById('bgitm36').style.border = 'none'
    document.getElementById('bgitm37').style.border = 'none'
    document.getElementById('bgitm38').style.border = 'none'
    document.getElementById('bgitm39').style.border = 'none'
    document.getElementById('bgitm40').style.border = '1px solid #009FFD'
    document.getElementById('bgitm41').style.border = 'none'
    document.getElementById('bgitm42').style.border = 'none'
    document.getElementById('bgitm43').style.border = 'none'
    document.getElementById('bgitm44').style.border = 'none'
    document.getElementById('htbritmcntrls36').style.display = 'none'
    document.getElementById('htbritmcntrls37').style.display = 'none'
    document.getElementById('htbritmcntrls38').style.display = 'none'
    document.getElementById('htbritmcntrls39').style.display = 'none'
    document.getElementById('htbritmcntrls40').style.display = 'flex'
    document.getElementById('htbritmcntrls41').style.display = 'none'
    document.getElementById('htbritmcntrls42').style.display = 'none'
    document.getElementById('htbritmcntrls43').style.display = 'none'
    document.getElementById('htbritmcntrls44').style.display = 'none'
    var node = document.createElement('span')
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot's quickbar slot set to 5 [40]`)
    node.appendChild(textnode)
    node.style.color = '#838383'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
bgitm41.addEventListener('click',()=>{
    bot.setQuickBarSlot(5)
    document.getElementById('bgitm36').style.border = 'none'
    document.getElementById('bgitm37').style.border = 'none'
    document.getElementById('bgitm38').style.border = 'none'
    document.getElementById('bgitm39').style.border = 'none'
    document.getElementById('bgitm40').style.border = 'none'
    document.getElementById('bgitm41').style.border = '1px solid #009FFD'
    document.getElementById('bgitm42').style.border = 'none'
    document.getElementById('bgitm43').style.border = 'none'
    document.getElementById('bgitm44').style.border = 'none'
    document.getElementById('htbritmcntrls36').style.display = 'none'
    document.getElementById('htbritmcntrls37').style.display = 'none'
    document.getElementById('htbritmcntrls38').style.display = 'none'
    document.getElementById('htbritmcntrls39').style.display = 'none'
    document.getElementById('htbritmcntrls40').style.display = 'none'
    document.getElementById('htbritmcntrls41').style.display = 'flex'
    document.getElementById('htbritmcntrls42').style.display = 'none'
    document.getElementById('htbritmcntrls43').style.display = 'none'
    document.getElementById('htbritmcntrls44').style.display = 'none'
    var node = document.createElement('span')
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot's quickbar slot set to 6 [41]`)
    node.appendChild(textnode)
    node.style.color = '#838383'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
bgitm42.addEventListener('click',()=>{
    bot.setQuickBarSlot(6)
    document.getElementById('bgitm36').style.border = 'none'
    document.getElementById('bgitm37').style.border = 'none'
    document.getElementById('bgitm38').style.border = 'none'
    document.getElementById('bgitm39').style.border = 'none'
    document.getElementById('bgitm40').style.border = 'none'
    document.getElementById('bgitm41').style.border = 'none'
    document.getElementById('bgitm42').style.border = '1px solid #009FFD'
    document.getElementById('bgitm43').style.border = 'none'
    document.getElementById('bgitm44').style.border = 'none'
    document.getElementById('htbritmcntrls36').style.display = 'none'
    document.getElementById('htbritmcntrls37').style.display = 'none'
    document.getElementById('htbritmcntrls38').style.display = 'none'
    document.getElementById('htbritmcntrls39').style.display = 'none'
    document.getElementById('htbritmcntrls40').style.display = 'none'
    document.getElementById('htbritmcntrls41').style.display = 'none'
    document.getElementById('htbritmcntrls42').style.display = 'flex'
    document.getElementById('htbritmcntrls43').style.display = 'none'
    document.getElementById('htbritmcntrls44').style.display = 'none'
    var node = document.createElement('span')
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot's quickbar slot set to 7 [41]`)
    node.appendChild(textnode)
    node.style.color = '#838383'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
bgitm43.addEventListener('click',()=>{
    bot.setQuickBarSlot(7)
    document.getElementById('bgitm36').style.border = 'none'
    document.getElementById('bgitm37').style.border = 'none'
    document.getElementById('bgitm38').style.border = 'none'
    document.getElementById('bgitm39').style.border = 'none'
    document.getElementById('bgitm40').style.border = 'none'
    document.getElementById('bgitm41').style.border = 'none'
    document.getElementById('bgitm42').style.border = 'none'
    document.getElementById('bgitm43').style.border = '1px solid #009FFD'
    document.getElementById('bgitm44').style.border = 'none'
    document.getElementById('htbritmcntrls36').style.display = 'none'
    document.getElementById('htbritmcntrls37').style.display = 'none'
    document.getElementById('htbritmcntrls38').style.display = 'none'
    document.getElementById('htbritmcntrls39').style.display = 'none'
    document.getElementById('htbritmcntrls40').style.display = 'none'
    document.getElementById('htbritmcntrls41').style.display = 'none'
    document.getElementById('htbritmcntrls42').style.display = 'none'
    document.getElementById('htbritmcntrls43').style.display = 'flex'
    document.getElementById('htbritmcntrls44').style.display = 'none'
    var node = document.createElement('span')
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot's quickbar slot set to 8 [43]`)
    node.appendChild(textnode)
    node.style.color = '#838383'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
bgitm44.addEventListener('click',()=>{
    bot.setQuickBarSlot(8)
    document.getElementById('bgitm36').style.border = 'none'
    document.getElementById('bgitm37').style.border = 'none'
    document.getElementById('bgitm38').style.border = 'none'
    document.getElementById('bgitm39').style.border = 'none'
    document.getElementById('bgitm40').style.border = 'none'
    document.getElementById('bgitm41').style.border = 'none'
    document.getElementById('bgitm42').style.border = 'none'
    document.getElementById('bgitm43').style.border = 'none'
    document.getElementById('bgitm44').style.border = '1px solid #009FFD'
    document.getElementById('htbritmcntrls36').style.display = 'none'
    document.getElementById('htbritmcntrls37').style.display = 'none'
    document.getElementById('htbritmcntrls38').style.display = 'none'
    document.getElementById('htbritmcntrls39').style.display = 'none'
    document.getElementById('htbritmcntrls40').style.display = 'none'
    document.getElementById('htbritmcntrls41').style.display = 'none'
    document.getElementById('htbritmcntrls42').style.display = 'none'
    document.getElementById('htbritmcntrls43').style.display = 'none'
    document.getElementById('htbritmcntrls44').style.display = 'flex'
    var node = document.createElement('span')
    var textnode = document.createTextNode(`[ ${displayTime()} ] Bot's quickbar slot set to 9 [44]`)
    node.appendChild(textnode)
    node.style.color = '#838383'
    document.getElementById("actlogsmcb").appendChild(node)
    document.getElementById('actlogsmcb').scrollTop = document.getElementById('actlogsmcb').scrollHeight
})
var invitmint5 = setInterval(()=>{
    try{
        document.getElementById('itmn5').innerText = bot.inventory.slots[5].displayName
        document.getElementById('itmcnt5').innerText = `x${bot.inventory.slots[5].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint6 = setInterval(()=>{
    try{
        document.getElementById('itmn6').innerText = bot.inventory.slots[6].displayName
        document.getElementById('itmcnt6').innerText = `x${bot.inventory.slots[6].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint7 = setInterval(()=>{
    try{
        document.getElementById('itmn7').innerText = bot.inventory.slots[7].displayName
        document.getElementById('itmcnt7').innerText = `x${bot.inventory.slots[7].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint8 = setInterval(()=>{
    try{
        document.getElementById('itmn8').innerText = bot.inventory.slots[8].displayName
        document.getElementById('itmcnt8').innerText = `x${bot.inventory.slots[8].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint9 = setInterval(()=>{
    try{
        document.getElementById('itmn9').innerText = bot.inventory.slots[9].displayName
        document.getElementById('itmcnt9').innerText = `x${bot.inventory.slots[9].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint10 = setInterval(()=>{
    try{
        document.getElementById('itmn10').innerText = bot.inventory.slots[10].displayName
        document.getElementById('itmcnt10').innerText = `x${bot.inventory.slots[10].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint11 = setInterval(()=>{
    try{
        document.getElementById('itmn11').innerText = bot.inventory.slots[11].displayName
        document.getElementById('itmcnt11').innerText = `x${bot.inventory.slots[11].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint12 = setInterval(()=>{
    try{
        document.getElementById('itmn12').innerText = bot.inventory.slots[12].displayName
        document.getElementById('itmcnt12').innerText = `x${bot.inventory.slots[12].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint13 = setInterval(()=>{
    try{
        document.getElementById('itmn13').innerText = bot.inventory.slots[13].displayName
        document.getElementById('itmcnt13').innerText = `x${bot.inventory.slots[13].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint14 = setInterval(()=>{
    try{
        document.getElementById('itmn14').innerText = bot.inventory.slots[14].displayName
        document.getElementById('itmcnt14').innerText = `x${bot.inventory.slots[14].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint15 = setInterval(()=>{
    try{
        document.getElementById('itmn15').innerText = bot.inventory.slots[15].displayName
        document.getElementById('itmcnt15').innerText = `x${bot.inventory.slots[15].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint16 = setInterval(()=>{
    try{
        document.getElementById('itmn16').innerText = bot.inventory.slots[16].displayName
        document.getElementById('itmcnt16').innerText = `x${bot.inventory.slots[16].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint17 = setInterval(()=>{
    try{
        document.getElementById('itmn17').innerText = bot.inventory.slots[17].displayName
        document.getElementById('itmcnt17').innerText = `x${bot.inventory.slots[17].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint18 = setInterval(()=>{
    try{
        document.getElementById('itmn18').innerText = bot.inventory.slots[18].displayName
        document.getElementById('itmcnt18').innerText = `x${bot.inventory.slots[18].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint19 = setInterval(()=>{
    try{
        document.getElementById('itmn19').innerText = bot.inventory.slots[19].displayName
        document.getElementById('itmcnt19').innerText = `x${bot.inventory.slots[19].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint20 = setInterval(()=>{
    try{
        document.getElementById('itmn20').innerText = bot.inventory.slots[20].displayName
        document.getElementById('itmcnt20').innerText = `x${bot.inventory.slots[20].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint21 = setInterval(()=>{
    try{
        document.getElementById('itmn21').innerText = bot.inventory.slots[21].displayName
        document.getElementById('itmcnt21').innerText = `x${bot.inventory.slots[21].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint22 = setInterval(()=>{
    try{
        document.getElementById('itmn22').innerText = bot.inventory.slots[22].displayName
        document.getElementById('itmcnt22').innerText = `x${bot.inventory.slots[22].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint23 = setInterval(()=>{
    try{
        document.getElementById('itmn23').innerText = bot.inventory.slots[23].displayName
        document.getElementById('itmcnt23').innerText = `x${bot.inventory.slots[23].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint24 = setInterval(()=>{
    try{
        document.getElementById('itmn24').innerText = bot.inventory.slots[24].displayName
        document.getElementById('itmcnt24').innerText = `x${bot.inventory.slots[24].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint25 = setInterval(()=>{
    try{
        document.getElementById('itmn25').innerText = bot.inventory.slots[25].displayName
        document.getElementById('itmcnt25').innerText = `x${bot.inventory.slots[25].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint26 = setInterval(()=>{
    try{
        document.getElementById('itmn26').innerText = bot.inventory.slots[26].displayName
        document.getElementById('itmcnt26').innerText = `x${bot.inventory.slots[26].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint27 = setInterval(()=>{
    try{
        document.getElementById('itmn27').innerText = bot.inventory.slots[27].displayName
        document.getElementById('itmcnt27').innerText = `x${bot.inventory.slots[27].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint28 = setInterval(()=>{
    try{
        document.getElementById('itmn28').innerText = bot.inventory.slots[28].displayName
        document.getElementById('itmcnt28').innerText = `x${bot.inventory.slots[28].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint29 = setInterval(()=>{
    try{
        document.getElementById('itmn29').innerText = bot.inventory.slots[29].displayName
        document.getElementById('itmcnt29').innerText = `x${bot.inventory.slots[29].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint30 = setInterval(()=>{
    try{
        document.getElementById('itmn30').innerText = bot.inventory.slots[30].displayName
        document.getElementById('itmcnt30').innerText = `x${bot.inventory.slots[30].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint31 = setInterval(()=>{
    try{
        document.getElementById('itmn31').innerText = bot.inventory.slots[31].displayName
        document.getElementById('itmcnt31').innerText = `x${bot.inventory.slots[31].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint32 = setInterval(()=>{
    try{
        document.getElementById('itmn32').innerText = bot.inventory.slots[32].displayName
        document.getElementById('itmcnt32').innerText = `x${bot.inventory.slots[32].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint33 = setInterval(()=>{
    try{
        document.getElementById('itmn33').innerText = bot.inventory.slots[33].displayName
        document.getElementById('itmcnt33').innerText = `x${bot.inventory.slots[33].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint34 = setInterval(()=>{
    try{
        document.getElementById('itmn34').innerText = bot.inventory.slots[34].displayName
        document.getElementById('itmcnt34').innerText = `x${bot.inventory.slots[34].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint35 = setInterval(()=>{
    try{
        document.getElementById('itmn35').innerText = bot.inventory.slots[35].displayName
        document.getElementById('itmcnt35').innerText = `x${bot.inventory.slots[35].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint36 = setInterval(()=>{
    try{
        document.getElementById('itmn36').innerText = bot.inventory.slots[36].displayName
        document.getElementById('itmcnt36').innerText = `x${bot.inventory.slots[36].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint37 = setInterval(()=>{
    try{
        document.getElementById('itmn37').innerText = bot.inventory.slots[37].displayName
        document.getElementById('itmcnt37').innerText = `x${bot.inventory.slots[37].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint38 = setInterval(()=>{
    try{
        document.getElementById('itmn38').innerText = bot.inventory.slots[38].displayName
        document.getElementById('itmcnt38').innerText = `x${bot.inventory.slots[38].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint39 = setInterval(()=>{
    try{
        document.getElementById('itmn39').innerText = bot.inventory.slots[39].displayName
        document.getElementById('itmcnt39').innerText = `x${bot.inventory.slots[39].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint40 = setInterval(()=>{
    try{
        document.getElementById('itmn40').innerText = bot.inventory.slots[40].displayName
        document.getElementById('itmcnt40').innerText = `x${bot.inventory.slots[40].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint41 = setInterval(()=>{
    try{
        document.getElementById('itmn41').innerText = bot.inventory.slots[41].displayName
        document.getElementById('itmcnt41').innerText = `x${bot.inventory.slots[41].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint42 = setInterval(()=>{
    try{
        document.getElementById('itmn42').innerText = bot.inventory.slots[42].displayName
        document.getElementById('itmcnt42').innerText = `x${bot.inventory.slots[42].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint43 = setInterval(()=>{
    try{
        document.getElementById('itmn43').innerText = bot.inventory.slots[43].displayName
        document.getElementById('itmcnt43').innerText = `x${bot.inventory.slots[43].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint44 = setInterval(()=>{
    try{
        document.getElementById('itmn44').innerText = bot.inventory.slots[44].displayName
        document.getElementById('itmcnt44').innerText = `x${bot.inventory.slots[44].count}`
    }catch(error){
        console.log()
    }
},10)
var invitmint45 = setInterval(()=>{
    try{
        document.getElementById('itmn45').innerText = bot.inventory.slots[45].displayName
        document.getElementById('itmcnt45').innerText = `x${bot.inventory.slots[45].count}`
    }catch(error){
        console.log()
    }
},10)
setInterval(()=>{
    document.getElementById('itmn5').innerText = ''
    document.getElementById('itmn6').innerText = ''
    document.getElementById('itmn7').innerText = ''
    document.getElementById('itmn8').innerText = ''
    document.getElementById('itmn9').innerText = ''
    document.getElementById('itmn10').innerText = ''
    document.getElementById('itmn11').innerText = ''
    document.getElementById('itmn12').innerText = ''
    document.getElementById('itmn13').innerText = ''
    document.getElementById('itmn14').innerText = ''
    document.getElementById('itmn15').innerText = ''
    document.getElementById('itmn16').innerText = ''
    document.getElementById('itmn17').innerText = ''
    document.getElementById('itmn18').innerText = ''
    document.getElementById('itmn19').innerText = ''
    document.getElementById('itmn20').innerText = ''
    document.getElementById('itmn21').innerText = ''
    document.getElementById('itmn22').innerText = ''
    document.getElementById('itmn23').innerText = ''
    document.getElementById('itmn24').innerText = ''
    document.getElementById('itmn25').innerText = ''
    document.getElementById('itmn26').innerText = ''
    document.getElementById('itmn27').innerText = ''
    document.getElementById('itmn28').innerText = ''
    document.getElementById('itmn29').innerText = ''
    document.getElementById('itmn30').innerText = ''
    document.getElementById('itmn31').innerText = ''
    document.getElementById('itmn32').innerText = ''
    document.getElementById('itmn33').innerText = ''
    document.getElementById('itmn34').innerText = ''
    document.getElementById('itmn35').innerText = ''
    document.getElementById('itmn36').innerText = ''
    document.getElementById('itmn37').innerText = ''
    document.getElementById('itmn38').innerText = ''
    document.getElementById('itmn39').innerText = ''
    document.getElementById('itmn40').innerText = ''
    document.getElementById('itmn41').innerText = ''
    document.getElementById('itmn42').innerText = ''
    document.getElementById('itmn43').innerText = ''
    document.getElementById('itmn44').innerText = ''
    document.getElementById('itmn45').innerText = ''
    document.getElementById('itmcnt5').innerText = ''
    document.getElementById('itmcnt6').innerText = ''
    document.getElementById('itmcnt7').innerText = ''
    document.getElementById('itmcnt8').innerText = ''
    document.getElementById('itmcnt9').innerText = ''
    document.getElementById('itmcnt10').innerText = ''
    document.getElementById('itmcnt11').innerText = ''
    document.getElementById('itmcnt12').innerText = ''
    document.getElementById('itmcnt13').innerText = ''
    document.getElementById('itmcnt14').innerText = ''
    document.getElementById('itmcnt15').innerText = ''
    document.getElementById('itmcnt16').innerText = ''
    document.getElementById('itmcnt17').innerText = ''
    document.getElementById('itmcnt18').innerText = ''
    document.getElementById('itmcnt19').innerText = ''
    document.getElementById('itmcnt20').innerText = ''
    document.getElementById('itmcnt21').innerText = ''
    document.getElementById('itmcnt22').innerText = ''
    document.getElementById('itmcnt23').innerText = ''
    document.getElementById('itmcnt24').innerText = ''
    document.getElementById('itmcnt25').innerText = ''
    document.getElementById('itmcnt26').innerText = ''
    document.getElementById('itmcnt27').innerText = ''
    document.getElementById('itmcnt28').innerText = ''
    document.getElementById('itmcnt29').innerText = ''
    document.getElementById('itmcnt30').innerText = ''
    document.getElementById('itmcnt31').innerText = ''
    document.getElementById('itmcnt32').innerText = ''
    document.getElementById('itmcnt33').innerText = ''
    document.getElementById('itmcnt34').innerText = ''
    document.getElementById('itmcnt35').innerText = ''
    document.getElementById('itmcnt36').innerText = ''
    document.getElementById('itmcnt37').innerText = ''
    document.getElementById('itmcnt38').innerText = ''
    document.getElementById('itmcnt39').innerText = ''
    document.getElementById('itmcnt40').innerText = ''
    document.getElementById('itmcnt41').innerText = ''
    document.getElementById('itmcnt42').innerText = ''
    document.getElementById('itmcnt43').innerText = ''
    document.getElementById('itmcnt44').innerText = ''
    document.getElementById('itmcnt45').innerText = ''
},1000)
for (let i = 5; i <= 35; i++) {
    let button = document.getElementById(`bgitm${i}`);
    button.addEventListener("dblclick", function() {
        var x = document.getElementById('htbrsndslt').value;
        bot.moveSlotItem(i,x)
    });
}
actbtnthrwall.addEventListener('click',()=>{
    const items = bot.inventory.items();
    for(let i = 0; i < items.length; i++){
        setTimeout(() => {
            bot.tossStack(items[i]);
        }, i * 1000);
    }
})
itm36htbract.addEventListener('click',()=>{
    bot.activateItem()
})
itm37htbract.addEventListener('click',()=>{
    bot.activateItem()
})
itm38htbract.addEventListener('click',()=>{
    bot.activateItem()
})
itm39htbract.addEventListener('click',()=>{
    bot.activateItem()
})
itm40htbract.addEventListener('click',()=>{
    bot.activateItem()
})
itm41htbract.addEventListener('click',()=>{
    bot.activateItem()
})
itm42htbract.addEventListener('click',()=>{
    bot.activateItem()
})
itm43htbract.addEventListener('click',()=>{
    bot.activateItem()
})
itm44htbract.addEventListener('click',()=>{
    bot.activateItem()
})
var items = bot.inventory.slots;
itm36htbrthr.addEventListener('click',()=>{
    bot.tossStack(items[36])
})
itm37htbrthr.addEventListener('click',()=>{
    bot.tossStack(items[37])
})
itm38htbrthr.addEventListener('click',()=>{
    bot.tossStack(items[38])
})
itm39htbrthr.addEventListener('click',()=>{
    bot.tossStack(items[39])
})
itm40htbrthr.addEventListener('click',()=>{
    bot.tossStack(items[40])
})
itm41htbrthr.addEventListener('click',()=>{
    bot.tossStack(items[41])
})
itm42htbrthr.addEventListener('click',()=>{
    bot.tossStack(items[42])
})
itm43htbrthr.addEventListener('click',()=>{
    bot.tossStack(items[43])
})
itm44htbrthr.addEventListener('click',()=>{
    bot.tossStack(items[44])
})
setInterval(()=>{
    var x = document.getElementById('htbrsndslt').value;
    document.getElementById('isrnvgtr').innerText = `Double Click to select item [${x}]`
},200)
bot.on('windowOpen', ()=>{
    document.getElementById('blobwinmcbt').style.backgroundColor = '#50C878'
})
bot.on('windowClose', ()=>{
    document.getElementById('blobwinmcbt').style.backgroundColor = '#e05a00'
})
const wv = document.getElementById('windowopt').value
lclkbtnw.addEventListener('click', ()=>{
    bot.clickWindow(wv,0,0)
})
rclkbtnw.addEventListener('click', ()=>{
    bot.clickWindow(wv,1,0)
})
mainwinclsbtnmcbn.addEventListener('click',()=>{
    bot.closeWindow(window)
})
gotocordsmbtn.addEventListener('click',()=>{
    if(document.getElementById('xcordsval').value === ''){
        document.getElementById('xcordsval').style.border = '1px solid #ff5555'
    }
    if(document.getElementById('zcordsval').value === ''){
        document.getElementById('zcordsval').style.border = '1px solid #ff5555'
    }
    document.getElementById('botcntrlcordsind').style.backgroundColor = '#50C878'
    var xcrds = document.getElementById('xcordsval').value
    var ycrds = document.getElementById('ycordsval').value
    var zcrds = document.getElementById('zcordsval').value
    bot.waitForChunksToLoad()
    const defaultMove = new Movements(bot)
    bot.pathfinder.setMovements(defaultMove)
    bot.pathfinder.setGoal(new GoalNear(xcrds, ycrds, zcrds, 1)) 
})
/*
bot.on('goal_reached',()=>{
    document.getElementById('botcntrlcordsind').style.backgroundColor = '#e05a00'
    console.log('reached')
})
*/
gotocordsmbtnstop.addEventListener('click',()=>{
    bot.pathfinder.stop()
    document.getElementById('botcntrlcordsind').style.backgroundColor = '#e05a00'
})
north.addEventListener('click',()=>{
    bot.look(0,0)
    document.getElementById('north').style.backgroundColor = '#045DE9'
    document.getElementById('south').style.backgroundColor = '#202020'
    document.getElementById('east').style.backgroundColor = '#202020'
    document.getElementById('west').style.backgroundColor = '#202020'
})
south.addEventListener('click',()=>{
    bot.look(3,0)
    document.getElementById('north').style.backgroundColor = '#202020'
    document.getElementById('south').style.backgroundColor = '#045DE9'
    document.getElementById('east').style.backgroundColor = '#202020'
    document.getElementById('west').style.backgroundColor = '#202020'
})
east.addEventListener('click',()=>{
    bot.look(-1.5,0)
    document.getElementById('north').style.backgroundColor = '#202020'
    document.getElementById('south').style.backgroundColor = '#202020'
    document.getElementById('east').style.backgroundColor = '#045DE9'
    document.getElementById('west').style.backgroundColor = '#202020'
})
west.addEventListener('click',()=>{
    bot.look(1.5,0)
    document.getElementById('north').style.backgroundColor = '#202020'
    document.getElementById('south').style.backgroundColor = '#202020'
    document.getElementById('east').style.backgroundColor = '#202020'
    document.getElementById('west').style.backgroundColor = '#045DE9'
})
var checkboxlllk = document.getElementById('sprnt');
mainstrtbtnwlk.addEventListener('click',()=>{
    if (checkboxlllk.checked) {
        bot.setControlState('sprint',true)
        bot.setControlState('forward',true)
        document.getElementById('blobwinmcbtgtp').style.backgroundColor = '#50C878'
    }
    else {
        bot.setControlState('sprint',false)
        bot.setControlState('forward',true)
        document.getElementById('blobwinmcbtgtp').style.backgroundColor = '#50C878'
    }
})
mainstomvmntbtn.addEventListener('click',()=>{
    bot.setControlState('forward',false)
    bot.setControlState('sprint',false)
    document.getElementById('blobwinmcbtgtp').style.backgroundColor = '#e05a00'
})
var checkbox = document.getElementById('afktglswtchmcb');
checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    bot.afk.start();
    document.getElementById('blobwinmcbtafk').style.backgroundColor = '#50C878'
  } else {
    bot.afk.stop();
    document.getElementById('blobwinmcbtafk').style.backgroundColor = '#e05a00'
  }
});
var players = {};

bot.on('playerJoined', (player) => {
  var node = document.createElement('div');
  var textnode = document.createTextNode(player.displayName);
  node.appendChild(textnode);
  document.getElementById("actplrttllstmcfnc").appendChild(node);
  players[player.displayName] = node;
  document.getElementById('actplrttllstmcfnc').scrollTop = document.getElementById('actplrttllstmcfnc').scrollHeight
});
bot.on('playerLeft', (player) => {
  var playerDiv = players[player.displayName];
  playerDiv.style.color = "#ff5555";
});
let show = true
var checkboxbln = document.getElementById('blnkr');
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
        } 
        else {
            clearInterval(stintl)
        }
    },500)
});
var checkboxlllk = document.getElementById('looker');
checkboxlllk.addEventListener('change', function () {
   var stintl1 = setInterval(()=>{
  if (checkboxlllk.checked) {
    const entity = bot.nearestEntity()
    bot.lookAt(entity.position.offset(0, 1.6, 0))
  }
  else {
    clearInterval(stintl1)
  }
},30)
});
var checkboxarmr = document.getElementById('armrfnc');
checkboxarmr.addEventListener('change', function () {
    var ints = setInterval(()=>{
  if (checkboxarmr.checked) {
    const helmet = bot.inventory.items().find(item => item.name.includes('helmet'))
    if(helmet) bot.equip(helmet, 'head')
    if(!helmet) console.log('no helmet')
    const chestplate = bot.inventory.items().find(item => item.name.includes('chestplate'))
    if(chestplate) bot.equip(chestplate, 'torso')
    if(!chestplate) console.log('no chestplate')
    const legs = bot.inventory.items().find(item => item.name.includes('leggings'))
    if(legs) bot.equip(legs, 'legs')
    if(!legs) console.log('no leggings')
    const feet = bot.inventory.items().find(item => item.name.includes('boots'))
    if(feet) bot.equip(feet,'feet')
    if(!feet) console.log('no boots')
  }
  else {
    clearInterval(ints)
  }
},200)
});
flestrtbtn.addEventListener('click',()=>{
    console.log('okok')
    var plrvaltflw = document.getElementById('plrttltflw').value;
    var stintl123 = setInterval(()=>{
            var offset = 0;
            bot.direction = Math.PI*2/1;
            let boss = bot.players[plrvaltflw];
            //Abort if the boss is not on the server
            if (!boss) {
                document.getElementById('blobwinmcbtplr').style.backgroundColor = '#ff5555'
                return;
            }
            boss = boss.entity;
            if (!boss) {
                document.getElementById('blobwinmcbtplr').style.backgroundColor = '#ff5555'
                return;
            }
            document.getElementById('actclrofaihndlr').style.backgroundColor = '#50C878'
            var rndaihndlr = Math.floor(Math.random() * (100 - 75 + 1) + 75);
            document.getElementById('actclrofaihndlr').style.width = `${rndaihndlr}%`
            document.getElementById('blobwinmcbtplr').style.backgroundColor = '#50C878'
            offset = boss.yaw;
            let location;
                let x = Math.sin(bot.direction+offset)*4;
                let z = Math.cos(bot.direction+offset)*4;
                location = boss.position.offset(x, 1.6, z);
            
            bot.lookAt(location);
            if (bot.entity.position.xzDistanceTo(location) > 4) {
                bot.setControlState('forward', true);
                bot.setControlState('sprint', true);
                bot.setControlState('jump', bot.entity.isCollidedHorizontally);
            }
    },100)
    flwstpbtn.addEventListener('click',()=>{
        clearInterval(stintl123)
        document.getElementById('actclrofaihndlr').style.backgroundColor = '#e05a00'
        var rndslc = ['40','45','35','50'];
        var randomIndex = Math.floor(Math.random() * rndslc.length);
        var randomValue = rndslc[randomIndex];
        document.getElementById('actclrofaihndlr').style.width = `${randomValue}%`
        document.getElementById('blobwinmcbtplr').style.backgroundColor = '#e05a00'
        bot.setControlState('forward', false);
        bot.setControlState('sprint', false);
        bot.setControlState('jump', false);
    })
})

strtbtnfrmraifnc.addEventListener('click',()=>{
    const mainintval = document.getElementById('intrvlfrmaibfnc').value;
    if(mainintval === ''){
        document.getElementById('intrvlfrmaibfnc').style.border = '1px solid #ff5555'
    }
    if(mainintval !== ''){
        document.getElementById('blobwinmcbtplrfrmr').style.backgroundColor = '#50C878'
        document.getElementById('intrvlfrmaibfnc').style.border = '1px solid #262626'
    if(document.getElementById('crptpmcfrmai').value === 'wheat'){
        intrtclr = setInterval(() => {
            mainwheatfrmr()
        }, mainintval);
    }
    if(document.getElementById('crptpmcfrmai').value === 'carrot'){
        intrtclr = setInterval(() => {
            maincarrotfarmerai()
        }, mainintval);
    }
}
})

stpbtnfrmraifnc.addEventListener('click',()=>{
    document.getElementById('blobwinmcbtplrfrmr').style.backgroundColor = '#e05a00'
    document.getElementById('mindctrsds1').style.backgroundColor = 'transparent'
    document.getElementById('mindctrsds').style.backgroundColor = 'transparent'
    clearInterval(intrtclr)
})
async function mainwheatfrmr() {
    if(bot.heldItem !== 'wheat_seeds'){
		var crttf = bot.inventory.findInventoryItem('wheat_seeds')
		if(crttf){
            document.getElementById('mindctrsds').style.backgroundColor = '#50C878'
			bot.equip(crttf, "hand", function(err) {
				if (err) {
                    document.getElementById('mindctrsds').style.backgroundColor = '#0e5a00'
				} else {
                    document.getElementById('mindctrsds').style.backgroundColor = '#50C878'
				}
			  });
		} if(!crttf){
            document.getElementById('mindctrsds').style.backgroundColor = '#ff5555'
		    return;
		}
	}
	let blocktoharvest = bot.findBlock({
		matching: (block)=>{
			return(block.name === 'wheat' && block.metadata === 7)
		}
	})
	if(blocktoharvest){
			const defaultMove = new Movements(bot)
			  bot.pathfinder.setMovements(defaultMove)
			bot.pathfinder.setGoal(new GoalNear(blocktoharvest.position.x,blocktoharvest.position.y,blocktoharvest.position.z,0));
			await bot.dig(blocktoharvest);
			let itemEntity = bot.nearestEntity((entity)=>{
				return entity.name.toLowerCase() === 'wheat'
			});
			if (itemEntity) {
			const defaultMove = new Movements(bot)
			bot.pathfinder.setMovements(defaultMove)
			bot.pathfinder.setGoal(new GoalNear(itemEntity.position.x,itemEntity.position.y,itemEntity.position.z,0));
			await bot.waitForTicks(1);
			}
			let dirt = bot.blockAt(blocktoharvest.position.offset(0, -1, 0));
			await bot.activateBlock(dirt, vec3(0, 1, 0)).catch(console.log);
	}
	if(!blocktoharvest){
		console.log('nbth')
	}
	let farmBlocks = bot.findBlocks({
		matching: (block)=>{
			return block.name === "farmland";
		},
		count: 100,
		maxDistance: 20,
	});
	let vacant = farmBlocks.find(position=>{
		let topBlock = bot.blockAt(position.offset(0, 1, 0));
		return topBlock.name === "air" || topBlock.name === "cave_air";
	});
	if (!vacant){
        document.getElementById('mindctrsds1').style.backgroundColor = '#e05a00'
		return;
	}
	if(vacant){
        document.getElementById('mindctrsds1').style.backgroundColor = '#50c878'
		const defaultMove = new Movements(bot)
    	bot.pathfinder.setMovements(defaultMove)
		bot.pathfinder.setGoal(new GoalNear(vacant.x,vacant.y+1,vacant.z,0));
		await bot.activateBlock(bot.blockAt(vacant.offset(0,1,0)), vec3(0, 1, 0)).catch(console.log);
		
	}
}
async function maincarrotfarmerai() {
	if(bot.heldItem !== 'carrot'){
		var crttf = bot.inventory.findInventoryItem('carrot')
		if(crttf){
            document.getElementById('mindctrsds').style.backgroundColor = '#50C878'
			bot.equip(crttf, "hand", function(err) {
				if (err) {
                    document.getElementById('mindctrsds').style.backgroundColor = '#0e5a00'
				} else {
                    document.getElementById('mindctrsds').style.backgroundColor = '#50C878'
				}
			  });
		} if(!crttf) {
            document.getElementById('mindctrsds').style.backgroundColor = '#ff5555'
		    return;
		}
	}
	let blocktoharvest = bot.findBlock({
		matching: (block)=>{
			return(block.name === 'carrots' && block.metadata === 7)
		}
	})
	if(blocktoharvest){
			const defaultMove = new Movements(bot)
			  bot.pathfinder.setMovements(defaultMove)
			bot.pathfinder.setGoal(new GoalNear(blocktoharvest.position.x,blocktoharvest.position.y,blocktoharvest.position.z,0));
			await bot.dig(blocktoharvest);
			let itemEntity = bot.nearestEntity((entity)=>{
				return entity.name.toLowerCase() === 'carrot'
			});
			if (itemEntity) {
			const defaultMove = new Movements(bot)
			bot.pathfinder.setMovements(defaultMove)
			bot.pathfinder.setGoal(new GoalNear(itemEntity.position.x,itemEntity.position.y,itemEntity.position.z,0));
			await bot.waitForTicks(1);
			}
			let dirt = bot.blockAt(blocktoharvest.position.offset(0, -1, 0));
			await bot.activateBlock(dirt, vec3(0, 1, 0)).catch(console.log);
	}
	if(!blocktoharvest){
		console.log('nbth')
	}
	let farmBlocks = bot.findBlocks({
		matching: (block)=>{
			return block.name === "farmland";
		},
		count: 128,
		maxDistance: 20,
	});
	let vacant = farmBlocks.find(position=>{
		let topBlock = bot.blockAt(position.offset(0, 1, 0));
		return topBlock.name === "air" || topBlock.name === "cave_air";
	});
	if (!vacant){
        document.getElementById('mindctrsds1').style.backgroundColor = '#e05a00'
		return;
	}
	if(vacant){
        document.getElementById('mindctrsds1').style.backgroundColor = '#50C878'
		const defaultMove = new Movements(bot)
    	bot.pathfinder.setMovements(defaultMove)
		bot.pathfinder.setGoal(new GoalNear(vacant.x,vacant.y+1,vacant.z,0));
		await bot.activateBlock(bot.blockAt(vacant.offset(0,1,0)), vec3(0, 1, 0)).catch(console.log);
		
	}
}
let value12;
let guardPos1
const mantglswtc = document.getElementById('inpdifint')
mantglswtc.addEventListener('change',()=>{
    const mdvl = document.getElementById('mainvaltrdb')
    value12 = parseInt(mdvl.textContent);
    if(mantglswtc.checked){
    document.getElementById('mainblroclr').style.backgroundColor = '#e05a00'
    document.getElementById('mainblroclr1').style.backgroundColor = '#e05a00'
    const shield = bot.inventory.items().find(item => item.name.includes('shield'))
    if(shield) {
        document.getElementById('mainblroclr1').style.backgroundColor = '#50C878'
        bot.equip(shield, 'off-hand')
        document.getElementById('mainblroclr1').style.backgroundColor = '#50C878'
    }
    if(!shield){
        document.getElementById('mainblroclr1').style.backgroundColor = '#e05a00'
    }
    const axe = bot.inventory.items().find(item => item.name.includes('axe'))
    if(axe) {
        document.getElementById('mainblroclr').style.backgroundColor = '#50C878'
        bot.equip(axe, 'hand')
    }
    if(!axe){
        document.getElementById('mainblroclr').style.backgroundColor = '#e05a00'
    }
    const sword = bot.inventory.items().find(item => item.name.includes('sword'))
    if(sword) {
        document.getElementById('mainblroclr').style.backgroundColor = '#50C878'
        bot.equip(sword, 'hand')
    }
    if(!sword){
        document.getElementById('mainblroclr').style.backgroundColor = '#e05a00'
    }
    const posi = bot.entity.position
    guardPos1 = posi.clone()
    document.getElementById('blobwinmcgrd').style.backgroundColor = '#50C878'
    if (!bot.pvp.target) {
      const mcData = require('minecraft-data')(bot.version)
      bot.pathfinder.setMovements(new Movements(bot, mcData))
      bot.pathfinder.setGoal(new goals.GoalBlock(guardPos1.x, guardPos1.y, guardPos1.z))
    }
    var inmaingrd = setInterval(() => {
      const entity1 = bot.nearestEntity()
      //if (entity1) bot.lookAt(entity1.position.offset(0, entity1.height, 0))
      if (!guardPos1) return
    
      const filter = e => e.type === 'mob' && e.position.distanceTo(bot.entity.position) < value12 && e.mobType !== 'Armor Stand' && e.mobType !== 'Bat' && e.mobType !== 'Cat' && e.mobType !== 'Chicken' && e.mobType !== 'Cow' && e.mobType !== 'Donkey' && e.mobType !== 'Fish' && e.mobType !== 'Horse' && e.mobType !== 'Llama' && e.mobType !== 'Mooshroom' && e.mobType !== 'Mule' && e.mobType !== 'Ocelot' && e.mobType !== 'Panda' && e.mobType !== 'Parrot' && e.mobType !== 'Pig' && e.mobType !== 'Pufferfish' && e.mobType !== 'Rabbit' && e.mobType !== 'Salmon' && e.mobType !== 'Sheep' && e.mobType !== 'Squid' && e.mobType !== 'Strider' && e.mobType !== 'Trader Llama' && e.mobType !== 'Tropical Fish' && e.mobType !== 'Villager' && e.mobType !== 'Axolotl';
  
      const entity = bot.nearestEntity(filter)
      if (entity) {
        const axe = bot.inventory.items().find(item => item.name.includes('axe'))
        if(axe) {
            document.getElementById('mainblroclr').style.backgroundColor = '#50C878'
            bot.equip(axe, 'hand')
        }
        if(!axe){
            document.getElementById('mainblroclr').style.backgroundColor = '#e05a00'
        }
        const sword = bot.inventory.items().find(item => item.name.includes('sword'))
        if(sword) {
            document.getElementById('mainblroclr').style.backgroundColor = '#50C878'
            bot.equip(sword, 'hand')
        }
        if(!sword){
            document.getElementById('mainblroclr').style.backgroundColor = '#e05a00'
        }
        bot.pvp.attack(entity)
      }
      if(!entity){
      const mcData = require('minecraft-data')(bot.version)
      bot.pathfinder.setMovements(new Movements(bot, mcData))
      bot.pathfinder.setGoal(new goals.GoalBlock(guardPos1.x, guardPos1.y, guardPos1.z))
      }
    }, 2000);
    }
    else{
        clearInterval(inmaingrd)
        guardPos1 = null
        bot.pvp.stop()
        document.getElementById('blobwinmcgrd').style.backgroundColor = '#e05a00'
        document.getElementById('mainblroclr1').style.backgroundColor = 'transparent'
        document.getElementById('mainblroclr').style.backgroundColor = 'transparent'
        bot.pathfinder.setGoal(null)
        
    }
})
let stintttl;
const atmttm22 = document.getElementById('atmttm');
atmttm22.addEventListener('change',()=>{
    if(atmttm22.checked){
        stintttl = setInterval(() => {
            const totem = bot.inventory.items().find(item => item.name.includes('totem'))
            if(totem){
                bot.equip(totem,'off-hand')
            }
        }, 1000);
    }
    else{
        clearInterval(stintttl)
    }
})
const foodNames = ['apple','baked_potato','beetroot','bread','carrot','cooked_chicken','cooked_cod','cooked_mutton','cooked_porkchop','cooked_rabbit','cooked_salmon','cookie','dried_kelp','golden_apple','golden_carrot','honey_bottle','melon_slice','mushroom_stew','mutton','poisonous_potato','porkchop','potato','rabbit','rabbit_stew','beetroot_soup','salmon','cooked_beef','cooked_porkchop','beef']

let stintttl1;
const atmttm221 = document.getElementById('atmeat');
atmttm221.addEventListener('change',()=>{
    if(atmttm221.checked){
        stintttl1 = setInterval(() => {
            if(bot.food < 20){
                const eatitm1 = bot.inventory.items().find(itms1=> foodNames.includes(itms1.name))
                if(eatitm1){
                    bot.equip(eatitm1, 'hand')
                    setTimeout(() => {
                        bot.activateItem()
                    }, 100);
                }
            }
        }, 1000);
    }
    else{
        clearInterval(stintttl1)
    }
})

const mswtchslp = document.getElementById('slp');
mswtchslp.addEventListener('change',()=>{
    if(mswtchslp.checked){
        const timetosleep = bot.time.timeOfDay;
        if(timetosleep >= 13000 && timetosleep < 23000){
        const bed = bot.findBlock({matching: block => bot.isABed(block),maxDistance: 10})
        if(bed){
            try {
                bot.sleep(bed).catch(async (err)=>{
                  const mcData = require('minecraft-data')(bot.version)
                  bot.pathfinder.setMovements(new Movements(bot, mcData))
                  bot.pathfinder.setGoal(new goals.GoalBlock(bed.position.x-1, bed.position.y, bed.position.z-1))
                  
                  const onGoalReached = () => {
                    bot.lookAt(bed.position.offset(0.5, 0, 0.5));
                    bot.sleep(bed)
                    bot.removeListener('goal_reached', onGoalReached);
                  };
              
                  bot.once('goal_reached', onGoalReached);
                })
              } catch (err) {
                console.log(err)
              }
        }
        if(!bed){
            console.log('no bed found')
        }
            
        }
        else{
            setTimeout(() => {
                const switchElement = document.getElementById('slp');
                switchElement.checked = false;
            }, 500);
        }
    }
    else{
        bot.wake()
    }
})
bot.on('sleep',()=>{
    console.log('bot sleeping')
})
bot.on('wake',()=>{
    const switchElement = document.getElementById('slp');
    switchElement.checked = false;
})
let btntostrtcndtns;
let btntostrtcndtns1;
actbtntexeplr.addEventListener('click',()=>{
    const plrtexe = document.getElementById('plrtkill').value;
    if(plrtexe === ''){
        document.getElementById('plrtkill').style.border = '1px solid #ff5555'
    }
    else{
        document.getElementById('plrtkill').style.border = '1px solid #262626'
        const playertpvp = bot.players[plrtexe]
        if(!playertpvp){
            document.getElementById('blobwinmcbtplrpvp').style.backgroundColor = '#ff5555'
        }
        if(playertpvp){
            document.getElementById('blobwinmcbtplrpvp').style.backgroundColor = '#e05a00'
            document.getElementById('mainindcarmr').style.backgroundColor = '#e05a00'
            const helmet = bot.inventory.items().find(item => item.name.includes('helmet'))
            const chestplate = bot.inventory.items().find(item => item.name.includes('chestplate'))
            const legs = bot.inventory.items().find(item => item.name.includes('leggings'))
            const feet = bot.inventory.items().find(item => item.name.includes('boots'))
            const axe = bot.inventory.items().find(item => item.name.includes('axe'))
            const sword = bot.inventory.items().find(item => item.name.includes('sword'))
            const shield = bot.inventory.items().find(item => item.name.includes('shield'))
            //document.getElementById('mainindcarmr').style.backgroundColor = '#ff5555'
            var maininttclehehe = setInterval(() => {

                if(bot.inventory.slots[5] === null && helmet){
                    try{
                        bot.equip(helmet,'head')
                    }
                    catch(err){
                        console.log(err)
                    }
                  }
                  if(bot.inventory.slots[6] === null && chestplate){
                    try{bot.equip(chestplate, 'torso')}
                    catch(err){console.log(err)}
                  }
                  if(bot.inventory.slots[7] === null && legs){
                     try{bot.equip(legs, 'legs')}
                     catch(err){console.log(err)}
                  }
                  if(bot.inventory.slots[8] === null && feet){
                    try{bot.equip(feet,'feet')}
                    catch(err){console.log(err)}
                }
            const rlhlmchk211 = bot.inventory.slots[5] !== null
            const rlhlmchk11 = bot.inventory.slots[6] !== null 
            const rlhlmchk21 = bot.inventory.slots[7] !== null
            const rlhlmchk31 = bot.inventory.slots[8] !== null
            if(rlhlmchk211&&rlhlmchk11&&rlhlmchk21&&rlhlmchk31){
              console.log('armr cmplt')
              document.getElementById('mainindcarmr').style.backgroundColor = '#50C878'
              clearInterval(maininttclehehe)
              btntostrtcndtns = 'armor completed'

            }
            }, 400);
            
            const rlhlmchk211 = bot.inventory.slots[5] !== null
            const rlhlmchk11 = bot.inventory.slots[6] !== null 
            const rlhlmchk21 = bot.inventory.slots[7] !== null
            const rlhlmchk31 = bot.inventory.slots[8] !== null
            if(rlhlmchk211&&rlhlmchk11&&rlhlmchk21&&rlhlmchk31){
                btntostrtcndtns = 'armor completed'
                document.getElementById('mainindcarmr').style.backgroundColor = '#50C878'
                console.log('isk y tho')
                clearInterval(maininttclehehe)
              setTimeout(() => {
                clearInterval(maininttclehehe)
              }, 100);setTimeout(() => {
                clearInterval(maininttclehehe)
              }, 200);

            }else{
                document.getElementById('mainindcarmr').style.backgroundColor = '#ff5555'
                btntostrtcndtns = 'no armor completed'
            }
            if(sword){
                bot.equip(sword, 'hand')
                document.getElementById('mainindwpns').style.backgroundColor = '#50C878'
                btntostrtcndtns1 = 'wpn completed'
            }
            if(axe){
                bot.equip(axe, 'hand')
                document.getElementById('mainindwpns').style.backgroundColor = '#50C878'
                btntostrtcndtns1 = 'wpn completed'
            }
            if(shield){
                bot.equip(shield,"off-hand")
                btntostrtcndtns1 = 'wpn completed'
            }
            if(!axe && !sword){
                document.getElementById('mainindwpns').style.backgroundColor = '#ff5555'
                return;
            }


            if(btntostrtcndtns1 === 'wpn completed' && btntostrtcndtns === 'armor completed' ){
                console.log('kokoi')
                document.getElementById('blobwinmcbtplrpvp').style.backgroundColor = '#50C878'
                bot.pvp.attack(playertpvp.entity)
            }
        }
    }
})
actstpbtntexe.addEventListener('click',()=>{
    bot.pvp.stop()
    document.getElementById('mainindcarmr').style.backgroundColor = 'transparent'
    document.getElementById('mainindwpns').style.backgroundColor = 'transparent'
    document.getElementById('blobwinmcbtplrpvp').style.backgroundColor = '#e05a00'
})
}//----------------------------------------------------------------------------------------------------------------

async function rsnfnc(){
    console.log('restarted')
    setTimeout(() => {
        join()
    }, 3000);
}


function saveInputValue() {
    const input = document.getElementById('hostin')
    localStorage.setItem('inputValue', input.value);
    const input1 = document.getElementById('portin')
    localStorage.setItem('inputValue1', input1.value);
    const input2 = document.getElementById('userin')
    localStorage.setItem('inputValue2', input2.value);
  }
  
  // Retrieve the value of the input field from localStorage
  function getInputValue() {
    const input = document.getElementById('hostin');
    input.value = localStorage.getItem('inputValue') || '';
    const input1 = document.getElementById('portin');
    input1.value = localStorage.getItem('inputValue1') || '';
    const input2 = document.getElementById('userin');
    input2.value = localStorage.getItem('inputValue2') || '';
  }
  
  // Save the input value when the user clicks the save button
  const saveButton = document.getElementById('actbtnrccjn');
  saveButton.addEventListener('click', saveInputValue);
  
  // Retrieve the input value when the page loads
  window.addEventListener('load', getInputValue);

  const select = document.getElementById("authin");
select.addEventListener("change", function() {
  if(select.value === 'cracked'){
    document.getElementById('userin').placeholder = "Bot's username"
    document.getElementById('userttl').innerText = 'USERNAME'
    document.getElementById('psswrdhder').style.display = 'flex'
    document.getElementById('passin').value = ''
  }
  if(select.value === 'premium'){
    document.getElementById('userttl').innerText = 'EMAIL'
    document.getElementById('userin').placeholder = 'Microsoft email'
    document.getElementById('psswrdhder').style.display = 'none'
  }
});

function saveInputsToTextFile() {
    // Get the input field values
    const input1 = document.getElementById("hostin").value;
    const input2 = document.getElementById("portin").value;
    const input3 = document.getElementById("userin").value;
  
    // Format the input field values as a string
    const textToSave = `Host: ${input1}\nPort: ${input2}\nUsername: ${input3}`;
        
    const folderPath = './Bot-Info';

  // Use the `fs` module to create the folder
    fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      alert("An error occurred creating the folder: " + err.message);
      return;
    }
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();
    let currentDate = `${day}-${month}-${year}-${hour}-${minute}-${sec}`;

    const filePath = `${folderPath}/inputss(${currentDate}).json`;
    fs.writeFile(filePath, textToSave, (err) => {
      if(err) {
        alert("An error occurred creating the file: " + err.message);
        return;
      }
      alert("The file has been successfully saved!");
    });
  });
}
  
mcsingle.addEventListener('click',()=>{
    ipc.send('minecraft')
})
disc.addEventListener('click',()=>{
    ipc.send('discord')
})
settings.addEventListener('click',()=>{
    ipc.send('settings')
})


const toggleSwitch = document.getElementById('afkswtdrml');

const prevState = localStorage.getItem('toggleState');

toggleSwitch.checked = prevState === 'true';

ipc.send('toggle-state-changed', toggleSwitch.checked);
toggleSwitch.addEventListener('change', (event) => {
  localStorage.setItem('toggleState', event.target.checked);
});



actmvbtntr.addEventListener('click',()=>{
  ipc.send('apprstevnt')  
})