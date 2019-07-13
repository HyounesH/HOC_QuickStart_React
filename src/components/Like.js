import React, { Component } from 'react';
import {Tooltip,Icon} from "antd";
import WithLike from "./WithLike";

import "../assets/main.css";

class Like extends Component {
    render() {
      const {increment,count} =this.props;
        return (
            <span>
            <Tooltip title="Like">
              <Icon
                type="like"
                onClick={increment}
              />
            </Tooltip>
            <span className="like">{count}</span>
          </span>
        );
    }
}

export default WithLike(Like);