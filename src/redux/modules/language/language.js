/* @flow */
export const CHANGE_LANGUAGE = Symbol('@@language/CHANGE_LANGUAGE');
export const LOCAL_STORAGE_KEY = 'redux:language';
export const DEFAULT_LANGUAGE = 'en';

type LanguageAction = {
  type: string;
  language: string;
};

function getLanguage() {
  const language = localStorage.getItem(LOCAL_STORAGE_KEY);
  return language ? language : DEFAULT_LANGUAGE;
}

export function changeLanguage(language: string): LanguageAction {
  localStorage.setItem(LOCAL_STORAGE_KEY, language);
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
}

export function languageReducer(state: string = getLanguage(), action: LanguageAction): string {
  return (action.type === CHANGE_LANGUAGE) ? action.language : state;
}
