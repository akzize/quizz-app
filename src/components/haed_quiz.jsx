import React, { useState } from 'react';

export default function Haed_quiz({questions_num, questions_counter}) {

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [icon, setIcon] = useState("bi bi-arrows-fullscreen");

  const toggleFullscreen = () => {
    const element = document.documentElement;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      setIcon("bi bi-fullscreen-exit")
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIcon("bi bi-arrows-fullscreen")
    }

    setIsFullscreen(!isFullscreen);
  };

  return (
    <nav className="nav head-quiz">
    <p> 
         <a className="nav-link links hover"><i className="bi bi-music-note"></i></a>
         <a className="nav-link links"><i className="bi bi-quora"></i> <span> {questions_counter}/{questions_num}</span></a>
    </p>
<p>

    <a className="nav-link links"><i className="bi bi-check-circle-fill nace_result"></i><span> 6/15</span></a>
    <a className="nav-link links"><i className="bi bi-x-circle-fill bad_result"></i> <span> 3/15</span></a>
</p>

    <p> 
         <a className="nav-link links"><i className="bi bi-award result"></i> <span>40%</span></a>
         <a className="nav-link links hover" onClick={toggleFullscreen}><i className={icon}></i></a>
    </p>
</nav>
  )
}
