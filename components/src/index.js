import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author={faker.name.firstName(1)}
        time="Today at 4:00PM"
        content={faker.lorem.sentences(1)}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName(0)}
        time="Yesterday at 2:30AM"
        content={faker.lorem.sentences(1)}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName(1)}
        time="Monday at 6:45PM"
        content={faker.lorem.sentences(1)}
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
