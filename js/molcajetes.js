

import * as THREE from "./three.module.js";
export default function E02({x,y,z}){


//molcajetes

var esfera= new THREE.SphereGeometry( 2.6, 32, 20,0,6.2831,0,1.4 ) 
var texture= new THREE.TextureLoader().load("./images/molcajete.jpg");
  var materialmv= new THREE.MeshToonMaterial({
     map:texture,
     side: THREE.DoubleSide
  });
var molcajetev = new THREE.Mesh( esfera, materialmv ); 
 //scene.add(molcajetev);
 molcajetev.rotation.set(3.2,0,0);
 molcajetev.position.set(0,0,0);
 molcajetev.castShadow=true;

 
var esfera1= new THREE.SphereGeometry( 0.8, 30, 20,0,6.2831,0,2 ) 

var molcajetep1 = new THREE.Mesh( esfera1, materialmv ); 
 //scene.add(molcajetep1);
 molcajetep1.rotation.set(3.2,0,0);
 molcajetep1.position.set(-0.7,-2.5,0);
 molcajetep1.castShadow=true;

 
var esfera2= new THREE.SphereGeometry( 0.8, 30, 20,0,6.2831,0,2 )  
var texture= new THREE.TextureLoader().load("./images/molcajete.jpg");
var materialmv= new THREE.MeshToonMaterial({
     map:texture,
     side: THREE.DoubleSide
  });
var molcajetep2 = new THREE.Mesh( esfera2, materialmv ); 
 //scene.add(molcajetep2);
 molcajetep2.rotation.set(9,0,0);
 molcajetep2.position.set(0.8,-2.5,0.7);
 molcajetep2.castShadow=true;  

 
var esfera3= new THREE.SphereGeometry( 0.8, 30, 20,0,6.2831,0,2 ) 

var molcajetep3 = new THREE.Mesh( esfera3, materialmv ); 
 //scene.add(molcajetep3);
 molcajetep3.rotation.set(3.4,0,0); 
 molcajetep3.position.set(0.2,-2.4,-0.9); 
 molcajetep3.castShadow=true;

 var esferam = new THREE.SphereGeometry(0.5, 20,20);  
esferam.scale(4.8, 4.8, 1);   
var texture= new THREE.TextureLoader().load("./images/sr.jpg");
  var materialm= new THREE.MeshToonMaterial({
     color:0xb82812,
     side: THREE.DoubleSide
  });
var meshm=new THREE.Mesh(esferam,materialm);
//scene.add(meshm);
meshm.rotation.set(1.6,0,0);
meshm.position.set(0,-0.8,0);

 var Molcajetedesalsaverde=new THREE.Group();
 Molcajetedesalsaverde.add(molcajetev,molcajetep1,molcajetep2,molcajetep3,meshm);
 Molcajetedesalsaverde.position.set(0,0,0);
// scene.add(Molcajetedesalsaverde);

  //Copia
  var molcajete1 = Molcajetedesalsaverde.clone();
 molcajete1.position.set(-6, 0, 0); 
 //scene.add(molcajete1);

 var esferam = new THREE.SphereGeometry(0.5, 20,20);  
 esferam.scale(4.8, 4.8, 1);   
 var texture= new THREE.TextureLoader().load("./images/sv.jpg");
  var materialm= new THREE.MeshToonMaterial({
     map:texture,
     side: THREE.DoubleSide
  });
 var meshv=new THREE.Mesh(esferam,materialm);
 //scene.add(meshv);
 meshv.rotation.set(1.6,0,0);
 meshv.position.set(-6,-0.8,0);

 var Molcajetes=new THREE.Group();
 Molcajetes.add(Molcajetedesalsaverde,molcajete1,meshv);
 Molcajetes.castShadow=true;
 Molcajetes.position.set(x,y,z);
 return Molcajetes;

}
