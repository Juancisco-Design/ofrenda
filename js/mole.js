



import * as THREE from "./three.module.js";
export default function E02({x,y,z}){







//pole con mollo

var geometriaBowlmole = new THREE.SphereGeometry(5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
var texture= new THREE.TextureLoader().load("./images/barro.jpg");
  var materialBowlmole= new THREE.MeshToonMaterial({
     map:texture,
     side: THREE.DoubleSide
  });
var bowlmole = new THREE.Mesh(geometriaBowlmole, materialBowlmole);
bowlmole.rotation.set(3.2,0,0);
bowlmole.position.set(4,-2,9);
//scene.add(bowlmole);
bowlmole.castShadow=true;

var esferam = new THREE.SphereGeometry(1, 32,32);  
esferam.scale(4.8, 4.8, 1);   
var materialm=new THREE.MeshToonMaterial({color:0x54220a});
var meshm=new THREE.Mesh(esferam,materialm);
//scene.add(meshm);
meshm.rotation.set(1.6,0,0);
meshm.position.set(4,-3,9);

var esferapollo = new THREE.SphereGeometry(4, 40,40);  
esferapollo.scale(0.3, 0.3, 0.5);   

var meshpollo=new THREE.Mesh(esferapollo,materialm);
//scene.add(meshpollo);
meshpollo.rotation.set(0,0.7,-0.5);
meshpollo.position.set(4,-2,9);


var hueso= new THREE.CylinderGeometry(0.2, 0.2, 0.5, 32);
var materialh= new THREE.MeshToonMaterial({color:0xffffff});
var meshh= new THREE.Mesh(hueso, materialh);
//scene.add(meshh);
meshh.rotation.set(1.57,0,2.5);
meshh.position.set(5.1,-2,10.7); 


var esferah1 = new THREE.SphereGeometry(1, 40,40);  
esferah1.scale(0.3, 0.3, 0.5);   
var materialh1=new THREE.MeshLambertMaterial({color:0xffffff});
var meshh1=new THREE.Mesh(esferah1,materialh);
//scene.add(meshh1);
meshh1.rotation.set(0,1,-0.5);
meshh1.position.set(5.4,-2.1,11);


var esferah2 = new THREE.SphereGeometry(1, 40,40);  
esferah2.scale(0.3, 0.3, 0.5);   
var materialh2=new THREE.MeshLambertMaterial({color:0xffffff});
var meshh2=new THREE.Mesh(esferah2,materialh);
//scene.add(meshh2);
meshh2.rotation.set(0,0.2,-0.5);
meshh2.position.set(5.3,-2.1,11.1);



//ajonjolí flotante
 
var esferaA = new THREE.SphereGeometry(0.3, 32,32);  
esferaA.scale(0.2, 0.2, 0.6); 
var materialA=new THREE.MeshToonMaterial({color:0xffa600});
var meshA=new THREE.Mesh(esferaA,materialA);
//scene.add(meshA);
meshA.rotation.set(0,0.99,-0.5);
meshA.position.set(4,-0.8,9);


var esferaA1 = new THREE.SphereGeometry(0.3, 32,32);  
esferaA1.scale(0.2, 0.2, 0.6);  
var materialA1=new THREE.MeshLambertMaterial({color:0xffa600});
var meshA1=new THREE.Mesh(esferaA1,materialA);
//scene.add(meshA1);
meshA1.rotation.set(3,0.99,-0.4);
meshA1.position.set(4,-1.0,8);


var esferaA2 = new THREE.SphereGeometry(0.3, 32,32);  
esferaA2.scale(0.2, 0.2, 0.6);  
var materialA2=new THREE.MeshLambertMaterial({color:0xffa600});
var meshA2=new THREE.Mesh(esferaA2,materialA);
//scene.add(meshA2);
meshA2.rotation.set(1,0.99,-0.9);
meshA2.position.set(4,-1.9,7);


var esferaA3 = new THREE.SphereGeometry(0.3, 32,32);  
esferaA3.scale(0.2, 0.2, 0.6);   
var materialA3=new THREE.MeshLambertMaterial({color:0xffa600});
var meshA3=new THREE.Mesh(esferaA3,materialA);
//scene.add(meshA3);
meshA3.rotation.set(6,0.99,-1.7);
meshA3.position.set(6,-2.3,6);


var esferaA4 = new THREE.SphereGeometry(0.3, 32,32);  
esferaA4.scale(0.2, 0.2, 0.6);
var materialA4=new THREE.MeshLambertMaterial({color:0xffa600});
var meshA4=new THREE.Mesh(esferaA4,materialA);
//scene.add(meshA4);
meshA4.rotation.set(2,0.99,-0.3);
meshA4.position.set(5,-2.3,5);


var esferaA5 = new THREE.SphereGeometry(0.3, 32,32);  
esferaA5.scale(0.2, 0.2, 0.6);  
var materialA5=new THREE.MeshLambertMaterial({color:0xffa600});
var meshA5=new THREE.Mesh(esferaA5,materialA);
//scene.add(meshA5);
meshA5.rotation.set(1,0.99,-0.8);
meshA5.position.set(4,-2.3,5);


var esferaA6 = new THREE.SphereGeometry(0.3, 32,32);  
esferaA6.scale(0.2, 0.2, 0.6);   
var materialA6=new THREE.MeshLambertMaterial({color:0xffa600});
var meshA6=new THREE.Mesh(esferaA6,materialA);
//scene.add(meshA6);
meshA6.rotation.set(0,0.99,-0.3);
meshA6.position.set(3,-1.1,9);

//union ajonjolís
var ajonjolis=new THREE.Group();
ajonjolis.add(meshA,meshA1,meshA2,meshA3,meshA4,meshA5,meshA6);
ajonjolis.position.set(0,0,0);


// Copia1
var ajons = ajonjolis.clone();
ajons.position.set(-2, 0-1, 0); 
ajons.rotation.set(0,-0.01,0);

// Copia2
var ajons1 = ajonjolis.clone();
ajons1.position.set(0, -1, 2); 
ajons1.rotation.set(0,-0.1,0);

// Copia3
var ajons2 = ajonjolis.clone();
ajons2.position.set(2, 0, 1.5); 
ajons2.rotation.set(0,0,0);




//union pole con mollo

var Molito=new THREE.Group();
Molito.add(bowlmole,meshm,meshpollo,meshh,meshh1,meshh2,ajonjolis,ajons,ajons1,ajons2);
Molito.castShadow=true;
Molito.position.set(x,y,z);
return Molito;

}
