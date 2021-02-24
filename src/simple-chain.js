const chainMaker = {
  currentChain: [],
  getLength() {
    const chainArr = this.currentChain.split('').filter ( item => {
      if (+item) {
        return item;
      }
    });
    return chainArr.length;
  },
  addLink(value) {
    if (value === null) {
      this.currentChain.push('null');
    } else if (value || value === 0 || isNaN(value) || value === false) {
      this.currentChain.push(value.toString());
    } else if (!value) {
      this.currentChain.push(' ');
    }

    return this;
  },
  removeLink(position) {
    if ( position === 0 || position > this.currentChain.length || !(+position)) {
      this.deleteChain();
      throw new Error ('Incorrect input!');
    } else {
      this.currentChain.splice(position - 1, 1);
    }

    return this;
  },
  reverseChain() {
    this.currentChain.reverse();

    return this;
  },
  finishChain() {
    const chain = `( ${this.currentChain.join(' )~~( ')} )`;
    this.deleteChain();

    return chain;
  },
  deleteChain() {
    this.currentChain = [];
  }
};

module.exports = chainMaker;
