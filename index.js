// Heart function
document.querySelectorAll('.heart-icon').forEach(function(heartIcon) {
    heartIcon.addEventListener('click', function(){
        const heart = document.getElementById('heart-number')
        const heartNumber = parseInt(heart.innerText)
        const updatedheartNumber = heartNumber + 1
        heart.innerText = updatedheartNumber;
    })
})

// Heart Function Done