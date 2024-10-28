


import * as THREE from "./three.module.js";
export default function E01({x,y,z}){




//caja de cigarros
     
var geometriaTriangulo = new THREE.BufferGeometry();

// Definir los tres vértices del triángulo
var vertices = new Float32Array([
0.0, 2.0, 0.0,   // Vértice A
-2, -1.0, 0.0,  // Vértice B
2, -1.0, 0.0   // Vértice C
]);

geometriaTriangulo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
var materialTriangulo = new THREE.MeshBasicMaterial({ color: 0xfffffffff, side: THREE.DoubleSide });
var triangulo = new THREE.Mesh(geometriaTriangulo, materialTriangulo);
triangulo.position.set(-4.2,-2.8,7.36);
//scene.add(triangulo);



 var caja = new THREE.BoxGeometry(4.27, 5.7, 1.7, 1);
 var materialcaja=new THREE.MeshToonMaterial({color:0xb80000});
 var meshcaja=new THREE.Mesh(caja,materialcaja);
 meshcaja.position.set(-4.2,-1,6.5);
 //scene.add(meshcaja);
 meshcaja.castShadow=true;

 
 var cajatapa = new THREE.BoxGeometry(4.27, 0.03, 1.7, 1);
 var materialcaja1=new THREE.MeshToonMaterial({color:0xa20000});
 var meshcaja1=new THREE.Mesh(cajatapa,materialcaja1);
 meshcaja1.position.set(-4.2,1.65,4.85);
 //scene.add(meshcaja1);
 meshcaja1.rotation.set(-0.2,0,0);
 meshcaja1.castShadow=true;
 
 
 var cajatapa2 = new THREE.BoxGeometry(4.27, 0.03, 1.7, 1);
 var materialcaja2=new THREE.MeshToonMaterial({color:0x0000});
 var meshcaja2=new THREE.Mesh(cajatapa2,materialcaja2);
 meshcaja2.position.set(-4.2,3.32,4.47);
 //scene.add(meshcaja2);
 meshcaja2.rotation.set(-0.2,0,0);
 meshcaja2.castShadow=true;
 
 var cajatapa3 = new THREE.BoxGeometry(1.7, 0.03, 1.7, 1);
 var materialcaja3=new THREE.MeshToonMaterial({color:0xa20000});
 var meshcaja3=new THREE.Mesh(cajatapa3,materialcaja3);
 meshcaja3.position.set(-2.06,2.48,4.64);
 //scene.add(meshcaja3);
 meshcaja3.rotation.set(-0.2,0,1.57);
 meshcaja3.castShadow=true;
 
 var cajatapa4 = new THREE.BoxGeometry(1.7, 0.03, 1.7, 1);
 var materialcaja4=new THREE.MeshToonMaterial({color:0xa20000});
 var meshcaja4=new THREE.Mesh(cajatapa4,materialcaja4);
 meshcaja4.position.set(-6.35,2.48,4.64);
 //scene.add(meshcaja4);
 meshcaja4.rotation.set(-0.2,0,1.57);
 meshcaja4.castShadow=true;
   
 var cajatapa5 = new THREE.BoxGeometry(4.27, 0.03, 1.7, 1);
 var materialcaja5=new THREE.MeshToonMaterial({color:0xa20000});
 var meshcaja5=new THREE.Mesh(cajatapa5,materialcaja5);
 meshcaja5.position.set(-4.2,2.3,3.8);
 //scene.add(meshcaja5);
 meshcaja5.rotation.set(1.4,0,0);
 meshcaja5.castShadow=true;

 var cajatapa6 = new THREE.BoxGeometry(4.27, 0.03, 1.7, 1);
 var materialcaja6=new THREE.MeshToonMaterial({color:0x929292});
 var meshcaja6=new THREE.Mesh(cajatapa6,materialcaja6);
 meshcaja6.position.set(-4.2,2.3,3.9);
 //scene.add(meshcaja6);
 meshcaja6.rotation.set(1.4,0,0);
 meshcaja6.castShadow=true;
 
 var cajatapa7 = new THREE.BoxGeometry(4.27, 0.01, 1.7, 1);
 var materialcaja7=new THREE.MeshToonMaterial({color:0x929292});
 var meshcaja7=new THREE.Mesh(cajatapa7,materialcaja7);
 meshcaja7.position.set(-4.2,1.85,6.5);
 //scene.add(meshcaja7);
 meshcaja7.rotation.set(0,0,0);
 meshcaja7.castShadow=true;

 //cigarros

 var cigarro1= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var material1c= new THREE.MeshToonMaterial({color:0xf1a619});
 var mesh1c= new THREE.Mesh(cigarro1, material1c);
 //scene.add(mesh1c);
 mesh1c.position.set(-6,0,7);  


 var cigarro2= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh2c= new THREE.Mesh(cigarro2, material1c);
 //scene.add(mesh2c);
 mesh2c.position.set(-5.4,0,7);  


 var cigarro3= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh3c= new THREE.Mesh(cigarro3, material1c);
 //scene.add(mesh3c);
 mesh3c.position.set(-4.8,0,7);  
 

 var cigarro4= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh4c= new THREE.Mesh(cigarro4, material1c);
 //scene.add(mesh4c);
 mesh4c.position.set(-4.2,0,7);  


 var cigarro5= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 
 var mesh5c= new THREE.Mesh(cigarro5, material1c);
 //scene.add(mesh5c);
 mesh5c.position.set(-3.6,0.20,7);  


 var cigarro6= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh6c= new THREE.Mesh(cigarro6, material1c);
 //scene.add(mesh6c);
 mesh6c.position.set(-3,0.30,7);  


 var cigarro7= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh7c= new THREE.Mesh(cigarro7, material1c);
 //scene.add(mesh7c);
 mesh7c.position.set(-2.4,0.40,7);  
 

 var cigarro8= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh8c= new THREE.Mesh(cigarro8, material1c);
 //scene.add(mesh8c);
 mesh8c.position.set(-5.7,0,6.5); 


 var cigarro9= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh9c= new THREE.Mesh(cigarro9, material1c);
 //scene.add(mesh9c);
 mesh9c.position.set(-5.1,0.20,6.5);  


 var cigarro10= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh10c= new THREE.Mesh(cigarro10, material1c);
 //scene.add(mesh10c);
 mesh10c.position.set(-4.5,0.30,6.5);  
 

 var cigarro11= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh11c= new THREE.Mesh(cigarro11, material1c);
 //scene.add(mesh11c);
 mesh11c.position.set(-3.9,0.40,6.5); 
 

 var cigarro12= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh12c= new THREE.Mesh(cigarro12, material1c);
 //scene.add(mesh12c);
 mesh12c.position.set(-3.3,0.85,6.5);  

 var cigarro13= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh13c= new THREE.Mesh(cigarro13, material1c);
 //scene.add(mesh13c);
 mesh13c.position.set(-2.7,0.90,6.5);  

 var cigarro14= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh14c= new THREE.Mesh(cigarro14, material1c);
 //scene.add(mesh14c);
 mesh14c.position.set(-6,0,6);  

 var cigarro15= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh15c= new THREE.Mesh(cigarro15, material1c);
 //scene.add(mesh15c);
 mesh15c.position.set(-5.4,0,6);  

 var cigarro16= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var material16c= new THREE.MeshLambertMaterial({color:0xf1a619});
 var mesh16c= new THREE.Mesh(cigarro16. material1c);
 //scene.add(mesh16c);
 mesh16c.position.set(-4.8,0.50,6);  

 var cigarro17= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh17c= new THREE.Mesh(cigarro17, material1c);
 //scene.add(mesh17c);
 mesh17c.position.set(-4.2,0.70,6);  


 var cigarro18= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh18c= new THREE.Mesh(cigarro18, material1c);
 //scene.add(mesh18c);
 mesh18c.position.set(-3.6,1,6);  


 var cigarro19= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh19c= new THREE.Mesh(cigarro19, material1c);
 //scene.add(mesh19c);
 mesh19c.position.set(-3,1.8,6); 
 mesh19c.castShadow=true; 


 var cigarro20= new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
 var mesh20c= new THREE.Mesh(cigarro20, material1c);
 //scene.add(mesh20c);
 mesh20c.position.set(-2.4,2,6);  
 

 var cigarroB1= new THREE.CylinderGeometry(0.301, 0.301, 6, 32);
 var materialCB1= new THREE.MeshLambertMaterial({color:0xffffffff});
 var meshCB1= new THREE.Mesh(cigarroB1, materialCB1);
 //scene.add(meshCB1);
 meshCB1.position.set(-3,-0.1,6);  

 var cigarroB2= new THREE.CylinderGeometry(0.301, 0.301, 6, 32);
 var materialCB2= new THREE.MeshLambertMaterial({color:0xffffffff});
 var meshCB2= new THREE.Mesh(cigarroB2, materialCB2);
 //scene.add(meshCB2);
 meshCB2.position.set(-2.4,0.5,6);  

 var cigarroB3= new THREE.CylinderGeometry(0.301, 0.301, 4, 32);
 var materialCB3= new THREE.MeshLambertMaterial({color:0xffffffff});
 var meshCB3= new THREE.Mesh(cigarroB3, materialCB3);
 //scene.add(meshCB3);
 meshCB3.position.set(-2.4,0,7);  

 //esta fokin variable solo agarra con mesh06 no se que hacer COÑOOOOOOOOOOO

 var cigarroB4= new THREE.CylinderGeometry(0.301, 0.301, 4, 32);
 var materialCB4= new THREE.MeshLambertMaterial({color:0xffffffff});
 var mesh06= new THREE.Mesh(cigarroB4, materialCB4);
 //scene.add(mesh06);
 mesh06.position.set(-2.7,0.3,6.5);  
 

 //unión cigarros


 var Cigarros=new THREE.Group();
 Cigarros.add(mesh06,mesh1c,mesh2c,mesh3c,mesh4c,mesh5c,mesh6c,mesh7c,mesh8c,mesh9c,mesh10c,mesh11c,mesh12c,mesh13c,mesh14c,mesh15c,mesh16c,mesh17c,mesh18c,mesh19c,mesh20c,meshCB1,meshCB2,meshCB3,triangulo,meshcaja,meshcaja1,meshcaja2,meshcaja3,meshcaja4,meshcaja5,meshcaja6,meshcaja7); 
 Cigarros.position.set(x,y,z);
 return Cigarros;



}