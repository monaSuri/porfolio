'use client'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Goals from "./components/Goals";


export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Goals />
    </>
  );
}
