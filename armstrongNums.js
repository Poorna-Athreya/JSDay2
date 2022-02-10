// A program to print the Armstrong Numbers until a number N //

// let num
// do{
//     num = parseInt(prompt("Please enter a number (In the range 0-10000): "))
// }while(checkNumber(num));

let num = 155
console.log("Printing Armstrong numbers from 1-",num," : ")
printArmNums(num)

function checkNumber(num)
{
    if(num<0 || !Number.isInteger(num) || num>10000)
    {
        console.log("Invalid Input, please try again!")
        return true;
    }
    else return false;
}

function isArmstrongNum(num)
{
    let sum = 0, digits = num.toString().length
        for(let i=num;i>0;i = Math.floor(i/10))
        {
            let temp = i%10
                sum += temp**digits
        }
        if(sum == num) return num
            else return -1
}

function printArmNums(num)
{
    let armstrongNumArray = []
    for(let i=1,j=0;i<num;i++)
    {
        if(isArmstrongNum(i)!=-1)
        {
            armstrongNumArray.push(i);
            j++;
        }
    }
    console.log(armstrongNumArray.join(', '))
}