
import * as THREE from "./three.module.js";
export default function E02({x,y,z}){


//falda

const geometry = new THREE.SphereGeometry( 3, 32, 14,0,7,5,2.8 ); 
const material = new THREE.MeshLambertMaterial( { color: 0x9f2400, side: THREE.DoubleSide } ); 
const sphere = new THREE.Mesh( geometry, material ); 
//scene.add( sphere );
sphere.position.set(0,0,0);


const geometry1 = new THREE.SphereGeometry( 4, 32, 14,0,7,5,2.8 ); 
const material1 = new THREE.MeshLambertMaterial( { color: 0x007d9f, side: THREE.DoubleSide } ); 
const sphere1 = new THREE.Mesh( geometry1, material1 ); 
//scene.add( sphere1 );
sphere1.position.set(0,-2,0);


const geometry2 = new THREE.SphereGeometry( 5, 32, 14,0,7,4,2.8 ); 
const material2 = new THREE.MeshLambertMaterial( { color: 0x9f0074, side: THREE.DoubleSide } ); 
const sphere2 = new THREE.Mesh( geometry2, material2 ); 
//scene.add( sphere2 );
sphere2.position.set(0,-4,0);

const geometry3 = new THREE.TorusGeometry( 2, 3, 16, 100 ); 
const material3 = new THREE.MeshLambertMaterial( { color: 0xffff00 } ); 
const torus = new THREE.Mesh( geometry3, material3 ); 
//scene.add( torus );
torus.position.set(0,-4,0);
torus.rotation.set(1.55,0,0); 

const geometry4 = new THREE.TorusGeometry( 0.9, 0.3, 10, 100 ); 
const torus1 = new THREE.Mesh( geometry4, material3 ); 
//scene.add( torus1 );
torus1.position.set(0,3,0);
torus1.rotation.set(1.55,0,0);

var falda=new THREE.Group();
falda.add(sphere,sphere1,sphere2,torus,torus1);
falda.position.set(x,y,z);

return falda;

}