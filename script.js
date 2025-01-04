const sumOfEvens = () => {
    const number = window.prompt("Enter a number.");
    const intNumber = parseInt(number);
    let sumNum = 0;
    for(let i = 0; i<=intNumber; i++){
        if(i % 2 === 0){
           sumNum = sumNum + i;
        }
    }
    alert(`Sum of ${number} even number is ${sumNum}`);
}

sumOfEvens();