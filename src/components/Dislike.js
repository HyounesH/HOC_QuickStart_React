import React, { Component } from 'react';
import {Tooltip,Icon} from "antd";
import "../assets/main.css";

class Dislike extends Component {
    render() {
        return (
            <span>
            <Tooltip title="Dislike">
              <Icon
                type="dislike"
                theme={this.props.action === 'disliked' ? 'filled' : 'outlined'}
                onClick={this.props.dislike}
              />
            </Tooltip>
            <span className="like">{this.props.dislikes}</span>
          </span>
        );
    }
}

export default Dislike;