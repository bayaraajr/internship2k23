import { Button, Spinner, TextInput } from 'flowbite-react';
import React, { useMemo, Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import TextAnimate from '@/components/TextAnimate';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import * as THREE from 'three'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Water } from 'three-stdlib'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import { SiFord, SiNike, SiSketchfab } from 'react-icons/si';
extend({ Water })

function Ocean() {
    const ref = useRef()
    const gl = useThree((state) => state.gl)
    const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
    const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
    const config = useMemo(
        () => ({
            textureWidth: 512,
            textureHeight: 512,
            waterNormals,
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: false,
            format: gl.encoding
        }),
        [waterNormals]
    )
    useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
    return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

function Box() {
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime) * 20
        ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta
    })
    return (
        <mesh ref={ref} scale={20}>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
    )
}


const OpenAI = ({ ...props }: any) => {
    const router = useRouter();

    return (
        <Layout>
            <div className='p-10 lg:flex justify-between items-center'>
                <TextAnimate text="3D technology" className="text-4xl uppercase font-bold text-primary-400" />
                <div className='flex justify-between lg:justify-end items-center'>
                    <Button onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        <GrLinkPrevious />
                    </Button>
                    <Button onClick={() => router.push("/slides/trends/pwa")} className='bg-primary-400 hover:bg-primary-600 '>
                        <GrLinkNext />
                    </Button>
                </div>
            </div>

            <div className="px-10 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-24">
                <div className="col-span-1 lg:col-span-3">
                    <p className="text-primary-400 text-xl">Website using 3D technologies</p>
                    <p className="text-secondary-50">
                        3D technology can be applied to websites in various ways to enhance the user experience and provide engaging content.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border p-8 rounded-xl border-secondary-400 shadow-xl">
                    <SiNike className="text-secondary-50 text-6xl" />
                    <p className="text-primary-400 font-bold my-4 text-2xl uppercase">
                        Nike
                    </p>
                    <p className="text-justify text-secondary-50">
                        Nike's website for the Air Max 270 React sneakers features an interactive 3D model that allows users to rotate and zoom in on the shoes. It provides a more engaging and detailed view of the product.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border p-8 rounded-xl border-secondary-400 shadow-xl">
                    <SiSketchfab className="text-secondary-50 text-6xl" />
                    <p className="text-primary-400 font-bold my-4 text-2xl uppercase">
                        Sketchfab
                    </p>
                    <p className="text-justify text-secondary-50">
                        Sketchfab is a platform that allows users to upload, share, and view 3D models. It provides an interactive 3D viewer that can be embedded in websites, allowing users to explore and interact with 3D content.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border p-8 rounded-xl border-secondary-400 shadow-xl">
                    <SiFord className="text-secondary-50 text-6xl" />
                    <p className="text-primary-400 font-bold my-4 text-2xl uppercase">
                        Ford
                    </p>
                    <p className="text-justify text-secondary-50">
                        Ford's website for the Mustang Mach-E electric SUV incorporates 3D models and interactive elements to showcase the vehicle's design, features, and customization options.
                    </p>
                </div>


            </div>
            <div className="px-10 mb-5">
                <p className="text-secondary-100">Three.js is a cross-browser <b className="text-primary-400">JavaScript library</b> and application programming interface (API) used to create and display animated 3D computer graphics in a web browser using WebGL.</p>
            </div>
            <div className="px-10 h-[500px] pb-24">
                <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
                    <pointLight position={[100, 100, 100]} />
                    <pointLight position={[-100, -100, -100]} />
                    <Suspense fallback={null}>
                        <Ocean />
                        <Box />
                    </Suspense>
                    <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
                    <OrbitControls />
                </Canvas>
            </div>
        </Layout >
    )
}

export default OpenAI;