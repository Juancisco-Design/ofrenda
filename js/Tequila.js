import * as THREE from "./three.module.js";
import{RoundedBoxGeometry} from "./RoundedBoxGeometry.js";




export default function E01({x,y,z}){
    //TEQUILA
    // Botella

    // Material vidrio
    var vidrio = new THREE.MeshToonMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5
    });

    var botellag = new RoundedBoxGeometry(2, 7, 1.8, 12, 0.5);
    var botella = new THREE.Mesh(botellag, vidrio);
    //scene.add(botella);
    botella.position.set(0,0,0)
    botella.castShadow=true;

    // Cuello botella
    var cuellog = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
    var cuello = new THREE.Mesh(cuellog, vidrio);
    cuello.position.set(0,5,0);
    //scene.add(cuello);
    cuello.castShadow=true;

    // Tapa 
    var tapag = new THREE.CylinderGeometry(0.4, 0.4, 1, 30);
    var tapam = new THREE.MeshToonMaterial({ color: 0x4E4001}); 
    var tapa = new THREE.Mesh(tapag, tapam);
    tapa.position.set(0,6.5,0);
    //scene.add(tapa);
    tapa.castShadow=true;

    // Etiqueta 
    var etiquetag = new THREE.CylinderGeometry(1.2, 1.2, 1, 11, 4, true); 
    var etiquetam = new THREE.MeshToonMaterial({ color: 0xB3994E });
    var etiqueta = new THREE.Mesh(etiquetag, etiquetam);
    etiqueta.position.set(0, -1.42, 0); 
    //scene.add(etiqueta);
    etiqueta.castShadow=true;

    // Tequila
    var liquidog = new THREE.CylinderGeometry(0.8, 0.8, 5.8, 32);
    var liquidom = new THREE.MeshToonMaterial({ color: 0xf9e485, transparent: true, opacity: 0.8 });
    var liquido = new THREE.Mesh(liquidog, liquidom);
    liquido.position.set(0,-0.2,0);
    //scene.add(liquido);
    liquido.castShadow=true;

    var tequilaa=new THREE.Group();
    tequilaa.add(botella,cuello,tapa,etiqueta,liquido);
    tequilaa.position.set(x,y,z);
    return tequilaa;
}