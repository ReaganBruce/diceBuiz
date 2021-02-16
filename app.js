document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate-button");
  const rerollButton = document.getElementById("reroll-button");
  const sumButton = document.getElementById("sum-button");
  const diceSection = document.getElementById("dice-section");
  let counter = 1;
  let diceArray = [];

  class Die {
    constructor(value) {
      this.value = value;
      this.render();
      this.roll();
      this.eventListeners();
      diceArray.push(this);
    }

    render() {
      this.div = document.createElement("div");
      this.div.className = "dice";
      this.div.id = counter;
      diceSection.appendChild(this.div);
      this.div.textContent = this.value;
    }

    eventListeners() {
      this.div.addEventListener("click", () => this.roll());
      this.div.addEventListener("dblclick", () => {
        diceArray.splice(diceArray.indexOf(this), 1), this.div.remove();
        counter--;
      });
    }

    roll() {
      let randomNum = Math.floor(Math.random() * 6) + 1;
      this.value = randomNum;
      this.div.textContent = this.value;
    }
  }

  generateButton.addEventListener("click", () => {
    if (counter < 5) {
      new Die();
      counter++;
    } else {
      counter == 0;
    }

    //ternary operator
    //  (counter < 5) ? (new Die(), counter++) : (counter == 0)
  });

  rerollButton.addEventListener("click", () => {
    for (let i = 0; i < diceArray.length; i++) {
      diceArray[i].roll();
    }
  });

  sumButton.addEventListener("click", () => {
    totalSum = 0;
    for (let i = 0; i < diceArray.length; i++) {
      totalSum += diceArray[i].value;
    }
    alert(`The total sum is ${totalSum}!`);
  });
});
