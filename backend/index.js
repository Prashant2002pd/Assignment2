const express = require("express");
const cors = require("cors");
const app = express();
const Data = require("./data");
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(Data["1A"]);
});

app.post("/nextquestion", (req, res) => {
  const { next } = req.body;

  res.send(Data[next]);
});

app.post("/result", (req, res) => {
  const { result } = req.body;
  res.send(calculateSummary(result));
});

const summaryLogic = {
  a: {
    traits: ["logical", "structured", "calm"],
    description:
      "You are a methodical and logical individual who values structure and routine.",
  },
  b: {
    traits: ["intuitive", "spontaneous", "flexible"],
    description:
      "You are an intuitive and spontaneous person who enjoys excitement and flexibility.",
  },
  c: {
    traits: ["creative", "assertive", "growth-oriented"],
    description:
      "You are a creative and growth-oriented individual who values personal development.",
  },
};

function calculateSummary(answers) {
  const count = { a: 0, b: 0, c: 0 };

  answers.forEach((answer) => count[answer]++);

  const maxAnswer = Object.keys(count).reduce((a, b) =>
    count[a] > count[b] ? a : b
  );

  return summaryLogic[maxAnswer].description;
}

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
