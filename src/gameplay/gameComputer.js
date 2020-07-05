import randomWords from 'random-words'

export const hasRepeatingLetter = (word) => {
    const letters = word.split("")    
    let checkArr = []    
    letters.forEach((letter) => {
        if (!checkArr.includes(letter)){
            checkArr.push(letter)  
        }                   
    })
    if (checkArr.length === letters.length)
        return (false)
    else    
        return true         
}

export const generateWord = (difficulty) => {      
    let word =""
    do {
        word = randomWords({exactly: 1, maxLength: difficulty})[0]
      }
    while (word.length !== difficulty || hasRepeatingLetter(word))    
    return(word)  
}

export const countWords = () => {
    let wordList = []
    let word = ""
    let len = 0
    let i = 0
    while(i < 8000) {
        i++
        word = randomWords({exactly: 1,  maxLength: 6})[0]        
        len = word.length
        if (len > 3 && !(wordList.includes(word)))
            wordList.push(word)        
    }
    return wordList
}
//bull - same location; cow - letter is present
export const getCowsAndBulls = (answer, guess) => {
    let cow = 0
    let bull = 0
    if (answer === guess){
        return ({
            bull:answer.length,
            cow:0
        })
    }else {   
        answer.split("").forEach((letter, index) => {
            if(letter === guess[index]){
                bull = bull + 1
            }else if(guess.split("").includes(letter)){
                cow = cow + 1
            }
        });
        return ({
            bull,
            cow
        })
    }
}