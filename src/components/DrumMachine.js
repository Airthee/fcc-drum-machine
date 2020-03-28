import React from 'react';
import PropTypes from 'prop-types';
import DrumPad from './DrumPad';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: '',
      buttons: [
        [
          {
            letter: 'Q',
            description: '8 ACSM',
            soundUrl: '/sounds/8ACSM.wav'
          },
          {
            letter: 'W',
            description: '12 ACSM',
            soundUrl: '/sounds/12ACSM.wav'
          },
          {
            letter: 'E',
            description: 'HiHat M',
            soundUrl: '/sounds/HiHat-M.wav'
          }
        ],
        [
          {
            letter: 'A',
            description: 'S3 HIM',
            soundUrl: '/sounds/S3HIM.wav'
          },
          {
            letter: 'S',
            description: 'S3 LOM',
            soundUrl: '/sounds/S3LOM.wav'
          },
          {
            letter: 'D',
            description: 'snare R1M',
            soundUrl: '/sounds/snare-R1M.wav'
          }
        ],
        [
          {
            letter: 'Z',
            description: 'snare R2M',
            soundUrl: '/sounds/snare-R2M.wav'
          },
          {
            letter: 'X',
            description: 'snare R4M',
            soundUrl: '/sounds/snare-R4M.wav'
          },
          {
            letter: 'C',
            description: 'TOM 1C L',
            soundUrl: '/sounds/TOM1C-L.wav'
          }
        ]
      ]
    };

    this.renderButtonsRow = this.renderButtonsRow.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.registerKeyLetterEvent = this.registerKeyLetterEvent.bind(this);
    this.getButtonWithLetter = this.getButtonWithLetter.bind(this);
  }

  getButtonWithLetter(letter) {
    let buttonToReturn;
    this.state.buttons.every((rowButtons) => {
      const button = rowButtons.find((button) => button.letter === letter);
      if (button !== undefined) {
        buttonToReturn = button;
        return false;
      }
      return true;
    })
    return buttonToReturn;
  }

  componentDidMount() {
    this.registerKeyLetterEvent();
  }

  registerKeyLetterEvent() {
    document.addEventListener('keydown', (event) => {
      const keyPressed = event.code.replace('Key', '');
      const node = document.getElementById(keyPressed);
      if (node !== null) {
        node.click();
      }
    });
  }

  renderButton(button) {
    const handlePlayStart = () => {
      this.setState({
        displayText: button.description
      });
    };

    // const handlePlayStop = () => {
    //   this.setState({
    //     displayText: ''
    //   });
    // };

    // Render button
    return (
      <DrumPad
        id={button.description.replace(/ +/g, '-')}
        soundSrc={button.soundUrl}
        text={button.letter}
        onPlayStart={handlePlayStart.bind(this)}
        // onPlayStop={handlePlayStop.bind(this)}
      />
    );
  }

  renderButtonsRow(lineIndex) {
    // Render columns
    const renderColumns = this.state.buttons[lineIndex].map((button, colIndex) => (
      <td key={colIndex}>
        {this.renderButton(button)}
      </td>
    ));

    // Render row
    return (
      <tr key={lineIndex}>
        {renderColumns}
      </tr>
    );
  }

  renderButtons() {
    const renderButtons = this.state.buttons.map((_buttonsLine, lineIndex) => this.renderButtonsRow(lineIndex));

    return (
      <table style={{margin: 'auto'}}>
        <tbody>
          {renderButtons}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div id={this.props.id}>
        <div id="display" style={{height: '2em'}}>
          {this.state.displayText}
        </div>
        {this.renderButtons()}
      </div>
    );
  }
}

DrumMachine.propTypes = {
  id: PropTypes.any
};

export default DrumMachine;