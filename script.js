const textarea = document.getElementById('text');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    const text = textarea.value;
    const jarvis = new SpeechSynthesisUtterance(text);
    jarvis.lang = 'pt-BR';
    window.speechSynthesis.speak(jarvis);
});