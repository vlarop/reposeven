export class Ingredient {
  public name!: string;
  public amount!: number;


  //jiny zpusob
  // constructor(public name: string, public amount: number){}

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;

  }
}
