import inquirer from "inquirer";
const currency: any =  {
USD: 1, //base currency 
INR: 83.37 ,
EUR: 0.91,
PKR: 280,
};
let userinput = await inquirer.prompt([
    
    {
    name: 'from',
    message:'enter from currency', 
    type: 'list',
    choices: [ 'USD','INR','EUR','PKR']
},
{
    name: 'to',
    message:'enter to currency', 
    type: 'list',
    choices: [ 'USD','INR','EUR','PKR']
},
{
    name: 'amount',
    message:'enter your amount',
    type: 'number',
}
])
let fromAmount = currency [userinput.from]
let toAmount = currency[userinput.to]
let amount= userinput.amount 
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount*toAmount 
console.log(convertedAmount);