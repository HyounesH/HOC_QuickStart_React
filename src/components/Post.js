import React from "react";
import { Comment, Avatar, Tooltip } from "antd";
import Like from "./Like";
import Dislike from "./Dislike";
import moment from "moment";

class Post extends React.Component {
  render() {
    const actions = [<Like />, <Dislike />, <span>Reply to</span>];

    return (
      <Comment
        actions={actions}
        author={<a href="?">Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
}

export default Post;
