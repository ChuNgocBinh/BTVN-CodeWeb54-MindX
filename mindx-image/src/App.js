import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import PostList from "./pages/PostList/PostList";
import PostDetail from "./pages/postDetail/PostDetail";


function App() {
  return (
    <div className="App">
      {/* <PostList></PostList> */}
      <PostDetail/>
    </div>
  );
}

export default App;
