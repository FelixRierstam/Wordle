// Load word list
const wordList: string[] = [
'apple',
'bread',
'crane',
'dough',
'eagle',
'fable',
'grape',
'heart',
'ivory',
'juice',
'knack',
'lemon',
'mango',
'night',
'olive',
'pearl',
'quilt',
'river',
'stone',
'tiger',
'ultra',
'vivid',
'water',
'xenon',
'yacht',
'zebra',
'abide',
'bliss',
'cloud',
'drive',
'envoy',
'flame',
'grasp',
'haste',
'ideal',
'jolly',
'knots',
'leapt',
'mayor',
'noble',
'ocean',
'plumb',
'quick',
'reset',
'scent',
'thank',
'unity',
'vocal',
'wager',
'yield',
'zesty',
'adopt',
'beard',
'candy',
'drain',
'error',
'flock',
'gloom',
'habit',
'input',
'jumpy',
'knock',
'loyal',
'magic',
'oasis',
'panic',
'quest',
'royal',
'shine',
'trick',
'vivid',
'whale',
'yield',
'abide',
'broth',
'charm',
'dough',
'embry',
'frost',
'glory',
'hover',
'liver',
'moist',
'necks',
'ornet',
'petal',
'quark',
'repay',
'shaky',
'tread',
'vivid',
'wheat',
'yearn',
'zoned',
'acorn',
'brave',
'creek',
'debut',
'eagle',
'flint',
'grove',
'haste',
'inbox',
'jumpy',
'karma',
'laser',
'mirth',
'noisy',
'outer',
'paint',
'query',
'rival',
'sheer',
'trend',
'urban',
'vivid',
'whale',
'yield',
'aloft',
'bored',
'craft',
'drift',
'faint',
'gates',
'hover',
'imply',
'latch',
'minus',
'noble',
'orbit',
'plain',
'quail',
'reign',
'swipe',
'treat',
'vivid',
'wrote',
'youth',
'zoned',
'admit',
'blend',
'climb',
'dozen',
'entry',
'flame',
'grind',
'happy',
'inbox',
'jolly',
'knack',
'lemon',
'mimic',
'night',
'ocean',
'plumb',
'quest',
'raise',
'scent',
'thick',
'unite',
'vivid',
'waste',
'yield',
'aorta',
'blush',
'cower',
'depth',
'eager',
'fraud',
'grove',
'heron',
'index',
'jumpy',
'kiosk',
'lunar',
'manor',
'novel',
'oasis',
'pearl',
'quilt',
'rival',
'share',
'twine',
'vivid',
'wrung',
'youth',
'zoned',
'adapt',
'brisk',
'crisp',
'doubt',
'eagle',
'flint',
'gloom',
'happy',
'lunar',
'media',
'night',
'ocean',
'plant',
'quill',
'reply',
'sharp',
'treat',
'video',
'wound',
'young',
'zoned',
'angel',
'brave',
'crane',
'dance',
'enter',
'forge',
'grape',
'happy',
'irate',
'jolly',
'kites',
'laser',
'moist',
'novel',
'ocean',
'plant',
'quiet',
'robot',
'scent',
'teach',
'vivid',
'worry',
'yacht',
'zoned',
'array',
'baker',
'charm',
'drink',
'evoke',
'frame',
'glory',
'heart',
'input',
'jumpy',
'knock',
'lunar',
'media',
'night',
'ocean',
'plumb',
'quest',
'rusty',
'storm',
'vivid',
'wound',
'young',
'zoned',
'apply',
'baker',
'crane',
'douse',
'exile',
'fruit',
'glare',
'hover',
'jumpy',
'knock',
'laser',
'media',
'ocean',
'plane',
'rival',
'sheer',
'trust',
'vivid',
'whale',
'yield',
'zoned',
'amaze',
'bless',
'crisp',
'drift',
'elbow',
'focal',
'gloom',
'heart',
'input',
'jumpy',
'knock',
'lunar',
'media',
'night',
'ocean',
'plane',
'quest',
'radio',
'shore',
'taste',
'vivid',
'woven',
'youth',
'zoned',
'adopt',
'brush',
'climb',
'douse',
'enjoy',
'flair',
'grape',
'heart',
'input',
'jumpy',
'laser',
'money',
'ocean',
'plane',
'quiet',
'round',
'space',
'track',
'vivid',
'wrote',
'young',
'zoned',
'actor',
'blend',
'crisp',
'drive',
'early',
'flame',
'grind',
'happy',
'input',
'jumpy',
'knife',
'laser',
'magic',
'oasis',
'plumb',
'quest',
'ratio',
'scale',
'train',
'vivid',
'wrote',
'yield',
'zoned',
'apple',
'blush',
'cloud',
'dance',
'eagle',
'flame',
'grape',
'heart',
'input',
'jumpy',
'knife',
'laser',
'media',
'night',
'ocean',
'plumb',
'quest',
'robot',
'shape',
'treat',
'vivid',
'wrote',
'young',
'zoned',
'array',
'blend',
'crisp',
'douse',
'enter',
'flame',
'glove',
'happy',
'input',
'jumpy',
'laser',
'media',
'night',
'ocean',
'quest',
'rusty',
'stone',
'vivid',
'youth',
'zoned'
];

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

let word = getRandomWord();
let attempts = 0;
const maxAttempts = 5;
const guessedLetters: Set<string> = new Set();

document.getElementById('submit-guess')?.addEventListener('click', () => {
    const input = (document.getElementById('guess-input') as HTMLInputElement).value.toLowerCase();
    if (input.length !== 5) {
        alert('Please enter a 5-letter word.');
        return;
    }

    const result = checkGuess(word, input);
    updateBoard(input, result);
    updateAlphabet(input);

    if (input === word) {
        document.getElementById('message')!.textContent = 'Congratulations! You guessed the word!';
        document.getElementById('submit-guess')!.setAttribute('disabled', 'true');
    } else if (++attempts >= maxAttempts) {
        document.getElementById('message')!.textContent = `Game Over! The word was "${word}".`;
        document.getElementById('submit-guess')!.setAttribute('disabled', 'true');
    }
});

// Funktion för att initialisera alfabetet
function initializeAlphabet() {
    const alphabetDiv = document.getElementById('alphabet')!;
    
    // Skapa bokstavsknappar
    for (const letter of alphabet) {
        const button = document.createElement('div');
        button.textContent = letter;
        button.className = 'letter-button not-guess';
        alphabetDiv.appendChild(button);
    }
}

// Uppdatera alfabetet baserat på gissningar
function updateAlphabet(input: string) {
    const letterButtons = document.getElementsByClassName('letter-button');
    
    
    // Lägg till nya gissade bokstäver
    for (const letter of input) {
        guessedLetters.add(letter);
    }

    // Uppdatera bokstavsknapparna baserat på gissningar
    for (let i = 0; i < letterButtons.length; i++) {
        const button = letterButtons[i] as HTMLDivElement;
        const letter = button.textContent!;
        if (guessedLetters.has(letter)) {
            button.className = 'letter-button ' + (word.includes(letter) ? 'correct' : 'absent');
        }
    }
}

function getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

function checkGuess(word: string, guess: string): string[] {
    const result = Array(5).fill('absent');

    const wordLetterCounts: { [key: string]: number } = {};
    for (const letter of word) {
        wordLetterCounts[letter] = (wordLetterCounts[letter] || 0) + 1;
    }

    for (let i = 0; i < word.length; i++) {
        if (guess[i] === word[i]) {
            result[i] = 'correct';
            wordLetterCounts[guess[i]]--;
        }
    }

    for (let i = 0; i < word.length; i++) {
        if (result[i] === 'absent' && word.includes(guess[i]) && wordLetterCounts[guess[i]] > 0) {
            result[i] = 'present';
            wordLetterCounts[guess[i]]--;
        }
    }

    return result;
}

function updateBoard(guess: string, result: string[]) {
    const board = document.getElementById('board')!;
    
    const row = document.createElement('div');
    row.className = 'row';
    
    for (let i = 0; i < guess.length; i++) {
        const cell = document.createElement('div');
        cell.textContent = guess[i];
        cell.className = 'cell ' + result[i];
        row.appendChild(cell);
    }
    
    board.appendChild(row);
}

// Initialisera alfabetet när sidan laddas
initializeAlphabet();