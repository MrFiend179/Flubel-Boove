console.log('ola2')

const mcsb = document.getElementById('mcsingle')
mcsb.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('iconmc').style.fill = 'white'
})
mcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('iconmc').style.fill = '#999999'
})
const dcsb= document.getElementById('disc')
dcsb.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('discbtn').style.fill = 'white'
})
dcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('discbtn').style.fill = '#999999'
})
const stsb= document.getElementById('settings')
stsb.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('stngs').style.fill = 'white'
})
stsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('stngs').style.fill = '#999999'
})

const minbtn = document.getElementById('minimizeApp')
minbtn.addEventListener('mouseover', function handleMouseOver(){
    minbtn.style.backgroundColor = 'rgb(75, 75, 75)'
    document.getElementById('mbtnicn').style.fill = 'white'
    document.getElementById('mbtnicn').style.stroke = 'white'
})
minbtn.addEventListener('mouseout', function handleMouseOut(){
    minbtn.style.backgroundColor = 'transparent'
    document.getElementById('mbtnicn').style.fill = '#7F8487'
    document.getElementById('mbtnicn').style.stroke = '#7F8487'
})
const clsbtn = document.getElementById('closeBtn')
clsbtn.addEventListener('mouseover', function handleMouseOver(){
    clsbtn.style.backgroundColor = '#cc2929'
    document.getElementById('cbtnicn').style.fill = 'white'
    document.getElementById('cbtnicn').style.stroke = 'white'
})
clsbtn.addEventListener('mouseout', function handleMouseOut(){
    clsbtn.style.backgroundColor = 'transparent'
    document.getElementById('cbtnicn').style.fill = '#7F8487'
    document.getElementById('cbtnicn').style.stroke = '#7F8487'
})
slideruter.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('dwinerinf').style.width = '80px'
   // document.getElementById('erinf').style.display = 'flex'
    document.getElementById('erinf').style.opacity = '1'
})
slideruter.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('dwinerinf').style.width = '29px'
    //document.getElementById('erinf').style.display = 'none'
    document.getElementById('erinf').style.opacity = '0'
})
dwinerinf.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('dwinerinf').style.width = '80px'
    //document.getElementById('erinf').style.display = 'flex'
    document.getElementById('erinf').style.opacity = '1'

})
dwinerinf.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('dwinerinf').style.width = '29px'
    //document.getElementById('erinf').style.display = 'none'
    document.getElementById('erinf').style.opacity = '0'

})
optstp.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('dwinerinf').style.width = '29px'
    //document.getElementById('erinf').style.display = 'none'
    document.getElementById('erinf').style.opacity = '0'

})
optstp.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('dwinerinf').style.width = '80px'
    //document.getElementById('erinf').style.display = 'flex'
    document.getElementById('erinf').style.opacity = '1'

})
stngs.addEventListener('click', ()=>{
    document.getElementById('iconmc').style.fill = '#999999'
    document.getElementById('stngs').style.fill = '#fcf5fe'
    document.getElementById('enabstn').style.backgroundColor = '#fcf5fe'
    document.getElementById('enabstn1').style.backgroundColor = 'transparent'
    document.getElementById('setwin').style.display = 'flex'
    document.getElementById('discbtn').style.fill = '#999999'
    document.getElementById('enabstn2').style.backgroundColor = 'transparent'
    document.getElementById('discordwin').style.display = 'none'
    const mcsb = document.getElementById('mcsingle')
    mcsb.addEventListener('mouseout', function handleMouseOut(){
        document.getElementById('iconmc').style.fill = '#999999'
    })
    const dcsb= document.getElementById('disc')
    dcsb.addEventListener('mouseout', function handleMouseOut(){
        document.getElementById('discbtn').style.fill = '#999999'
    })
    const stsb= document.getElementById('settings')
    stsb.addEventListener('mouseout', function handleMouseOut(){
        document.getElementById('stngs').style.fill = 'white'
    })
})
mcsingle.addEventListener('click',()=>{
    document.getElementById('iconmc').style.fill = '#fcf5fe'
    document.getElementById('stngs').style.fill = '#999999'
    document.getElementById('setwin').style.display = 'none'
    document.getElementById('enabstn').style.backgroundColor = 'transparent'
    document.getElementById('enabstn1').style.backgroundColor = '#fcf5fe'
    document.getElementById('discbtn').style.fill = '#999999'
    document.getElementById('enabstn2').style.backgroundColor = 'transparent'
    document.getElementById('discordwin').style.display = 'none'
    const mcsb = document.getElementById('mcsingle')
    mcsb.addEventListener('mouseout', function handleMouseOut(){
        document.getElementById('iconmc').style.fill = 'white'
    })
    const dcsb= document.getElementById('disc')
    dcsb.addEventListener('mouseout', function handleMouseOut(){
        document.getElementById('discbtn').style.fill = '#999999'
    })
    const stsb= document.getElementById('settings')
    stsb.addEventListener('mouseout', function handleMouseOut(){
        document.getElementById('stngs').style.fill = '#999999'
    })
})
disc.addEventListener('click',()=>{
    document.getElementById('discbtn').style.fill = '#fcf5fe'
    document.getElementById('iconmc').style.fill = '#999999'
    document.getElementById('stngs').style.fill = '#999999'
    document.getElementById('setwin').style.display = 'none'
    document.getElementById('enabstn2').style.backgroundColor = '#fcf5fe'
    document.getElementById('enabstn').style.backgroundColor = 'transparent'
    document.getElementById('enabstn1').style.backgroundColor = 'transparent'
    document.getElementById('discordwin').style.display = 'flex'
    const mcsb = document.getElementById('mcsingle')
    mcsb.addEventListener('mouseout', function handleMouseOut(){
        document.getElementById('iconmc').style.fill = '#999999'
    })
    const dcsb= document.getElementById('disc')
    dcsb.addEventListener('mouseout', function handleMouseOut(){
        document.getElementById('discbtn').style.fill = 'white'
    })
    const stsb= document.getElementById('settings')
    stsb.addEventListener('mouseout', function handleMouseOut(){
        document.getElementById('stngs').style.fill = '#999999'
    })
})

si.osInfo().then(data =>{
    document.getElementById('st1n').innerText = data.platform
    document.getElementById('st2n').innerText = data.hostname
    document.getElementById('st3n').innerText = data.arch
    document.getElementById('st8n').innerText = data.release
    document.getElementById('st4n').innerText = data.distro
})
si.cpu().then(data =>{
    document.getElementById('st5n').innerText = data.brand
})
si.mem().then(data =>{
    const dats =  data.total
    const dats1 = dats/1000000
    const dats2 = dats1.toFixed(0)
    const dats3 = dats2*93/100000
    document.getElementById('st6n').innerText = `${dats3.toFixed(1)} GB`
  })

var checkboxmd = document.getElementById('afkswtdrml');
checkboxmd.addEventListener('change', function () {
  if (checkboxmd.checked) {
    document.getElementById('setwin').style.backgroundColor = '#fafafa'
    document.getElementById('userstat').style.backgroundColor = '#e9eaf3'
    document.getElementById('realset').style.backgroundColor = '#e9eaf3'
    document.getElementById('st1').style.color = '#333333'
    document.getElementById('drlm').style.color = '#333333'
    document.getElementById('st2').style.color = '#333333'
    document.getElementById('st3').style.color = '#333333'
    document.getElementById('st4').style.color = '#333333'
    document.getElementById('st5').style.color = '#333333'
    document.getElementById('st6').style.color = '#333333'
    document.getElementById('st7').style.color = '#333333'
    document.getElementById('st8').style.color = '#333333'
    document.getElementById('drmdl').style.color = '#333333'
    document.getElementById('lmdl').style.color = '#333333'
    document.getElementById('titstat').style.color = '#333333'
    document.getElementById('st1n').style.color = '#444444'
    document.getElementById('st2n').style.color = '#444444'
    document.getElementById('st3n').style.color = '#444444'
    document.getElementById('st4n').style.color = '#444444'
    document.getElementById('st5n').style.color = '#444444'
    document.getElementById('st6n').style.color = '#444444'
    document.getElementById('st7n').style.color = '#444444'
    document.getElementById('st8n').style.color = '#444444'
    document.getElementById('titlepro').style.color = '#1A1A1A'
    document.getElementById('descset').style.color = '#1A1A1A'
    document.getElementById('mainint').style.background = 'linear-gradient(-415deg, #dadada,#cccdcc,#e8e8e8,#cccdcc)'
    document.getElementById('mainint').style.backgroundSize = '400% 400%'
    document.getElementById('nav').style.backgroundColor = '#dfdfdf'
    document.getElementById('changer').style.backgroundColor = '#dfdfdf'
    document.getElementById('titlemain').style.color = '#4A4A4A'
    document.getElementById('iconmc').style.fill = '#666666'
    document.getElementById('discbtn').style.fill = '#666666'
    document.getElementById('stngs').style.fill = '#444444'
    document.getElementById('enabstn').style.backgroundColor = '#444444'
    stngs.addEventListener('click', ()=>{
        document.getElementById('iconmc').style.fill = '#666666'
        document.getElementById('discbtn').style.fill = '#666666'
        document.getElementById('stngs').style.fill = '#444444'
        document.getElementById('enabstn').style.backgroundColor = '#444444'
        document.getElementById('enabstn1').style.backgroundColor = 'transparent'
        document.getElementById('setwin').style.display = 'flex'
        document.getElementById('enabstn2').style.backgroundColor = 'transparent'
        const stsb= document.getElementById('settings')
        stsb.addEventListener('mouseout', function handleMouseOut(){
            document.getElementById('stngs').style.fill = '#444444' 
        })
        const mcsb = document.getElementById('mcsingle')
        mcsb.addEventListener('mouseout', function handleMouseOut(){
            document.getElementById('iconmc').style.fill = '#666666'
        })
        const dcsb= document.getElementById('disc')
        dcsb.addEventListener('mouseout', function handleMouseOut(){
            document.getElementById('discbtn').style.fill = '#666666'
        })
    })
    mcsingle.addEventListener('click',()=>{
        document.getElementById('iconmc').style.fill = '#444444'
        document.getElementById('discbtn').style.fill = '#666666'
        document.getElementById('stngs').style.fill = '#666666'
        document.getElementById('setwin').style.display = 'none'
        document.getElementById('enabstn').style.backgroundColor = 'transparent'
        document.getElementById('enabstn1').style.backgroundColor = '#444444'
        document.getElementById('enabstn2').style.backgroundColor = 'transparent'
        const stsb= document.getElementById('settings')
        stsb.addEventListener('mouseout', function handleMouseOut(){
            document.getElementById('stngs').style.fill = '#666666' 
        })
        const mcsb = document.getElementById('mcsingle')
        mcsb.addEventListener('mouseout', function handleMouseOut(){
            document.getElementById('iconmc').style.fill = '#444444'
        })
        const dcsb= document.getElementById('disc')
        dcsb.addEventListener('mouseout', function handleMouseOut(){
            document.getElementById('discbtn').style.fill = '#666666'
        })
    })
    disc.addEventListener('click', ()=>{
        document.getElementById('discbtn').style.fill = '#444444'
        document.getElementById('enabstn2').style.backgroundColor = '#444444'
        document.getElementById('iconmc').style.fill = '#666666'
        document.getElementById('stngs').style.fill = '#666666'
        const stsb= document.getElementById('settings')
        stsb.addEventListener('mouseout', function handleMouseOut(){
            document.getElementById('stngs').style.fill = '#666666' 
        })
        const mcsb = document.getElementById('mcsingle')
        mcsb.addEventListener('mouseout', function handleMouseOut(){
            document.getElementById('iconmc').style.fill = '#666666'
        })
        const dcsb= document.getElementById('disc')
        dcsb.addEventListener('mouseout', function handleMouseOut(){
            document.getElementById('discbtn').style.fill = '#444444'
        })
    })
    document.getElementById('mnimg').style.backgroundColor = '#dadada'
    document.getElementById('network').style.backgroundColor = '#dfdfdf'
    document.getElementById('mainapps').style.backgroundColor = '#ffffff'
    document.getElementById('pingms').style.backgroundColor = '#c0c0c0'
    document.getElementById('ssid').style.backgroundColor = '#c0c0c0'
    document.getElementById('ntype').style.backgroundColor = '#c0c0c0'
    document.getElementById('chat').style.backgroundColor = '#dfdfdf'
    document.getElementById('pingt').style.color = '#3b3b3b'
    document.getElementById('pingd').style.color = '#333333'
    document.getElementById('ssidn').style.color = '#333333'
    document.getElementById('typet').style.color = '#333333'
    document.getElementById('host').style.color = '#585858'
    document.getElementById('htbb').style.color = '#585858'
    document.getElementById('hostin').style.border = '1px solid #bbbbbb'
    document.getElementById('portin').style.border = '1px solid #bbbbbb'
    document.getElementById('userin').style.border = '1px solid #bbbbbb'
    document.getElementById('passin').style.border = '1px solid #bbbbbb'
    document.getElementById('port').style.color = '#585858'
    document.getElementById('ctrlt').style.color = '#676767'
    document.getElementById('username').style.color = '#585858'
    document.getElementById('password').style.color = '#585858'
    document.getElementById('version').style.color = '#585858'
    document.getElementById('verin').style.backgroundColor = '#dfdfdf'
    document.getElementById('verin').style.color = '#333333'
    document.getElementById('botinv').style.backgroundColor = '#dfdfdf'
    document.getElementById('playerlist').style.backgroundColor = '#dfdfdf'
    document.getElementById('plist').style.backgroundColor = '#dadada'
    document.getElementById('invt').style.color = '#585858'
    document.getElementById('pj').style.color = '#585858'
    document.getElementById('bcbtns').style.color = '#333333'
    document.getElementById('rcb').style.backgroundColor = '#c3c3c3'
    document.getElementById('mbtn').style.backgroundColor = '#c3c3c3'
    document.getElementById('quit').style.backgroundColor = '#c3c3c3'
    document.getElementById('dbtbtn').style.backgroundColor = '#c3c3c3'
    document.getElementById('dbqt').style.backgroundColor = '#c3c3c3'
    document.getElementById('dbtbtn').style.color = '#333333'
    document.getElementById('dbqt').style.color = '#333333'
    document.getElementById('act').style.backgroundColor = '#cecece'
    document.getElementById('act').style.color = '#333333'
    document.getElementById('intsvg').style.fill = '#333333'
    document.getElementById('item36').style.color = '#333333'
    document.getElementById('item37').style.color = '#333333'
    document.getElementById('item38').style.color = '#333333'
    document.getElementById('item39').style.color = '#333333'
    document.getElementById('item40').style.color = '#333333'
    document.getElementById('item41').style.color = '#333333'
    document.getElementById('item42').style.color = '#333333'
    document.getElementById('item43').style.color = '#333333'
    document.getElementById('item44').style.color = '#333333'
    document.getElementById('plist').style.color = '#333333'
    document.getElementById('no36').style.color = '#313131'
    document.getElementById('no37').style.color = '#313131'
    document.getElementById('no38').style.color = '#313131'
    document.getElementById('no39').style.color = '#313131'
    document.getElementById('no40').style.color = '#313131'
    document.getElementById('no41').style.color = '#313131'
    document.getElementById('no42').style.color = '#313131'
    document.getElementById('no43').style.color = '#313131'
    document.getElementById('no44').style.color = '#313131'
    document.getElementById('mchat').style.color = '#3b3b3b'
    document.getElementById('hostin').style.color = '#3b3b3b'
    document.getElementById('portin').style.color = '#3b3b3b'
    document.getElementById('userin').style.color = '#3b3b3b'
    document.getElementById('passin').style.color = '#3b3b3b'
    document.getElementById('connect').style.color = '#3b3b3b'
    document.getElementById('userInputmsg').style.backgroundColor = '#bbbbbb'
    document.getElementById('userInputmsg').style.color = '#333333'
    document.getElementById('dchnmsgc').style.backgroundColor = '#bbbbbb'
    document.getElementById('dchnmsgc').style.color = '#333333'
    document.getElementById('bft').style.backgroundColor = '#e9eaf3'
    document.getElementById('winctrl').style.backgroundColor = '#cecece'
    document.getElementById('bcred').style.backgroundColor = '#cecece'
    document.getElementById('utils').style.backgroundColor = '#cecece'
    document.getElementById('bhnt').style.color = '#676767'
    document.getElementById('bfnt').style.color = '#676767'
    document.getElementById('wino').style.color = '#676767'
    document.getElementById('bhn').style.backgroundColor = '#bebebe'
    document.getElementById('bfn').style.backgroundColor = '#bebebe'
    document.getElementById('wincls').style.backgroundColor = '#c3c3c3'
    document.getElementById('wincls').style.color = '#333333'
    const clswin = document.getElementById('wincls')
    clswin.addEventListener('mouseover', function handleMouseOver(){
        clswin.style.backgroundColor = '#ff5555'
        clswin.style.color = 'white'
    })
    clswin.addEventListener('mouseout', function handleMouseOut(){
        clswin.style.backgroundColor = '#c3c3c3'
        clswin.style.color = '#1a1a1a'
    })
    document.getElementById('winslt').style.border = '1px solid #a1a1a1'
    document.getElementById('pntp').style.border = '1px solid #a1a1a1'
    document.getElementById('lbtn').style.backgroundColor = '#b4b4b4'
    document.getElementById('rbtn').style.backgroundColor = '#b4b4b4'
    document.getElementById('actphybtn').style.backgroundColor = '#b4b4b4'
    const lbtn = document.getElementById('lbtn')
    lbtn.addEventListener('mouseover', function handleMouseOver(){
        lbtn.style.backgroundColor = '#a1a1a1'
    })
    lbtn.addEventListener('mouseout', function handleMouseOut(){
        lbtn.style.backgroundColor = '#b4b4b4'
    })
    const rbtn = document.getElementById('rbtn')
    rbtn.addEventListener('mouseover', function handleMouseOver(){
        rbtn.style.backgroundColor = '#a1a1a1'
    })
    rbtn.addEventListener('mouseout', function handleMouseOut(){
        rbtn.style.backgroundColor = '#b4b4b4'
    })
    document.getElementById('winslt').style.color = '#333333'
    document.getElementById('pntp').style.color = '#333333'
    document.getElementById('lbtn').style.color = '#333333'
    document.getElementById('actphybtn').style.color = '#333333'
    document.getElementById('rbtn').style.color = '#333333'
    document.getElementById('hnd').style.color = '#333333'
    document.getElementById('fnd').style.color = '#333333'
    document.getElementById('afkb').style.backgroundColor = '#cecece'
    document.getElementById('afkttl').style.color = '#676767'
    document.getElementById('btctrlphy').style.backgroundColor = '#cecece'
    const actphy = document.getElementById('actphybtn')
    actphy.addEventListener('mouseover', function handleMouseOver(){
        actphy.style.backgroundColor = '#a1a1a1'
    })
    actphy.addEventListener('mouseout', function handleMouseOut(){
        actphy.style.backgroundColor = '#b4b4b4'
    })
    const act = document.getElementById('act')
    act.addEventListener('mouseover', function handleMouseOver(){
        act.style.backgroundColor = '#a1a1a1'
    })
    act.addEventListener('mouseout', function handleMouseOut(){
        act.style.backgroundColor = '#CECECE'
    })
    document.getElementById('btn1').style.backgroundColor = '#CECECE'
    document.getElementById('btn2').style.backgroundColor = '#CECECE'
    document.getElementById('btn3').style.backgroundColor = '#CECECE'
    document.getElementById('btn4').style.backgroundColor = '#CECECE'
    document.getElementById('btn5').style.backgroundColor = '#CECECE'
    document.getElementById('btn6').style.backgroundColor = '#CECECE'
    document.getElementById('btn7').style.backgroundColor = '#CECECE'
    document.getElementById('btn8').style.backgroundColor = '#CECECE'
    document.getElementById('btn9').style.backgroundColor = '#CECECE'
    document.getElementById('btn1').style.color = '#333333'
    document.getElementById('btn2').style.color = '#333333'
    document.getElementById('btn3').style.color = '#333333'
    document.getElementById('btn4').style.color = '#333333'
    document.getElementById('btn5').style.color = '#333333'
    document.getElementById('btn6').style.color = '#333333'
    document.getElementById('btn7').style.color = '#333333'
    document.getElementById('btn8').style.color = '#333333'
    document.getElementById('btn9').style.color = '#333333'
    const btn1 = document.getElementById('btn1')
    btn1.addEventListener('mouseover', function handleMouseOver(){
        btn1.style.backgroundColor = '#a1a1a1'
    })
    btn1.addEventListener('mouseout', function handleMouseOut(){
        btn1.style.backgroundColor = '#CECECE'
    })
    const btn2 = document.getElementById('btn2')
    btn2.addEventListener('mouseover', function handleMouseOver(){
        btn2.style.backgroundColor = '#a1a1a1'
    })
    btn2.addEventListener('mouseout', function handleMouseOut(){
        btn2.style.backgroundColor = '#CECECE'
    })
    const btn3 = document.getElementById('btn3')
    btn3.addEventListener('mouseover', function handleMouseOver(){
        btn3.style.backgroundColor = '#a1a1a1'
    })
    btn3.addEventListener('mouseout', function handleMouseOut(){
        btn3.style.backgroundColor = '#CECECE'
    })
    const btn4 = document.getElementById('btn4')
    btn4.addEventListener('mouseover', function handleMouseOver(){
        btn4.style.backgroundColor = '#a1a1a1'
    })
    btn4.addEventListener('mouseout', function handleMouseOut(){
        btn4.style.backgroundColor = '#CECECE'
    })
    const btn5 = document.getElementById('btn5')
    btn5.addEventListener('mouseover', function handleMouseOver(){
        btn5.style.backgroundColor = '#a1a1a1'
    })
    btn5.addEventListener('mouseout', function handleMouseOut(){
        btn5.style.backgroundColor = '#CECECE'
    })
    const btn6 = document.getElementById('btn6')
    btn6.addEventListener('mouseover', function handleMouseOver(){
        btn6.style.backgroundColor = '#a1a1a1'
    })
    btn6.addEventListener('mouseout', function handleMouseOut(){
        btn6.style.backgroundColor = '#CECECE'
    })
    const btn7 = document.getElementById('btn7')
    btn7.addEventListener('mouseover', function handleMouseOver(){
        btn7.style.backgroundColor = '#a1a1a1'
    })
    btn7.addEventListener('mouseout', function handleMouseOut(){
        btn7.style.backgroundColor = '#CECECE'
    })
    const btn8 = document.getElementById('btn8')
    btn8.addEventListener('mouseover', function handleMouseOver(){
        btn8.style.backgroundColor = '#a1a1a1'
    })
    btn8.addEventListener('mouseout', function handleMouseOut(){
        btn8.style.backgroundColor = '#CECECE'
    })
    const btn9 = document.getElementById('btn9')
    btn9.addEventListener('mouseover', function handleMouseOver(){
        btn9.style.backgroundColor = '#a1a1a1'
    })
    btn9.addEventListener('mouseout', function handleMouseOut(){
        btn9.style.backgroundColor = '#CECECE'
    })
    document.getElementById('discordwin').style.backgroundColor = '#fafafa'
    document.getElementById('dblgs').style.backgroundColor = '#dfdfdf'
    document.getElementById('discstt').style.backgroundColor = '#dfdfdf'
    document.getElementById('klmwin').style.backgroundColor = '#dfdfdf'
    document.getElementById('klmwin').style.border = '1px solid #333'
    document.getElementById('dbmod').style.backgroundColor = '#dfdfdf'
    document.getElementById('bothinf').style.backgroundColor = '#e7e7e7'
    document.getElementById('prfx').style.backgroundColor = '#e7e7e7'
    document.getElementById('dbtlgsttl').style.color = '#585858'
    document.getElementById('mgmt').style.color = '#585858'
    document.getElementById('klttl').style.color = '#585858'
    document.getElementById('klttl1').style.color = '#585858'
    document.getElementById('klttl2').style.color = '#585858'
    document.getElementById('klttlpfp').style.color = '#585858'
    document.getElementById('klttlpfp1').style.color = '#585858'
    document.getElementById('klttlpfp2').style.color = '#585858'
    document.getElementById('kledttl').style.color = '#585858'
    document.getElementById('kldet').style.color = '#585858'
    document.getElementById('dbtlgs').style.color = '#3b3b3b'
    document.getElementById('umsnd').style.backgroundColor = '#D2D2D2'
    document.getElementById('dwinerinf').style.backgroundColor = '#bbbbbb'
    document.getElementById('msgdttl').style.color = '#3b3b3b'
    document.getElementById('chidttl').style.color = '#3b3b3b'
    document.getElementById('msgttlc').style.color = '#3b3b3b'
    document.getElementById('acttl').style.color = '#3b3b3b'
    document.getElementById('tknttl').style.color = '#3b3b3b'
    document.getElementById('erinf').style.color = '#3b3b3b'
    document.getElementById('hd').style.color = '#3b3b3b'
    document.getElementById('sh').style.color = '#3b3b3b'
    document.getElementById('chnnmmq').style.color = 'black'
    document.getElementById('chidvl').style.border = '1px solid #bbbbbb'
    document.getElementById('chidvl').style.color = 'black'
    document.getElementById('dbnm').style.color = '#333'
    document.getElementById('bdm').style.color = '#646464'
    document.getElementById('dched').style.fill = '#333'
    document.getElementById('svbtn').style.fill = '#4b4b4b'
    document.getElementById('chnidld').style.fill = '#4b4b4b'
    document.getElementById('chidsbtn').style.backgroundColor = 'transparent'
    document.getElementById('chidsbtn').style.backgroundColor = 'transparent'
    const hde = document.getElementById('hd')
    hde.addEventListener('mouseover', function handleMouseOver(){
        hde.style.backgroundColor = '#a1a1a1'
    })
    hde.addEventListener('mouseout', function handleMouseOut(){
        hde.style.backgroundColor = 'transparent'
    })
    const sde = document.getElementById('sh')
    sde.addEventListener('mouseover', function handleMouseOver(){
        sde.style.backgroundColor = '#a1a1a1'
    })
    sde.addEventListener('mouseout', function handleMouseOut(){
        sde.style.backgroundColor = 'transparent'
    })
    const svcid = document.getElementById('chidsbtn')
    svcid.addEventListener('mouseover', function handleMouseOver(){
        svcid.style.backgroundColor = '#a1a1a1'
    })
    svcid.addEventListener('mouseout', function handleMouseOut(){
        svcid.style.backgroundColor = '#CECECE'
    })
    const svcid1 = document.getElementById('chedtbtn')
    svcid1.addEventListener('mouseover', function handleMouseOver(){
        svcid1.style.backgroundColor = '#a1a1a1'
    })
    svcid1.addEventListener('mouseout', function handleMouseOut(){
        svcid1.style.backgroundColor = '#CECECE'
    })
    document.getElementById('infdtxt').style.color = 'black'
    document.getElementById('dactv').style.border = '1px solid #bbbbbb'
    document.getElementById('dbtknv').style.border = '1px solid #bbbbbb'
    document.getElementById('dactv').style.color = '#3b3b3b'
    document.getElementById('dbtknv').style.color = '#3b3b3b'
    document.getElementById('titlemain').style.backgroundImage = 'url(./icons/text-1670703636293.png)'
    document.getElementById('kltxt').style.border = '1px solid #bbbbbb'
    document.getElementById('mmtxt').style.border = '1px solid #bbbbbb'
    document.getElementById('upfptxt').style.border = '1px solid #bbbbbb'
    document.getElementById('usiqtxt').style.border = '1px solid #bbbbbb'
    document.getElementById('uwbtrtxt').style.border = '1px solid #bbbbbb'
    document.getElementById('trthtxt').style.border = '1px solid #bbbbbb'
    document.getElementById('kltxt').style.color = '#333'
    document.getElementById('mmtxt').style.color = '#333'
    document.getElementById('upfptxt').style.color = '#333'
    document.getElementById('usiqtxt').style.color = '#333'
    document.getElementById('uwbtrtxt').style.color = '#333'
    document.getElementById('trthtxt').style.color = '#333'
    document.getElementById('prfxn').style.color = '#585858'
    document.getElementById('prfv').style.color = '#333'
    document.getElementById('im1').style.color = '#606060'
    document.getElementById('im2').style.color = '#606060'
    document.getElementById('im3').style.color = '#606060'
    document.getElementById('im4').style.color = '#606060'
    document.getElementById('im5').style.color = '#606060'
    document.getElementById('im6').style.color = '#606060'
    document.getElementById('im7').style.color = '#606060'
    document.getElementById('im1txt').style.border = '1px solid #bbbbbb'
    document.getElementById('im2txt').style.border = '1px solid #bbbbbb'
    document.getElementById('im3txt').style.border = '1px solid #bbbbbb'
    document.getElementById('im4txt').style.border = '1px solid #bbbbbb'
    document.getElementById('im5txt').style.border = '1px solid #bbbbbb'
    document.getElementById('im6txt').style.border = '1px solid #bbbbbb'
    document.getElementById('im7txt').style.border = '1px solid #bbbbbb'
    document.getElementById('im1txt').style.color = '#333333'
    document.getElementById('im2txt').style.color = '#333333'
    document.getElementById('im3txt').style.color = '#333333'
    document.getElementById('im4txt').style.color = '#333333'
    document.getElementById('im5txt').style.color = '#333333'
    document.getElementById('im6txt').style.color = '#333333'
    document.getElementById('im7txt').style.color = '#333333'
    document.getElementById('imsvbtn').style.backgroundColor = '#b3b3b3'
    document.getElementById('imsvbtn').style.color = '#585858'
    const svbtn = document.getElementById('imsvbtn')
    svbtn.addEventListener('mouseover', function handleMouseOver(){
        svbtn.style.backgroundColor = '#cccccc'
    })
    svbtn.addEventListener('mouseout', function handleMouseOut(){
        svbtn.style.backgroundColor = '#b3b3b3'
    })
    document.getElementById('ppledtlg').style.stroke = '#333333'
    document.getElementById('usrsttl').style.backgroundColor = '#cccccc'
    const minbtn = document.getElementById('minimizeApp')
minbtn.addEventListener('mouseover', function handleMouseOver(){
    minbtn.style.backgroundColor = '#cccccc'
    document.getElementById('mbtnicn').style.fill = 'white'
    document.getElementById('mbtnicn').style.stroke = 'white'
})
minbtn.addEventListener('mouseout', function handleMouseOut(){
    minbtn.style.backgroundColor = 'transparent'
    document.getElementById('mbtnicn').style.fill = '#7F8487'
    document.getElementById('mbtnicn').style.stroke = '#7F8487'
})
const clsbtn = document.getElementById('closeBtn')
clsbtn.addEventListener('mouseover', function handleMouseOver(){
    clsbtn.style.backgroundColor = '#cc2929'
    document.getElementById('cbtnicn').style.fill = 'white'
    document.getElementById('cbtnicn').style.stroke = 'white'
})
clsbtn.addEventListener('mouseout', function handleMouseOut(){
    clsbtn.style.backgroundColor = 'transparent'
    document.getElementById('cbtnicn').style.fill = '#7F8487'
    document.getElementById('cbtnicn').style.stroke = '#7F8487'
})
const mcsb = document.getElementById('mcsingle')
mcsb.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('iconmc').style.fill = '#444444'
})
mcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('iconmc').style.fill = '#666666'
})
const dcsb= document.getElementById('disc')
dcsb.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('discbtn').style.fill = '#444444'
})
dcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('discbtn').style.fill = '#666666'
})
const stsb= document.getElementById('settings')
stsb.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('stngs').style.fill = '#444444'
})
stsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('stngs').style.fill = '#666666'
})
document.getElementById('disnoti').style.fill = '#444444'
document.getElementById('notttl').style.color = '#444444'
document.getElementById('optmw').style.background = '#dfdfdf'
document.getElementById('optmw').style.border = '1px solid #333'
document.getElementById('optwttl').style.color = '#444444'
document.getElementById('mhdfq').style.color = '#444444'
document.getElementById('mhdfq1').style.color = '#444444'
document.getElementById('mhdfqdesc').style.color = '#333'
document.getElementById('mhdfqdesc1').style.color = '#333'
document.getElementById('mclserbtn').style.background = '#c3c3c3'
document.getElementById('mclserbtn').style.color = '#333'

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else {
    document.getElementById('setwin').style.backgroundColor = '#111111'
    document.getElementById('discordwin').style.backgroundColor = '#111111'
    document.getElementById('userstat').style.backgroundColor = '#171717'
    document.getElementById('realset').style.backgroundColor = '#171717'
    document.getElementById('st1').style.color = 'rgb(158,158,158)'
    document.getElementById('st2').style.color = 'rgb(158,158,158)'
    document.getElementById('drlm').style.color = 'rgb(158,158,158)'
    document.getElementById('st3').style.color = 'rgb(158,158,158)'
    document.getElementById('st4').style.color = 'rgb(158,158,158)'
    document.getElementById('st5').style.color = 'rgb(158,158,158)'
    document.getElementById('st6').style.color = 'rgb(158,158,158)'
    document.getElementById('st7').style.color = 'rgb(158,158,158)'
    document.getElementById('st8').style.color = 'rgb(158,158,158)'
    document.getElementById('titstat').style.color = 'rgb(151,151,151)'
    document.getElementById('st1n').style.color = 'rgb(206,206,206)'
    document.getElementById('st2n').style.color = 'rgb(206,206,206)'
    document.getElementById('st3n').style.color = 'rgb(206,206,206)'
    document.getElementById('st4n').style.color = 'rgb(206,206,206)'
    document.getElementById('st5n').style.color = 'rgb(206,206,206)'
    document.getElementById('st6n').style.color = 'rgb(206,206,206)'
    document.getElementById('st7n').style.color = 'rgb(206,206,206)'
    document.getElementById('st8n').style.color = 'rgb(206,206,206)'
    document.getElementById('drmdl').style.color = 'rgb(150, 150, 150)'
    document.getElementById('lmdl').style.color = 'rgb(150, 150, 150)'
    document.getElementById('titlepro').style.color = 'white'
    document.getElementById('mainint').style.background = 'linear-gradient(-45deg, #252525,#333233,#171717,#333233)'
    document.getElementById('mainint').style.backgroundSize = '400% 400%'
    document.getElementById('descset').style.color = 'white'
    document.getElementById('nav').style.backgroundColor = '#202020'
    document.getElementById('changer').style.backgroundColor = '#202020'
    document.getElementById('titlemain').style.color = 'rgb(158, 158, 158)'
    document.getElementById('iconmc').style.fill = '#999999'
    document.getElementById('discbtn').style.fill = '#999999'
    document.getElementById('stngs').style.fill = '#999999'
    document.getElementById('stngs').style.fill = '#fcf5fe'
    document.getElementById('enabstn').style.backgroundColor = 'white'
    stngs.addEventListener('click', ()=>{
        document.getElementById('enabstn').style.backgroundColor = 'white'
        document.getElementById('enabstn1').style.backgroundColor = 'transparent'
        document.getElementById('setwin').style.display = 'flex'
    })
    stngs.addEventListener('click', ()=>{
        document.getElementById('iconmc').style.fill = '#999999'
        document.getElementById('discbtn').style.fill = '#999999'
        document.getElementById('stngs').style.fill = '#fcf5fe'
        document.getElementById('enabstn').style.backgroundColor = '#fcf5fe'
        document.getElementById('enabstn1').style.backgroundColor = 'transparent'
        document.getElementById('setwin').style.display = 'flex'
        
const mcsb = document.getElementById('mcsingle')
mcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('iconmc').style.fill = '#999999'
})
const dcsb= document.getElementById('disc')
dcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('discbtn').style.fill = '#999999'
})
const stsb= document.getElementById('settings')
stsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('stngs').style.fill = 'white'
})
    })
    mcsingle.addEventListener('click',()=>{
        document.getElementById('iconmc').style.fill = '#fcf5fe'
        document.getElementById('discbtn').style.fill = '#999999'
        document.getElementById('stngs').style.fill = '#999999'
        document.getElementById('setwin').style.display = 'none'
        document.getElementById('enabstn').style.backgroundColor = 'transparent'
        document.getElementById('enabstn1').style.backgroundColor = '#fcf5fe'
        const mcsb = document.getElementById('mcsingle')
mcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('iconmc').style.fill = 'white'
})
const dcsb= document.getElementById('disc')
dcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('discbtn').style.fill = '#999999'
})
const stsb= document.getElementById('settings')
stsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('stngs').style.fill = '#999999'
})
    })
    disc.addEventListener('click',()=>{
        document.getElementById('stngs').style.fill = '#999999'
        document.getElementById('iconmc').style.fill = '#999999'
        document.getElementById('discbtn').style.fill = '#fcf5fe'
        document.getElementById('enabstn2').style.backgroundColor = '#fcf5fe'
        const mcsb = document.getElementById('mcsingle')
mcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('iconmc').style.fill = '#999999'
})
const dcsb= document.getElementById('disc')
dcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('discbtn').style.fill = 'white'
})
const stsb= document.getElementById('settings')
stsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('stngs').style.fill = '#999999'
})

    })
    document.getElementById('mnimg').style.backgroundColor = '#252525'
    document.getElementById('network').style.backgroundColor = '#202020'
    document.getElementById('mainapps').style.backgroundColor = '#111111'
    document.getElementById('pingms').style.backgroundColor = '#3f3f3f'
    document.getElementById('ssid').style.backgroundColor = '#3f3f3f'
    document.getElementById('ntype').style.backgroundColor = '#3f3f3f'
    document.getElementById('chat').style.backgroundColor = '#202020'
    document.getElementById('pingt').style.color = 'rgb(196,196,196)'
    document.getElementById('pingd').style.color = 'white'
    document.getElementById('ssidn').style.color = 'white'
    document.getElementById('typet').style.color = 'white'
    document.getElementById('host').style.color = 'rgb(131, 131, 131)'
    document.getElementById('port').style.color = 'rgb(131, 131, 131)'
    document.getElementById('username').style.color = 'rgb(131, 131, 131)'
    document.getElementById('password').style.color = 'rgb(131, 131, 131)'
    document.getElementById('version').style.color = 'rgb(131, 131, 131)'
    document.getElementById('verin').style.backgroundColor = '#202020'
    document.getElementById('verin').style.color = 'white'
    document.getElementById('botinv').style.backgroundColor = '#202020'
    document.getElementById('playerlist').style.backgroundColor = '#202020'
    document.getElementById('plist').style.backgroundColor = '#252525'
    document.getElementById('invt').style.color = 'rgb(131,131,131)'
    document.getElementById('pj').style.color = 'rgb(131,131,131)'
    document.getElementById('hostin').style.border = '1px solid #202020'
    document.getElementById('portin').style.border = '1px solid #202020'
    document.getElementById('userin').style.border = '1px solid #202020'
    document.getElementById('passin').style.border = '1px solid #202020'
    document.getElementById('bcbtns').style.color = 'white'
    document.getElementById('rcb').style.backgroundColor = '#303030'
    document.getElementById('mbtn').style.backgroundColor = '#303030'
    document.getElementById('quit').style.backgroundColor = '#303030'
    document.getElementById('dbtbtn').style.backgroundColor = '#303030'
    document.getElementById('dbqt').style.backgroundColor = '#303030'
    document.getElementById('dbtbtn').style.color = 'white'
    document.getElementById('dbqt').style.color = 'white'
    document.getElementById('intsvg').style.fill = 'white'
    document.getElementById('item36').style.color = 'white'
    document.getElementById('item37').style.color = 'white'
    document.getElementById('item38').style.color = 'white'
    document.getElementById('item39').style.color = 'white'
    document.getElementById('item40').style.color = 'white'
    document.getElementById('item41').style.color = 'white'
    document.getElementById('item42').style.color = 'white'
    document.getElementById('item43').style.color = 'white'
    document.getElementById('item44').style.color = 'white'
    document.getElementById('no36').style.color = 'rgb(206,206,206)'
    document.getElementById('no37').style.color = 'rgb(206,206,206)'
    document.getElementById('no38').style.color = 'rgb(206,206,206)'
    document.getElementById('no39').style.color = 'rgb(206,206,206)'
    document.getElementById('no40').style.color = 'rgb(206,206,206)'
    document.getElementById('no41').style.color = 'rgb(206,206,206)'
    document.getElementById('no42').style.color = 'rgb(206,206,206)'
    document.getElementById('no43').style.color = 'rgb(206,206,206)'
    document.getElementById('no44').style.color = 'rgb(206,206,206)'
    document.getElementById('mchat').style.color = 'rgb(196,196,196)'
    document.getElementById('hostin').style.color = 'rgb(196,196,196)'
    document.getElementById('portin').style.color = 'rgb(196,196,196)'
    document.getElementById('userin').style.color = 'rgb(196,196,196)'
    document.getElementById('passin').style.color = 'rgb(196,196,196)'
    document.getElementById('connect').style.color = 'white'
    document.getElementById('userInputmsg').style.backgroundColor = '#252525'
    document.getElementById('userInputmsg').style.color = 'white'
    document.getElementById('dchnmsgc').style.backgroundColor = '#353535'
    document.getElementById('dchnmsgc').style.color = 'white'
    document.getElementById('bft').style.backgroundColor = '#202020'
    document.getElementById('bcred').style.backgroundColor = '#151515'
    document.getElementById('winctrl').style.backgroundColor = '#151515'
    document.getElementById('bhnt').style.color = 'rgb(124,124,124)'
    document.getElementById('bfnt').style.color = 'rgb(124,124,124)'
    document.getElementById('bhn').style.backgroundColor = '#353535'
    document.getElementById('bfn').style.backgroundColor = '#353535'
    document.getElementById('wincls').style.backgroundColor = '#353535'
    const clswin = document.getElementById('wincls')
    clswin.addEventListener('mouseover', function handleMouseOver(){
        clswin.style.backgroundColor = '#ff5555'
        clswin.style.color = 'white'
    })
    clswin.addEventListener('mouseout', function handleMouseOut(){
        clswin.style.backgroundColor = '#333333'
        clswin.style.color = 'white'
    })
    document.getElementById('wino').style.color = 'rgb(124,124,124)'
    document.getElementById('winslt').style.border = '1px solid #303030'
    document.getElementById('pntp').style.border = '1px solid #202020'
    document.getElementById('lbtn').style.backgroundColor = '#353535'
    document.getElementById('actphybtn').style.backgroundColor = '#3f3f3f'
    document.getElementById('lbtn').style.color = 'white'
    document.getElementById('rbtn').style.color = 'white'
    document.getElementById('actphybtn').style.color = 'white'
    document.getElementById('rbtn').style.backgroundColor = '#353535'
    const lbtn = document.getElementById('lbtn')
    lbtn.addEventListener('mouseover', function handleMouseOver(){
        lbtn.style.backgroundColor = '#404040'
    })
    lbtn.addEventListener('mouseout', function handleMouseOut(){
        lbtn.style.backgroundColor = '#353535'
    })
    const rbtn = document.getElementById('rbtn')
    rbtn.addEventListener('mouseover', function handleMouseOver(){
        rbtn.style.backgroundColor = '#404040'
    })
    rbtn.addEventListener('mouseout', function handleMouseOut(){
        rbtn.style.backgroundColor = '#353535'
    })
    document.getElementById('winslt').style.color = 'rgb(196,196,196)'
    document.getElementById('pntp').style.color = 'rgb(196,196,196)'
    document.getElementById('wincls').style.color = 'white'
    document.getElementById('hnd').style.color = 'white'
    document.getElementById('fnd').style.color = 'white'
    document.getElementById('afkb').style.backgroundColor = '#151515'
    document.getElementById('afkttl').style.color = 'rgb(124,124,124)'
    document.getElementById('btctrlphy').style.backgroundColor = '#151515'
    const actphy = document.getElementById('actphybtn')
    actphy.addEventListener('mouseover', function handleMouseOver(){
        actphy.style.backgroundColor = '#303030'
    })
    actphy.addEventListener('mouseout', function handleMouseOut(){
        actphy.style.backgroundColor = '#3f3f3f'
    })
    document.getElementById('htbb').style.color = 'rgb(151, 151, 151)'
    document.getElementById('act').style.backgroundColor = '#252525'
    document.getElementById('act').style.color = 'white'
    const act = document.getElementById('act')
    act.addEventListener('mouseover', function handleMouseOver(){
        act.style.backgroundColor = '#303030'
    })
    act.addEventListener('mouseout', function handleMouseOut(){
        act.style.backgroundColor = '#252525'
    })
    document.getElementById('ctrlt').style.color = 'rgb(124, 124, 124)'
    document.getElementById('utils').style.backgroundColor = '#151515'
    document.getElementById('btn1').style.backgroundColor = '#252525'
    document.getElementById('btn2').style.backgroundColor = '#252525'
    document.getElementById('btn3').style.backgroundColor = '#252525'
    document.getElementById('btn4').style.backgroundColor = '#252525'
    document.getElementById('btn5').style.backgroundColor = '#252525'
    document.getElementById('btn6').style.backgroundColor = '#252525'
    document.getElementById('btn7').style.backgroundColor = '#252525'
    document.getElementById('btn8').style.backgroundColor = '#252525'
    document.getElementById('btn9').style.backgroundColor = '#252525'
    document.getElementById('btn1').style.color = 'white'
    document.getElementById('btn2').style.color = 'white'
    document.getElementById('btn3').style.color = 'white'
    document.getElementById('btn4').style.color = 'white'
    document.getElementById('btn5').style.color = 'white'
    document.getElementById('btn6').style.color = 'white'
    document.getElementById('btn7').style.color = 'white'
    document.getElementById('btn8').style.color = 'white'
    document.getElementById('btn9').style.color = 'white'
    const btn1 = document.getElementById('btn1')
    btn1.addEventListener('mouseover', function handleMouseOver(){
        btn1.style.backgroundColor = '#303030'
    })
    btn1.addEventListener('mouseout', function handleMouseOut(){
        btn1.style.backgroundColor = '#252525'
    })
    const btn2 = document.getElementById('btn2')
    btn2.addEventListener('mouseover', function handleMouseOver(){
        btn2.style.backgroundColor = '#303030'
    })
    btn2.addEventListener('mouseout', function handleMouseOut(){
        btn2.style.backgroundColor = '#252525'
    })
    const btn3 = document.getElementById('btn3')
    btn3.addEventListener('mouseover', function handleMouseOver(){
        btn3.style.backgroundColor = '#303030'
    })
    btn3.addEventListener('mouseout', function handleMouseOut(){
        btn3.style.backgroundColor = '#252525'
    })
    const btn4 = document.getElementById('btn4')
    btn4.addEventListener('mouseover', function handleMouseOver(){
        btn4.style.backgroundColor = '#303030'
    })
    btn4.addEventListener('mouseout', function handleMouseOut(){
        btn4.style.backgroundColor = '#252525'
    })
    const btn5 = document.getElementById('btn5')
    btn5.addEventListener('mouseover', function handleMouseOver(){
        btn5.style.backgroundColor = '#303030'
    })
    btn5.addEventListener('mouseout', function handleMouseOut(){
        btn5.style.backgroundColor = '#252525'
    })
    const btn6 = document.getElementById('btn6')
    btn6.addEventListener('mouseover', function handleMouseOver(){
        btn6.style.backgroundColor = '#303030'
    })
    btn6.addEventListener('mouseout', function handleMouseOut(){
        btn6.style.backgroundColor = '#252525'
    })
    const btn7 = document.getElementById('btn7')
    btn7.addEventListener('mouseover', function handleMouseOver(){
        btn7.style.backgroundColor = '#303030'
    })
    btn7.addEventListener('mouseout', function handleMouseOut(){
        btn7.style.backgroundColor = '#252525'
    })
    const btn8 = document.getElementById('btn8')
    btn8.addEventListener('mouseover', function handleMouseOver(){
        btn8.style.backgroundColor = '#303030'
    })
    btn8.addEventListener('mouseout', function handleMouseOut(){
        btn8.style.backgroundColor = '#252525'
    })
    const btn9 = document.getElementById('btn9')
    btn9.addEventListener('mouseover', function handleMouseOver(){
        btn9.style.backgroundColor = '#303030'
    })
    btn9.addEventListener('mouseout', function handleMouseOut(){
        btn9.style.backgroundColor = '#252525'
    })
    document.getElementById('plist').style.color = 'white'
    document.getElementById('dblgs').style.backgroundColor = '#202020'
    document.getElementById('discstt').style.backgroundColor = '#202020'
    document.getElementById('dbmod').style.backgroundColor = '#202020'
    document.getElementById('dbtlgsttl').style.color = 'rgb(196,196,196)'
    document.getElementById('mgmt').style.color = 'rgb(196,196,196)'
    document.getElementById('dbtlgs').style.color = 'rgb(196,196,196)'
    document.getElementById('umsnd').style.backgroundColor = '#252525'
    document.getElementById('msgdttl').style.color = 'rgb(196,196,196)'
    document.getElementById('chidttl').style.color = 'rgb(196,196,196)'
    document.getElementById('msgttlc').style.color = 'rgb(196,196,196)'
    document.getElementById('acttl').style.color = 'rgb(196,196,196)'
    document.getElementById('tknttl').style.color = 'rgb(196,196,196)'
    document.getElementById('hd').style.color = 'rgb(196,196,196)'
    document.getElementById('sh').style.color = 'rgb(196,196,196)'
    document.getElementById('chnnmmq').style.color = 'white'
    document.getElementById('chidvl').style.border = '1px solid #303030'
    document.getElementById('chidvl').style.color = 'white'
    document.getElementById('svbtn').style.fill = 'white'
    document.getElementById('dched').style.fill = 'white'
    document.getElementById('chidsbtn').style.backgroundColor = 'transparent'
    document.getElementById('chedtbtn').style.backgroundColor = 'transparent'
    const svcid = document.getElementById('chidsbtn')
    svcid.addEventListener('mouseover', function handleMouseOver(){
        svcid.style.backgroundColor = '#333'
    })
    svcid.addEventListener('mouseout', function handleMouseOut(){
        svcid.style.backgroundColor = 'transparent'
    })
    const svcid1 = document.getElementById('chedtbtn')
    svcid1.addEventListener('mouseover', function handleMouseOver(){
        svcid1.style.backgroundColor = '#333'
    })
    svcid1.addEventListener('mouseout', function handleMouseOut(){
        svcid1.style.backgroundColor = 'transparent'
    })
    document.getElementById('chnidld').style.fill = 'white'
    document.getElementById('dbnm').style.color = 'white'
    document.getElementById('bdm').style.color = '#adadad'
    const hde = document.getElementById('hd')
    hde.addEventListener('mouseover', function handleMouseOver(){
        hde.style.backgroundColor = '#333'
    })
    hde.addEventListener('mouseout', function handleMouseOut(){
        hde.style.backgroundColor = 'transparent'
    })
    const sde = document.getElementById('sh')
    sde.addEventListener('mouseover', function handleMouseOver(){
        sde.style.backgroundColor = '#333'
    })
    sde.addEventListener('mouseout', function handleMouseOut(){
        sde.style.backgroundColor = 'transparent'
    })
    document.getElementById('bothinf').style.backgroundColor = '#303030'
    document.getElementById('infdtxt').style.color = 'white'
    document.getElementById('dactv').style.border = '1px solid #303030'
    document.getElementById('dbtknv').style.border = '1px solid #303030'
    document.getElementById('dactv').style.color = 'white'
    document.getElementById('dbtknv').style.color = 'white'
    document.getElementById('erinf').style.color = 'white'
    document.getElementById('dwinerinf').style.backgroundColor = '#303030'
    document.getElementById('klttl').style.color = 'rgb(196,196,196)'
    document.getElementById('klttl1').style.color = 'rgb(196,196,196)'
    document.getElementById('klttl2').style.color = 'rgb(196,196,196)'
    document.getElementById('klttlpfp').style.color = 'rgb(196,196,196)'
    document.getElementById('klttlpfp1').style.color = 'rgb(196,196,196)'
    document.getElementById('klttlpfp2').style.color = 'rgb(196,196,196)'
    document.getElementById('titlemain').style.backgroundImage = 'url(./icons/text-1670696917220.png)'
    document.getElementById('kltxt').style.border = '1px solid #454545'
    document.getElementById('mmtxt').style.border = '1px solid #454545'
    document.getElementById('upfptxt').style.border = '1px solid #454545'
    document.getElementById('usiqtxt').style.border = '1px solid #454545'
    document.getElementById('uwbtrtxt').style.border = '1px solid #454545'
    document.getElementById('trthtxt').style.border = '1px solid #454545'
    document.getElementById('kltxt').style.color = '#ffffff'
    document.getElementById('mmtxt').style.color = '#ffffff'
    document.getElementById('upfptxt').style.color = '#ffffff'
    document.getElementById('usiqtxt').style.color = '#ffffff'
    document.getElementById('uwbtrtxt').style.color = '#ffffff'
    document.getElementById('trthtxt').style.color = '#ffffff'
    document.getElementById('prfx').style.backgroundColor = '#303030'
    document.getElementById('prfxn').style.color = 'rgb(196,196,196)'
    document.getElementById('prfv').style.color = 'white'
    document.getElementById('klmwin').style.backgroundColor = '#151515'
    document.getElementById('klmwin').style.border = ''
    document.getElementById('kledttl').style.color = 'rgb(196,196,196)'
    document.getElementById('kldet').style.color = 'rgb(196,196,196)'
    document.getElementById('im1').style.color = 'rgb(206,206,206)'
    document.getElementById('im2').style.color = 'rgb(206,206,206)'
    document.getElementById('im3').style.color = 'rgb(206,206,206)'
    document.getElementById('im4').style.color = 'rgb(206,206,206)'
    document.getElementById('im5').style.color = 'rgb(206,206,206)'
    document.getElementById('im6').style.color = 'rgb(206,206,206)'
    document.getElementById('im7').style.color = 'rgb(206,206,206)'
    document.getElementById('im1txt').style.border = '1px solid #303030'
    document.getElementById('im2txt').style.border = '1px solid #303030'
    document.getElementById('im3txt').style.border = '1px solid #303030'
    document.getElementById('im4txt').style.border = '1px solid #303030'
    document.getElementById('im5txt').style.border = '1px solid #303030'
    document.getElementById('im6txt').style.border = '1px solid #303030'
    document.getElementById('im7txt').style.border = '1px solid #303030'
    document.getElementById('im1txt').style.color = 'white'
    document.getElementById('im2txt').style.color = 'white'
    document.getElementById('im3txt').style.color = 'white'
    document.getElementById('im4txt').style.color = 'white'
    document.getElementById('im5txt').style.color = 'white'
    document.getElementById('im6txt').style.color = 'white'
    document.getElementById('im7txt').style.color = 'white'
    document.getElementById('imsvbtn').style.backgroundColor = 'rgba(73, 73, 73, 0.2)'
    document.getElementById('imsvbtn').style.color = 'rgb(196,196,196)'
    const svbtn = document.getElementById('imsvbtn')
    svbtn.addEventListener('mouseover', function handleMouseOver(){
        svbtn.style.backgroundColor = '#333333'
    })
    svbtn.addEventListener('mouseout', function handleMouseOut(){
        svbtn.style.backgroundColor = 'rgba(73, 73, 73, 0.2)'
    })
    document.getElementById('ppledtlg').style.stroke = 'white'
    document.getElementById('usrsttl').style.backgroundColor = '#303030'
    const minbtn = document.getElementById('minimizeApp')
minbtn.addEventListener('mouseover', function handleMouseOver(){
    minbtn.style.backgroundColor = 'rgb(75, 75, 75)'
    document.getElementById('mbtnicn').style.fill = 'white'
    document.getElementById('mbtnicn').style.stroke = 'white'
})
minbtn.addEventListener('mouseout', function handleMouseOut(){
    minbtn.style.backgroundColor = 'transparent'
    document.getElementById('mbtnicn').style.fill = '#7F8487'
    document.getElementById('mbtnicn').style.stroke = '#7F8487'
})
const clsbtn = document.getElementById('closeBtn')
clsbtn.addEventListener('mouseover', function handleMouseOver(){
    clsbtn.style.backgroundColor = '#cc2929'
    document.getElementById('cbtnicn').style.fill = 'white'
    document.getElementById('cbtnicn').style.stroke = 'white'
})
clsbtn.addEventListener('mouseout', function handleMouseOut(){
    clsbtn.style.backgroundColor = 'transparent'
    document.getElementById('cbtnicn').style.fill = '#7F8487'
    document.getElementById('cbtnicn').style.stroke = '#7F8487'
})
const mcsb = document.getElementById('mcsingle')
mcsb.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('iconmc').style.fill = 'white'
})
mcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('iconmc').style.fill = '#999999'
})
const dcsb= document.getElementById('disc')
dcsb.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('discbtn').style.fill = 'white'
})
dcsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('discbtn').style.fill = '#999999'
})
const stsb= document.getElementById('settings')
stsb.addEventListener('mouseover', function handleMouseOver(){
    document.getElementById('stngs').style.fill = 'white'
})
stsb.addEventListener('mouseout', function handleMouseOut(){
    document.getElementById('stngs').style.fill = '#999999'
})
document.getElementById('disnoti').style.fill = '#999999'
document.getElementById('notttl').style.color = 'white'
document.getElementById('optmw').style.background = '#111111'
document.getElementById('optmw').style.border = ''
document.getElementById('optwttl').style.color = 'white'
document.getElementById('mhdfq').style.color = 'rgb(124,124,124)'
document.getElementById('mhdfq1').style.color = 'rgb(124,124,124)'
document.getElementById('mhdfqdesc').style.color = 'rgb(196,196,196)'
document.getElementById('mhdfqdesc1').style.color = 'rgb(196,196,196)'
document.getElementById('mclserbtn').style.background = '#202020'
document.getElementById('mclserbtn').style.color = 'rgb(196,196,196)'
}
});
