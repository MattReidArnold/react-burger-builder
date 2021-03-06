import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
  bun: true
};

const addIngredient = (state, action) => {
  const addedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const addedIngredients = updateObject(state.ingredients, addedIngredient);
  const addedIngredientState = {
    ingredients: addedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, addedIngredientState);
};

const removeIngredient = (state, action) => {
  const removedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
  };
  const removedIngredients = updateObject(state.ingredients, removedIngredient);
  const removedIngredientState = {
    ingredients: removedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, removedIngredientState);
};

const setIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 4,
    error: false,
    building: false
  });
};

const fetchIngredientFailed = (state, action) => {
  return updateObject(state, {
    error: true
  });
};

const toggleBun = (state, action) => {
  return updateObject(state, {
    bun: !state.bun
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredient(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientFailed(state, action);
    case actionTypes.TOGGLE_BUN:
      return toggleBun(state, action);
    default:
      return state;
  }
};

export default reducer;
