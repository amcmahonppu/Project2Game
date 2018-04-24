var rpg = (function() {

  $(function(){

    $("#slider3").slider({
      max: 20,
      min: 5,
      step: 1,
      change: function( event, ui ){
        $("#s3").html(ui.value);
        var tmpstrength = ui.value;
        setStrength(tmpstrength);
      }
    });

    $("#slider4").slider({
      max: 20,
      min: 5,
      step: 1,
      change: function( event, ui ) {
        var tmpattack = ui.value
        $("#s4").html(ui.value);
      }
    });

    $("#slider5").slider({
      max: 20,
      min: 5,
      step: 1,
      change: function( event, ui ){
        $("#s5").html(ui.value);
        var tmpdefence = ui.value;
      }
    });

    $("#slider6").slider({
      max: 20,
      min: 5,
      step: 1,
      change: function( event, ui ){
        $("#s6").html(ui.value);
        var tmpmagic = ui.value;
      }
    });

    $("#slider7").slider({
      max: 20,
      min: 5,
      step: 1,
      change: function( event, ui ){
        $("#s7").html(ui.value);
        var tmpstrength = ui.value;
      }
    });

  });


  var itm = [];


  function randomInt(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  var worldGrid = [];  // Define the overall world, spawn a 4x2 grid of "dungeon rooms."
  for (var i = 0; i < 4; i++) {
    worldGrid[i] = [];
    for (var j = 0; j < 2; j++) {
      worldGrid[i][j] = generateDungeon();
    }
  }

  function generateDungeon() {
    var dung = [];
    var wall1 = randomInt(5, 26); // Draw vertical wall (Y)
    var wall2 = randomInt(4, 10); // Draw horizontal wall (X)
    var door1, door2, door3, door4;
    door1 = randomInt(wall1 + 2, 29);
    door2 = randomInt(1, wall1 - 2);
    door3 = randomInt(wall2 + 2, 13);
    door4 = randomInt(1, wall2 - 2);
    for (var i = 0; i < 32; i++) {
      dung[i] = [];
      for (var j = 0; j < 16; j++) {
        if ((i === wall1) && !(j === door3 || j === door4) ||
        (j === wall2) && !(i === door1 || i === door2)
      ) dung[i][j] = { land: "stone" };
      else dung[i][j] = { land: "grass" };
    }
  }
  return dung;
}

var enemyType = [];
var value = 0;
  var chrCreate = function (name, hp, mp, att, def, matt, mdef) {
    var totalStats = 44;  // Function pulls in values and assigns them.
    var rnd = randomInt(-5, 5);  // Please elaborate on this function.
    att += rnd;
    rnd = randomInt(-5, 5);  // I would like to see this function assign much more fair values.
    def += rnd;
    rnd = randomInt(-5, 5);
    matt += rnd;
    rnd = randomInt(-5, 5);
    mdef += rnd;

    // dir = direction character is facing.  0 = up, 1 = right, 2 = down, 3 = left

    function ahead(dir) { // What lies ahead in the direction you are trying to move?
        console.log(chr[0].wX, chr[0].wY, chr[0].dX, chr[0].dY);
        if (dir === 0) {
            if (chr[0].dY < 1 && chr[0].wY !== 0) { // Character Y axis hits level boundry
                chr[0].wY -= 1;
                chr[0].dY = 14;
                return null;
            }
            return rpg.worldGrid[chr[0].wX][chr[0].wY][chr[0].dX][chr[0].dY - 1].land;  // What lies above the player?
        }
        if (dir === 1) {
            if (chr[0].dX > 30 && chr[0].wX < 3) {
                chr[0].wX += 1;
                chr[0].dX = 0;
                return null;
            }
            return rpg.worldGrid[chr[0].wX][chr[0].wY][chr[0].dX + 1][chr[0].dY].land; // What lies east of player?
        }
        if (dir === 2) {
            if (chr[0].dY > 14 && chr[0].wY < 1) {  // Dungeon Y axis hits boundry, world boundry maxes out.
                chr[0].wY += 1; // This will 100% produce an error when you hit the final bounds.
                chr[0].dY = 0;
                return null;
            }
            return rpg.worldGrid[chr[0].wX][chr[0].wY][chr[0].dX][chr[0].dY + 1].land;  // What lies south of player?
        }
        if (dir === 3) {
            if (chr[0].dX < 1 && chr[0].wX !== 0) {
                chr[0].wX -= 1;
                chr[0].dX = 30;
                return null;
            }
            return rpg.worldGrid[chr[0].wX][chr[0].wY][chr[0].dX - 1][chr[0].dY].land;  // What lies west of player?
        }
    }
    // If ahead returns null and position is beyond the bounds, flip world or do nothing.
    function move(dir) {
        var moving = ahead(dir);  // Run function to see what lies ahead in the given direction.
        if (dir === 0) {
            if (moving === "grass") chr[0].dY -= 1;  // Move player's position based on given direction.
            return null;
        }
        if (dir === 1) {
            if (moving === "grass") chr[0].dX += 1;
            return null;
        }
        if (dir === 2) {
            if (moving === "grass") chr[0].dY += 1;
            return null;
        }
        if (dir === 3) {
            if (moving === "grass") chr[0].dX -= 1;
            return null;
        }
        if (moving === null) {
        }
    }

    return {
        "name": name,
        "maxhp": hp,
        "hp": hp,
        "mp": mp,
        "att": att,
        "def": def,
        "matt": matt,
        "mdef": mdef,
        "wX": 0,
        "wY": 0,
        "dX": 2,
        "dY": 0,
        "dir": 1,
        ahead: ahead,
        move: move
    };  // Return all front facing items for a character.
  };
var chr = [];
chr[0] = chrCreate("Kat", 50, 15, 15, 9, 9, 13);

var attack = 0;
var defence = 0;
var magicAttack = 0;
var magicDefence = 0;
var hp = 50;
var mp = 15;
var name = "temp";
var chr2 = [];
var totalStats = 0;


function isBalanced(att, def, matt, magd){
  totalStats = (att-5)+(def-5)+(matt-5) + (magd-5);
  console.log(totalStats);
  if( totalStats <= 35){
    return true;
  }else{
    return false;
  };
};


function setAttack(atk){
  attack = atk;
};

function setDefence(def){
  defence = def;
};

function setName(str){
  name = str;
};

function setMagicAttack(ma){
  magicAttack = ma;
};

function setMagicDefence(md){
  magicDefence = md;
};



var chrCreate2 = function (name, hp, mp, att, def, matt, mdef){
  chr2.push({
    "name": name,
    "maxhp": hp,
    "hp": hp,
    "mp": mp,
    "att": att,
    "def": def,
    "matt": matt,
    "mdef": mdef,
    "wX": 0,
    "wY": 0,
    "dX": 2,
    "dY": 2
  });
};

function getChar(){
  return chr2;
  notify();
};

var dgnGrid = [];

function listen(cb) {
  listeners.push(cb);
}
function notify() {
  for (var i = 0; i < listeners.length; i++) {
    listeners[i]();
  }
}

return {
  listen: listen,
  worldGrid: worldGrid,
  chr: chr,
  chr2: chr2,
  setAttack: setAttack,
  setDefence: setDefence,
  setMagicAttack: setMagicAttack,
  setMagicDefence: setMagicDefence,
  chr2: chr2,
  chrCreate2: chrCreate2,
  getChar: getChar,
  chrCreate: chrCreate,
  isBalanced: isBalanced
};

})();
