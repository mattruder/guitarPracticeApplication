const arpeggios = [
  'major',
  'minor',
  'fully diminished 7th',
  'half diminished 7th',
  'major 7th',
  'minor 7th',
  'dominant 7th',
  'minor/major 7th'
]
const bpm = [
30,
31,
32,
33,
34,
35,
36,
37,
38,
39,
40,
41,
42,
43,
44,
45,
46,
47,
48,
49,
50,
51,
52,
53,
54,
55,
56,
57,
58,
59,
60,
61,
62,
63,
64,
65,
66,
67,
68,
69,
70,
71,
72,
73,
74,
75,
76,
77,
78,
79,
80,
81,
82,
83,
84,
85,
86,
87,
88,
89,
90,
91,
92,
93,
94,
95,
96,
97,
98,
99,
100,
101,
102,
103,
104,
105,
106,
107,
108,
109,
110,
111,
112,
113,
114,
115,
116,
117,
118,
119,
120,
121,
122,
123,
124,
125,
126,
127,
128,
129,
130,
131,
132,
133,
134,
135,
136,
137,
138,
139,
140,
141,
142,
143,
144,
145,
146,
147,
148,
149,
150,
151,
152,
153,
154,
155,
156,
157,
158,
159,
160,
161,
162,
163,
164,
165,
166,
167,
168,
169,
170,
171,
172,
173,
174,
175,
176,
177,
178,
179,
180,
181,
182,
183,
184,
185,
186,
187,
188,
189,
190,
191,
192,
193,
194,
195,
196,
197,
198,
199,
200
]
const intervals = [
  '2nd',
  '3rd',
  '4th',
  '5th',
  '6th',
  '7th',
  'octave',
  '9th',
  '11th',
  '13th'
]
const keys = [
  'C',
  'C#/Db',
  'D',
  'D#/Eb',
  'E',
  'F',
  'F#/Gb',
  'G',
  'G#/Ab',
  'A',
  'A#/Bb',
  'B'

]
const scales = [
  'major',
  'minor',
  'harmonic minor',
  'melodic minor'
]
const scalesAndArps = [
  'major',
  'minor',
  'harmonic minor',
  'melodic minor',
  'fully diminished 7th',
  'half diminished 7th',
  'major 7th',
  'minor 7th',
  'dominant 7th',
  'minor/major 7th'
]
const subdivisions = [
  'quarter notes',
  'eighth notes',
  'sixteenth notes',
  'eight note triplets',
  'sixteenth note triplets'
]
const techniques = [
  'alternate picking starting on a downstroke',
  'alternate picking starting on an upstroke',
  'legato',
  'hybrid picking',
  'fingerpicking',
  'economy/sweep picking'
]
const approaches = [
  'Scales',
  'Arpeggios',
  'Triads'
]
const positions = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "Open"
]
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



practiceMelodic.addEventListener('click', displayMelodicDropdowns)
practiceRhythmic.addEventListener('click', displayRhythmicDropdowns)
practiceMelodicAndRhythmic.addEventListener('click', displayMelodicAndRhythmic)
completelyRandomButton.addEventListener('click', displayRandomExercise)
generateMelodicExerciseButton.addEventListener("click", (event) => {
  displayMelodicExercise(event)
});


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// window.onload = displayRandomExercise();

function displayRandomExercise() {
  whatToPracticeDisplay.innerHTML = ''
  whatToPracticeDisplay.innerHTML += `
  <h1>You should practice ${keys[getRandomIndex(keys)]}
  ${scales[getRandomIndex(scales)]} in ${subdivisions[getRandomIndex(subdivisions)]}
  at ${bpm[getRandomIndex(bpm)]} BPM using ${techniques[getRandomIndex(techniques)]}!
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
}

function resetLeftButtons() {
  practiceMelodic.checked = false;
  practiceRhythmic.checked = false;
  practiceMelodicAndRhythmic.checked = false;
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
