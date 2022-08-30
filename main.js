import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl'
import './style.css'

const canvasContainer = document.querySelector('#canvasContainer')



const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, canvasContainer.offsetWidth / canvasContainer.offsetHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({antialias: true, canvas: document.querySelector('canvas')})
renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight)
renderer.setPixelRatio(window.devicePixelRatio)

new OrbitControls(camera, renderer.domElement)

//Create a Sphere
const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    globeTexture: {
      value: new THREE.TextureLoader().load('./globe.jpg')
    }
  }
}))

scene.add(sphere)

//Create Atmosphere
const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({
  vertexShader: atmosphereVertexShader,
  fragmentShader: atmosphereFragmentShader,
  blending: THREE.AdditiveBlending,
  side: THREE.BackSide  
}))

atmosphere.scale.set(1.2, 1.2, 1.2)

scene.add(atmosphere)

const group = new THREE.Group()
group.add(sphere)
scene.add(group)

const starGeometry = new THREE.BufferGeometry()
const starMaterial = new THREE.PointsMaterial({color: 0xffffff})

const starVertices = []
for (let i = 0; i < 10000; i++) {
  const x = (Math.random() - 0.5) * 2000
  const y = (Math.random() - 0.5) * 2000
  const z= -(Math.random() - 0.5) * 2000
  starVertices.push(x, y, z)
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))

const stars = new THREE.Points(starGeometry, starMaterial)
scene.add(stars)

camera.position.z = 15

const point = new THREE.Mesh(new THREE.SphereGeometry(0.1, 50, 50), new THREE.MeshBasicMaterial({color: 0xff0000}))

//23.6345° N, 102.5528° W Mexico 
const latitude = (23.6345 / 180) * Math.PI
const longitude = (-102.5528 / 180) * Math.PI
const radius = 5
const x = radius * Math.cos(latitude) * Math.sin(longitude)
const y = radius * Math.sin(latitude)
const z = radius * Math.cos(latitude) * Math.cos(longitude)

point.position.x = x
point.position.y = y
point.position.z = z
group.add(point)

sphere.rotation.y = -Math.PI / 2

const mouse = {
  x: undefined,
  y: undefined
}

function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  group.rotation.y += 0.002  
  //sphere.rotation.y += 0.002
  //gsap.to(group.rotation, { x: -mouse.y * 0.2, y: mouse.x * 1.8})

  stars.rotation.x += 0.00002
}

animate()


addEventListener('mousemove', () => {
  mouse.x = (event.clientX / innerWidth) * 2 - 1
  mouse.y = (event.clientY / innerHeight) * 2 + 1
})
