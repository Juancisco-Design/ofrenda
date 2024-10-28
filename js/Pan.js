import * as THREE from "./three.module.js";
import{RoundedBoxGeometry} from "./RoundedBoxGeometry.js";


export default function E03({x,y,z}){

   // Base
   var baseg=new THREE.SphereGeometry(3.4,20,20);
   var texture= new THREE.TextureLoader().load("./images/pan.jpg");
    var pan= new THREE.MeshToonMaterial({
       map:texture
    });
   var base=new THREE.Mesh(baseg,pan);
   //scene.add(base);
   base.position.set(0,0.4,0);
   base.scale.set(1, 0.5, 1);

   //Centro

   var texture= new THREE.TextureLoader().load("./images/pan2.jpg");
    var huesom= new THREE.MeshToonMaterial({
       map:texture
    });
   var centrog=new THREE.SphereGeometry(0.9,20,20);
   var centro=new THREE.Mesh(centrog,huesom);
   //scene.add(centro);
   centro.position.set(0,2.1,0);

    // Huesos Grandes
    var huesog=new THREE.SphereGeometry(0.6,20,20);
    var hueso=new THREE.Mesh(huesog,huesom);
    //scene.add(hueso);
    hueso.position.set(-1.7,1.8,0);
    hueso.castShadow=true;

    var huesoc1 = hueso.clone();
    huesoc1.position.set(1.7,1.8,0); 
    //scene.add(huesoc1);
    var huesoc2 = hueso.clone();
    huesoc2.position.set(0,1.8,1.7); 
    //scene.add(huesoc2);
    var huesoc3 = hueso.clone();
    huesoc3.position.set(0,1.8,-1.7); 
    //scene.add(huesoc3);

    // Huesos Pequeños
    var huesopg=new THREE.SphereGeometry(0.4,20,20);
    var huesop=new THREE.Mesh(huesopg,huesom);
    //scene.add(huesop);
    huesop.position.set(-3,1.3,0);
    huesop.castShadow=true;

    var huesopc1 = huesop.clone();
    huesopc1.position.set(3,1.3,0); 
    //scene.add(huesopc1);
    var huesopc2 = huesop.clone();
    huesopc2.position.set(0,1.3,3); 
    //scene.add(huesopc2);
    var huesopc3 = huesop.clone();
    huesopc3.position.set(0,1.3,-3); 
    //scene.add(huesopc3);


    //Union Huesos (grandes)
    var uniong = new THREE.CylinderGeometry(0.2, 0.2, 3.4, 20);

    var union1 = new THREE.Mesh(uniong, huesom);
    union1.rotation.z = 1.57; 
    union1.position.set(0, 2.1, 0);
    //scene.add(union1);
    union1.castShadow=true;

    var union2 = new THREE.Mesh(uniong, huesom);
    union2.rotation.x = 1.57;
    union2.position.set(0, 2.1, 0);
    //scene.add(union2);
    union2.castShadow=true;

    //(Pequeños)
    var unionpg = new THREE.CylinderGeometry(0.18, 0.18, 6, 20);

    var unionp1 = new THREE.Mesh(unionpg, huesom);
    unionp1.rotation.z = 1.57;
    unionp1.position.set(0, 1.5, 0);
    //scene.add(unionp1);
    unionpg.castShadow=true;

    var unionp2 = new THREE.Mesh(unionpg, huesom);
    unionp2.rotation.x = 1.57;
    unionp2.position.set(0, 1.5, 0);
    //scene.add(unionp2);
    unionp2.castShadow=true;

    
    var Pan = new THREE.Group();
    Pan.add(base,hueso,huesoc1,huesoc2,huesoc3,centro,huesop,huesopc1,huesopc2,huesopc3,union1,union2,unionp1,unionp2);
    Pan.position.set(x, y, z); 
    return Pan;

}