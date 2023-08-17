import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./About.css";
import images from "../../constants/images";
import { about_stats } from "../../constants/data";
import video from "../../assets/videos/video.mp4";
import { FaPlay } from "react-icons/fa";
import gif from "../../assets/images/office.gif";

const TypingText = ({ text, speed }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
        // Reset the typedText and currentIndex after typing is complete
        setTimeout(() => {
          setTypedText("");
          setCurrentIndex(0);
        }, 1000); // Add a delay of 1000ms before starting typing again
      }
    }, speed);

    return () => clearInterval(timer);
  }, [currentIndex, text, speed]);

  return <span className="typing-text">{typedText}</span>;
};
const About = () => {
  const textToType = "I'm Vaishnavi Ingle";
  const typingSpeed = 150;
  const playerRef = useRef(null);
  const [toggleVideo, setToggleVideo] = useState(false);

  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTypewriter(true);
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <div className="about section-p">
      <div className="container">
        <div className="about-content">
          {/* <img src = {images.About_Alex} alt = "" className='about-img mx-auto' /> */}
          <div className="section-title">
            <h3 className="text-about">About Me!</h3>

            <h3 className="text-brown">
              <TypingText text={textToType} speed={typingSpeed} />
            </h3>
            <p className="text mx-auto">
              A frontend React developer with over 1 year of professional
              experience. I hold a Bachelor's degree in Computer Science from
              Pune University.
            </p>
            <p>
              Learning new technologies and exploring innovative solutions is an
              integral part of my journey. I believe that constant growth and
              adaptation are essential in the ever-evolving world of web
              development.
            </p>
          </div>

          <div className="about-grid grid">
            {/* {about_stats.map((about_stat, index) => {
              return (
                <div className="about-item text-center flex" key={index}>
                  <div className="about-item-icon">
                    <img src={about_stat.image} alt="" />
                  </div>
                  <div className="about-item-text text-left">
                    <h3 className="fs-24 ls-2">{about_stat.value}</h3>
                    <p className="text">{about_stat.title}</p>
                  </div>
                </div>
              );
            })} */}
          </div>

          <div className="about-grid grid">
            <div className="section-title">
              <h3 className="text-brown">
                Video <span className="text-dark">Presentation</span>
              </h3>
              <p className="text mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                molestias maxime tenetur, temporibus aspernatur, omnis expedita
                saepe sapiente adipisci laboriosam necessitatibus ullam eveniet
                asperiores nostrum.
              </p>
            </div>

            <div className="about-video">
              <img src={gif} alt="loading..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
