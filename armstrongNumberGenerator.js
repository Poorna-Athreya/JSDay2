// A program to print the Armstrong Numbers until a number N //

// let num
// do{
//     num = parseInt(prompt("Please enter a number (In the range 0-10000): "))
// }while(checkNumber(num));

const number = 155
console.log("Printing Armstrong numbers from 1-",number," : ")
printArmstrongNums(number)

// function checkNumber(num)
// {
//     if(num<0 || !Number.isInteger(num) || num>10000)
//     {
//         console.log("Invalid Input, please try again!")
//         return true;
//     }
//     else return false;
// }

function isArmstrongNum(number)
{
    let     sum = 0
    const   digits = number.toString().length
            for(let i=number;i>0;i = Math.floor(i/10))
            {
                let temp = i%10
                    sum += temp**digits
            }
            if(sum === number) return number
                else return -1
}

function printArmstrongNums(number)
{
    let armstrongNumArray = []
    for(let index=0,countArmstrongNums=0;index<number;index++)
    {
        if(isArmstrongNum(index)!=-1)
        {
            armstrongNumArray.push(index);
            countArmstrongNums++;
        }
    }
    console.log(armstrongNumArray.join(', '))
}