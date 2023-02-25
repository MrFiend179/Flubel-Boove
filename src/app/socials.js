console.log('ola1')

async function copier() {
    var copyText = document.getElementById("gthub");
    copyText.select();
  
    navigator.clipboard.writeText(copyText.value);
    document.getElementById('checkmark').style.display = 'flex'
    setTimeout(()=>{
      document.getElementById('checkmark').style.display = 'none'
    },1500)
}
function copier2() {
    var copyText = document.getElementById("twt");
    copyText.select();
  
    navigator.clipboard.writeText(copyText.value);
    document.getElementById('checkmark1').style.display = 'flex'
    setTimeout(()=>{
      document.getElementById('checkmark1').style.display = 'none'
    },1500)
  }
  function copier3() {
    var copyText = document.getElementById("web");
    copyText.select();
  
    navigator.clipboard.writeText(copyText.value);
    document.getElementById('checkmark2').style.display = 'flex'
    setTimeout(()=>{
      document.getElementById('checkmark2').style.display = 'none'
    },1500)
  }
  function copier4() {
    var copyText = document.getElementById("yt");
    copyText.select();
  
    navigator.clipboard.writeText(copyText.value);
    document.getElementById('checkmark3').style.display = 'flex'
    setTimeout(()=>{
      document.getElementById('checkmark3').style.display = 'none'
    },1500)
  }
  function copier5() {
    var copyText = document.getElementById("discser");
    copyText.select();
  
    navigator.clipboard.writeText(copyText.value);
    document.getElementById('checkmark4').style.display = 'flex'
    setTimeout(()=>{
      document.getElementById('checkmark4').style.display = 'none'
    },1500)
  }