import * as THREE from "./three.module.js";
import Florecitas from"./flores.js"

export default function E08({x,y,z}){

var florecillas=Florecitas({x:0,y:0,z:0});
//scene.add(florecillas);
florecillas.position.set(25,40,-12);
florecillas.scale.set(1,1,1);
florecillas.rotation.z = 2.3; 
var florecillas2= florecillas.clone();
//scene.add(florecillas2);
florecillas2.position.set(38,11,-12);
florecillas2.rotation.z = 1.8;
var florecillas5= florecillas.clone();
//scene.add(florecillas5);
florecillas5.position.set(38,17,-11);
florecillas5.rotation.z = 1.8;
var florecillas7= florecillas.clone();
//scene.add(florecillas7);
florecillas7.position.set(19,43,-11);
florecillas7.rotation.z = 2.5;

var florecillas3= florecillas.clone();
//scene.add(florecillas3);
florecillas3.position.set(-38,11,-12);
florecillas3.rotation.z = -1.8;
var florecillas4= florecillas.clone();
//scene.add(florecillas4);
florecillas4.position.set(-25,40,-12);
florecillas4.rotation.z = -2.3;
var florecillas6= florecillas.clone();
//scene.add(florecillas6);
florecillas6.position.set(-38,17,-11);
florecillas6.rotation.z = -1.8;
var florecillas8= florecillas.clone();
//scene.add(florecillas8);
florecillas8.position.set(-19,43,-11);
florecillas8.rotation.z = -2.5;

var florecillas9= florecillas.clone();
//scene.add(florecillas9);
florecillas9.position.set(1,50,-11);
florecillas9.rotation.z = -3.2;
var florecillas10= florecillas.clone();
//scene.add(florecillas10);
florecillas10.position.set(-2,50,-11);
florecillas10.rotation.z = 3.2;

var ArcoFlores=new THREE.Group();
ArcoFlores.add(florecillas,florecillas2,florecillas3,florecillas4,florecillas5,florecillas6,florecillas7,florecillas8,florecillas9,florecillas10);
ArcoFlores.position.set(x, y, z);
return ArcoFlores;

}