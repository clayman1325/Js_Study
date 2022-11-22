const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE  = 17
const MONSTER_ATTACK_VALUE = 14;
const HEAL_PLAYER_VALUE    = 20;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "SRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK"; 
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER"

let lastLoggedEntry;

const choosenMaxLife = getMaxValues()

function getMaxValues() {
  try {
    const enteredValues = prompt("Enter the value of maximum life for you an the monster", "100");

    let parsedValue = parseInt(enteredValues);
    if (isNaN(parsedValue) || parsedValue <=0){
      throw { message: "Inval max live value it is not a number"}
    }

    return parsedValue;

  } catch(error) {
    console.log(error)
    alert("you entered something wrong the value will be set to 100")
    return 100
  }
}


let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth  = choosenMaxLife;
let hasBonusLife = true;
let battleLog = []

adjustHealthBars(choosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry;
  logEntry = {
    event: event,
    value: value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  }

  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "MONSTER";
      break
  }

  battleLog.push(logEntry);
}

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

  writeToLog(LOG_EVENT_MONSTER_ATTACK, PlayerDamage, currentMonsterHealth, currentPlayerHealth)
  
  if(currentPlayerHealth <= 0) { 
    alert("Monster won" ) 
    writeToLog(LOG_EVENT_GAME_OVER, "Monster won" , currentMonsterHealth, currentPlayerHealth)
    reset()
  }
 
}

function attackMonster(attackMode) {
  let  maxDamage;
  const writeTologParams = {};

  if(attackMode == MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    writeTologParamsEvent = LOG_EVENT_PLAYER_ATTACK;
  }else {
    maxDamage = STRONG_ATTACK_VALUE;
    writeTologParamsEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }

  const  damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;

  writeToLog(writeTologParamsEvent, damage, currentMonsterHealth, currentPlayerHealth)

  if(currentMonsterHealth <= 0) { 
    alert("You won" ) 
    writeToLog(LOG_EVENT_GAME_OVER, "You won", currentMonsterHealth, currentPlayerHealth)

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

  writeToLog(LOG_EVENT_PLAYER_HEAL, currentPlayerHealth, currentMonsterHealth, currentPlayerHealth)
}

function showLogHandler () {
  dashes() 
  let i = 1
  for(const element of battleLog) {
    if(!lastLoggedEntry && lastLoggedEntry != 0  || lastLoggedEntry == i) {
      console.log(i)
      for(const key in element){
        console.log(`${key} => ${element[key]}`)
      } 
      lastLoggedEntry = i +1;
      break
    }
    i++
  }
  dashes() 
}

function dashes() {
  for(let i=0; i < 3; i++){
    console.log("----------------------")
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", showLogHandler);

