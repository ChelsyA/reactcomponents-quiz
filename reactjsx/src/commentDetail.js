import React from "react";

// convert to class-based component
class SearchBar extends React.Component {
  state = { term: ''};

  render() {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.img} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.commentText}</div>
      </div>
    </div>
  );
  };
