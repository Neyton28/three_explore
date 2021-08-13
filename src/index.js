import * as THREE from 'three'
import gsap from 'gsap'
import style from '/sass/style.sass'
// import textureUrl from '/img/texture.jpg'
import textureUrl from '/img/penis.png'



const scene = new THREE.Scene()

const sizes ={
    width: window.innerWidth,
    height: window.innerHeight
}
const cursor = {
    x: 0,
    y: 0
}

const texture = new THREE.TextureLoader().load( textureUrl );

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({
    // color: 0x4f095e, 
    // wireframe:true,
    map: texture,
    transparent : true

})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 100)
camera.position.set(0, 0, 5)

scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('three')
})
renderer.setClearColor( 0x0000ff, 1 );
renderer.setSize(window.innerWidth, window.innerHeight)

/**
 * GSAP
*/ 
const tl = gsap.timeline({repeat: -1})

// tl.to(mesh.position, {duration: 2, x: 2})
// tl.to(mesh.position, {duration: 1, y: 2})
// tl.to(mesh.position, {duration: 2, x: -1, y: -2})
// tl.to(mesh.position, {duration: 1, x: 0, y: 0})
// tl.to(mesh.position, {duration: 2, z: -20})
// tl.to(mesh.position, {duration: 2, z: 0})

function animation(){

    mesh.rotation.x += 0.001
    mesh.rotation.y += 0.04

    renderer.render(scene, camera)
    // mesh.lookAt(camera.position)

    window.requestAnimationFrame(animation)
}

animation()


window.addEventListener('mousemove', (event) =>
{
    camera.rotation.y = (event.clientX / sizes.width - 0.5)  / 5
    camera.rotation.x = (event.clientY / sizes.height - 0.5)  / 5

    // camera.position.x = (event.clientX / sizes.width - 0.5)  * 5
    // camera.position.y = (event.clientY / sizes.height - 0.5)  * 5
    // camera.lookAt(mesh.position)

    // camera.position.x = Math.sin((event.clientX / sizes.width - 0.5) * Math.PI * 2) * 2
    // camera.position.z = Math.cos((event.clientX / sizes.width - 0.5) * Math.PI * 2) * 2
    // camera.position.y = (event.clientY / sizes.width - 0.5) * 3
    // camera.lookAt(mesh.position)

    console.log(camera.position, event.clientX * Math.PI * 2)

    // cursor.x = - (event.clientX / sizes.width - 0.5)
    // cursor.y = - (event.clientY / sizes.height - 0.5)
})