var pickStock() {
    const stockArray = ['Alphabet', 'Medifast', 'Asml Holding NV', 'EOG Resources Inc', 'Lowe\'s Cos Inc', 'Microsoft Corp', 'Upstart Holdings Inc', 'Visa Inc', 'Grupo Aeroportuario del Sureste SAB de CV', 'Meta Platforms Inc'];
    return stockArray[Math.floor(Math.random() * stockArray.length)];
}

var pickAdjective() {
    const adjectiveArray = ['interesting', 'blue', 'raw', 'ripe', 'zesty', 'wickedly awesome', 'dynamite', 'bull', 'bear', 'hungry'];
    return adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
}

var pickAdverb() {
    const adverbArray = ['definitely', 'probably', 'surely', 'most indefinite', 'positively', 'maybe', 'pssibly','absolutely'];
    return adverbArray[Math.floor(Math.random() * adverbArray.length)];
}

var pickVerb() {
    const verbArraay = ['buy', 'sell', 'hold'];
    return verbArray[Math.floor(Math.random() * verbArray.length)];
}

var pickPhrase() {
    const phraseArray = ['The stars are aligned', 'The cards have spoken', 'The force is strong in this one', 'The future is now', 'The spirits are present'];
    return phraseArray[Math.floor(Math.random() * phraseArray.length)];
}

console.log();
console.log('**************************************');
console.log('*');
console.log('*');
console.log(`* The stock of ${pickStock()} looks ${pickAdjective()!}`);
console.log(`* You should ${pickAdverb()} ${pickVerb()}.`);
console.log('*');
console.log(`* ${pickPhrase()}`);
console.log('*');
console.log('*');
console.log('*********************************************');