const initialState = {
  items: [],
};

let count = 0;
export function Reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      count += 1;
      return {
        items: [
          ...state.items,
          {
            item: action.payload,
            number: 1,
            id: count,
          },
        ],
      };
    case "INCREMENT":
      return {
        items: [
          ...state.items.filter((object) => object.item !== action.payload),
          {
            item: action.payload,
            number:
              state.items.find((object) => object.item == action.payload)
                .number + 1,
            id: state.items.find((object) => object.item == action.payload).id,
          },
        ],
      };
    case "DECREMENT":
      return {
        items: [
          ...state.items.filter((object) => object.item !== action.payload),
          {
            item: action.payload,
            number:
              state.items.find((object) => object.item == action.payload)
                .number - 1,
            id: state.items.find((object) => object.item == action.payload).id,
          },
        ],
      };
    case "DELETE_INSTANCE":
      return {
        items: state.items.filter((object) => object.item !== action.payload),
      };
    default:
      return state;
  }
}
