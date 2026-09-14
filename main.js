for (let counter = "#"; counter.length <= 7; counter += "#"){
    console.log(counter);
} 
//Satte counter på 1 för annars så skrev programmet fizz innan 1
for (let counter = 1; counter <= 100; counter++){
    if (counter % 3 == 0 && counter % 5 == 0){
        console.log("FizzBuzz")
        //continue;
    }
    else if (counter % 3 == 0){
        console.log("fizz");
        //continue;
    }
    else if (counter % 5 == 0){
        console.log("buzz");
        //continue;
    }
    else{
        console.log(counter);
    } //Jag gjorde denna lösningen själv, men kollade även upp den lite smidigare lösningen med console.log(output || counter) etc.
    // Detta funkar ju också, men defintivt mer praktiskt med andra versionen!
}

/*
 # # # # 
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #      

vill alltså att den skriver varannan, när den når en viss längd så kommer en \n 
och sen fortsätter programmet skriva varannan tills den når nästa gräns och då \n igen
*/

let chessboard = "";
let size = 10;

for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
        if ((j+i) % 2 == 0){
            chessboard += "#";
        }
        else {
            chessboard += " ";
        }

    }
    chessboard = chessboard + "\n";
}
console.log(chessboard);

