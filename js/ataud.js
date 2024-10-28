



import * as THREE from "./three.module.js";
export default function E02({x,y,z}){





//ataud 


const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 2,
	depth: 20,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshToonMaterial( { color: 0x270900} );
const ataud = new THREE.Mesh( geometry, material ) ;
//scene.add( ataud );
ataud.position.set(-6,-5,2);
ataud.scale.set(0.4, 0.35, 0.5);
ataud.rotation.set(0,0,-0.15);

//cruz

const caja = new THREE.BoxGeometry( 4, 1, 0.6 ); 
const cola = new THREE.MeshToonMaterial( {color: 0x0000} ); 
const cubito = new THREE.Mesh( caja, cola ); 
//scene.add( cubito );
cubito.position.set(-3.2,-2.4,6);
cubito.rotation.set(0,0,-0.15);


const caja1 = new THREE.BoxGeometry( 0.6, 1, 9 ); 
const cola1 = new THREE.MeshToonMaterial( {color: 0x0000} ); 
const palo = new THREE.Mesh( caja1, cola1 ); 
//scene.add( palo );
palo.position.set(-3.2,-2.4,7); 
palo.rotation.set(0,0,-0.15);





//tumba

const length1 = 0.1, width1 = 0.1;

const shape1 = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings1 = {
steps: 4, 
depth: 16,
bevelEnabled: true,
bevelThickness: 5,
bevelSize: 5,
bevelOffset: 0,
bevelSegments: 5
};

const geometry1 = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material1 = new THREE.MeshToonMaterial( { color: 0x585858 } );
const tumba = new THREE.Mesh( geometry1, material1 ) ;
tumba.position.set(0,1.5,-1.5);
//scene.add(tumba);
tumba.rotation.set(1.6,0,1.6);
tumba.scale.set(0.2, 0.8, 0.4);



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

const geometryt = new THREE.ExtrudeGeometry( shape2, extrudeSettings );
const materialt = new THREE.MeshToonMaterial( { color: 0x391900} );
const tierra = new THREE.Mesh( geometryt, materialt ) ;
tierra.position.set(0.2,-5,-1);
//scene.add(tierra);
tierra.rotation.set(0,0,1.57);
tierra.scale.set(0.1, 0.9, 0.7);

//piedras
const geometry2 = new THREE.DodecahedronGeometry( 0.3, 0,); 
const material2 = new THREE.MeshToonMaterial( { color: 0x1e1105 } ); 
const sphere = new THREE.Mesh( geometry2, material2 ); 
//scene.add( sphere );
sphere.position.set(0.2,-3.7,13);

const geometry3 = new THREE.DodecahedronGeometry( 0.5, 0,); 
const sphere1 = new THREE.Mesh( geometry3,material2  ); 
//scene.add( sphere1 );
sphere1.position.set(-0.5,-3.5,13);

const geometry4 = new THREE.DodecahedronGeometry( 0.4, 0,); 
const sphere2 = new THREE.Mesh( geometry2,material2 ); 
//scene.add( sphere2 );
sphere2.position.set(-1,-3.6,13.4);


var piedritas=new THREE.Group();
piedritas.add(sphere,sphere1,sphere2);
piedritas.position.set(0,0,0);
//scene.add(piedritas);

var piedritas1 = piedritas.clone();
piedritas1.position.set(-8,-7.1,-0.3); 
piedritas1.rotation.set(0,0,3);
//scene.add(piedritas1);

var piedritas2 = piedritas.clone();
piedritas2.position.set(-6.5,0,-7.5); 
piedritas2.rotation.set(0,0,0);
//scene.add(piedritas2);


//huesitos

var cilindro= new THREE.CylinderGeometry(0.2, 0.2, 2, 32);
var materialh= new THREE.MeshToonMaterial({color:0xffffff});
var meshh3= new THREE.Mesh(cilindro, materialh);
//scene.add(meshh3);
meshh3.rotation.set(0,0,2.5);
meshh3.position.set(2,-4,9); 


var bolita = new THREE.SphereGeometry(1, 40,40);  
bolita.scale(0.3, 0.3, 0.5);   
var materialh1=new THREE.MeshToonMaterial({color:0xffffff});
var meshh1=new THREE.Mesh(bolita,materialh1);
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
tumba1.position.set(-5,-3,-4);
tumba1.rotation.set(-0.1,-0.7,0.8);
//scene.add(tumba1);


var huesito2 = tumba1.clone();
huesito2.position.set(-1,1,3); 
huesito2.rotation.set(0,0,6);
//scene.add(huesito2);

var tumba2=new THREE.Group();
tumba2.add(tumba,huesito2,ataud,tierra);
tumba2.position.set(0,0,0);
tumba2.castShadow=true;
//scene.add(tumba2);

var TODOYA=new THREE.Group();
TODOYA.add(tumba2,ataud,cubito,palo,tumba1,piedritas,piedritas1,piedritas2);
TODOYA.position.set(x,y,z);

return TODOYA;

}