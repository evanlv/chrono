import { useState } from "react";

import PauseImg from "../Images/pause.svg";
import PlayImg from "../Images/play.svg";
import ResetImg from "../Images/reset.svg";

import "./Chrono.css";

const Chrono = () => {
  const [sessionTime, setSessionTime] = useState(0);
  const [sessionTimeFixed, setSessionTimeFixed] = useState(0);

  const [breakTime, setBreakTime] = useState(300);
  const [breakTimeFixed, setBreakTimeFixed] = useState(300);

  const [workingChrono, setWorkingChrono] = useState(false);

  return (
    <div className="container-chrono">
      <div className="container-config">
        <div className="box-btns session">
          <button className="minus">-</button>
          <span>{sessionTimeFixed}</span>
          <button className="plus">+</button>
        </div>
        <div className="box-btns break">
          <button className="minus">-</button>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Chrono;
