
import React, { useEffect, useState } from "react";
import "./style.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const buttonStyle = {
    backgroundColor: isScrolled ? "#000000" : "#2ecc71", // Example background color
    color: "#ffffff", // Example text color
    padding: "10px", // Example padding
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  const MyStyle ={
    backgroundColor: isScrolled ? "#3498db" : "#000000",
    color:"black",
    
  }

  //BUTTON 
  // const Style ={
  //   color:"#000",
  //   border:"none",
  //   padding:"10px",
  //   marginLeft:"500px",
  //   cursor:"pointer",
  //   borderRadius:"5px"
  // }
  // const myStyle={
  //   color:"#000",
  //   border:"none",
  //   padding:"10px",
  //   marginLeft:"150px",
  //   cursor:"pointer",
  //   borderRadius:"5px"
  // }
   useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <nav style={MyStyle}>
        <ul>
          <li>
            <a href="/" >Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/contact">Services</a>
          </li>
          <li>
            <a href="/contact">Projects</a>
          </li>
        </ul>
        <button style={buttonStyle}>
          Click me
        </button>
      </nav>
      <div>
        <h1>Welcome to Our Website</h1>

        <p className="ppp
        
        ">Discover our amazing services and projects.</p>
        {/* <button >Hire me</button>
        <button >Download CV</button> */}


        <p>Certainly! Here's a paragraph with approximately 500 words on the topic of "The Impact of Technology on Modern Society":

In the 21st century, technology has become an inseparable part of our daily lives, influencing every aspect of modern society. The profound impact of technology is evident in the way we communicate, work, learn, and even entertain ourselves. One of the most noticeable changes brought about by technology is the revolution in communication. The advent of the internet and mobile devices has transformed the way we connect with others. Social media platforms have become virtual communities where people share thoughts, experiences, and updates in real-time. Communication is now instantaneous, breaking down geographical barriers and fostering global connectivity.

The workplace has undergone a significant transformation with the integration of technology. Automation, artificial intelligence, and advanced analytics have revolutionized industries, leading to increased efficiency and productivity. Tasks that once required extensive manual labor can now be accomplished with the click of a button. However, this technological shift has also raised concerns about job displacement and the need for reskilling the workforce to adapt to the evolving job market. The rise of remote work, made possible by technology, has further changed the traditional office dynamics, offering flexibility to employees and redefining the concept of a workspace.

Education is another domain profoundly influenced by technology. The traditional model of learning has evolved into a more dynamic and interactive experience. Online platforms and e-learning tools provide access to a wealth of educational resources, enabling individuals to pursue knowledge at their own pace. Virtual classrooms and digital textbooks have become commonplace, transcending the limitations of physical classrooms. However, the digital divide remains a challenge, as not everyone has equal access to technology, hindering the goal of inclusive education.

The entertainment industry has experienced a paradigm shift with the digitalization of content. Streaming services, online gaming, and virtual reality have become dominant forms of entertainment, reshaping how we consume media. The convergence of technology and entertainment has created new avenues for creativity, allowing artists to reach global audiences without traditional gatekeepers. However, concerns about data privacy, the impact of excessive screen time, and the potential for misinformation in the digital space have emerged as important societal considerations.

Healthcare is another sector where technology has made significant strides. From telemedicine and wearable devices to advanced medical imaging and genetic research, technology has improved diagnostics, treatment, and patient care. The integration of big data and machine learning has the potential to revolutionize personalized medicine, tailoring treatments to individual genetic profiles. However, ethical considerations regarding data security, consent, and the responsible use of technology in healthcare continue to be subjects of debate.

While the impact of technology on modern society is undeniably positive in many aspects, challenges and ethical concerns persist. Striking a balance between technological advancement and societal well-being requires thoughtful consideration and continuous evaluation. As we navigate the ever-changing landscape of technology, it is crucial to ensure that innovation serves the collective good, promotes inclusivity, and addresses the evolving needs of a diverse and interconnected global society.

Certainly! Here's a paragraph with approximately 500 words on the topic of "The Impact of Technology on Modern Society":

In the 21st century, technology has become an inseparable part of our daily lives, influencing every aspect of modern society. The profound impact of technology is evident in the way we communicate, work, learn, and even entertain ourselves. One of the most noticeable changes brought about by technology is the revolution in communication. The advent of the internet and mobile devices has transformed the way we connect with others. Social media platforms have become virtual communities where people share thoughts, experiences, and updates in real-time. Communication is now instantaneous, breaking down geographical barriers and fostering global connectivity.

The workplace has undergone a significant transformation with the integration of technology. Automation, artificial intelligence, and advanced analytics have revolutionized industries, leading to increased efficiency and productivity. Tasks that once required extensive manual labor can now be accomplished with the click of a button. However, this technological shift has also raised concerns about job displacement and the need for reskilling the workforce to adapt to the evolving job market. The rise of remote work, made possible by technology, has further changed the traditional office dynamics, offering flexibility to employees and redefining the concept of a workspace.

Education is another domain profoundly influenced by technology. The traditional model of learning has evolved into a more dynamic and interactive experience. Online platforms and e-learning tools provide access to a wealth of educational resources, enabling individuals to pursue knowledge at their own pace. Virtual classrooms and digital textbooks have become commonplace, transcending the limitations of physical classrooms. However, the digital divide remains a challenge, as not everyone has equal access to technology, hindering the goal of inclusive education.

The entertainment industry has experienced a paradigm shift with the digitalization of content. Streaming services, online gaming, and virtual reality have become dominant forms of entertainment, reshaping how we consume media. The convergence of technology and entertainment has created new avenues for creativity, allowing artists to reach global audiences without traditional gatekeepers. However, concerns about data privacy, the impact of excessive screen time, and the potential for misinformation in the digital space have emerged as important societal considerations.

Healthcare is another sector where technology has made significant strides. From telemedicine and wearable devices to advanced medical imaging and genetic research, technology has improved diagnostics, treatment, and patient care. The integration of big data and machine learning has the potential to revolutionize personalized medicine, tailoring treatments to individual genetic profiles. However, ethical considerations regarding data security, consent, and the responsible use of technology in healthcare continue to be subjects of debate.

While the impact of technology on modern society is undeniably positive in many aspects, challenges and ethical concerns persist. Striking a balance between technological advancement and societal well-being requires thoughtful consideration and continuous evaluation. As we navigate the ever-changing landscape of technology, it is crucial to ensure that innovation serves the collective good, promotes inclusivity, and addresses the evolving needs of a diverse and interconnected global society.









</p>
      </div>
    </header>
  );
};

export default Header;
