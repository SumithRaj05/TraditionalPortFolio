import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="parallax" id="Home">
      <div 
        className="parallax-bg"
      ></div>
      <div
        className="parallax-mid"
        style={{ transform: `translateY(${scrollPosition * 0.6}px)` }}
      >
      </div>      
      <div
        className="parallax-top"
        style={{ transform: `translateY(${scrollPosition * 0.9}px)` }}
      >
        <h1 className="homeHeader">Welcome to<br/> Sumith Rajpurohit's <br/>portfolio <br/><br/> &#8595; </h1>
      </div>
    </section>
  );
}