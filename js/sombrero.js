

import * as THREE from "./three.module.js";
export default function E02({x,y,z}){


//Flores naranjas


     
var esfera = new THREE.SphereGeometry(2, 32,20);  
esfera.scale(2, 0.3, 0.8);   
var material02=new THREE.MeshToonMaterial({color:0xe55f08});
var mesh02=new THREE.Mesh(esfera,material02);
//scene.add(mesh02);
mesh02.rotation.set(0,0.7,-0.5);
mesh02.position.set(0,0,0);
mesh02.castShadow=true;


var esfera01 = new THREE.SphereGeometry(2, 32,20);  
esfera01.scale(2, 0.3, 0.8);   
var material03=new THREE.MeshToonMaterial({color:0xf36d16});
var mesh03=new THREE.Mesh(esfera01,material03);
//scene.add(mesh03);
mesh03.rotation.set(0,2,-0.10);
mesh03.position.set(0,0,0);
mesh03.castShadow=true;


var esfera02 = new THREE.SphereGeometry(2, 32,20);  
esfera02.scale(2, 0.3, 0.8);   
var material04=new THREE.MeshToonMaterial({color:0xf36d16});
var mesh04=new THREE.Mesh(esfera02,material04);
//scene.add(mesh04);
mesh04.rotation.set(0,-2,0.10);
mesh04.position.set(0,0,0);
mesh04.castShadow=true;


var esfera03 = new THREE.SphereGeometry(2, 32,20);  
esfera03.scale(2, 0.3, 0.8);   
var material05=new THREE.MeshToonMaterial({color:0xf0520d});
var mesh05=new THREE.Mesh(esfera03,material05);
//scene.add(mesh05);
mesh05.rotation.set(0,0.5,0);
mesh05.position.set(0,0,0);
mesh05.castShadow=true;

// Grupo Flor 
var flor1 = new THREE.Group();
flor1.add(mesh02,mesh03,mesh04,mesh05);
//scene.add(flor1);

//primera Copia en y
var petalos = flor1.clone();
petalos.position.set(0, 0, 0); 
petalos.rotation.set(0.4,1.57,0.1); 
//scene.add(petalos);

var petalos02 = flor1.clone();
petalos02.position.set(0, 0, 0); 
petalos02.rotation.set(2,0.3,0.5); 
//scene.add(petalos02);

var petalos03 = flor1.clone();
petalos03.position.set(0, 0, 0); 
petalos03.rotation.set(1,0.8,0); 
//scene.add(petalos03);

var petalos04 = flor1.clone();
petalos04.position.set(0, 0, 0); 
petalos04.rotation.set(1.6,1.34,0); 
//scene.add(petalos04);

var petalos05 = flor1.clone();
petalos05.position.set(0, 0, 0); 
petalos05.rotation.set(2.6,0.5,0); 
//scene.add(petalos05);

var petalos06 = flor1.clone();
petalos06.position.set(0, 0, 0); 
petalos06.rotation.set(2.3,0,0); 
//scene.add(petalos06);

var petalos07 = flor1.clone();
petalos07.position.set(0, 0, 0); 
petalos07.rotation.set(2.9,0.1,0); 
//scene.add(petalos07);

var petalos08 = flor1.clone();
petalos08.position.set(0, 0, 0); 
petalos08.rotation.set(-2.9,-0.3,0); 
//scene.add(petalos08);

var petalos09 = flor1.clone();
petalos09.position.set(0, 0, 0); 
petalos09.rotation.set(1.3,0,2.9); 
//scene.add(petalos09);

var petalos10 = flor1.clone();
petalos10.position.set(0, 0, 0); 
petalos10.rotation.set(0.9,2,2.9); 
//scene.add(petalos10);


var florcompletan=new THREE.Group();
florcompletan.add(flor1,petalos,petalos02,petalos03,petalos04,petalos05,petalos06,petalos07,petalos08,petalos09,petalos10);
florcompletan.position.set(0, 5.5, 1);
//scene.add(florcompletan);
florcompletan.scale.set(0.3,0.3,0.3);


// Copia1
var flor2n = florcompletan.clone();
flor2n.position.set(2, 3.5, 3.7);  
//scene.add(flor2n);

// Copia2
var flor3n = florcompletan.clone();
flor3n.position.set(-2, 3.5, 3.7);  
//scene.add(flor3n);




//fLORES DE COLORES MORADAS

var esfera = new THREE.SphereGeometry(2, 32,20);  
esfera.scale(2, 0.3, 0.8);   
var material02=new THREE.MeshToonMaterial({color:0x680071});
var mesh02=new THREE.Mesh(esfera,material02);
//scene.add(mesh02);
mesh02.rotation.set(0,0.7,-0.5);
mesh02.position.set(0,0,0);
mesh02.castShadow=true;


var esfera01 = new THREE.SphereGeometry(2, 32,20);  
esfera01.scale(2, 0.3, 0.8);   
var material03=new THREE.MeshToonMaterial({color:0x680071});
var mesh03=new THREE.Mesh(esfera01,material03);
//scene.add(mesh03);
mesh03.rotation.set(0,2,-0.10);
mesh03.position.set(0,0,0);
mesh03.castShadow=true;


var esfera02 = new THREE.SphereGeometry(2, 32,20);  
esfera02.scale(2, 0.3, 0.8);   
var material04=new THREE.MeshToonMaterial({color:0x680071});
var mesh04=new THREE.Mesh(esfera02,material04);
//scene.add(mesh04);
mesh04.rotation.set(0,-2,0.10);
mesh04.position.set(0,0,0);
mesh04.castShadow=true;


var esfera03 = new THREE.SphereGeometry(2, 32,20);  
esfera03.scale(2, 0.3, 0.8);   
var material05=new THREE.MeshToonMaterial({color:0X680071});
var mesh05=new THREE.Mesh(esfera03,material05);
//scene.add(mesh05);
mesh05.rotation.set(0,0.5,0);
mesh05.position.set(0,0,0);
mesh05.castShadow=true;

// Grupo Flor 
var flor1 = new THREE.Group();
flor1.add(mesh02,mesh03,mesh04,mesh05);
//scene.add(flor1);

//primera Copia en y
var petalos = flor1.clone();
petalos.position.set(0, 0, 0); 
petalos.rotation.set(0.4,1.57,0.1); 
//scene.add(petalos);

var petalos02 = flor1.clone();
petalos02.position.set(0, 0, 0); 
petalos02.rotation.set(2,0.3,0.5); 
//scene.add(petalos02);

var petalos03 = flor1.clone();
petalos03.position.set(0, 0, 0); 
petalos03.rotation.set(1,0.8,0); 
//scene.add(petalos03);

var petalos04 = flor1.clone();
petalos04.position.set(0, 0, 0); 
petalos04.rotation.set(1.6,1.34,0); 
//scene.add(petalos04);

var petalos05 = flor1.clone();
petalos05.position.set(0, 0, 0); 
petalos05.rotation.set(2.6,0.5,0); 
//scene.add(petalos05);

var petalos06 = flor1.clone();
petalos06.position.set(0, 0, 0); 
petalos06.rotation.set(2.3,0,0); 
//scene.add(petalos06);

var petalos07 = flor1.clone();
petalos07.position.set(0, 0, 0); 
petalos07.rotation.set(2.9,0.1,0); 
//scene.add(petalos07);

var petalos08 = flor1.clone();
petalos08.position.set(0, 0, 0); 
petalos08.rotation.set(-2.9,-0.3,0); 
//scene.add(petalos08);

var petalos09 = flor1.clone();
petalos09.position.set(0, 0, 0); 
petalos09.rotation.set(1.3,0,2.9); 
//scene.add(petalos09);

var petalos10 = flor1.clone();
petalos10.position.set(0, 0, 0); 
petalos10.rotation.set(0.9,2,2.9); 
//scene.add(petalos10);


var florcompletam=new THREE.Group();
florcompletam.add(flor1,petalos,petalos02,petalos03,petalos04,petalos05,petalos06,petalos07,petalos08,petalos09,petalos10);
florcompletam.position.set(0, 4.7, 2.9);
//scene.add(florcompletam);
florcompletam.scale.set(0.3,0.3,0.3);


// Copia1
var flor2m = florcompletam.clone();
flor2m.position.set(4, 3.4, 2);  
//scene.add(flor2m);

// Copia2
var flor3m = florcompletam.clone();
flor3m.position.set(-4, 3.4, 2);  
//scene.add(flor3m);





//fLORES DE COLORES AZUL

var esfera = new THREE.SphereGeometry(2, 32,20);  
esfera.scale(2, 0.3, 0.8);   
var material02=new THREE.MeshToonMaterial({color:0xdc0});
var mesh02=new THREE.Mesh(esfera,material02);
//scene.add(mesh02);
mesh02.rotation.set(0,0.7,-0.5);
mesh02.position.set(0,0,0);
mesh02.castShadow=true;


var esfera01 = new THREE.SphereGeometry(2, 32,20);  
esfera01.scale(2, 0.3, 0.8);   
var material03=new THREE.MeshToonMaterial({color:0xdc0});
var mesh03=new THREE.Mesh(esfera01,material03);
//scene.add(mesh03);
mesh03.rotation.set(0,2,-0.10);
mesh03.position.set(0,0,0);
mesh03.castShadow=true;


var esfera02 = new THREE.SphereGeometry(2, 32,20);  
esfera02.scale(2, 0.3, 0.8);   
var material04=new THREE.MeshToonMaterial({color:0xdc0});
var mesh04=new THREE.Mesh(esfera02,material04);
//scene.add(mesh04);
mesh04.rotation.set(0,-2,0.10);
mesh04.position.set(0,0,0);
mesh04.castShadow=true;


var esfera03 = new THREE.SphereGeometry(2, 32,20);  
esfera03.scale(2, 0.3, 0.8);   
var material05=new THREE.MeshToonMaterial({color:0Xdc0});
var mesh05=new THREE.Mesh(esfera03,material05);
//scene.add(mesh05);
mesh05.rotation.set(0,0.5,0);
mesh05.position.set(0,0,0);
mesh05.castShadow=true;

// Grupo Flor 
var flor1 = new THREE.Group();
flor1.add(mesh02,mesh03,mesh04,mesh05);
//scene.add(flor1);

//primera Copia en y
var petalos = flor1.clone();
petalos.position.set(0, 0, 0); 
petalos.rotation.set(0.4,1.57,0.1); 
//scene.add(petalos);

var petalos02 = flor1.clone();
petalos02.position.set(0, 0, 0); 
petalos02.rotation.set(2,0.3,0.5); 
//scene.add(petalos02);

var petalos03 = flor1.clone();
petalos03.position.set(0, 0, 0); 
petalos03.rotation.set(1,0.8,0); 
//scene.add(petalos03);

var petalos04 = flor1.clone();
petalos04.position.set(0, 0, 0); 
petalos04.rotation.set(1.6,1.34,0); 
//scene.add(petalos04);

var petalos05 = flor1.clone();
petalos05.position.set(0, 0, 0); 
petalos05.rotation.set(2.6,0.5,0); 
//scene.add(petalos05);

var petalos06 = flor1.clone();
petalos06.position.set(0, 0, 0); 
petalos06.rotation.set(2.3,0,0); 
//scene.add(petalos06);

var petalos07 = flor1.clone();
petalos07.position.set(0, 0, 0); 
petalos07.rotation.set(2.9,0.1,0); 
//scene.add(petalos07);

var petalos08 = flor1.clone();
petalos08.position.set(0, 0, 0); 
petalos08.rotation.set(-2.9,-0.3,0); 
//scene.add(petalos08);

var petalos09 = flor1.clone();
petalos09.position.set(0, 0, 0); 
petalos09.rotation.set(1.3,0,2.9); 
//scene.add(petalos09);

var petalos10 = flor1.clone();
petalos10.position.set(0, 0, 0); 
petalos10.rotation.set(0.9,2,2.9); 
//scene.add(petalos10);


var florcompletaA=new THREE.Group();
florcompletaA.add(flor1,petalos,petalos02,petalos03,petalos04,petalos05,petalos06,petalos07,petalos08,petalos09,petalos10);
florcompletaA.position.set(0, 3.5, 4.3);
//scene.add(florcompletaA);
florcompletaA.scale.set(0.3,0.3,0.3);


// Copia1
var flor2A = florcompletaA.clone();
flor2A.position.set(2, 5, 2);  
//scene.add(flor2A);

// Copia2
var flor3A = florcompletaA.clone();
flor3A.position.set(-2, 5, 2);  
//scene.add(flor3A);




//sombrero

var geometriaS = new THREE.SphereGeometry(5, 32, 17, 0,6.3,0,1,);
    var materialS = new THREE.MeshToonMaterial({ color: 0xa30047c, side: THREE.DoubleSide });
    var Sombrero = new THREE.Mesh(geometriaS, materialS);
    Sombrero.rotation.set(0,0,0);
    Sombrero.position.set(0,0,0);
    //scene.add(Sombrero);
    Sombrero.castShadow=true;



var esfera = new THREE.SphereGeometry(2, 32,20);  
esfera.scale(2, 0.2, 0.5);   
var material02=new THREE.MeshToonMaterial({color: 0x0b5200,  transparent: true, opacity: 0.7 });
var mesh13=new THREE.Mesh(esfera,material02);
//scene.add(mesh13);
mesh13.rotation.set(0,4,-0.5);
mesh13.position.set(0,5,0);
mesh13.castShadow=true;

var esfera1 = new THREE.SphereGeometry(2, 32,20);  
esfera1.scale(2, 0.2, 0.5);   
var material03=new THREE.MeshToonMaterial({color: 0x0b5200,  transparent: true, opacity: 0.7 });
var mesh12=new THREE.Mesh(esfera1,material03);
//scene.add(mesh12);
mesh12.rotation.set(0,5.5,-0.5);
mesh12.position.set(0,5,0);
mesh12.castShadow=true;


var esfera2 = new THREE.SphereGeometry(2, 32,20);  
esfera2.scale(2, 0.2, 0.5);   
var material04=new THREE.MeshToonMaterial({color: 0x551313,  transparent: true, opacity: 0.7 });
var mesh11=new THREE.Mesh(esfera2,material04);
//scene.add(mesh11);
mesh11.rotation.set(0,6,-0.5);
mesh11.position.set(-3,4,1);
mesh11.castShadow=true;

var esfera3 = new THREE.SphereGeometry(2, 32,20);  
esfera3.scale(2, 0.2, 0.5);   
var material05=new THREE.MeshToonMaterial({color: 0x551313,  transparent: true, opacity: 0.7 });
var mesh10=new THREE.Mesh(esfera3,material05);
//scene.add(mesh10);
mesh10.rotation.set(0,3,-0.5);
mesh10.position.set(3,4,1);
mesh10.castShadow=true;


const geometry4 = new THREE.CylinderGeometry( 6, 6, 6, 32 ); 
 const material6 = new THREE.MeshToonMaterial( {color: 0xBBBBBB,  transparent: true, opacity: 0.4 } ); 
 const cylinder4 = new THREE.Mesh( geometry4, material6 ); 
 //scene.add( cylinder4 );
 cylinder4.position.set(0,-0.9,0);

 const geometry5 = new THREE.CylinderGeometry( 4, 6, 0.8, 32 ); 
 const material7 = new THREE.MeshToonMaterial( {color: 0xa30047c } ); 
 const cylinder5 = new THREE.Mesh( geometry5, material7 ); 
//scene.add( cylinder5 );
 cylinder5.position.set(0,2.5,0);


//UNION SOMBRERO

var sombrerito=new THREE.Group();
sombrerito.add(florcompletan,flor2n,flor3n,florcompletam,flor2m,flor3m,florcompletaA,flor2A,flor3A,Sombrero,mesh13,mesh12,mesh11,mesh10,cylinder4,cylinder5);
sombrerito.castShadow=true;
sombrerito.position.set(x,y,z);
return sombrerito;
    
}