import { ArrowsClockwise, ChatCircle, Heart } from "@phosphor-icons/react";
import "./Tweet.css";

export function Tweet() {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/GitHudsonLima.png" alt="Hudson Lima" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Hudson Lima</strong>
          <span>@limahudson</span>
        </div>

        <p>I am so happy with code create-react-app for Vite and its results</p>
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
