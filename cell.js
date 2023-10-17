const state = require('./state');

function Cell() {
    this.pos = -1;
    this.power = state.$;
}

Object.defineProperty(Cell.prototype, 'position', {
    get: function() {
        return this.pos;
    },
    set: function(value) {
        this.pos = value;
    }
});

Object.defineProperty(Cell.prototype, 'power', {
    get: function() {
        return this._power;
    },
    set: function(value) {
        this._power = value;
    }
});

module.exports = Cell;