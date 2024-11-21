// App.js
import Contact from "../src/components/Contact/Contact"
import About from "../src/components/About/About";
import Footer from "../src/components/Footer/Footer";
import Hero from "../src/components/Hero/Hero";
import Navbar from "../src/components/Navbar/Navbar";
import Projects from "../src/components/Projects/Projects";
import Skills from "../src/components/Skills/Skills";
import './index.css';

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}