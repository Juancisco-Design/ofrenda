


import * as THREE from "./three.module.js";
export default function E02({x,y,z}){




//tumba2

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


//tumba unida

var tumba1=new THREE.Group();
tumba1.add(meshh1,meshh2,meshh3);
tumba1.position.set(0,-3,0);
tumba1.rotation.set(-0.1,-0.7,0.8);
//scene.add(tumba1);


var huesito2 = tumba1.clone();
huesito2.position.set(0,0,-6); 
huesito2.rotation.set(0,0,6);
//scene.add(huesito2);

var tumba2=new THREE.Group();
tumba2.add(tumba1,huesito2,tamal1,tamal2);
tumba2.position.set(x,y,z);
tumba2.castShadow=true;
return tumba2;

}
