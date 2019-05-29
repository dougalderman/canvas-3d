let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff, 1 );
document.body.appendChild( renderer.domElement );

let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

let scene = new THREE.Scene();

let dir = new THREE.Vector3( 1, 1, 1 );

//normalize the direction vector (convert to vector of length 1)
dir.normalize();

let origin = new THREE.Vector3( 0, 0, 0 );
let length = 20;
let hex = 0x000000;
let headLength = length * 0.2;
let headWidth = headLength * 0.5;

let arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex, headLength, headWidth );
scene.add( arrowHelper );

dir = new THREE.Vector3(1, 1, 0);
dir.normalize();
hex = 0xff0000;

let arrowHelper2 = new THREE.ArrowHelper( dir, origin, length, hex, headLength, headWidth );
scene.add( arrowHelper2 );

dir = new THREE.Vector3(0, 1, 1);
dir.normalize();
hex = 0x0000ff;

let arrowHelper3 = new THREE.ArrowHelper( dir, origin, length, hex, headLength, headWidth );
scene.add( arrowHelper3 );

dir = new THREE.Vector3(1, 0, 1);
dir.normalize();
hex = 0x00ff00;

let arrowHelper4 = new THREE.ArrowHelper( dir, origin, length, hex, headLength, headWidth );
scene.add( arrowHelper4 );



renderer.render( scene, camera );