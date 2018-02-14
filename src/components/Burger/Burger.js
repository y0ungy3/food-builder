/**
 * Created by Dung Mai on 1/9/2018.
 */
import React from 'react';
import css from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //grab only the keys of the object and put it into an array, not the values
    let transformedIngredients = Object.keys(props.ingredients).map(theKey => {
        return [...Array(props.ingredients[theKey])].map((_, index) => {
            return <BurgerIngredient key={theKey + index} type={theKey}/>;
        })
    }).reduce((prevVal, currentVal) => {
        return prevVal.concat(currentVal)
    }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }

    return(
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;