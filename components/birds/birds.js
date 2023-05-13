import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { setupModel } from "./setupModel";

async function loadBirds() {
    const loader = new GLTFLoader();
    const [parrotData, flamingoData, storkData] = await Promise.all([
        loader.loadAsync('../../models/Parrot.glb'),
        loader.loadAsync('../../models/Flamingo.glb'),
        loader.loadAsync('../../models/Stork.glb')
    ]);

    const parrot = setupModel(parrotData);
    parrot.position.set(0, 8, 2.5);

    const flamingo = setupModel(flamingoData);
    flamingo.position.set(7.5, 5, -10);

    const stork = setupModel(storkData);
    stork.position.set(0, 6, -10);

    return { parrot, flamingo, stork };
}

export { loadBirds };
