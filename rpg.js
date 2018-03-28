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
        for (var i = 0; i < 16; i++) {
            dung[i] = [];
            for (var j = 0; j < 16; j++) {
                var rnd = Math.random();
                if (rnd >= 0.5) {
                    dung[i][j] = { land: "grass" };
                } else {
                    dung[i][j] = { land: "stoneWall" };
                }
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
            "hp": hp,
            "mp": mp,
            "att": att,
            "def": def,
            "matt": matt,
            "mdef": mdef,
            "worldStart": [0, 0],
            "dungStart": [0, 0]
        };
    };

    var chr = [];
    chr[0] = chrCreate("Kat", 50, 15, 15, 9, 9, 13);
    console.log(chrCreate("Kat", 50, 15, 15, 9, 9, 13));

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