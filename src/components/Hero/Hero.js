// Hero.js
import heroImage from "../assets/hero-image.png"


export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-xl font-bold">
                Hi and welcome to
            </h4>
            <h2 className="text-center text-emerald-500 text-5xl font-bold">
              My Portfolio Website
            </h2>
          </div>
          <p className="text-center">
            I am your friendly neighbourhood  developer...
          </p>
        </div>
        <div className="flex-1">
          <img src={heroImage}

  // "https://media.geeksforgeeks.org/gfg-gg-logo.svg"
               alt="Hero image"
               className="w-full h-full bg-cover"/>
        </div>
      </section>
    );
  }