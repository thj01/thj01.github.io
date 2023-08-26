dice_rolls = []

/* function dice_roll() {

    var roll = Math.floor(Math.random() * sides) + 1;
    return roll;
}
 */

var sides = 20;


for (let i = 0; i<5;i++){

    dice_rolls[i] = Math.floor(Math.random() * sides) + 1;
    
    

}


console.log(dice_rolls)

/* console.log(dice_roll()) */

console.log(Math.floor(Math.random() * sides) + 1)