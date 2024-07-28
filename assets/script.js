const playButton = document.getElementById('play_button')
const playButton1 = document.getElementById('play_button_1');
const textInput = document.getElementById('history_info');
const textInput1 = document.getElementById('history_info_1');
playButton.addEventListener('click', () => {
    playText(textInput.innerHTML)
  });

playButton1.addEventListener('click', () => {
  playText(textInput1.innerHTML)
});
const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener('end', () => {
    textInput.disabled = false
  })
  utterance.addEventListener('boundary', e => {
    currentCharacter = e.charIndex
  })

  function playText(text) {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
      return speechSynthesis.resume()
    }
    if (speechSynthesis.speaking) return
    utterance.text = text
    utterance.rate = 1
    textInput.disabled = true
    speechSynthesis.speak(utterance)
  }