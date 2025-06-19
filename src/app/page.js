import { Button, Stack } from "@mui/material";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import SectionCenter from "./components/SectionCenter/SectionCenter";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Section
          image="/img/foto.png"
          imageAlt="Diego's photo"
          imagePosition="right"
          background="bg-quaternary"
          >
          <div className="w-full min-h-64 sm:min-h-40 flex flex-col justify-around pt-[5%] sm:pt-0 sm:px-10 sm:pb-0 pb-[5%] sm:mt-0 mt-6">
            <h3 className="font-sans text-primary text-2xl md:text-xl sm:lg tracking-wide">Hi, I&#39;m</h3>
            <h2 className="font-sans text-primary text-5xl md:text-5xl sm:text-3xl font-bold sm:pb-0 pb-4">Diego O. Mateus</h2>
            <p className="font-sans text-primary text-lg md:text-base sm:sm tracking-wide text-justify">A frontend developer evolving into fullstack, passionate about crafting digital experiences through clean code, creative design, and animation.</p>
          </div>
        </Section>

        <section id="about">
          <SectionCenter backgroundImage="/img/desk.jpg">
            <h2 className="text-4xl md:text-3xl sm:text-2xl md:px-32 font-sans font-bold mb-4 text-center">About Me</h2>
            <div className="w-1/2 h-2 bg-quaternary mx-auto my-4 rounded-full" />
            <p className="text-xl md:text-lg sm:text-base md:px-20 sm:px-10 font-sans font-light tracking-wide text-justify">
              <br/>
              I&#39;m a Frontend Developer with a background in Electromechanical Engineering and a constant passion for technology, visual design, and digital animation. I specialize in building modern, functional, and user-centered interfaces.
              <br/><br/>
              My technical foundation was solidified through the Oracle Next Education (ONE) program by Alura Latam, where I deepened my knowledge in web development, clean coding practices, and logical problem-solving. I&#39;m currently transitioning into Fullstack development, expanding my backend skills to deliver more complete and integrated solutions.
              <br/><br/>
              My tech stack includes React, Next.js, JavaScript, HTML, CSS, Tailwind CSS, and Framer Motion. I also bring creative value through digital design and animation, working with tools like Photoshop, Illustrator, After Effects, Blender, and more.
              <br/>
              I&#39;ve collaborated in agile, multidisciplinary environments such as NoCountry, where I developed real-world projects in team simulations, and I currently lead my own creative agency, Llamative, focused on web development and branding.
              <br/><br/>
              I&#39;m known for being proactive, responsible, and highly self-motivated, with a strong sense of adaptability and critical thinking. I thrive in team settings, value clear communication, and am constantly seeking to grow. I enjoy solving problems creatively while maintaining an empathetic and collaborative mindset.
              <br/><br/>
              My goal is to contribute to innovative projects by developing impactful digital experiences that blend technology, design, and human value.
            </p>
          </SectionCenter>
        </section>

        <div className="bg-tertiary" id="projects">
          <h2 className="text-4xl font-sans font-bold text-center mb-2 pt-10 text-primary">Projects</h2>
          <div className="w-1/4 h-2 bg-primary mx-auto my-4 rounded-full" />
          <div className="py-4" />
        </div>

          <Section
            image="/img/project-1.png"
            imageAlt="Panal – NoCountry"
            imagePosition="left"
            background="bg-quaternary"
            >
            <div className="w-full min-h-64 flex flex-col justify-around pb-[5%] mt-6">
              <h2 className="font-sans text-primary text-5xl md:text-4xl sm:text-3xl font-bold pb-4 sm:px-10">Panal – NoCountry</h2>
              <h2 className="font-sans text-primary text-2xl md:text-xl sm:text-lg font-normal pb-4 sm:px-10">(Collaborative Trello-style Project)</h2>
              <p className="font-sans text-primary text-lg tracking-wide text-justify sm:px-10">A collaborative task management platform inspired by Trello, developed during a simulated work environment with a multidisciplinary team of 5 people (UX/UI, Frontend, and Backend). I contributed as a Frontend developer, focusing on layout and user interaction. Currently in beta phase, with plans to be continued in an upcoming NoCountry cohort.</p>
            </div>
            <div className="flex justify-center font-sans text-lg font-bold" >
                <Stack direction="row" spacing={3}>
                  <Button variant="contained" href="https://panalco.vercel.app/" color="primary">DEMO</Button>
                  <Button variant="outlined" href="https://github.com/No-Country-simulation/equipo-c24-49-n-webapp.git">Code</Button>
                </Stack>
            </div>
          </Section>

          <Section
            image="/img/project-2.png"
            imageAlt="Org – Alura Latam"
            imagePosition="right"
            background="bg-secondary"
            >
            <div className="w-full min-h-64 flex flex-col justify-around pb-[5%] mt-6">
              <h2 className="font-sans text-quaternary text-5xl md:text-4xl sm:text-3xl font-bold pb-4 sm:px-10">Org – Alura Latam</h2>
              <h2 className="font-sans text-quaternary text-2xl md:text-xl sm:text-lg font-normal pb-4 sm:px-10">(Team Organizer App)</h2>
              <p className="font-sans text-quaternary text-lg tracking-wide text-justify sm:px-10">A web application built with React that allows users to create, edit, and delete work teams and their members. It provides a clear and intuitive way to visualize team structures. I implemented reusable components, props handling, hooks, and data persistence using JSON Server.</p>
            </div>
            <div className="flex justify-center font-sans text-lg font-bold" >
                <Stack direction="row" spacing={3}>
                  <Button variant="contained" href="https://ryokymera.github.io/Org-React-App/" color="primary">DEMO</Button>
                  <Button variant="outlined" href="https://github.com/RyoKymera/Org-React-App">Code</Button>
                </Stack>
            </div>
          </Section>

          <Section
            image="/img/project-3.png"
            imageAlt="Text Encryptor"
            imagePosition="left"
            background="bg-quaternary"
            >
            <div className="w-full min-h-64 flex flex-col justify-around pb-[5%] mt-6">
              <h2 className="font-sans text-primary text-5xl md:text-4xl sm:text-3xl font-bold pb-4 sm:px-10">Text Encryptor</h2>
              <p className="font-sans text-primary text-lg tracking-wide text-justify sm:px-10">A simple app designed to encrypt and decrypt text messages, created as a practice exercise in logic and basic security. Great for improving string manipulation, input validation, and responsive design skills. It also marked my first steps toward writing clean and user-friendly code.</p>
            </div>
            <div className="flex justify-center font-sans text-lg font-bold" >
                <Stack direction="row" spacing={3}>
                  <Button variant="contained" href="https://ryokymera.github.io/Challenge1-Encriptador-de-texto/" color="primary">DEMO</Button>
                  <Button variant="outlined" href="https://github.com/RyoKymera/Challenge1-Encriptador-de-texto">Code</Button>
                </Stack>
            </div>
          </Section>
      </main>

      <footer id="contact">
        <Footer />
      </footer>

    </div>
  );
}
