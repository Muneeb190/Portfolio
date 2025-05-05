import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

    const sectionRef = useRef(null)
    const project1 = useRef(null)
    const project2 = useRef(null)
    const project3 = useRef(null)


    useGSAP(() => {
        const projects = [project1.current, project2.current, project3.current]

        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )

        projects.forEach((card, index) => {
            gsap.fromTo(card, {
                y: 50,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * index + 1,
                scrollTrigger: {
                    trigger: card,

                }
            })
        })
    }, [])

    return (
        <div id='work' className='app-showcase' ref={sectionRef}>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* {left} */}
                    <div className='first-project-wrapper' ref={project1}>
                        <div className='image-wrapper'>
                            <a href="https://nebulaai-bay.vercel.app/" target='/'>
                                <img src="/images/project1.png" alt="Library Management" />
                            </a>
                        </div>
                        <div className='text-content'>
                            <a href="https://nebulaai-bay.vercel.app/">
                                <h2>
                                    Nebula AI
                                </h2>
                            </a>
                            <p className='text-white-50 md:text-xl'>
                                A decentralised supercomputer designed to meet the demand for next Gen AI
                            </p>
                        </div>
                    </div>

                    {/* {right} */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2}>
                            <div className='image-wrapper bg-[#c8d8dd]'>
                                <a href="https://addon-ai.vercel.app/" target='/'>
                                    <img src="/images/project2.png" alt="Library Management" />
                                </a>
                            </div>
                            <a href="https://addon-ai.vercel.app/" target='/'>
                                <h2>Addon AI</h2>
                            </a>
                        </div>

                        <div className='project' ref={project3}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <a href="https://magma-theta.vercel.app/" target='/'>
                                    <img src="/images/project3.png" alt="YC Directory" />
                                </a>
                            </div>
                            <a href="https://magma-theta.vercel.app/" target='/'>
                                <h2>Magma</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection