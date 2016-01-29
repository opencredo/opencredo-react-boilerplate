/* @flow */
import { FormattedMessageType } from 'declarations/i18n-types';
import config from 'app-config';

const UPDATE_DOCUMENT_TITLE = '@@document-title/UPDATE';
const RESET_DOCUMENT_TITLE = '@@document-title/RESET';

export type DocumentTitleAction = {
  type: string;
  documentTitle: FormattedMessageType;
};

const initialState: FormattedMessageType = {
  id: 'site_name',
  defaultMessage: config.name,
};

// Action Creators

export function updateDocumentTitle(documentTitle: FormattedMessageType): DocumentTitleAction {
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
  state: FormattedMessageType = initialState,
  action: DocumentTitleAction): FormattedMessageType {
  switch (action.type) {
    case RESET_DOCUMENT_TITLE:
    case UPDATE_DOCUMENT_TITLE:
      return action.documentTitle;
    default:
      return state;
  }
}
