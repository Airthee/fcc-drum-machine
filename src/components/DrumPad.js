import React from 'react';
import PropTypes from 'prop-types';
import './DrumPad.scss';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.audioRef = React.createRef();

    this.handleClick = this.handleClick.bind(this);
    this.handlePlayStart = this.handlePlayStart.bind(this);
    this.handlePlayStop = this.handlePlayStop.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  handleClick() {
    this.handlePlayStart();
    this.playSound();
  }

  handlePlayStart() {
    this.props.onPlayStart();
    this.setState({active: true});
    setTimeout(() => this.setState({active: false}), this.props.activeTimeout);
  }

  handlePlayStop() {
    this.props.onPlayStop();
  }

  playSound() {
    // If the audio is not playing, we trigger the play
    // Else we reset the time
    const currentAudio = this.audioRef.current;
    if (currentAudio.currentTime !== 0) {
      currentAudio.currentTime = 0;
    }
    currentAudio.play();
  }

  render() {
    const buttonClasses = [
      'drum-pad',
      this.state.active ? 'active' : null
    ].join(' ');

    return (
      <div
        id={this.props.id}
        className={buttonClasses}
        onClick={this.handleClick}
      >
        <audio
          className="clip"
          ref={this.audioRef}
          src={this.props.soundSrc}
          onEnded={this.handlePlayStop}
          id={this.props.text}
        />
        {this.props.text}
      </div>
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
  onPlayStart(){},
  onPlayStop(){},
  activeTimeout: 200
}

export default DrumPad;