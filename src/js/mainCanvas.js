import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


export default function mainCanvas() {
    // 텍스쳐 이미지 로드
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const cubeTexture = cubeTextureLoader
        .setPath('../cubemap/')
        .load([
            'px.png', 'nx.png',
            'py.png', 'ny.png',
            'pz.png', 'nz.png',
        ]);
    const fontLoader = new FontLoader();
    let fontURL = '../asac.json';


    // Renderer
    const canvas = document.querySelector('#three-canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

    // Scene
    const scene = new THREE.Scene();
    scene.background = cubeTexture;


    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.y = 50;
    camera.position.z = 200;
    scene.add(camera);



    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 4;

    let welcomeSize = 25, welcomeY = 25, yearSize = 40;

    if (window.innerWidth < 768) {
        welcomeSize = 15;
        welcomeY = 10;
        yearSize = 30;
    } else if (window.innerWidth < 1024) {
        welcomeSize = 20;
        welcomeY = 15;
        yearSize = 35;
    } else {
        welcomeSize = 25;
        welcomeY = 20;
        yearSize = 40;
    }


    // Mesh
    fontLoader.load(fontURL, function (font) {
        const geometry = new TextGeometry('Welcome', {
            font: font,
            size: welcomeSize,
            height: 30,
            curveSegments: 32,
            bevelThickness: 10,
            bevelSize: 3,
            bevelOffset: 0,
            bevelSegments: 32,
            bevelEnabled: true,
        });

        // 지오메트리의 원점을 중앙으로
        geometry.center();

        // const material = new THREE.MeshNormalMaterial();
        const material = new THREE.MeshMatcapMaterial()
        const matcapTexture = new THREE.TextureLoader().load('../droplet2.png')
        material.matcap = matcapTexture

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = welcomeY;
        scene.add(mesh);
    });

    fontLoader.load(fontURL, function (font) {
        const geometry = new TextGeometry('2023', {
            font: font,
            size: yearSize,
            height: 30,
            curveSegments: 32,
            bevelThickness: 10,
            bevelSize: 5,
            bevelOffset: 0,
            bevelSegments: 32,
            bevelEnabled: true,
        })

        // 지오메트리의 원점을 중앙으로
        geometry.center();

        // const material = new THREE.MeshNormalMaterial();
        const material = new THREE.MeshMatcapMaterial()
        const matcapTexture = new THREE.TextureLoader().load('../droplet2.png')
        material.matcap = matcapTexture

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = -25;
        scene.add(mesh);
    });



    // 그리기
    const clock = new THREE.Clock();

    function draw() {
        const delta = clock.getDelta();
        controls.update()
        renderer.render(scene, camera);
        renderer.setAnimationLoop(draw);
    }

    function setSize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    // 이벤트
    window.addEventListener('resize', setSize);

    draw();
}
