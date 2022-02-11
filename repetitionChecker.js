let inputString = "1 1 h"
    // checkForRepetition(inputString)
    checkForRepetition(inputString)
    // const s = 'word word'
    // console.log(returnWordIndex('bo',-7,s))
    // console.log(returnWordIndex('word',-3,s))
    
// function checkForRepetition(inputString)
// {
//             inputString = inputString.toLowerCase()
//     const   words = inputString.split(" ")
//     let     repetitionFlag = 0
//             for(let index=0;index<words.length;index++)
//             {
//                 if(words.indexOf(words[index]) !== words.lastIndexOf(words[index])){
//                     repetitionFlag ++
//                 }
//             }
//             if(repetitionFlag==0) console.log("No repeated words!")
//                 else console.log("Repeated Words Exist!")
// }
function returnWordIndex(word, position, self) {
    return self.indexOf(word) === position
}
//Another method 
function checkForRepetition(inputString)
{
            inputString = inputString.toLowerCase()
    const   words = inputString.split(" ")        
    const   uniqueWords = words.filter(returnWordIndex)
    let     repeatedWords = words.length - uniqueWords.length
            if(repeatedWords==0)
            {
                console.log("No repeated words!")
            }
            else console.log(repeatedWords," repeated word(s)!")
}
