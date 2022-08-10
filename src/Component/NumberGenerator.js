import React from 'react'



export default function Numbers() {
    // const numbers = [1]

const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    const isPrime = numbers => {
      for(let j = 2; j < numbers; j++)
        if(numbers % j === 0) return false;
      return numbers > 1;
      }
    const isOdd = (numbers)=> { return numbers % 2;} 
    const Color = (numbers)=>{
      let color = 'red';
      if(isOdd (numbers)) color ='orange' //odd
      else color ='green' //even
      if(isPrime(numbers)) color = 'red' //prime 
   return color ;
   
 }
 
   const list = numbers.map((numbers) => 
  
   <div  className="numbers"><ul ><li  className="list" key={numbers} style={{backgroundColor:Color(numbers) }}>{numbers}</li></ul></div>
   )
   return list
}
        