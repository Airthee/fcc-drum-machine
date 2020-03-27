import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './DrumPad.scss';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isPlaying: false
    };

    this.audioRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handlePlayStart = this.handlePlayStart.bind(this);
    this.handlePlayStop = this.handlePlayStop.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  handleClick() {
    this.props.onClick();
    this.playSound();
  }

  handlePlayStart() {
    // this.setState({isPlaying: true});
    this.props.onPlayStart();
  }

  handlePlayStop() {
    // this.setState({isPlaying: false});
    this.props.onPlayStop();
  }

  playSound() {
    this.audioRef.current.play();
  }

  render() {
    return (
      <Button
        id={this.props.id}
        className="drum-pad"
        onClick={this.handleClick}
        block
      >
        <audio
          className="clip"
          onEnded={this.handlePlayStop}
          onPlay={this.handlePlayStart}
          ref={this.audioRef}
          src={this.props.soundSrc}
          id={this.props.text}
        />
        {this.props.text}
      </Button>
    );
  }
}

DrumPad.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  onPlayStart: PropTypes.func,
  onPlayStop: PropTypes.func,
  soundSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

DrumPad.defaultProps = {
  onClick(){},
  onPlayStart(){},
  onPlayStop(){}
}

export default DrumPad;