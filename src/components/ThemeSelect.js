import React, { PropTypes } from 'react';
import 'react-colors-picker/assets/index.css';
import ColorPicker from 'react-colors-picker';
import {corner} from './../styles/styleGuide';

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
  theme: PropTypes.object.isRequired,
  updateThemeColor: PropTypes.func.isRequired
};

export default ThemeSelect;
