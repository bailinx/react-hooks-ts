const init = {
  count: 0
};

const counter = (state = init, action) => {
  switch (action.type) {
    case 'COUNT_INCREASE': {
      let num = action.payload.num;
      return {
        ...state,
        count: state.count + num
      };
    };
    case 'COUNT_DECREASE': {
      let num = action.payload.num;
      return {
        ...state,
        count: state.count - num
      };
    };
    default: {
      return state;
    }
  }
}

export default counter;
