import * as THREE from "./three.module.js";
import{RoundedBoxGeometry} from "./RoundedBoxGeometry.js";

export default function E07({x,y,z}){
    var material = new THREE.MeshToonMaterial({color: 0xfaf6e1});
        
          // cráneo 
          var skullGeometry = new THREE.SphereGeometry(2.5, 30, 30);
          var skull = new THREE.Mesh(skullGeometry, material);
          skull.scale.set(1.2, 1.1, 0.9);
          skull.position.set(0, 4.3, 0);
          //scene.add(skull);
          skull.castShadow=true;
        
          var pomulog = new THREE.SphereGeometry(0.6, 30, 30);
          var pomulo1 = new THREE.Mesh(pomulog, material);
          pomulo1.scale.set(1.3, 1.4, 1); 
          pomulo1.position.set(-2, 2.4, 0); 
          //scene.add(pomulo1);
          pomulo1.castShadow=true;
          var pomulo2 = new THREE.Mesh(pomulog, material);
          pomulo2.scale.set(1.3, 1.4, 1); 
          pomulo2.position.set(2, 2.4, 0);
          //scene.add(pomulo2);
          pomulo2.castShadow=true;
        
          // mandíbula
          var mandibulaGeometry = new RoundedBoxGeometry(3.5, 1.6, 2, 4, 0.6);
          var mandibula = new THREE.Mesh(mandibulaGeometry, material);
          mandibula.position.set(0, 1.2, 0); 
          //scene.add(mandibula);
          mandibula.castShadow=true;
        
          //ojos
          var eyeGeometry = new THREE.SphereGeometry(0.7, 32, 32);
          var material1= new THREE.MeshLambertMaterial({color: 0x000000});
          var leftEye = new THREE.Mesh(eyeGeometry, material1);
          var rightEye = new THREE.Mesh(eyeGeometry, material1);
          leftEye.position.set(1.3, 4, 2); 
          leftEye.rotation.set(0.1,0.3,0);
          leftEye.scale.set(1,1,0.5);
          leftEye.castShadow=true;
        
          rightEye.position.set(-1.3, 4, 2); 
          rightEye.rotation.set(0.1,-0.3,0);
          rightEye.scale.set(1,1,-0.5); 
          rightEye.castShadow=true;
          
          //scene.add(leftEye);
          //scene.add(rightEye);
          
        
          // nariz 
          var narizg = new THREE.SphereGeometry(0.3, 30, 30);
          var nariz1 = new THREE.Mesh(narizg, material1);
          nariz1.scale.set(0.9, 1.7, 1);
          nariz1.position.set(0.1, 2.9, 1.8); 
          nariz1.rotation.z = 0.3; 
          //scene.add(nariz1);
          nariz1.castShadow=true;
        
          var nariz2 = new THREE.Mesh(narizg, material1);
          nariz2.scale.set(0.9, 1.7, 1);
          nariz2.position.set(-0.2, 2.9, 1.8);
          nariz2.rotation.z = -0.3; 
          //scene.add(nariz2);
          nariz2.castShadow=true;
        
          // dientes inferiores 
          
            var dienteGeometry = new RoundedBoxGeometry(0.25, 0.5, 0.2, 3, 1);
            var material2= new THREE.MeshLambertMaterial({color: 0x924e94});
            var diente = new THREE.Mesh(dienteGeometry, material1);
            diente.position.set(0.2, 1.2, 1.1);
            //scene.add(diente);
            diente.castShadow=true;
        
            var diente2 = new THREE.Mesh(dienteGeometry,material1);
            diente2.position.set(0.6, 1.2, 1.1);
            //scene.add(diente2);
            diente2.castShadow=true;
            var diente3 = new THREE.Mesh(dienteGeometry,material1);
            diente3.position.set(-0.6, 1.2, 1.1);
            //scene.add(diente3);
            diente3.castShadow=true;
            var diente4 = new THREE.Mesh(dienteGeometry,material1);
            diente4.position.set(-0.2, 1.2, 1.1);
            //scene.add(diente4);
            diente4.castShadow=true;
        
        
        
            var ESC07= new THREE.Group();
            ESC07.add(skull,pomulo1,pomulo2,mandibula,leftEye,rightEye,nariz1,nariz2,diente,diente2,diente3,diente4);
            ESC07.position.set(x, y, z); 
            return ESC07;


}