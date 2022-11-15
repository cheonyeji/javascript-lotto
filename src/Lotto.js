class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.checkNumDuplicate(numbers);
    this.checkNumRange(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkNumRange(numbers) {
    for (num in numbers) {
      if (1 <= num <= 45 === false) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  checkNumDuplicate(numbers) {
    if (new Set(numbers).length !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복이 허용되지 않습니다.");
    }
  }

  getNumString() {
    return `[${this.#numbers.join(", ")}]`;
  }
}

module.exports = Lotto;
