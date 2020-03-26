import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './DrumPad.scss';

const buttons = [
  [
    {
      letter: 'Q',
      description: 'button-Q',
      soundUrl: ''
    },
    {
      letter: 'W',
      description: 'button-W',
      soundUrl: ''
    },
    {
      letter: 'E',
      description: 'button-E',
      soundUrl: ''
    }
  ],
  [
    {
      letter: 'A',
      description: 'button-A',
      soundUrl: ''
    },
    {
      letter: 'S',
      description: 'button-S',
      soundUrl: ''
    },
    {
      letter: 'D',
      description: 'button-D',
      soundUrl: ''
    }
  ],
  [
    {
      letter: 'Z',
      description: 'button-Z',
      soundUrl: ''
    },
    {
      letter: 'X',
      description: 'button-X',
      soundUrl: ''
    },
    {
      letter: 'C',
      description: 'button-C',
      soundUrl: ''
    }
  ]
];

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.renderButtonsRow = this.renderButtonsRow.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton(lineIndex, colIndex) {
    // Get button letter
    const button = buttons[lineIndex][colIndex];

    // Render button
    return (
      <Button
        id={button.description}
        className="drum-pad"
        onClick={this.props.onClickButton.bind(this, lineIndex, colIndex)}
        block
      >
        <audio className="clip" src={button.soundUrl} id={button.letter} />
        {button.letter}
      </Button>
    );
  }

  renderButtonsRow(lineIndex) {
    // Render columns
    const renderColumns = buttons[lineIndex].map((_buttonLetter, colIndex) => (
      <td key={colIndex}>
        {this.renderButton(lineIndex, colIndex)}
      </td>
    ));

    // Render row
    return (
      <tr key={lineIndex}>
        {renderColumns}
      </tr>
    );
  }

  render() {
    const renderButtons = buttons.map((_buttonsLine, lineIndex) => this.renderButtonsRow(lineIndex));

    return (
      <table>
        <tbody>
          {renderButtons}
        </tbody>
      </table>
    );
  }
}

DrumPad.propTypes = {
  onClickButton: PropTypes.func.isRequired
};

export default DrumPad;