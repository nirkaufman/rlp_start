import { forwardRef, useImperativeHandle } from 'react';

function VideoPlayer({ src, controls }, ref) {
  const videoRef = ref || { current: null };

  useImperativeHandle(ref, () => ({
    play,
    stop: pause,
    toggle,
    isPlaying: true
    }), [],
  );

  const toggle = () => {
    console.log('toggle');
  }
  const play = () => {
    videoRef.current.play()
  };
  const pause = () => {
    videoRef.current.pause()
  };
  return <>
    <video src={src} width={400} ref={videoRef}/>
    {controls && (
      <div className="btn-grp">
        <button className="btn btn-primary" onClick={play}>PLAY</button>
        <button className="btn btn-info" onClick={pause}>PAUSE</button>
      </div>
    )}
  </>;
}

VideoPlayer.defaultProps = {
  controls: true
}

export default forwardRef(VideoPlayer) ;
