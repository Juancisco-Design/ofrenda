

import * as THREE from "./three.module.js";
export default function E02({x,y,z})

{




//incienso

var maeta= new THREE.SphereGeometry( 2.6, 32, 20,0,6.2831,0,1.4 ) 
var texture= new THREE.TextureLoader().load("./images/talavera.png");
  var materialMa= new THREE.MeshToonMaterial({
     map:texture,
     side: THREE.DoubleSide
  });
var meshMa = new THREE.Mesh( maeta, materialMa ); 
 //scene.add(meshMa);
 meshMa.rotation.set(3.2,0,0);
 meshMa.position.set(0,7,0);
 meshMa.castShadow=true;

 const geometry = new THREE.TorusGeometry( 2, 1, 3, 100 ); 

 const torus = new THREE.Mesh( geometry, materialMa ); 
 //scene.add( torus );
 torus.rotation.set(1.57,0,0);
 torus.position.set(0,0,0);

 const geometry1 = new THREE.TorusGeometry( 1, 1, 3, 100 ); 
 const torus1 = new THREE.Mesh( geometry1, materialMa ); 
 //scene.add( torus1 );
 torus1.rotation.set(1.57,0,0);
 torus1.position.set(0,1,0);


 const geometry3 = new THREE.TorusGeometry( 0.5, 1, 3, 100 ); 
 const torus3 = new THREE.Mesh( geometry3, materialMa ); 
 //scene.add( torus3 );
 torus3.rotation.set(1.57,0,0);
 torus3.position.set(0,4.2,0);

 const geometry4 = new THREE.CylinderGeometry( 0.3, 1, 5, 32 ); 
 const cylinder4 = new THREE.Mesh( geometry4, materialMa ); 
 //scene.add( cylinder4 );
 cylinder4.position.set(0,4,0);

 const geometry5 = new THREE.CylinderGeometry( 0.1, 0.1, 5, 32 ); 
 const material5 = new THREE.MeshToonMaterial( {color: 0x5b0000} ); 
 const cylinder5 = new THREE.Mesh( geometry5, material5 ); 
 //scene.add( cylinder5 );
 cylinder5.rotation.set(0,0,2);
 cylinder5.position.set(1.7,6.5,0);

 const geometry6 = new THREE.ConeGeometry( 2.3, 1, 32 ); 
 var texture= new THREE.TextureLoader().load("./images/ceniza.jpg");
  var materialc= new THREE.MeshToonMaterial({
     map:texture
  });
 const cone = new THREE.Mesh(geometry6, materialc ); 
 //scene.add( cone );
 cone.position.set(0,6.6,0);





 //humito


 class CustomSinCurve extends THREE.Curve {

constructor( scale = 1 ) {
super();
this.scale = scale;
}

getPoint(t, optionalTarget = new THREE.Vector3()) {
    const tx = t * 3 - 1.5;
    const ty = 0.5 * Math.sin(2 * Math.PI * t); 
    const tz = 0;

    return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
}
}

const path = new CustomSinCurve( 3 );
const geometryhumo = new THREE.TubeGeometry( path, 55, 0.2, 13, false );
const materialhumo = new THREE.MeshToonMaterial( { color: 0xb0b0b0, transparent: true, opacity: 0.5 } );
const humo = new THREE.Mesh( geometryhumo, materialhumo );
humo.rotation.set(0,0,1);
humo.position.set(6.5,11.5,0);
//scene.add( humo );


//caliz con todo

var caliz=new THREE.Group();
caliz.add(meshMa,torus,torus1,torus3,cylinder4,cylinder5,cone,humo);
caliz.castShadow=true;
caliz.position.set(x,y,z);
return caliz;

}

