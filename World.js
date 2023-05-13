import { Resizer } from "./systems/Resizer";
import { createCamera } from "./components/camera"
import { createRenderer } from "./systems/renderer";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";
import { Loop } from "./systems/Loop";
import { createControls } from "./systems/controls";
import { Train } from "./components/Train/Train";
import { createAxesHelper, createGridHelper } from "./helpers";
import { loadBirds } from "./components/birds/birds";

let camera, 
    renderer, 
    scene, 
    loop,
    controls;


class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);
        controls = createControls(camera, renderer.domElement);

        const { ambientLight, mainLight } = createLights();
        loop.updatables.push(controls);
        scene.add(ambientLight, mainLight);

        const resizer = new Resizer(container, camera, renderer);
    }
    async init() {
        const { parrot, flamingo, stork } = await loadBirds();
        const train = new Train();

        controls.target.copy(train.position);
        
        loop.updatables.push(parrot, flamingo, stork);
        loop.updatables.push(train);

        
        scene.add(parrot, flamingo, stork);
        scene.add(train);
        scene.add(createAxesHelper(), createGridHelper());
    }

    render() {
        renderer.render(scene, camera);
    }
    start() {
        loop.start();
    }
    stop() {
        loop.stop();
    }
}

export { World }