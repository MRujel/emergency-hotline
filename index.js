// Reusable Function
// getClick
function getClick(id){
    const coin = document.getElementById('coin-number')
    const coinTotal = parseInt(coin.innerText)
    if(coinTotal < 20){
        alert('Get more coins')
        return;
    }
    coin.innerText = coinTotal -20
}

// copynumber
function copyNumber(emergencyNumberId){
    const emergencyNumber = document.getElementById(emergencyNumberId)
    const innerNumber = emergencyNumber.innerText
    
    // second part
    navigator.clipboard.writeText(innerNumber).then(function(){
        const copyTotal = document.getElementById('copy-total-number')
        const copyTotalNumber = parseInt(copyTotal.innerText)
        const updatedcopyTotalNumber = copyTotalNumber + 1
        copyTotal.innerText = updatedcopyTotalNumber
    })
}
const callHist = []

function callHistory(name, number){
const data = {
        name: name,
        number: number,
        date:new Date().toLocaleTimeString()
    }
    callHist.push(data)
    console.log(callHist)

    const callHistoryContainer = document.getElementById('call-history-container')
    callHistoryContainer.innerText = ''

    for(const history of callHist){
        const div = document.createElement('div')
        div.innerHTML = `
         <div id="call-history" class="mt-1 p-3">
            <div class="flex justify-between items-center gap-2 bg-[#fafafa]">
                <div>
                    <h2 class="text-[16px] font-semibold">${history.name}</h2>
                    <p class="text-[18px] text-[#5c5c5c]">${history.number}</p>
                </div>
                <p class="text-[18px]">${history.date}</p>
            </div>
        </div>
        `
        callHistoryContainer.appendChild(div)

}}

// reusable finish


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
   
    const data = {
        name: 'National Emergency Number',
        number: '999',
        date:new Date().toLocaleTimeString()
    }
    callHist.push(data)
    console.log(callHist)

    const callHistoryContainer = document.getElementById('call-history-container')
    callHistoryContainer.innerText = ''

    for(const history of callHist){
        const div = document.createElement('div')
        div.innerHTML = `
         <div id="call-history" class="mt-1 p-3">
            <div class="flex justify-between items-center gap-2 bg-[#fafafa]">
                <div>
                    <h2 class="text-[16px] font-semibold">${history.name}</h2>
                    <p class="text-[18px] text-[#5c5c5c]">${history.number}</p>
                </div>
                <p class="text-[18px]">${history.date}</p>
            </div>
        </div>
        `
        callHistoryContainer.appendChild(div)
    }
    alert('National Emergency Number: 999')

})

document.getElementById('emergency-call-button-2').addEventListener('click', function(){
     getClick('emergency-call-button-2');
     callHistory('Police Helpline Number', '999');
     alert('Police Helpline Number: 999')
})
document.getElementById('emergency-call-button-3').addEventListener('click', function(){
     getClick('emergency-call-button-3')
     callHistory('Fire Service Number', '999')
     alert('Fire Service Number: 999')
})
document.getElementById('emergency-call-button-4').addEventListener('click', function(){
     getClick('emergency-call-button-4')
     callHistory('Ambulance Service', '1994-999999')
     alert('Ambulance Service: 1994-999999')
})
document.getElementById('emergency-call-button-5').addEventListener('click', function(){
     getClick('emergency-call-button-5')
     callHistory('Women & Child Helpline', '109')
     alert('Women & Child Helpline: 109')
})
document.getElementById('emergency-call-button-6').addEventListener('click', function(){
     getClick('emergency-call-button-6')
     callHistory('Anti-Corruption Helpline', '106')
     alert('Anti-Corruption Helpline: 106')
})
document.getElementById('emergency-call-button-7').addEventListener('click', function(){
     getClick('emergency-call-button-7')
     callHistory('Electricity Helpline', '16216')
     alert('Electricity Helpline: 16216')
})
document.getElementById('emergency-call-button-8').addEventListener('click', function(){
     getClick('emergency-call-button-8')
     callHistory('Brac Helpline', '16445')
     alert('Brac Helpline: 16445')
})
document.getElementById('emergency-call-button-9').addEventListener('click', function(){
     getClick('emergency-call-button-9')
     callHistory('Bangladesh Railway Helpline', '163')
     alert('Bangladesh Railway Helpline: 163')
})

// copy button
document.getElementById('copy-btn-1').addEventListener('click', function(){
    copyNumber('emergency-number-1')
    alert('Number Copied')
})
document.getElementById('copy-btn-2').addEventListener('click', function(){
    copyNumber('emergency-number-2')
    alert('Number Copied')

})
document.getElementById('copy-btn-3').addEventListener('click', function(){
    copyNumber('emergency-number-3')
    alert('Number Copied')

})
document.getElementById('copy-btn-4').addEventListener('click', function(){
    copyNumber('emergency-number-4')
    alert('Number Copied')

})
document.getElementById('copy-btn-5').addEventListener('click', function(){
    copyNumber('emergency-number-5')
    alert('Number Copied')

})
document.getElementById('copy-btn-6').addEventListener('click', function(){
    copyNumber('emergency-number-6')
    alert('Number Copied')

})
document.getElementById('copy-btn-7').addEventListener('click', function(){
    copyNumber('emergency-number-7')
    alert('Number Copied')

})
document.getElementById('copy-btn-8').addEventListener('click', function(){
    copyNumber('emergency-number-8')
    alert('Number Copied')

})
document.getElementById('copy-btn-9').addEventListener('click', function(){
    copyNumber('emergency-number-9')
    alert('Number Copied')

})

// clear button
document.getElementById('clear-button').addEventListener('click', function(){
    const clear = document.getElementById('call-history-container')
    clear.innerText = ''
})