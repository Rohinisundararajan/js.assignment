let mark = prompt("Enter your mark:");
if(mark>=80&&mark<=100){
console.log("The grade is A and your mark is " +mark );
}
else if(mark>=60&&mark<=79){
    console.log("The grade is B and your mark is " +mark);
}
else if(mark>=40&&mark<=59){
    console.log("The grade is C and your mark is " +mark);
}
else{
    console.log("Sorry! YOU HAVE FAILED IN THIS EXAMINATION. BETTER LUCK NEXT TIME!! and your mark is" +mark);
}