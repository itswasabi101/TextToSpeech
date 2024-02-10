// Creating a new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// An array to store available voices
let voices = [];

// Selecting the <select> element in the HTML document
let voiceSelect = document.querySelector("select");

// This event is triggered when the available voices for speech synthesis change
window.speechSynthesis.onvoiceschanged = () => {
    // Get the list of available voices
    voices = window.speechSynthesis.getVoices();

    // Set the voice of the speech utterance to the first voice in the list
    speech.voice = voices[0];

    // Populate the <select> dropdown with the available voices
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// Event listener for changes in the selected voice from the dropdown
voiceSelect.addEventListener("change", () => {
    // Set the voice of the speech utterance to the selected voice
    speech.voice = voices[voiceSelect.value];
});

// Event listener for the button click
document.querySelector("button").addEventListener("click", () => {
    // Set the text of the speech utterance to the content of the <textarea>
    speech.text = document.querySelector("textarea").value;

    // Trigger the speech synthesis to speak the provided text
    window.speechSynthesis.speak(speech);
});
