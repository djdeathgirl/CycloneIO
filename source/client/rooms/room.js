import Constants from '../../network/constants.json'

export default class Room {
  constructor(scene, socket, id) {
    this.scene = scene
    this.socket = socket
    this.id = id

    this.tiles = this.scene.add.group()
  }

  create() {
    this.socket.emit(Constants.common.actions.room.NEW_ROOM, this.id, [
      [1, 1, 1, 0, 1, 0],
      [1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 0, 1, 0, 0, 0, 1],
      [0, 1, 0, 0]
    ])

    this.socket.on(Constants.common.actions.room.NEW_TILE, (x, y, thickness, leftBorder, bottomBorder) => {
      this.drawTile(x, y, thickness, leftBorder, bottomBorder)
    })
  }


  drawTile(x, y, thickness, leftBorder, bottomBorder) {
    const width = 64
    const height = 32

    var tile = this.scene.add.graphics()

    tile.lineStyle(1, 0x8E8E5E)
    tile.fillStyle(0x989865)

    tile.beginPath()

    tile.moveTo(x, y)
    tile.lineTo(x - width / 2, y + height / 2)
    tile.lineTo(x, y + height)
    tile.lineTo(x + width / 2, y + height / 2)
    tile.lineTo(x, y)

    tile.closePath()
    tile.strokePath()
    tile.fillPath()

    if (leftBorder && thickness > 0) {
      tile.lineStyle(1, 0x7A7A51)
      tile.fillStyle(0x838357)

      tile.beginPath()

      tile.moveTo(x - width / 2, y + height / 2)
      tile.lineTo(x - width / 2, y + height / 2 + thickness)
      tile.lineTo(x, y + height + thickness)
      tile.lineTo(x, y + height)

      tile.closePath()
      tile.strokePath()
      tile.fillPath()
    }

    if (bottomBorder && thickness > 0) {
      tile.fillStyle(0x6F6F49)
      tile.lineStyle(1, 0x676744)

      tile.beginPath()

      tile.moveTo(x + width / 2, y + height / 2)
      tile.lineTo(x + width / 2, y + height / 2 + thickness)
      tile.lineTo(x, y + height + thickness)
      tile.lineTo(x, y + height)

      tile.closePath()
      tile.strokePath()
      tile.fillPath()
    }
  }
}
