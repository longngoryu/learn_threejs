import { World } from "./World.js";

async function main() {
	// Get a reference to the container element
	const container = document.querySelector('#scene-container');
  
	// 1. Create an instance of the World app
	const world = new World(container);

	await world.init();
	
	world.start();
}

main().catch((err) => {
	console.log(err)
});
  