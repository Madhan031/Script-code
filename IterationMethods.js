let arr1 = [10,20,30,40,50]
for(var i=0;i<arr1.length;i++){
 console.log(i,arr1[i])
}

arr1.forEach(function(element,index){
   console.log(element,index)
})

let number = [11,22,33,44,55,66]
let even = []
for(var i = 0;i<number.length;i++){
    if(number[i]%2 === 0){
        even.push(number[i])
    }
}
console.log('Even Array is: ',even);

let odd = number.filter((ele)=> ele%2 !==0)
console.log('Odd Elemrnt are: ',odd)