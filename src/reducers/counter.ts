import { ICounterModel, IActionModel } from "../models/";

const init: ICounterModel = {
  count: 0
};

const counter = (state = init, action: IActionModel<string, ICounterModel>) => {
  switch (action.type) {
    case 'COUNT_INCREASE': {
      let count = action.payload.count;
      return {
        ...state,
        count
      };
    };
    case 'COUNT_DECREASE': {
      let count = action.payload.count;
      return {
        ...state,
        count
      };
    };
    default: {
      return state;
    }
  }
}

export default counter;
