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
function rest(hero){
hero.health = 10
return hero
}

function pickUpItem(objHero,object){
objHero.inventory.push(object)

}

function equipWeapon(objHero){

var InventorySize = objHero.inventory.length
if(InventorySize > 0){
    objHero.weapon = objHero.inventory[0]
}
}
