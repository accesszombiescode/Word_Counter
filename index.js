var text = document.querySelector('.text');
var words = document.querySelector('.words')
var characters = document.querySelector('.characters')

text.addEventListener('input', () => {

    characters.textContent = text.value.length;

    words.textContent = text.value.trim().split(/\s+/).length;
})