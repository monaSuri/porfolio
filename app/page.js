'use client'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Goals from "./components/Goals";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Goals />
    <Projects />
    <Contact />
    </>
  );
}
