/* @flow */

import config from 'app-config';

const UPDATE_DOCUMENT_TITLE = 'UPDATE_DOCUMENT_TITLE';
const RESET_DOCUMENT_TITLE = 'RESET_DOCUMENT_TITLE';

type DocumentTitleAction = {
  type: string;
  documentTitle: Object;
};

const initialState: Object = {
  id: 'site_name',
  defaultMessage: config.name,
};

// Action Creators

export function updateDocumentTitle(documentTitle: Object): DocumentTitleAction {
  return {
    type: UPDATE_DOCUMENT_TITLE,
    documentTitle,
  };
}

export function resetDocumentTitle(): DocumentTitleAction {
  return {
    type: RESET_DOCUMENT_TITLE,
    documentTitle: initialState,
  };
}


// Reducer
export function documentTitleReducer(state: Object = initialState, action: DocumentTitleAction): Object {
  switch (action.type) {
    case RESET_DOCUMENT_TITLE:
    case UPDATE_DOCUMENT_TITLE:
      return action.documentTitle;
    default:
      return state;
  }
}
