/* @flow */
const UPDATE_THEME_COLOR = 'UPDATE_THEME_COLOR';
const RESET_THEME_COLOR = 'RESET_THEME_COLOR';

//  export type DocumentTitleAction = {
//    type: string;
//  documentTitle: FormattedMessageType;
//  };

type ThemeAction = {
  type: string;
};

//  const initialState: FormattedMessageType = {
//    id: 'site_name',
//    defaultMessage: config.name,
//  };

const initialState: theme = {
  color: '#5DC4C6',
};

// Action Creators

//  export function updateDocumentTitle(documentTitle: FormattedMessageType): DocumentTitleAction {
//    return {
//      type: UPDATE_DOCUMENT_TITLE,
//      documentTitle,
//    };
//  }

export function updateThemeColor(color): ThemeAction {
  return {
    type: UPDATE_THEME_COLOR,
    color,
  };
}

//  export function resetDocumentTitle(): DocumentTitleAction {
//    return {
//      type: RESET_DOCUMENT_TITLE,
//      documentTitle: initialState,
//    };
//  }

export function resetThemeColor(): ThemeAction {
  return {
    type: RESET_THEME_COLOR,
    color: initialState,
  };
}

// Reducer

//  export function documentTitleReducer(
//    state: FormattedMessageType = initialState,
//    action: DocumentTitleAction): FormattedMessageType {
//    switch (action.type) {
//      case RESET_DOCUMENT_TITLE:
//      case UPDATE_DOCUMENT_TITLE:
//        return action.documentTitle;
//      default:
//        return state;
//    }
//  }

export function themeReducer(
  state: updateThemeColor = initialState,
  action: ThemeAction): theme {
  switch (action.type) {
    case RESET_THEME_COLOR:
    case UPDATE_THEME_COLOR:
      return action.color;
    default:
      return state;
  }
}
