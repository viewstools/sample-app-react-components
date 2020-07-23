import ReactPlayer from 'react-player';
import React from 'react';

export default function Player(props) {
  return (
    <ReactPlayer
      {...props}
      style={{
        backgroundColor: props.backgroundColor,
        height: props.height,
        width: props.width,
      }}
    />
  );
}

Player.defaultProps = {
  volume: 0.5,
  controls: true,
  muted: true,
  loop: false,
  light: true,
  playing: false,
  pip: false,
};
