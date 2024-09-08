import axios from "axios";
import React, { useState } from "react";

function Main() {
  const [data, setData] = useState({
    question: "How would you describe your general attitude towards work?",
    b: {
      answer: "I prefer a steady pace with clearly defined tasks.",
      next: "2B",
    },
    c: {
      answer: " I enjoy a relaxed environment and dislike strict deadlines.",
      next: "2C",
    },
    a: {
      answer: "I am highly motivated and enjoy taking on challenges.",
      next: "2A",
    },
  });

  const [nextques, setNextques] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [showresult, setShowresult] = useState(false);
  const [finalresul, setFinalresult] = useState("");

  function resetall() {
    setShowresult(false);
    setFinalresult("");
    setSelectedOption("");
    setSelectedAnswer([]);
    setNextques("");
    axios.get("http://localhost:3000").then((res) => {
      setData(res.data);
    });
  }

  function handleClick() {
    if (nextques != "result") {
      axios
        .post("http://localhost:3000/nextquestion", { next: nextques })
        .then((res) => {
          setData(res.data);
          setSelectedAnswer([...selectedAnswer, selectedOption]);
          setSelectedOption(""); // reset selected option on new question
        });
    } else {
      setShowresult(true);
      axios
        .post("http://localhost:3000/result", { result: selectedAnswer })
        .then((res) => {
          setFinalresult(res.data);
        });
    }
  }

  function handleChange(name) {
    if (selectedOption === name) {
      // Toggle off if same option is clicked
      setSelectedOption("");
      setNextques("");
    } else {
      setSelectedOption(name); // Activate the selected option
      setNextques(data[name].next);
    }
  }

  const getOptionClass = (name) => {
    return selectedOption === name ? "bg-green-600" : "hover:bg-green-700";
  };

  return (
    <div>
      {!showresult ? (
        <div className=" content-around place-content-center  border-2 border-black rounded-md m-4 p-2 w-[50%]">
          <h1 className=" text-2xl font-bold text-emerald-400">
            Welcome to the personality test
          </h1>
          <div>
            <h2 className=" text-2xl font-bold m-2 p-2 ">{data.question}</h2>

            <div
              className={`cursor-pointer border-2 border-black rounded-md m-2 p-2 text-start ${getOptionClass(
                "a"
              )}`}
              name="a"
              onClick={() => handleChange("a")}
            >
              A. {data.a.answer}
            </div>
            <div
              className={`cursor-pointer border-2 border-black rounded-md m-2 p-2 text-start ${getOptionClass(
                "b"
              )}`}
              name="b"
              onClick={() => handleChange("b")}
            >
              B. {data.b.answer}
            </div>
            <div
              className={`cursor-pointer border-2 border-black rounded-md m-2 p-2 text-start ${getOptionClass(
                "c"
              )}`}
              name="c"
              onClick={() => handleChange("c")}
            >
              C. {data.c.answer}
            </div>
          </div>
          <div>
            <button
              className={`m-2 p-2 w-[100px] rounded-md border-2 border-black ${
                nextques ? "bg-green-700" : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handleClick}
              disabled={!nextques}
            >
              next
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold m-2 p-2">{finalresul}</h2>
          <div>
            <button
              className={`m-2 p-2 w-[100px] rounded-md border-2 border-black bg-green-700`}
              onClick={resetall}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
