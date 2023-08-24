/*
1.while
2.do while
3.for
*/

//forEach

let arr3 = [10,20,30,40,50,60];

arr3.forEach((el, index) => {
    console.log(el, index);         //elements can not be returned in foreach
});


//map
arr3.map((el, index) => {
    console.log(el, index);
    return [el, index];             //elements can be returned in map
})


//for loop M2

for(i in arr3){
    console.log(arr3[i]);  //can be used in objects also
}


