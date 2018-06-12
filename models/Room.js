class Room{
  constructor(roomname, password, numplayers){
    this.roomname=roomname
    this.password=password
    this.numplayers=numplayers
  }

  toString(){
    return `Room(${this.roomname})`
  }
}

module.exports = Room
