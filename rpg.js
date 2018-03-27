var rpg = function() {

    var chr = [];
    var itm = [];

    var worldGrid = [];  // Define the overall world, spawn a 2x4 grid of "dungeon rooms."
    for (var i = 0; i < 2; i++) {
        worldGrid[i] = [];
        for (var j = 0; j < 4; j++) {
            worldGrid[i][j] = generateDungeon();
            console.log(worldgrid[i][j]);
        }
    }

    function generateDungeon() {
        var dung = [];
        for (var i = 0; i < 16; i++) {
            dung[i] = { land: "grass" };
        }
    }

    var enemyType = [];

    var chrCreate = function (name, hp, mp, att, def, matt, mdef) {
        chr.push({ "name": name, "hp": hp, "mp": mp, "att": att, "def": def, "matt": matt, "mdef": mdef, "start": [0,0] });
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
        worldGrid: worldGrid
    };

};
