import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");

  const [answers, setAnswers] = useState([
    "I agree...",
    "Look, it makes sense.",
    "Congratulations on the progress.",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi porro, vitae cum perspiciatis similique unde hic. Maiores, quis nesciunt totam velit architecto explicabo labore, dolorum sint id at quasi accusamus." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/GitHudsonLima.png" alt="Hudson Lima" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
            onKeyDown={handleHotKeySubmit}
          />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
