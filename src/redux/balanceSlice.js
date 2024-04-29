export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payload: value,
  };
};

export const withdraw = (value) => {
  return {
    type: "balance/withdraw",
    payload: value,
  };
};

export const balanceReducer = (state = { value: 1000 }, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        value: state.value + action.payload,
      };

    case "balance/withdraw":
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};
