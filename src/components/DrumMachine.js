import React from 'react';
import PropTypes from 'prop-types';
import DrumPad from './DrumPad';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickDrumPadButton = this.handleClickDrumPadButton.bind(this);
  }

  handleClickDrumPadButton(lineIndex, colIndex) {
    console.log('Click button', lineIndex, colIndex);
  }

  render() {
    return (
      <div id={this.props.id}>
        <div id="display">

        </div>
        <DrumPad onClickButton={this.handleClickDrumPadButton} />
      </div>
    );
  }
}

DrumMachine.propTypes = {
  id: PropTypes.any
};

export default DrumMachine;