
si.wifiConnections().then(data =>{
    document.getElementById('ssidn').innerText = data[0].ssid
    document.getElementById('typet').innerText = data[0].iface
})


function copier() {
    var copyText = document.getElementById("gthub");
    copyText.select();
  
    navigator.clipboard.writeText(copyText.value);
    document.getElementById('gthubc').style.display = 'flex'
}
function copier2() {
    var copyText = document.getElementById("twt");
    copyText.select();
  
    navigator.clipboard.writeText(copyText.value);
    document.getElementById('twtc').style.display = 'flex'
  }
  function copier3() {
    var copyText = document.getElementById("web");
    copyText.select();
  
    navigator.clipboard.writeText(copyText.value);
    document.getElementById('webc').style.display = 'flex'
  }
  function copier4() {
    var copyText = document.getElementById("yt");
    copyText.select();
  
    navigator.clipboard.writeText(copyText.value);
    document.getElementById('ytc').style.display = 'flex'
  }
  setInterval(()=>{
    document.getElementById('ytc').style.display = 'none'
  },5000)
  setInterval(()=>{
    document.getElementById('twtc').style.display = 'none'
  },5000)
  setInterval(()=>{
    document.getElementById('gthubc').style.display = 'none'
  },5000)
  setInterval(()=>{
    document.getElementById('webc').style.display = 'none'
  },5000)
