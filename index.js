var fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    bem = require('bem').api,
    bemjsonToDeps = require('bemjson-to-deps');

module.exports = function(bemjson, level) {
    level || (level = 'blocks');

    var pathToLevel = path.resolve(level),
        pathToLevelConfig = path.join(pathToLevel, '.bem', 'level.js');

    if (!fs.existsSync(pathToLevelConfig)) {
        mkdirp.sync(path.join(pathToLevel, '.bem'));
        fs.writeFileSync(pathToLevelConfig, "exports.defaultTechs = ['css'];");
    }

    bemjsonToDeps.getEntities(bemjson).forEach(function(item) {
        item.level = level;

        var mods = item.elemMods || item.mods;

        mods ? Object.keys(mods).forEach(function(modName) {
            item.mod = modName;
            item.val = mods[modName];
            bem.create(item);
        }) : bem.create(item);
    });
}
