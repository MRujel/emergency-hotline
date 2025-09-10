// Reusable Function
function getClick(id){
    const coin = document.getElementById('coin-number')
    const coinTotal = parseInt(coin.innerText)
    if(coinTotal < 20){
        alert('Get more coins')
        return;
    }
    coin.innerText = coinTotal -20
}


// Heart function
document.querySelectorAll('.heart-icon').forEach(function(heartIcon) {
    heartIcon.addEventListener('click', function(){
        const heart = document.getElementById('heart-number')
        const heartNumber = parseInt(heart.innerText)
        const updatedheartNumber = heartNumber + 1
        heart.innerText = updatedheartNumber;
    })
})

// Call Function Starts
document.getElementById('emergency-call-button')
.addEventListener('click', function(){
    const coin = document.getElementById('coin-number')
    const coinTotal = parseInt(coin.innerText)
    if(coinTotal < 20){
        alert('Get more coins')
        return;
    }
    coin.innerText = coinTotal -20
})

document.getElementById('emergency-call-button-2').addEventListener('click', function(){
     getClick('emergency-call-button-2')
})
document.getElementById('emergency-call-button-3').addEventListener('click', function(){
     getClick('emergency-call-button-3')
})
document.getElementById('emergency-call-button-4').addEventListener('click', function(){
     getClick('emergency-call-button-4')
})
document.getElementById('emergency-call-button-5').addEventListener('click', function(){
     getClick('emergency-call-button-5')
})
document.getElementById('emergency-call-button-6').addEventListener('click', function(){
     getClick('emergency-call-button-6')
})
document.getElementById('emergency-call-button-7').addEventListener('click', function(){
     getClick('emergency-call-button-7')
})
document.getElementById('emergency-call-button-8').addEventListener('click', function(){
     getClick('emergency-call-button-8')
})
document.getElementById('emergency-call-button-9').addEventListener('click', function(){
     getClick('emergency-call-button-9')
})