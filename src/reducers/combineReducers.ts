import { IActionModel, IReducerModel } from "../models/";

const combineReducers = (reducer: IReducerModel) => {
  return (state: any = {}, action: IActionModel<string, any>) => {
    const keys: Array<string> = Object.keys(reducer);
    const nextReducers: IReducerModel = {};
    for (let i = 0, len = keys.length; i < len; i++) {
      nextReducers[keys[i]] = reducer[keys[i]](state[keys[i]], action);
    }
    return nextReducers;
  }
}

export default combineReducers;
