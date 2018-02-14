/**
 * Created by Dung Mai on 1/9/2018.
 */
import React, {Component} from 'react';
import Aux from '../../hoc/aux_';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Aux>

        );
    }
}

export default BurgerBuilder;