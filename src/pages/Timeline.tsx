import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Timeline.css";

const tweets = ["My first tweet ", "Wow this is so cool", "Ok, Sure..."];

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/GitHudsonLima.png" alt="Hudson Lima" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>

        <button type="submit">Tweet</button>
      </form>
      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
