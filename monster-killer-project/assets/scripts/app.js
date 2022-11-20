const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE  = 17
const MONSTER_ATTACK_VALUE = 14;
const HEAL_PLAYER_VALUE    = 20;

const enteredValues = prompt("Enter the value of maximum life for you an the monster", "100");

let choosenMaxLife = parseInt(enteredValues);

if (isNaN(choosenMaxLife) || choosenMaxLife <=0){
  choosenMaxLife = 100
}
let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth  = choosenMaxLife;
let hasBonusLife = true;


adjustHealthBars(choosenMaxLife);

function reset() {
  currentMonsterHealth = 100;
  currentPlayerHealth  = 100;
  resetGame(100)
}
function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const PlayerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= PlayerDamage
  if(currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    currentPlayerHealth = initialPlayerHealth
    setPlayerHealth(initialPlayerHealth)
  }
  if(currentPlayerHealth <= 0) { 
    alert("Monster won" ) 
    reset()
  }
 
}

function attackMonster(attackMode) {
  let  maxDamage;
  if(attackMode == "ATTACK") {
    maxDamage = ATTACK_VALUE
  }else {
    maxDamage = STRONG_ATTACK_VALUE
  }

  const  damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  if(currentMonsterHealth <= 0) { 
    alert("You won" ) 
    reset()
  }

  endRound()
}
function attackHandler() {
  attackMonster("ATTACK")
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK")
}

function healPlayerHandler () {
  let healValue;
  if(choosenMaxLife < (currentPlayerHealth + HEAL_PLAYER_VALUE)){
    alert("you can not heal above the maximum life value")
    const healValue = choosenMaxLife - currentPlayerHealth
    currentPlayerHealth += healValue
  } else {
    const healValue = increasePlayerHealth(HEAL_PLAYER_VALUE)
    currentPlayerHealth += healValue
  }
  endRound()
}
 

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler)