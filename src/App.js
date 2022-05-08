import { useRef } from "react";
import VideoPlayer from "./VideoPlayer";
import PostListDemo from "./PostListDemo";



function App() {
  return (
    <div className="container">
      <header className="display-1">
        React Ladies Pro Edition | 2022
      </header>
      {/*<button onClick={play} className='btn btn-success'>toggle</button>*/}
      
      {/*<VideoPlayer ref={videoRef} src={'demo_video.mp4'}/>*/}

      {/*<VideoPlayer src={'demo_video.mp4'} >*/}

      <PostListDemo />
    </div>
  );
}


export default App;
