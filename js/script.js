let $ = document
const inputElem = $.querySelector('#range')
const container = $.querySelector('.container')

inputElem.addEventListener("change",function(event){

container.style.filter="brightness("+event.target.value+"%)"

})
