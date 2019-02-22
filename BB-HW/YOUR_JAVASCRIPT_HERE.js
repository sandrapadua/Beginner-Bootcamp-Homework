const hero = {
    name : 'Super Mario',
    heroic : true,
    inventory : [],
    health : 10,
    weapon : {type : 'gun',
             damage :2
             }
}
const weaponObject = {type:'dagger',
    damage:2}

const enemyObject = {
    downCount:0}

function rest(hero){
    hero.health = 10;
    // displayGamerDetails(objHero);
    return hero;
    
}

function pickUpItem(objHero,object){
    objHero.inventory.push(object);
    // displayGamerDetails(objHero);
}

function setName(objHero){ 
    var abc = document.getElementById("gamerName").value;
    objHero.name = String(abc);
    console.log(abc)
    displayGamerDetails(objHero);

}
    

function equipWeapon(objHero){

var InventorySize = objHero.inventory.length
if(InventorySize > 0){
    objHero.weapon = objHero.inventory[0]
}
}


function displayGamerDetails(objHero){
    console.log(`${objHero.name}`)
    document.getElementById("heroName").innerText = objHero.name; 
    document.getElementById("heroHealth").innerText = objHero.health; 
    document.getElementById("heroInventory").innerText = null;
    objHero.inventory.forEach(element => {
        document.getElementById("heroInventory").innerText += element.type + "\n";
    });
    
   }



function displayStats(objHero){
 const myGame = `
Name : ${objHero.name}
Health : ${objHero.health}
Weapon Type : ${objHero.weapon.type}
Weapon damage : ${objHero.weapon.damage}`
 console.log(myGame)
}

// function addToInventory1(){
//     document.getElementById("gun1").style.visibility = "hidden";
//     document.getElementById("smallGun").src = "./images/gun1.jpg" 

// }
// function addToInventory2(){
//     document.getElementById("gun2").style.visibility = "hidden";
//     document.getElementById("largeGun").src = "./images/gun2.png"; 

// }

function numberRandomizer(){
    var x = Math.floor((Math.random() * 350) + 50); //random number between 50 and 300
    return x;
  }

  function numberRandomizerLeft(){
    var x = Math.floor((Math.random() * 750) + 50); //random number between 50 and 300
    return x;
  }

function actionPlan(objHero){

if(objHero.inventory.length === 0){
    
    document.getElementById("heroMsg").innerText = "Please select a weapon to defent"

}
else{
    document.getElementById("enemy").style.visibility = "hidden";
    enemyObject.downCount = enemyObject.downCount + 1
    document.getElementById("heroMsg").innerText =  enemyObject.downCount + " Enemy down......"
}
}
  
displayStats(hero)

function moveEnemy(){
    document.getElementById("enemy").style.visibility = "visible";
    document.getElementById('enemy').style.right = numberRandomizer() + 'px';
    document.getElementById('enemy').style.left = numberRandomizerLeft() + 'px';
    document.getElementById('enemy').style.top = numberRandomizer() + 'px';
    document.getElementById('enemy').style.bottom = numberRandomizer() + 'px';
    
}

function dynamicEnemy(){
    setInterval(moveEnemy, 3000);
    }