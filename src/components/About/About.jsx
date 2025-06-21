import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/ash_profile2.png";
const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ashish Deshmukh
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a</span>{" "}
            <span className="text-[#8245ec]">
              <ReactTypingEffect
                text={[" UI/UX Designer", " Fullstack Developer", " Coder"]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
                displayTextRenderer={(text, i) => <span>{text}</span>}
              />
            </span>
          </h3>
          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Full-stack developer with strong web and backend skills, experienced
            in solving real-world challenges. Skilled in database optimization
            and building scalable systems. Passionate about creating clean UI
            and impactful tech in collaborative teams.
          </p>

          <a
            href="https://drive.google.com/file/d/13YIRTVblrGV5pVC3suaNcC3OBNWH458g/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-6 py-3 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
         <Tilt
         className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] flex items-center justify-center"
         tiltMaxAngleX={20}
         tiltMaxAngleY={20}
         perspective={1000}
         scale={1.05}
         transitionSpeed={1000}
         gyroscope={true}
         >
          <img
            src={profileImage}
            alt="Ashish Deshmukh"
            className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
