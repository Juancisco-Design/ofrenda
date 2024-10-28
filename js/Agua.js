import * as THREE from "./three.module.js";


export default function E04({x,y,z}){

     // VASO CON AGUA

     // Material vidrio
    var vidrio = new THREE.MeshToonMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide
    });

    // Vaso
    var vasog = new THREE.CylinderGeometry(1, 1, 5, 32, 1, true);
    var vaso = new THREE.Mesh(vasog, vidrio);
    vaso.position.set(5,0,0); 
    //scene.add(vaso);
    vaso.castShadow=true;

    // Material agua
    var aguam = new THREE.MeshToonMaterial({
        color: 0x1E90FF,
        transparent: true,
        opacity: 0.6
        
    });

    // Agua
    var aguag = new THREE.CylinderGeometry(0.9, 0.9, 4., 32); 
    var agua = new THREE.Mesh(aguag, aguam);
    agua.position.set(5,-0.2,0); 
    //scene.add(agua);
    agua.castShadow=true;


   var ESC04= new THREE.Group();
   ESC04.add(vaso, agua);
   ESC04.position.set(x,y,z); 
   return ESC04;
}
