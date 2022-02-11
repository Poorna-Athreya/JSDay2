let inputString = "1 1 h"
    // checkForRepetition(inputString)
    checkForRepetition2(inputString)
    
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

//Another method 
function checkForRepetition2(inputString)
{
            inputString = inputString.toLowerCase()
    const   words = inputString.split(" ")        
    const   uniqueWords = words.filter(function (word, position, self) {
                return self.indexOf(word) === position
            })
    let     repeatedWords = words.length - uniqueWords.length
            if(repeatedWords==0)
            {
                console.log("No repeated words!")
            }
            else console.log(repeatedWords," repeated word(s)!")
}
