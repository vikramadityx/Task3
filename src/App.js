import React, { useState } from 'react';
import './App.css';

function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState('');
  const [showColors, setShowColors] = useState(false);
  const [showColorButtons, setShowColorButtons] = useState(true); // Initially, show the color buttons
  const [boxStyle, setBoxStyle] = useState({});

  const handleButtonClick = () => {
    // Toggle the showColors state
    setShowColors(!showColors);

    if (!showColors) {
      // If the color picker is hidden, reset the selected color and show the color buttons
      setSelectedColor('');
      setShowColorButtons(true);
      setBoxStyle({});
    }
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setBoxStyle({
      background: color,
    });
    setShowColorButtons(false); // Hide only the color buttons when a color is selected
  };

  return (
    <div className="ColorPicker">
      <h2>Color Picker</h2>
      <button className="pick-the-color" onClick={handleButtonClick}>
        Pick a color
      </button>
      {showColors && (
        <div className="box" style={boxStyle}>
          <div className="color-buttons">
            {showColorButtons &&
              colors.map((color, index) => (
                <div
                  key={index}
                  className={`color-button ${color === selectedColor ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
          </div>
          {selectedColor && (
            <div className="selected-color" style={{ backgroundColor: selectedColor }}>
              <p>Selected Color: {selectedColor}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'orange',
    'pink',
    'cyan',
    'brown',
    'gray',
    'magenta',
    'teal',
    'lime',
    'indigo',
    'violet',
    'lightcoral',
    'turquoise',
    'wheat',
    'gold',
  ];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
