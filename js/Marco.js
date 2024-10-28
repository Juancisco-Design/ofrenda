import * as THREE from './three.module.js';

export default function E10({x,y,z}){
    // Marco 
    var marcoGeometry = new THREE.BoxGeometry(5, 7, 0.2);
    var marcoMaterial = new THREE.MeshToonMaterial({ color: 0x69280e });
    var marco = new THREE.Mesh(marcoGeometry, marcoMaterial);
    //scene.add(marco);
    marco.position.set(0, 0, 0);
    marco.castShadow=true;

    var textureLoader = new THREE.TextureLoader();
    var fotoTexture = textureLoader.load("./images/jocsan.jpg");
    var fotoGeometry = new THREE.PlaneGeometry(4, 6); 
    var fotoMaterial = new THREE.MeshToonMaterial({  map: fotoTexture });
    var foto = new THREE.Mesh(fotoGeometry, fotoMaterial);
    //scene.add(foto);
    foto.position.set(0, 0, 0.11);
    foto.castShadow=true;

    // Bordes
    var bordeMaterial = new THREE.MeshToonMaterial({ color: 0x4d1c08 });
    var bordeSup = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.3, 0.1), bordeMaterial);
    bordeSup.position.set(0, 3.1, 0.15);
    bordeSup.castShadow=true;
    //scene.add(bordeSup);
    var bordeInf = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.3, 0.1), bordeMaterial);
    bordeInf.position.set(0, -3.1, 0.15);
    bordeInf.castShadow=true;
    //scene.add(bordeInf);
    var bordeIzq = new THREE.Mesh(new THREE.BoxGeometry(0.3, 6.5, 0.1), bordeMaterial);
    bordeIzq.position.set(-2.1, 0, 0.15);
    bordeIzq.castShadow=true;
    //scene.add(bordeIzq);
    var bordeDer = new THREE.Mesh(new THREE.BoxGeometry(0.3, 6.5, 0.1), bordeMaterial);
    bordeDer.position.set(2.1, 0, 0.15);
    bordeDer.castShadow=true;
    //scene.add(bordeDer);

    var marco1 = new THREE.Group();
    marco1.add(marco,foto,bordeDer,bordeInf,bordeIzq,bordeSup);
    marco1.position.set(x,y,z); 
    return marco1;
}
