import * as PIXI from 'pixi.js-legacy'

import RoomScene from './RoomScene'
import RoomData from './data/RoomData'
import RoomMap from './map/RoomMap'

import RoomContainer from './containers/RoomContainer'
import RoomAssetsManager from '../assets/rooms/RoomAssetsManager'
import IAssetsManager from '../assets/IAssetsManager'
import Habbo from '../Habbo'

export default class Room extends RoomScene {
	private readonly id: string

	private game: Habbo
	private roomContainer: RoomContainer
	private loader: IAssetsManager

	public resources: Partial<Record<string, PIXI.LoaderResource>>
	public data: RoomData
	public map: RoomMap

	public constructor(
		data: RoomData,
		game: Habbo
	) {
		super()

		this.game = game

		this.id = data.id
		this.data = data

		this.map = new RoomMap(data.map.room)

		// new RoomMap([
		// 	'xxxxxxxxxx0x',
		// 	'xxxxxxxxx00x',
		// 	'xx0000000000',
		// 	'x00000000000',
		// 	'000000000000',
		// ])

		// TODO: Preloader

		this.loader = new RoomAssetsManager()
		this.loader.loadAssets().then(resources => {
			this.resources = resources

			this.initializeContainers()

			this.centerCamera()
		})
	}

	private initializeContainers(): void {
		this.roomContainer = new RoomContainer(this)

		this.addChild(this.roomContainer)
	}

	private centerCamera() {
		const doorTile = this.roomContainer.tilesContainer.getTileAt(0, 0)

		if (doorTile) {
			this.game.viewport.moveCenter(doorTile.position)
		}
	}
}
