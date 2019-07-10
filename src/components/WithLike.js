import React from 'react';

const WithLike = (WrappedComponent) => {
    return class extends React.Component{
        constructor(props){
            this.state = {
                likes: 0,
                dislikes: 0,
                action: null,
              };
        }
        like = () => {
            this.setState({
             likes:this.state.likes+1
            });
          };
        
          dislikes = () => {
            this.setState({
                dislikes:this.state.dislikes+1
            });
          };
          render(){
              
          }

    }
};


export default WithLike;
