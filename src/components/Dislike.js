import React, { Component } from 'react';
import {Tooltip,Icon} from "antd";
import WithLike from "./WithLike";
import "../assets/main.css";

class Dislike extends Component {
    render() {
      const {count,increment} =this.props;
        return (
            <span>
            <Tooltip title="Dislike">
              <Icon
                type="dislike"
                onClick={increment}
              />
            </Tooltip>
            <span className="like">{count}</span>
          </span>
        );
    }
}

export default WithLike(Dislike);