
import * as THREE from "./three.module.js";
export default function E03({x,y,z}){

//petalosflor1


     
var esfera = new THREE.SphereGeometry(2, 32,20);  
esfera.scale(2, 0.3, 0.8);   
var material02=new THREE.MeshToonMaterial({color:0xd96114});
var mesh02=new THREE.Mesh(esfera,material02);
//scene.add(mesh02);
mesh02.rotation.set(0,0.7,-0.5);
mesh02.position.set(0,0,0);
mesh02.castShadow=true;


var esfera01 = new THREE.SphereGeometry(2, 32,20);  
esfera01.scale(2, 0.3, 0.8);   
var material03=new THREE.MeshToonMaterial({color:0xb84f12});
var mesh03=new THREE.Mesh(esfera01,material03);
//scene.add(mesh03);
mesh03.rotation.set(0,2,-0.10);
mesh03.position.set(0,0,0);
mesh03.castShadow=true;


var esfera02 = new THREE.SphereGeometry(2, 32,20);  
esfera02.scale(2, 0.3, 0.8);   
var mesh04=new THREE.Mesh(esfera02,material02);
//scene.add(mesh04);
mesh04.rotation.set(0,-2,0.10);
mesh04.position.set(0,0,0);
mesh04.castShadow=true;


var esfera03 = new THREE.SphereGeometry(2, 32,20);  
esfera03.scale(2, 0.3, 0.8);   
var mesh05=new THREE.Mesh(esfera03,material03);
//scene.add(mesh05);
mesh05.rotation.set(0,0.5,0);
mesh05.position.set(0,0,0);
mesh05.castShadow=true;



// Grupo Flor Original
var flor1 = new THREE.Group();
flor1.add(mesh02,mesh03,mesh04,mesh05);
//scene.add(flor1);

 // primera Copia en y
 var petalos = flor1.clone();
petalos.position.set(0, 0, 0); 
petalos.rotation.set(0.4,1.57,0.1); 
//scene.add(petalos);
petalos.castShadow=true;

var petalos02 = flor1.clone();
petalos02.position.set(0, 0, 0); 
petalos02.rotation.set(2,0.3,0.5); 
//scene.add(petalos02);
petalos02.castShadow=true;

var petalos03 = flor1.clone();
petalos03.position.set(0, 0, 0); 
petalos03.rotation.set(1,0.8,0); 
//scene.add(petalos03);
petalos03.castShadow=true;

var petalos04 = flor1.clone();
petalos04.position.set(0, 0, 0); 
petalos04.rotation.set(1.6,1.34,0); 
//scene.add(petalos04);
petalos04.castShadow=true;

var petalos05 = flor1.clone();
petalos05.position.set(0, 0, 0); 
petalos05.rotation.set(2.6,0.5,0); 
//scene.add(petalos05);
petalos05.castShadow=true;

var petalos06 = flor1.clone();
petalos06.position.set(0, 0, 0); 
petalos06.rotation.set(2.3,0,0); 
//scene.add(petalos06);
petalos06.castShadow=true;

var petalos07 = flor1.clone();
petalos07.position.set(0, 0, 0); 
petalos07.rotation.set(2.9,0.1,0); 
//scene.add(petalos07);
petalos07.castShadow=true;

var petalos08 = flor1.clone();
petalos08.position.set(0, 0, 0); 
petalos08.rotation.set(-2.9,-0.3,0); 
//scene.add(petalos08);
petalos08.castShadow=true;

var petalos09 = flor1.clone();
petalos09.position.set(0, 0, 0); 
petalos09.rotation.set(1.3,0,2.9); 
//scene.add(petalos09);
petalos09.castShadow=true;

var petalos10 = flor1.clone();
petalos10.position.set(0, 0, 0); 
petalos10.rotation.set(0.9,2,2.9); 
//scene.add(petalos10);
petalos10.castShadow=true;





var florcompleta=new THREE.Group();
florcompleta.add(flor1,petalos,petalos02,petalos03,petalos04,petalos05,petalos06,petalos07,petalos08,petalos09,petalos10);
florcompleta.position.set(0, 0, -10);
//scene.add(florcompleta);

// Copia1
var flor2 = florcompleta.clone();
flor2.position.set(10, 0, -10);  
//scene.add(flor2);

// Copia2
var flor3 = florcompleta.clone();
flor3.position.set(-10, 0, -10);  
//scene.add(flor3);


var Florecitas=new THREE.Group();
Florecitas.add(florcompleta,flor2,flor3);
Florecitas.position.set(x, y, z);
return Florecitas;

}