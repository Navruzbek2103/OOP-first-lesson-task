class home{
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

