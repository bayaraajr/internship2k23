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
                <TextAnimate text="ThreeJS" className="text-4xl uppercase font-bold text-primary-400" />
                <div className='flex justify-between lg:justify-end items-center'>
                    <Button onClick={() => router.back()} className='bg-primary-400 hover:bg-primary-600 mr-4 '>
                        <GrLinkPrevious />
                    </Button>
                    <Button onClick={() => router.push("/slides/roadmap")} className='bg-primary-400 hover:bg-primary-600 '>
                        <GrLinkNext />
                    </Button>
                </div>
            </div>
            <div className="px-10 mb-5">
                <p className="text-secondary-100">Three.js is a cross-browser <b className="text-primary-400">JavaScript library</b> and application programming interface (API) used to create and display animated 3D computer graphics in a web browser using WebGL.</p>
            </div>
            <div className="px-10 h-[500px]">
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