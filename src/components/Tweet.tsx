import { ArrowsClockwise, ChatCircle, Heart } from "@phosphor-icons/react";
import "./Tweet.css";

interface ContentTweet {
  content: string;
}

export function Tweet(props: ContentTweet) {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/GitHudsonLima.png" alt="Hudson Lima" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Hudson Lima</strong>
          <span>@limahudson</span>
        </div>

        <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  );
}
