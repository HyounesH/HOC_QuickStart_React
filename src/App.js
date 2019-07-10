import React from 'react';
import Post from './components/Post';
import "./assets/main.css";
import 'antd/dist/antd.css';
import {Layout} from "antd";
const {Content}=Layout;

function App() {
  return (
    <Layout>
     <Content><Post /></Content>
    </Layout>
     
  );
}

export default App;
