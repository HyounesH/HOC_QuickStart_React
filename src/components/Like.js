import React, { Component } from 'react';
import {Tooltip,Icon} from "antd";

import "../assets/main.css";

class Like extends Component {
    render() {
        return (
            <span>
            <Tooltip title="Like">
              <Icon
                type="like"
                theme={this.props.action === 'liked' ? 'filled' : 'outlined'}
                onClick={this.props.like}
              />
            </Tooltip>
            <span className="like">{this.props.likes}</span>
          </span>
        );
    }
}

export default Like;