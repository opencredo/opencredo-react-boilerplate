/* @flow */

import config from 'app-config';

const UPDATE_DOCUMENT_TITLE = 'UPDATE_DOCUMENT_TITLE';
const RESET_DOCUMENT_TITLE = 'RESET_DOCUMENT_TITLE';

type DocumentTitleAction = {
  type: string;
  documentTitle: string;
};

// Action Creators

export function updateDocumentTitle(documentTitle: string): DocumentTitleAction {
  return {
    type: UPDATE_DOCUMENT_TITLE,
    documentTitle: `${documentTitle} - ${config.name}`,
  };
}

export function resetDocumentTitle(): DocumentTitleAction {
  return {
    type: RESET_DOCUMENT_TITLE,
    documentTitle: config.name,
  };
}

// Reducer
export function documentTitleReducer(state: string = config.name, action: DocumentTitleAction): string {
  switch (action.type) {
    case RESET_DOCUMENT_TITLE:
    case UPDATE_DOCUMENT_TITLE:
      return action.documentTitle;
    default:
      return state;
  }
}
