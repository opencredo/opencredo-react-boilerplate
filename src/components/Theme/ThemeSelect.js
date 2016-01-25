import React from 'react';
import 'react-colors-picker/assets/index.css';
import ColorPicker from 'react-colors-picker';
import {corner} from './../../styles/styleGuide';

const ThemeSelect = ({updateThemeColor, theme}) => {

  function handleColorChange(selection) {
    const payload = {
      color: selection.color
    };
    updateThemeColor(payload);
  }

  return (
    <div style={corner}>
      <ColorPicker
        defaultColor={theme.color}
        onChange={handleColorChange}
      />
    </div>
  );
};

ThemeSelect.propTypes = {
  theme: React.PropTypes.object.isRequired,
  updateThemeColor: React.PropTypes.func.isRequired
};

export default ThemeSelect;
