import { ArrowsClockwise, ChatCircle, Heart } from "@phosphor-icons/react";
import "./Tweet.css";
import { Link } from "react-router-dom";

interface ContentTweet {
  content: string;
}

export function Tweet(props: ContentTweet) {
  return (
    <Link to="/status" className="tweet">
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
    </Link>
  );
}
