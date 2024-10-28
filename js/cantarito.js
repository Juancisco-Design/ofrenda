
import * as THREE from "./three.module.js";
export default function E01({x,y,z}){

//cantaritos

const geometry = new THREE.SphereGeometry( 3, 32, 16,0,7,0,2.3 ); 
const material = new THREE.MeshToonMaterial( { color: 0x4f1d00, side: THREE.DoubleSide} ); 
const sphere = new THREE.Mesh( geometry, material ); 
sphere.position.set(0,0,0);
//scene.add(sphere);
sphere.rotation.set(0,0,3.15);
sphere.castShadow=true;

const geometry1 = new THREE.TorusGeometry( 1.7, 1.2, 16, 100 ); 
const material1 = new THREE.MeshToonMaterial( { color: 0x4f1d00 } ); 
const torus = new THREE.Mesh( geometry1, material1 ); 
//scene.add( torus );
torus.position.set(0,-2,0);
torus.rotation.set(1.55,0,0);
torus.castShadow=true;

const geometry2 = new THREE.TorusGeometry( 1.8, 0.7, 16, 100 ); 
const material2 = new THREE.MeshToonMaterial( { color: 0x4f0a00} ); 
const torus1 = new THREE.Mesh( geometry2, material2 ); 
//scene.add( torus1 );
torus1.position.set(0,2,0);
torus1.rotation.set(1.55,0,0);
torus1.castShadow=true;

const geometry3 = new THREE.TorusGeometry( 1, 0.4, 16, 100 ,4); 
const material3 = new THREE.MeshToonMaterial( { color: 0x4f1d00} ); 
const torus2 = new THREE.Mesh( geometry3, material3 ); 
//scene.add( torus2 );
torus2.position.set(2.8,0,0);
torus2.rotation.set(0,0,-1.7);
torus2.castShadow=true;

const geometry4 = new THREE.ConeGeometry( 2, 0.3, 18 ); 
const material4 = new THREE.MeshToonMaterial( {color: 0xa48600} );
const cone = new THREE.Mesh(geometry4, material4 ); 
cone.position.set(0,2.7,0);
//scene.add(cone);
cone.castShadow=true;

const geometry5 = new THREE.TorusGeometry( 1, 0.7, 16, 100 ,4); 
const material5 = new THREE.MeshToonMaterial( { color: 0xbc9a00} ); 
const torus3 = new THREE.Mesh( geometry5, material5 ); 
//scene.add( torus3 );
torus3.position.set(-1,1.3,1);
torus3.rotation.set(0,1,0);
torus3.castShadow=true;


var cantarito=new THREE.Group();
cantarito.add(sphere,torus,torus1,torus2,cone,torus3);
cantarito.position.set(x,y,z);
return cantarito;


}
