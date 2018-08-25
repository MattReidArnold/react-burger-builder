import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  let bunTop = <BurgerIngredient type="bread-top" />;
  let bunBottom = <BurgerIngredient type="bread-bottom" />;
  if (!props.bun) {
    bunTop = <BurgerIngredient type="salad" />;
    bunBottom = <BurgerIngredient type="salad" />;
  }
  return (
    <div className={classes.Burger}>
      {bunTop}
      {transformedIngredients}
      {bunBottom}
    </div>
  );
};

export default burger;
