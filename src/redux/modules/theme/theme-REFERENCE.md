
Utilizes:

>react-colors-picker [2.2.1]


Original AppContainer.js:

>./theme/src/AppContainer.js

```
import React from 'react';
import {connect} from 'react-redux';
import {wrapper, container} from './utilities/styleGuide';
import {updateThemeColor} from './home/theme/state/themeActionCreators';
import ThemeSelect from './home/theme/components/ThemeSelect';

class AppContainer extends React.Component {

  render() {
    return (
      <div style={wrapper}>
        <div
          style={{
            ...container,
            background: this.props.theme.color
          }}
        >
        </div>
        <ThemeSelect
          theme={this.props.theme}
          updateThemeColor={this.props.updateThemeColor}
        />
      </div>
    );
  }
}

AppContainer.propTypes = {
  theme: React.PropTypes.object.isRequired,
  updateThemeColor: React.PropTypes.func.isRequired
};

function select(state) {
  return {
    theme: state.theme
  };
}

export default connect(
  select,
  {
    updateThemeColor
  }
)(AppContainer);
```


Original Store.js:

>./theme/src/state/store.js

```
import {createStore} from 'redux';
import mainReducer from './mainReducer';

export const store = createStore(mainReducer);
```


Original mainReducer.js:

>./theme/src/state/mainReducer.js

```
import quoteReducer from '../home/quote/state/quoteReducer';
import themeReducer from '../home/theme/state/themeReducer';

export default function mainReducer(state = {}, action) {
  return {
    quotes: quoteReducer(state.quotes, action),
    theme: themeReducer(state.theme, action)
  };
}
```


Original ActionTypes.js

>./theme/src/state/ActionTypes.js

```
export const UPDATE_THEME_COLOR = 'UPDATE_THEME_COLOR';
```

Original ThemeSelect.js

>./theme/src/home/theme/components/ThemeSelect.js

```
import React from 'react';
import 'react-colors-picker/assets/index.css';
import ColorPicker from 'react-colors-picker';
import {corner} from '../../../utilities/styleGuide';

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
```

Original themeActionCreators.js

>./theme/src/home/theme/state/themeActionCreators.js

```
import {UPDATE_THEME_COLOR} from '../../../state/ActionTypes';

export function updateThemeColor(payload) {
  return {
    type: UPDATE_THEME_COLOR,
    payload: payload
  };
}

```

Original themeReducer.js

>./theme/src/home/theme/state/themeReducer.js

```
import {UPDATE_THEME_COLOR} from '../../../state/ActionTypes';

export default function themeReducer(state = {color: '#5DC4C6'}, action) {
  switch (action.type) {
    case UPDATE_THEME_COLOR:
      return {
        ...state,
        color: action.payload.color
      };
    default:
      return state;
  }
  }
```
















