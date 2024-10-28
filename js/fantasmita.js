import * as THREE from "./three.module.js";
import{RoundedBoxGeometry} from "./RoundedBoxGeometry.js";

export default function E09({x,y,z}){
    var material = new THREE.MeshToonMaterial({color: 0xdbcab8,  transparent: true, opacity: 0.6 });
        
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
          var material1= new THREE.MeshLambertMaterial({color: 0x000000,transparent: true, opacity: 0.5});
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

            var craneo= new THREE.Group();
    craneo.add(skull,pomulo1,pomulo2,mandibula,leftEye,rightEye,nariz1,nariz2,diente,diente2,diente3,diente4);
    craneo.position.set(0, 0, 0); 
    //scene.add(craneo);
        
            
    //CUERPO


  var gargantag = new RoundedBoxGeometry( 1.8, 1, 1 ,3, 1);  
  var garganta = new THREE.Mesh(gargantag, material); 
  //scene.add(garganta);
  garganta.castShadow=true;

  var columnag = new RoundedBoxGeometry( 1, 15, 1 ,3, 1);  
  var columna = new THREE.Mesh(columnag, material);
  columna.position.set(0,-8,0); 
  //scene.add(columna);
  columna.castShadow=true;
  var columna1g = new RoundedBoxGeometry( 10, 1, 1 ,3, 1);  
  var columna1 = new THREE.Mesh(columna1g, material);
  columna1.position.set(0,-2,0); 
  //scene.add(columna1);
  columna1.castShadow=true;

  var geometry = new THREE.TorusGeometry(1.1, .4, 10, 100, );  
  var torus = new THREE.Mesh( geometry, material );
  torus.scale.set(1,1.3,1);
  torus.rotation.set(8,7,80);
  torus.position.set(-1.7,-3.6,0);
  //scene.add( torus );
  torus.castShadow=true;
  var geometry1 = new THREE.TorusGeometry(1.5, .4, 10, 100, );  
  var torus1 = new THREE.Mesh( geometry1, material );
  torus1.scale.set(1,1.4,1);
  torus1.rotation.set(8,6.99,80);
  torus1.position.set(-2.2,-5.5,0);
  //scene.add( torus1 );
  torus1.castShadow=true;
  var geometry2 = new THREE.TorusGeometry(1.9, .4, 10, 100, );  
  var torus2 = new THREE.Mesh( geometry2, material );
  torus2.scale.set(1,1.5,1);
  torus2.rotation.set(8,7,80);
  torus2.position.set(-2.2,-7.5,0);
  //scene.add( torus2 );
  torus2.castShadow=true;

  var costillas = new THREE.Group();
  costillas.add(torus,torus1,torus2);
  //scene.add(costillas);
  costillas.castShadow=true;

  var costillas2 = costillas.clone();
  costillas2.rotation.y=3.2;
  //scene.add(costillas2);
  costillas2.castShadow=true;

  var brazog = new THREE.CylinderGeometry(0.6,0.6,6,30)
  var brazo = new THREE.Mesh(brazog,material);
  //scene.add(brazo);
  brazo.castShadow=true;
  brazo.position.set(-3.2,-3.9,2.4);
  brazo.rotation.set(-0.8,0,0.3);

  var brazo2 = new THREE.Mesh(brazog,material);
  //scene.add(brazo2);
  brazo2.castShadow=true;
  brazo2.position.set(5.7,-4.7,0);
  brazo2.rotation.z= 0.2;

  
  var brazo3 = new THREE.Mesh(brazog,material);
  //scene.add(brazo3);
  brazo3.castShadow=true;
  brazo3.position.set(0,-3.8,5.5);
  brazo3.rotation.set(0,-0.4,-1);

  var brazo4 = new THREE.Mesh(brazog,material);
  //scene.add(brazo4);
  brazo4.castShadow=true;
  brazo4.position.set(5.3,-5.2,1.5);
  brazo4.rotation.set(.6,3,-.3);

  var brazos = new THREE.Group();
  brazos.add(brazo,brazo2,brazo3,brazo4);
  //scene.add(brazos);


  // MANO


// Dedos
const fingerGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 32,4);
const thumb = new THREE.Mesh(fingerGeometry, material);
thumb.position.set(-2.9, 2, .4);
thumb.rotation.z= 0.7;
//scene.add(thumb);
thumb.castShadow=true;

const fingeri = new THREE.CylinderGeometry(0.3, 0.3, 3, 32,4);
const index = new THREE.Mesh(fingeri, material);
index.position.set(-1.5, 4.7, 0.4);
//scene.add(index);
index.castShadow=true;

const fingerm = new THREE.CylinderGeometry(0.3, 0.3, 3.6, 32,4);
const middle = new THREE.Mesh(fingerm, material);
middle.position.set(-0.4, 5, 0.4);
//scene.add(middle);
middle.castShadow=true;

const ring = new THREE.Mesh(fingeri, material);
ring.position.set(0.7, 4.7, 0.4);
//scene.add(ring);
ring.castShadow=true;

const fingerp = new THREE.CylinderGeometry(0.3, 0.3, 2.2, 32,4);
const pinky = new THREE.Mesh(fingerp, material);
pinky.position.set(1.7, 4.3, 0.4);
//scene.add(pinky);
pinky.castShadow=true;

// Palma
 const trapecioShape = new THREE.Shape();
        trapecioShape.moveTo(-1.5,-1);  // Esquina inferior izquierda
        trapecioShape.lineTo(1.3, -1);   // Esquina inferior derecha
        trapecioShape.lineTo(2.2, 3);  // Esquina superior derecha
        trapecioShape.lineTo(-2.2, 3); // Esquina superior izquierda
        trapecioShape.lineTo(-1.5, -1);  // Volver a la esquina inferior izquierda

        const extrudeSettings = { depth: 0.8, bevelEnabled: false };
        const trapecioGeometry = new THREE.ExtrudeGeometry(trapecioShape, extrudeSettings);

        const palm = new THREE.Mesh(trapecioGeometry, material);
        //scene.add(palm);
        palm.castShadow=true;

 var mano = new THREE.Group();
  mano.add(thumb,middle,index,ring,pinky,palm);
  //scene.add(mano);
  mano.scale.set(0.5,0.6,1);
  mano.position.set(4.8,-2, 3.3);
  mano.rotation.set(.7,-1.4,0);

  var mano2 = mano.clone();
  mano2.position.set(2.8,-2 ,5.5);
  mano2.rotation.set(-0.5,7,-0.8)
  //scene.add(mano2);

  var vidrio = new THREE.MeshToonMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3, 
    side: THREE.DoubleSide
});
  //TEQUILA
    // Botella
    var botellag = new RoundedBoxGeometry(2, 7, 1.8, 12, 0.5);
    var botella = new THREE.Mesh(botellag, vidrio);
    //scene.add(botella);
    botella.position.set(0,0,0)

    // Cuello botella
    var cuellog = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
    var cuello = new THREE.Mesh(cuellog, vidrio);
    cuello.position.set(0,5,0);
    //scene.add(cuello);

    // Tapa 
    var tapag = new THREE.CylinderGeometry(0.4, 0.4, 1, 30);                                                     
    var tapam = new THREE.MeshBasicMaterial({ color: 0x4E4001}); 
    var tapa = new THREE.Mesh(tapag, tapam);
    tapa.position.set(0,6.5,0);
    //scene.add(tapa);

    // Etiqueta 
    var etiquetag = new THREE.CylinderGeometry(1.2, 1.2, 1, 11, 4, true); 
    var etiquetam = new THREE.MeshBasicMaterial({ color: 0xB3994E });
    var etiqueta = new THREE.Mesh(etiquetag, etiquetam);
    etiqueta.position.set(0, -1.42, 0); 
    //scene.add(etiqueta);

    // Tequila
    var liquidog = new THREE.CylinderGeometry(0.8, 0.8, 5.8, 32);
    var liquidom = new THREE.MeshBasicMaterial({ color: 0xf9e485, transparent: true, opacity: 0.8, side: THREE.DoubleSide });
    var liquido = new THREE.Mesh(liquidog, liquidom);
    liquido.position.set(0,-0.2,0);
    //scene.add(liquido);
    var tequila = new THREE.Group();
    tequila.add(botella,cuello,tapa,etiqueta,liquido);
    tequila.position.set(3, -2.5, 4); 
    //scene.add(tequila);
    tequila.scale.set(1,1,1);
    tequila.rotation.set(-.5,0,0);

        
        
            var fantasmita= new THREE.Group();
            fantasmita.add(craneo,garganta,columna,columna1,costillas,costillas2,brazos,mano,mano2,tequila);
            fantasmita.position.set(x, y, z); 
            return fantasmita;
}
