const whatToPracticeDisplay = document.querySelector('.what-to-practice-display')
const practiceMelodic = document.querySelector('.radiobuttoninput1')
const practiceRhythmic = document.querySelector('.radiobuttoninput2')
const practiceMelodicAndRhythmic = document.querySelector('.radiobuttoninput3')
const melodicCriteriaArea = document.querySelector('.melodic-criteria')
const rhythmicCriteriaArea = document.querySelector('.rhythmic-criteria')
const generateExerciseButton = document.querySelector('.generate-exercise-button')
const generateMelodicExerciseButton = document.querySelector('.generate-melodic-exercise-button')
const generateRhythmicExerciseButton = document.querySelector('.generate-rhythmic-exercise-button')
const generateLargeExerciseButton = document.querySelector('.generate-large-exercise-button')
const completelyRandomButton = document.querySelector('.completely-random-exercise')
const approachDropdown = document.querySelector('.approach-input-form')
const keyDropdown = document.querySelector('.key-input-form')
const tonalityDropdown = document.querySelector('.tonality-input-form')
const techniqueDropdown = document.querySelector('.technique-input-form')
const positionDropdown = document.querySelector('.position-input-form')
const subdivisionDropdown = document.querySelector('.subdivision-input-form')
const randomBpmButton = document.querySelector('.random-bpm-radiobutton-input')
const chooseBpmButton = document.querySelector('.user-bpm-radiobutton-input')
const minimumBpmEntryField = document.querySelector('.bpm-selection-minimum-input')
const maximumBpmEntryField = document.querySelector('.bpm-selection-maximum-input')
const minimumBpmArea = document.querySelector('.bpm-range-min-input-section')
const maximumBpmArea = document.querySelector('.bpm-range-max-input-section')
const bpmSelections = document.querySelector('.bpm-selections')
const setTempoButton = document.querySelector('.set-tempo-button')
var globalBPM = 120;


//Metronome
var metronome = new Metronome();
var tempo = document.getElementById('tempo');
tempo.textContent = metronome.tempo;

var playPauseIcon = document.getElementById('play-pause-icon');

var playButton = document.getElementById('play-button');
playButton.addEventListener('click', function() {
    metronome.startStop();

    if (metronome.isRunning) {
        playPauseIcon.className = 'pause';
    }
    else {
        playPauseIcon.className = 'play';
    }

});

var tempoChangeButtons = document.getElementsByClassName('tempo-change');
for (var i = 0; i < tempoChangeButtons.length; i++) {
    tempoChangeButtons[i].addEventListener('click', function() {
        metronome.tempo += parseInt(this.dataset.change);
        tempo.textContent = metronome.tempo;

    });
}
//Metronome



practiceMelodic.addEventListener('click', displayMelodicDropdowns)
practiceRhythmic.addEventListener('click', displayRhythmicDropdowns)
practiceMelodicAndRhythmic.addEventListener('click', displayMelodicAndRhythmic)
completelyRandomButton.addEventListener('click', displayRandomExercise)
generateMelodicExerciseButton.addEventListener("click", (event) => {
  displayMelodicExercise(event)
});
generateRhythmicExerciseButton.addEventListener("click", (event) => {
  displayRhythmicExercise(event)
});
generateLargeExerciseButton.addEventListener("click", (event) => {
  displayMelodicAndRhythmicExercise(event)
})
chooseBpmButton.addEventListener("click", displayBpmSelections)
randomBpmButton.addEventListener("click", removeBpmSelections)
setTempoButton.addEventListener("click", setMetronomeTempo)


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

window.onload = displayRandomExercise();

function displayRandomExercise() {
  let bpm = bpms[getRandomIndex(bpms)]
  globalBPM = bpm
  whatToPracticeDisplay.innerHTML = ''
  whatToPracticeDisplay.innerHTML += `
  <h1>You should practice ${keys[getRandomIndex(keys)]}
  ${scales[getRandomIndex(scales)]} in ${subdivisions[getRandomIndex(subdivisions)]}
  at ${bpm} BPM using ${techniques[getRandomIndex(techniques)]}!
  </h1>
  `
}

function displayMelodicAndRhythmic() {
  melodicCriteriaArea.classList.remove('hidden')
  rhythmicCriteriaArea.classList.remove('hidden')
  practiceRhythmic.checked = false;
  practiceMelodic.checked = false;
  generateLargeExerciseButton.classList.remove('hidden')
  generateMelodicExerciseButton.classList.add('hidden')
  generateRhythmicExerciseButton.classList.add('hidden')
  randomBpmButton.checked = true;
  chooseBpmButton.checked = false;
}

function displayMelodicDropdowns() {
  melodicCriteriaArea.classList.remove('hidden')
  rhythmicCriteriaArea.classList.add('hidden')
  generateMelodicExerciseButton.classList.remove('hidden')
  generateRhythmicExerciseButton.classList.add('hidden')
  generateLargeExerciseButton.classList.add('hidden')
  practiceRhythmic.checked = false;
  practiceMelodicAndRhythmic.checked = false;
}

function displayRhythmicDropdowns() {
  rhythmicCriteriaArea.classList.remove('hidden')
  melodicCriteriaArea.classList.add('hidden')
  generateRhythmicExerciseButton.classList.remove('hidden')
  generateLargeExerciseButton.classList.add('hidden')
  generateMelodicExerciseButton.classList.add('hidden')
  practiceMelodic.checked = false;
  practiceMelodicAndRhythmic.checked = false;
  randomBpmButton.checked = true;
  chooseBpmButton.checked = false;
}

function resetLeftButtons() {
  practiceMelodic.checked = false;
  practiceRhythmic.checked = false;
  practiceMelodicAndRhythmic.checked = false;
}

function displayBpmSelections() {
  randomBpmButton.checked = false;
  bpmSelections.classList.remove("hidden")
}

function removeBpmSelections() {
  chooseBpmButton.checked = false;
  bpmSelections.classList.add("hidden")
}

function displayMelodicExercise(event) {
  whatToPracticeDisplay.innerHTML = ''
  if(practiceMelodic.checked = true) {
    let approach = approachDropdown.value;
    if (approach === "Random") {
      approach = approaches[getRandomIndex(approaches)]
    }
    let key = keyDropdown.value;
    if (key === "Random") {
      key = keys[getRandomIndex(keys)]
    }
    let tonality = tonalityDropdown.value;
    if (tonality === "Random") {
      tonality = scalesAndArps[getRandomIndex(scalesAndArps)]
    }
    let technique = techniqueDropdown.value;
    if (technique === "Random") {
      technique = techniques[getRandomIndex(techniques)]
    }
    let position = positionDropdown.value;
    if (position === "Random") {
      position = positions[getRandomIndex(positions)]
    }
    whatToPracticeDisplay.innerHTML += `
    <h1>You should practice ${key}
    ${tonality} ${approach} using ${technique}
    in ${position} position!
    </h1>
    `
  }
}


function displayRhythmicExercise() {
let definedBpm = createBpmArray(minimumBpmEntryField.value, maximumBpmEntryField.value)
  whatToPracticeDisplay.innerHTML = '';
  let subdivision = subdivisionDropdown.value;
  let bpm;
  if (subdivision === "Random") {
    subdivision = subdivisions[getRandomIndex(subdivisions)]
  }
  if(!randomBpmButton.checked && !chooseBpmButton.checked) {
    bpm = bpms[getRandomIndex(bpms)]
  }
  else if (randomBpmButton.checked === true) {
    chooseBpmButton.checked === false
    bpm = bpms[getRandomIndex(bpms)]
  }
  else if (chooseBpmButton.checked === true) {
    randomBpmButton.checked === false
    bpm = definedBpm
  }
  globalBPM = bpm
  whatToPracticeDisplay.innerHTML += `
  <h1>You should practice ${subdivision} at ${bpm} bpm!</h1>
  `
}

function createBpmArray(min, max) {
  let newBpmArray = []
  for (let i = +min; i <= +max; i++) {
    newBpmArray.push(i)
  }
  return newBpmArray[getRandomIndex(newBpmArray)]
}



function displayMelodicAndRhythmicExercise(event) {
  whatToPracticeDisplay.innerHTML = '';
  let subdivision = subdivisionDropdown.value;
  let bpm;
  if (subdivision === "Random") {
    subdivision = subdivisions[getRandomIndex(subdivisions)]
  }
  if(!randomBpmButton.checked && !chooseBpmButton.checked) {
    bpm = bpms[getRandomIndex(bpms)]
  }
  else if (randomBpmButton.checked === true) {
    chooseBpmButton.checked === false
    bpm = bpms[getRandomIndex(bpms)]
  }
  else if (chooseBpmButton.checked === true) {
    randomBpmButton.checked === false
    bpm = createBpmArray(minimumBpmEntryField.value, maximumBpmEntryField.value)
  }
  let approach = approachDropdown.value;
  if (approach === "Random") {
    approach = approaches[getRandomIndex(approaches)]
  }
  let key = keyDropdown.value;
  if (key === "Random") {
    key = keys[getRandomIndex(keys)]
  }
  let tonality = tonalityDropdown.value;
  if (tonality === "Random") {
    tonality = scalesAndArps[getRandomIndex(scalesAndArps)]
  }
  let technique = techniqueDropdown.value;
  if (technique === "Random") {
    technique = techniques[getRandomIndex(techniques)]
  }
  let position = positionDropdown.value;
  if (position === "Random") {
    position = positions[getRandomIndex(positions)]
  }
  globalBPM = bpm
  whatToPracticeDisplay.innerHTML +=
  `
  <h1>You should practice ${key}
  ${tonality} ${approach} using ${technique}
  in ${position} position in ${subdivision} at ${bpm} bpm!
  </h1>
  `
}

function setMetronomeTempo() {
  metronome.tempo = globalBPM
  tempo.textContent = globalBPM
}
