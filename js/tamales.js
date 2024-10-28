
import * as THREE from "./three.module.js";
export default function E02({x,y,z}){




//plano 

var loader=new THREE.TextureLoader();
var bgTexture= loader.load ("./images/texturafondo.jpg");
//scene.background= bgTexture;
 
var base=new THREE.BoxGeometry(50,0.1,50,1,1,1);
var material01=new THREE.MeshToonMaterial({color:0x5b3092});
var mesh01=new THREE.Mesh(base,material01);
mesh01.position.set(0,-5,0);
//scene.add(mesh01);
mesh01.receiveShadow=true;

 
//plato de tamales

var esfera= new THREE.SphereGeometry( 9, 33, 18,2,6.3,0,0.8 ); 
var texture= new THREE.TextureLoader().load("./images/barro.jpg");
var material02= new THREE.MeshToonMaterial({
   map:texture,
   side: THREE.DoubleSide
});
var plato = new THREE.Mesh(esfera, material02);
plato.rotation.set(3.2,0,0);
plato.position.set(0,6,0);
//scene.add(plato);
plato.castShadow=true;



//tamales

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
 var texture= new THREE.TextureLoader().load("./images/tamal.jpg");
  var material= new THREE.MeshToonMaterial({
     map:texture
  });
const tamal1 = new THREE.Mesh( geometry, material ) ;
tamal1.position.set(0,-1,-1.5);
//scene.add(tamal1);
tamal1.rotation.set(-2.9,-0.3,0);
tamal1.scale.set(0.2, 0.2, 0.2);

// Copia1
var tamal2 = tamal1.clone();
tamal2.position.set(0, 0, 0);  
//scene.add(tamal2);
tamal2.rotation.set(0,0,0);

var tamal3 = tamal1.clone();
tamal3.position.set(-2, -1, -1.5);  
//scene.add(tamal3);
tamal3.rotation.set(6,0,0);

var tamal4 = tamal1.clone();
tamal4.position.set(4, 0, -1.5);  
//scene.add(tamal4);
tamal4.rotation.set(4.9,4.3,0);

var tamal5 = tamal1.clone();
tamal5.position.set(-2, 2, 0);  
//scene.add(tamal5);
tamal5.rotation.set(0,2,0); 

var tamal6 = tamal1.clone();
tamal6.position.set(1,2,2);  
//scene.add(tamal6);
tamal6.rotation.set(8,7,0);

var tamales=new THREE.Group();
tamales.add(plato,tamal1,tamal2,tamal3,tamal4,tamal5,tamal6);
tamales.castShadow=true;
tamales.position.set(x,y,z);

return tamales;

}

