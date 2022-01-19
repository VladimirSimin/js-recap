
// class Character {
//     static charCounter = 0;
//     constructor (){
//         if (new.target === Character) throw TypeError("You cannot instantiate a new Character directly")
//         else {
//             this.location = {
//                x: Math.floor(Math.random() * 10 + 1),
//                y: Math.floor(Math.random() * 10 + 1)
//             };
//             Character.charCounter++;
//         };
        
//     }

//     get coordinates() {
//         return this.location;
//     }

//     set coordinates(xYArr) {
//         this.location = {
//             x: xYArr[0],
//             y: xYArr[1]
//         };
//     }
// }

// class PlayerCharacter extends Character {
//     static PCCounter = 0;
//     constructor(){
//         super();
//         PlayerCharacter.PCCounter++;
//     }

// }

// class NonPlayerCharacter extends Character {
//     static NPCCounter = 0;
//     constructor(){
//         super();
//         NonPlayerCharacter.NPCCounter++;
//     }
// }

// let pc1 = new PlayerCharacter();
// let npc1 = new NonPlayerCharacter();
// console.log(pc1.coordinates);
// console.log(npc1.coordinates);
// pc1.coordinates = [1,1];
// console.log(pc1.coordinates);
// console.log(Character.charCounter);
// console.log(PlayerCharacter.PCCounter);
// console.log(NonPlayerCharacter.NPCCounter);


// prototype version

function Character() {
    if (new.target === Character) {
        throw TypeError("You cannot instantiate a new Character directly")
    } else {
        this.location = {
            x: Math.floor(Math.random() * 10 + 1),
            y: Math.floor(Math.random() * 10 + 1)
         };
         Character.charCounter += 1;
    }
}
Character.charCounter = 0;
Character.prototype.getCoordinates = function () {
    return this.location;
}
Character.prototype.setCoordinates = function (xYArr) {
    this.location = {
        x: xYArr[0],
        y: xYArr[1]
    };
}

function PlayerCharacter() {
    Character.call(this);
    PlayerCharacter.PCCounter += 1;

}
PlayerCharacter.prototype = Object.create(Character.prototype);
PlayerCharacter.PCCounter = 0;

function NonPlayerCharacter() {
    Character.call(this)
    NonPlayerCharacter.NPCCounter += 1;
}
NonPlayerCharacter.prototype = Object.create(Character.prototype);
NonPlayerCharacter.NPCCounter = 0;

let pc1 = new PlayerCharacter();
let npc1 = new NonPlayerCharacter();
console.log(pc1.getCoordinates());
console.log(npc1.getCoordinates());
pc1.setCoordinates([1,1]);
console.log(pc1.getCoordinates());
console.log(Character.charCounter);
console.log(PlayerCharacter.PCCounter);
console.log(NonPlayerCharacter.NPCCounter);