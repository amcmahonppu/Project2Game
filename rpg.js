var rpg = (function() {

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
            "dY": 2
        };
    };

    var chr = [];
    chr[0] = chrCreate("Kat", 50, 15, 15, 9, 9, 13);

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
        chr: chr
    };

})();