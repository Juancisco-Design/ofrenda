import * as THREE from "./three.module.js";
import ESC06 from"./Vela.js"

export default function E09({x,y,z}){

    var veladora=ESC06({x:0,y:0,z:0});
    //scene.add(veladora);
    veladora.position.set(-9,-2.3,7);
    var fuegog = new THREE.SphereGeometry(.6,10,20);
    var fuegom = new THREE.MeshLambertMaterial({
        color:0xd73017, 
        transparent: true, 
        opacity:0.7});
    var fuego = new THREE.Mesh(fuegog,fuegom);
   // scene.add(fuego);
    fuego.position.set(-1,0.2,12);
    fuego.scale.set(0.4, 1, 0.5);
    var velita = new THREE.Group();
    velita.add(veladora,fuego);
    //scene.add(velita);
    velita.scale.set(0.6,0.6,0.6);
    velita.position.set(-5,6,-9);
    var velita1= velita.clone();
    //scene.add(velita1);
    velita1.position.set(4,12,-16);
    var velita2= velita.clone();
    //scene.add(velita2);
    velita2.position.set(-12,6,-47); 
    var velita3= velita.clone();
    //scene.add(velita3);
    velita3.position.set(12,12,-30);
    var velita4= velita.clone();
    //scene.add(velita4);
    velita4.position.set(-12,12,-30);
    var velita5= velita.clone();
    //scene.add(velita5);
    velita5.position.set(17,6,-40);
    var velita6= velita.clone();
    //scene.add(velita6);
    velita6.position.set(17,6,-15);
    var velita7= velita.clone();
    //scene.add(velita7);
    velita7.position.set(-20,6,-20);
    var velita8= velita.clone();
    //scene.add(velita8);
    velita8.position.set(2,12,-43);

    var velasg=new THREE.Group();
    velasg.add(velita,velita1,velita2,velita3,velita4,velita5,velita6,velita7,velita8);
    velasg.position.set(x, y, z);
    return velasg;
}