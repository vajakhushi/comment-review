import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [value, setvalue] = useState("");

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const saveData = async () => {
    try {
      await axios.post("http://localhost:3001/posts", {
        text: value
      });
      setvalue("");

      alert("Data saved");
    } catch (err) {
      console.err("Errordata", err.message);
    }
  };

  return (
    <div>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder="enter text..."
      />
      <br />
      <button class="btn btn-primary m-2" onClick={saveData}>
        Save
      </button>
    </div>
  );
};

export default App;
