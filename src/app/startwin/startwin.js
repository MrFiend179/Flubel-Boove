if(document.getElementById('ststt').textContent === 'Starting'){
    setTimeout(()=>{
        document.getElementById('ststt').innerText = 'Starting .'
        setTimeout(()=>{
            document.getElementById('ststt').innerText = 'Starting . .'
            setTimeout(()=>{
                document.getElementById('ststt').innerText = 'Starting . . .'
                setTimeout(()=>{
                    document.getElementById('ststt').innerText = 'Starting . .'
                    setTimeout(()=>{
                        document.getElementById('ststt').innerText = 'Starting .'
                        setTimeout(()=>{
                            document.getElementById('ststt').innerText = 'Starting'
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}