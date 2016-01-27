/* @flow */

import config from 'app-config';

const UPDATE_DOCUMENT_TITLE = 'UPDATE_DOCUMENT_TITLE';
const RESET_DOCUMENT_TITLE = 'RESET_DOCUMENT_TITLE';

export type DocumentTitleType = {
  id: string;
  defaultMessage: string;
  description?: string;
};

export type DocumentTitleAction = {
  type: string;
  documentTitle: DocumentTitleType;
};

const initialState: DocumentTitleType = {
  id: 'site_name',
  defaultMessage: config.name,
};

// Action Creators

export function updateDocumentTitle(documentTitle: DocumentTitleType): DocumentTitleAction {
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
export function documentTitleReducer(
  state: DocumentTitleType = initialState,
  action: DocumentTitleAction): DocumentTitleType {
  switch (action.type) {
    case RESET_DOCUMENT_TITLE:
    case UPDATE_DOCUMENT_TITLE:
      return action.documentTitle;
    default:
      return state;
  }
}
