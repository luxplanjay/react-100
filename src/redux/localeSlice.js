export const changeLang = (newLang) => {
  return {
    type: "locale/changeLang",
    payload: newLang,
  };
};

export const localeReducer = (state = { lang: "uk" }, action) => {
  switch (action.type) {
    case "locale/changeLang":
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};
