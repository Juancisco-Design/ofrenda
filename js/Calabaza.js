import * as THREE from "./three.module.js";
export default function CalabazaEscena(x, y, z) {
    // Crear un grupo para la calabaza y sus elementos
    var calabazaGrupo = new THREE.Group();

    // Material de la calabaza
    var calabazaMaterial = new THREE.MeshLambertMaterial({ color: 0xff8c00 });

    // Cuerpo de la calabaza (varios gajos usando esferas)
    var gajo1 = new THREE.SphereGeometry(3, 32, 32);

    // Crear y posicionar los gajos de la calabaza
    var calabaza1 = new THREE.Mesh(gajo1, calabazaMaterial);
    calabazaGrupo.add(calabaza1);
    calabaza1.position.set(0, 0, 0);

    var calabaza2 = new THREE.Mesh(gajo1, calabazaMaterial);
    calabazaGrupo.add(calabaza2);
    calabaza2.position.set(2.5, 0, 0);

    var calabaza3 = new THREE.Mesh(gajo1, calabazaMaterial);
    calabazaGrupo.add(calabaza3);
    calabaza3.position.set(-2.5, 0, 0);

    var calabaza4 = new THREE.Mesh(gajo1, calabazaMaterial);
    calabazaGrupo.add(calabaza4);
    calabaza4.position.set(1.5, 0, 2);

    var calabaza5 = new THREE.Mesh(gajo1, calabazaMaterial);
    calabazaGrupo.add(calabaza5);
    calabaza5.position.set(-1.5, 0, 2);

    var calabaza6 = new THREE.Mesh(gajo1, calabazaMaterial);
    calabazaGrupo.add(calabaza6);
    calabaza6.position.set(1.5, 0, -2);

    var calabaza7 = new THREE.Mesh(gajo1, calabazaMaterial);
    calabazaGrupo.add(calabaza7);
    calabaza7.position.set(-1.5, 0, -2);

    // Tallo de la calabaza (cilindro)
    var talloGeom = new THREE.CylinderGeometry(0.3, 0.5, 2, 16);
    var talloMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
    var tallo = new THREE.Mesh(talloGeom, talloMaterial);
    calabazaGrupo.add(tallo);
    tallo.position.set(0, 3, 0);

    // Posicionar el grupo completo
    calabazaGrupo.position.set(x, y, z);

    // Retornar el grupo que contiene la calabaza completa
    return calabazaGrupo;
}
