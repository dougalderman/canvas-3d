let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff, 1 );
document.body.appendChild( renderer.domElement );

let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

let scene = new THREE.Scene();

//create a blue LineBasicMaterial
let material = new THREE.LineBasicMaterial( { color: 0xff0000 } );

let geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

let line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );