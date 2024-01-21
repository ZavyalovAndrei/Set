export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Ошибка! ${character} уже есть в команде.`);
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    [...characters].forEach((character) => {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    });
  }

  toArray() {
    return [...this.members];
  }
}