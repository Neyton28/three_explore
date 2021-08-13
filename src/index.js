import * as THREE from 'three'
import gsap from 'gsap'

import style from '/sass/style.sass'
import textureUrl from '/img/texture.jpg'
// import textureUrl from '/img/penis.png'



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
    map: texture,
    transparent : true

})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const geometry_2 = new THREE.BoxGeometry(1.5,1.5,1.5)
const material_2 = new THREE.MeshBasicMaterial({
    color: 0xce6a6b,
    wireframe:true
})
const mesh_2 = new THREE.Mesh(geometry_2, material_2)
mesh_2.position.set(-2, 1, -2)
scene.add(mesh_2)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 100)
camera.position.set(0, 0, 5)

scene.add(camera)


const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('three')
})


renderer.setClearColor( 0x8ac6bc, 1 );
renderer.setSize(window.innerWidth, window.innerHeight)

/**
 * GSAP
*/ 
const tl = gsap.timeline({repeat: -1})

tl.to(mesh.position, {duration: 2, x: 2})
tl.to(mesh.position, {duration: 1, y: 2})
tl.to(mesh.position, {duration: 2, x: -1, y: -2})
tl.to(mesh.position, {duration: 1, x: 0, y: 0})
tl.to(mesh.position, {duration: 2, z: -20})
tl.to(mesh.position, {duration: 2, z: 0})

function animation(){

    mesh.rotation.x += 0.001
    mesh.rotation.y += 0.04

    renderer.render(scene, camera)
    window.requestAnimationFrame(animation)
}

animation()
