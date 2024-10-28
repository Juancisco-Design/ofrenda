import * as THREE from "./three.module.js";


export default function E06({x,y,z}){

  // VELA

  // Material vidrio
  var vidrio = new THREE.MeshToonMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide
});
    // Vaso
    var vasov = new THREE.CylinderGeometry(2, 1, 5, 32, 1, true);
    var vaso = new THREE.Mesh(vasov, vidrio);
    vaso.position.set(8,0,5); 
    vaso.castShadow=true;
    //scene.add(vaso);

    // Material vela
    var velag = new THREE.CylinderGeometry(1.7, .9, 4, 32); 
    var velam = new THREE.MeshToonMaterial({color: 0xe0cba6});
    var vela = new THREE.Mesh(velag, velam);
    vela.position.set(8,-0.2,5); 
    vela.castShadow=true;
    //scene.add(vela);
    

    var fuegocg = new THREE.SphereGeometry(.4,10,20);
    var fuegocm = new THREE.MeshToonMaterial({color:0xff7d03});
    var fuegoc = new THREE.Mesh(fuegocg,fuegocm);
    //scene.add(fuegoc);
    fuegoc.position.set(8,2.4,5);
    fuegoc.scale.set(0.4, 1, 0.5);

    var mechag = new THREE.CylinderGeometry(.02,.02,1,32,1);
    var mecham = new THREE.MeshToonMaterial({color: 0x16171b});
    var mecha = new THREE.Mesh(mechag,mecham);
    //scene.add(mecha);
    mecha.position.set(8,2,5)



   var ESC06= new THREE.Group();
   ESC06.add(vaso, vela,fuegoc,mecha);
   ESC06.position.set(x,y,z); 
   return ESC06;
}