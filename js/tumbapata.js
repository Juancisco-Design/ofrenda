
   

import * as THREE from "./three.module.js";
export default function E02({x,y,z}){

   

//tumbas

const length = 0.1, width = 0.1;

const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
steps: 4, 
depth: 16,
bevelEnabled: true,
bevelThickness: 5,
bevelSize: 5,
bevelOffset: 0,
bevelSegments: 5
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshToonMaterial( { color: 0x585858 } );
const tamal1 = new THREE.Mesh( geometry, material ) ;
tamal1.position.set(0,0,-1.5);
//scene.add(tamal1);
tamal1.rotation.set(1.6,0,1.6);
tamal1.scale.set(0.2, 0.5, 0.4);



// tierra

const length2 = 0.1, width2 = 0.1;

const shape2 = new THREE.Shape();
shape2.moveTo( 0,0 );
shape2.lineTo( 0, width );
shape2.lineTo( length, width );
shape2.lineTo( length, 0 );
shape2.lineTo( 0, 0 );

const extrudeSettings2 = {
steps: 4, 
depth: 16,
bevelEnabled: true,
bevelThickness: 5,
bevelSize: 5,
bevelOffset: 0,
bevelSegments: 5
};

const geometry2 = new THREE.ExtrudeGeometry( shape2, extrudeSettings );
var texture= new THREE.TextureLoader().load("./images/tierra.jpg");
var material2= new THREE.MeshToonMaterial({
   map:texture,
   side: THREE.DoubleSide
});
const tamal2 = new THREE.Mesh( geometry2, material2 ) ;
tamal2.position.set(0,-5,0);
//scene.add(tamal2);
tamal2.rotation.set(0,0,1.57);
tamal2.scale.set(0.2, 0.9, 0.7);

//huesitos

var hueso= new THREE.CylinderGeometry(0.2, 0.2, 2, 32);
var materialh= new THREE.MeshToonMaterial({color:0xffffff});
var meshh3= new THREE.Mesh(hueso, materialh);
//scene.add(meshh3);
meshh3.rotation.set(0,0,2.5);
meshh3.position.set(2,-4,9); 


var esferah1 = new THREE.SphereGeometry(1, 40,40);  
esferah1.scale(0.3, 0.3, 0.5);   
var materialh1=new THREE.MeshToonMaterial({color:0xffffff});
var meshh1=new THREE.Mesh(esferah1,materialh1);
//scene.add(meshh1);
meshh1.rotation.set(4.8,0,2.5);
meshh1.position.set(2.5,-2.7,9);


var esferah2 = new THREE.SphereGeometry(1, 40,40);  
esferah2.scale(0.3, 0.3, 0.5);   
var materialh2=new THREE.MeshToonMaterial({color:0xffffff});
var meshh2=new THREE.Mesh(esferah2,materialh2);
//scene.add(meshh2);
meshh2.rotation.set(1,1.9,0);
meshh2.position.set(3,-3,8.9);


//patrullas

var hueso= new THREE.CylinderGeometry(0.2, 0.2, 2, 32);
var materialh= new THREE.MeshToonMaterial({color:0xffffff});
var meshh= new THREE.Mesh(hueso, materialh);
//scene.add(meshh);
meshh.rotation.set(0,1,-2.5);
meshh.position.set(-2,-4.2,8.7); 


const length3 = 0.1, width3 = 0.1;

const shape3 = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings3 = {
steps: 4, 
depth: 16,
bevelEnabled: true,
bevelThickness: 5,
bevelSize: 5,
bevelOffset: 0,
bevelSegments: 5
};

const geometry3 = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material3 = new THREE.MeshToonMaterial( { color: 0xffffff } );
const pie = new THREE.Mesh( geometry3, material3 ) ;
pie.position.set(-2.3,-3,9.4);
//scene.add(pie);
pie.rotation.set(4,0,1.6);
pie.scale.set(0.04, 0.09, 0.07);

// Copias para deditos

var dedito = pie.clone();
dedito.position.set(-2.5,-2,8.2);  
//scene.add(dedito);
dedito.rotation.set(3,-0.4,1.6);
dedito.scale.set(0.02, 0.02, 0.02);

var dedito1 = pie.clone();
dedito1.position.set(-1.9,-2,8.3);  
//scene.add(dedito1);
dedito1.rotation.set(3,0.1,1.6);
dedito1.scale.set(0.03, 0.03, 0.02);

var dedito2 = pie.clone();
dedito2.position.set(-2.8,-2,8.4);  
//scene.add(dedito2);
dedito2.rotation.set(3,-0.5,1.6);
dedito2.scale.set(0.02, 0.02, 0.02);

var dedito3 = pie.clone();
dedito3.position.set(-2.3,-2,8.2);  
//scene.add(dedito3);
dedito3.rotation.set(3,-0.1,1.6);
dedito3.scale.set(0.02, 0.02, 0.02);


var pata=new THREE.Group();
pata.add(meshh,pie,dedito,dedito1,dedito2,dedito3);
pata.position.set(0, 1, 0);
//scene.add(pata);

//tumba unida

var tumba1=new THREE.Group();
tumba1.add(pata,tamal1,tamal2,meshh1,meshh2,meshh3);
tumba1.castShadow=true;
tumba1.position.set(x,y,z);
return tumba1;
}
