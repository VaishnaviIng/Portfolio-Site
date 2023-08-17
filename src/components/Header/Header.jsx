import React, {useState, useEffect} from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const TypingText = ({ text, speed }) => {
  const [typedText, setTypedText] = useState('');
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
          setTypedText('');
          setCurrentIndex(0);
        }, 1000); // Add a delay of 1000ms before starting typing again
      }
    }, speed);

    return () => clearInterval(timer);
  }, [currentIndex, text, speed]);

  return <span className="typing-text">{typedText}</span>;
};
const Header = () => {
  const textToType = "Hello I'm Vaishnavi";
  const typingSpeed = 100;
  return (
    <div className="header flex flex-col" id="header">
      <Navbar />

      <div className="container flex">
        <div className="header-content">
          <h2 className="text-uppercase text-white op-07 fw-6 ls-2">
           <TypingText text={textToType} speed={typingSpeed} />
          </h2>
          <h4 className="text-uppercase text-white op-07 fw-6 ls-2">
            Frontend Developer
          </h4>

          <h1 className="text-white fw-6 header-title">
            Better level of experience in{" "}
            <span className="text-brown">
              Web Design and Development knowledge{" "}
            </span>{" "}
            producting quality work.
          </h1>
          <div className="btn-groups flex">
            <button type="button" className="btn-item bg-brown fw-4 ls-2">
              Resume
            </button>
            <button type="button" className="btn-item bg-dark fw-4 ls-2">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
