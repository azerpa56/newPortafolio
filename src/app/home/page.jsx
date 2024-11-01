'use client'
import React , { useState, useEffect } from 'react'
import Image from 'next/image'
import './home.css'

export default function Home() {
  const [index, setIndex] = useState(0);
  const phrases = [`I'M ALEJANDRO ZERPA`, 'FRONTEND WEB DEVELOPER', 'SEO GORAZER', 'AI ENTHUSIAST'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000); // Cambia la frase cada 4 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <section id="home">
      <div id="content">
        <div id="text">
          <h3 id="cabalities">HELLO, {phrases[index]}<b>.</b></h3>

          <p id='welcomeParraf'>Hello! Welcome to my WEB site, where you can see my personal and professional profile. <br />
           In addition, the projects carried out as a developer are presented, as well as my Curriculum Vitae, which you can download to obtain more information.</p>

           <div id='target-presentation'>
              <article id='cardPresentation'>
                <h3>ABOUT ME</h3>
                <p>My name is Alejandro Zerpa, I am a Frontend Web Developer, SEO Gorazer and AI enthusiast. I am passionate about technology and I am always looking for new challenges to continue learning and growing in the world of programming. I am a proactive person, with a great capacity for teamwork and a lot of desire to continue improving.</p>
              </article>

              <article id='cardPresentation'>
                <h3>MY SKILLS</h3>
                <p>HTML5, CSS3, JavaScript, ReactJS, NextJS, NodeJS, ExpressJS, MongoDB, MySQL, Git, GitHub, SEO, AI, Photoshop, Illustrator, Figma, Adobe XD, Microsoft Office, Windows, Linux, MacOS.</p>
              </article>

              <article id='cardPresentation'>
                <h3>MY EXPERIENCE</h3>
                <p>I have experience in web development, SEO positioning, AI and design. I have worked on various projects as a developer and I have carried out several SEO strategies for different websites. I have also worked on AI projects using TensorFlow and I have designed various websites and applications using Adobe XD, Figma and Photoshop.</p>
              </article>
           </div>
        </div>

        <div id="img">
          <Image
            src="/me.png"
            alt="me"
            width={400}
            height={400}
          />
        </div>
      </div>

    </section>
  )
}
