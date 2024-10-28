import * as THREE from './three.module.js';

export default function crearCaña(x, y, z) {
    // Crear un grupo para la caña
    var cañaGrupo = new THREE.Group();

    // Material de la caña (verde)
    var materialCaña = new THREE.MeshLambertMaterial({ color: 0x228B22 });

    const alturaSegmento = 4;  // Altura de cada segmento de la caña
    const radioSegmento = 0.8; // Radio de cada segmento de la caña

    // Crear el primer segmento de la caña
    const geometrySegmento1 = new THREE.CylinderGeometry(radioSegmento, radioSegmento, alturaSegmento, 32);
    const segmento1 = new THREE.Mesh(geometrySegmento1, materialCaña);
    cañaGrupo.add(segmento1);
    segmento1.position.set(0, 0, 0);

    // Crear el segundo segmento de la caña
    const geometrySegmento2 = new THREE.CylinderGeometry(radioSegmento, radioSegmento, alturaSegmento, 32);
    const segmento2 = new THREE.Mesh(geometrySegmento2, materialCaña);
    cañaGrupo.add(segmento2);
    segmento2.position.set(0, alturaSegmento, 0); // Subido sobre el primer segmento

    // Crear el tercer segmento de la caña
    const geometrySegmento3 = new THREE.CylinderGeometry(radioSegmento, radioSegmento, alturaSegmento, 32);
    const segmento3 = new THREE.Mesh(geometrySegmento3, materialCaña);
    cañaGrupo.add(segmento3);
    segmento3.position.set(0, alturaSegmento * 2, 0); // Subido sobre el segundo segmento

    // Crear un nodo entre el primer y segundo segmento (más ancho que los segmentos)
    const geometryNodo1 = new THREE.CylinderGeometry(radioSegmento * 1.2, radioSegmento * 1.2, 0.4, 32);
    const materialNodo = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); // Marrón claro
    const nodo1 = new THREE.Mesh(geometryNodo1, materialNodo);
    cañaGrupo.add(nodo1);
    nodo1.position.set(0, alturaSegmento / 2, 0);

    // Crear un nodo entre el segundo y tercer segmento
    const geometryNodo2 = new THREE.CylinderGeometry(radioSegmento * 1.2, radioSegmento * 1.2, 0.4, 32);
    const nodo2 = new THREE.Mesh(geometryNodo2, materialNodo);
    cañaGrupo.add(nodo2);
    nodo2.position.set(0, alturaSegmento + alturaSegmento / 2, 0);

    // Posicionar la caña completa en el espacio (x, y, z)
    cañaGrupo.position.set(x, y, z);

    // Retornar el grupo que contiene la caña completa
    return cañaGrupo;
}
