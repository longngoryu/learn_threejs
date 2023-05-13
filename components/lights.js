import { DirectionalLight, AmbientLight, HemisphereLight } from 'three';

function createLights() {
    //const ambientLight = new AmbientLight('white', 2);
    const ambientLight = new HemisphereLight('white', 'darkslategrey', 5);
    
    const mainLight = new DirectionalLight('white', 4); 
    mainLight.position.set(10, 10, 10);

    return {mainLight, ambientLight};
}

export { createLights };