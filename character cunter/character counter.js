const submitBtn = document.getElementById('submit-btn')
const textArea = document.getElementById('text-area')
const charCounter = document.getElementById('char-counter')


submitBtn.addEventListener('click', function(){
  let result = textArea.value.length
  charCounter.innerHTML = 'Character Count:' + ' '+result
})
