class Home{
  constructor(name, color, height, price, rooms, location){
    this.name = name,
    this.color = color,
    this.height = height,
    this.price = price,
    this.rooms = rooms,
    this.location = location,
    this.allInfo = function(){
      console.log(`name: ${name} color: ${color} height: ${height} price: ${price} rooms: ${rooms} location: ${location}`);
    }
  }
}

class Airplane extends Home{
  constructor(name, color, height, price, rooms, location, power, weight){
    super(name, color, height, price, rooms, location),
    this.power = power,
    this.weigth = weight
  }
}

class Velo extends Home{
  constructor(name, color, height, price, rooms, location, whichHand, made) {
    super(name, color, height, price, rooms, location),
    this.whichHand = whichHand,
    this.made = made
  }
}


let AkayCity = new Home("Akay city", "orange", "160 metres", '200 million', 5, "Tashkent");
let Boing = new Airplane("Boeing", 'blue', '13 metres', '15 million $', 135, "Chine town", 1300, '25 tonns')
let German = new Velo("German", 'pink', '1.25 metres', '2.2 million', 'no', "Namangan", 'First hands', "Made in Namangan")


console.log(AkayCity);
console.log(Boing);
console.log(German);