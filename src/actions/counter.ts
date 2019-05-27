import { ICounterModel, IActionModel } from '$ROOT/models/index';

export const increaseCount: (payload: ICounterModel) => IActionModel<string, ICounterModel> = (payload) => ({
  type: 'COUNT_INCREASE',
  payload
});

export const decreaseCount: (payload: ICounterModel) => IActionModel<string, ICounterModel> = (payload: ICounterModel) => ({
  type: 'COUNT_DECREASE',
  payload
});
