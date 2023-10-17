function Player() {
    this.name = '';
    this.pos = -1;
}

Object.defineProperty(Player.prototype, 'position', {
    get: function() {
        return this.pos;
    },
    set: function(value) {
        this.pos = value;
    }
});

Object.defineProperty(Player.prototype, 'playerName', {
    get: function() {
        return this.name;
    },
    set: function(value) {
        this.name = value;
    }
});

module.exports = Player;