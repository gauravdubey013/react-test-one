import React from 'react'
import { useState } from 'react'


// import './App.css';

export default function RegisterForm() {
  const [pasd, setPasd] = useState("");
  const [rePasd, setRePasd] = useState("");
  const [pasdMatched, setPasdMatched] = useState(true);

  const handlePasdChange = (event) => {
    setPasd(event.target.value);
  };
  const handleReenteredPasdChange = (event) => {
    setRePasd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pasd != rePasd) {
      setPasdMatched(false);
      setRePasd("");
    }
    else {
      setPasdMatched(true);
      setPasd("");
      setRePasd("");
      alert("Form Submitted! \n\t Username: ",);
    }
  };

  return (
    <div>
      <center><h1 style={{ color: "blue" }}>Registration Form</h1>
        <form onSubmit={handleSubmit} style={{ color: "cyan", border: "2px soild red", top: 100 }}>
          Username: <input type="Textbox" id="uname" placeholder="Enter Username" /><br />
          E-mail: <input type="email" placeholder="Enter your E-mail" /><br />
          Password: <input type="password" id="pasd" value={pasd}
            onChange={handlePasdChange}
            placeholder="Set Password" /> {!pasdMatched && <p style={{ color: "red" }}>Password doesnt matched,</p>}
          <br />
          Password: <input type="password" value={rePasd}
            onChange={handleReenteredPasdChange}
            placeholder="Re-enter Password" /> {!pasdMatched && <p style={{ color: "red" }}>Please Re-enter your Password!</p>}
          <br />
          Contact: <input type="number" /><br />
          <button>Submit</button>
        </form></center>
    </div>
  )
}
