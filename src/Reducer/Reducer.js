const initialState = {
  items: [],
};

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        items: [
          ...state.items,
          {
            id: action.payload,
            number: 1,
          },
        ],
      };
    case "INCREMENT":
      return {
        items: [
          ...state.items.filter((item) => item.id !== action.payload),
          {
            id: action.payload,
            number:
              state.items.find((item) => item.id == action.payload)
                .number + 1,
          },
        ],
      };
    case "DECREMENT":
      return {
        items: [
          ...state.items.filter((item) => item.id !== action.payload),
          {
            id: action.payload,
            number:
              state.items.find((item) => item.id == action.payload)
                .number - 1,
          },
        ],
      };
    case "DELETE_INSTANCE":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
