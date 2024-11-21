// About.js
import heroAbout from "../assets/heroAbout.png"


export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-emerald-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src={heroAbout}
// "https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                    alt="hero About"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-emerald-500 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p>
                I am a second-year college student pursuing a
                 degree in Computer Science.
                </p>
                <p>
                With a passion for technology and problem-solving,
                 I enjoy exploring programming, software development, 
                 and innovative solutions to real-world challenges. 
                 I'm currently enhancing my skills in Python, web design, and data analysis, while also diving into projects that align with the UN Sustainable Development Goals.
                  My goal is to contribute to meaningful projects and continue growing as a tech professional in an ever-evolving digital world.


                </p>
            </div>
        </section>
    );
}