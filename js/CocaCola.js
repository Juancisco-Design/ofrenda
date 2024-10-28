import * as THREE from "./three.module.js";
import{RoundedBoxGeometry} from "./RoundedBoxGeometry.js";

export default function E02({x,y,z}){
    // COCA COLA

    // Material vidrio
    var vidrio = new THREE.MeshToonMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5
    });

   // Base 
   var basecocag = new THREE.CylinderGeometry(1.1, 1.5, 2, 32);
   var texture= new THREE.TextureLoader().load("./images/cocam.jpg");
   var cocam= new THREE.MeshToonMaterial({
     map:texture
    });
   var basecoca = new THREE.Mesh(basecocag, cocam);
   //scene.add(basecoca);
   basecoca.position.set(-5, 0, 0);
   basecoca.castShadow=true;

   // Cuerpo 
   var cuerpog = new THREE.CylinderGeometry(1.3, 1, 4, 32);
   var cuerpo = new THREE.Mesh(cuerpog, cocam);
   //scene.add(cuerpo);
   cuerpo.position.set(-5, 1.8, 0);
   cuerpo.castShadow=true;
   var cuerpo2g = new THREE.CylinderGeometry(.9, 1.3 , 2.5, 32);
   var cuerpo2 = new THREE.Mesh(cuerpo2g, cocam);
   //scene.add(cuerpo2);
   cuerpo2.position.set(-5, 5, 0);
   cuerpo2.castShadow=true;

   // Cuello 
   var cuelloccg = new THREE.CylinderGeometry(0.3, 0.9, 2, 32);
   var cuellocc = new THREE.Mesh(cuelloccg, vidrio);
   //scene.add(cuellocc);
   cuellocc.position.set(-5, 7.2, 0);
   cuellocc.castShadow=true;

   // Tapa 
   var tapaccg = new THREE.CylinderGeometry(0.5, 0.5, 0.3, 32);
   var tapaccm = new THREE.MeshToonMaterial({ color: 0xed1c16 });
   var tapacc = new THREE.Mesh(tapaccg, tapaccm);
   //scene.add(tapacc);
   tapacc.position.set(-5, 8.2, 0); 
   tapacc.castShadow=true;

   // Etiqueta 
   var etiquetag = new THREE.CylinderGeometry(1, 1.3, 1.6, 32);
   var texture= new THREE.TextureLoader().load("./images/etiqueta-cc.jpg")
   var etiquetam = new THREE.MeshToonMaterial({map:texture});
   var etiquetacc = new THREE.Mesh(etiquetag, etiquetam);
   etiquetacc.position.set(-5, 4.9, 0);
   etiquetacc.rotation.y= 3; 
   //scene.add(etiquetacc);
   etiquetacc.castShadow=true;

   var Cocab= new THREE.Group();
   Cocab.add(basecoca,cuerpo,cuerpo2,cuellocc,tapacc,etiquetacc);
   Cocab.position.set(x,y,z); 
   return Cocab;
}
