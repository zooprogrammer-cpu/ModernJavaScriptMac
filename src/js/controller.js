import * as model from './model.js';
import 'core-js/stable'; // support old browsers . poly filling
import 'regenerator-runtime/runtime';
import recipeView from "./views/recipeView.js";
// console.log(icons)

// const recipeContainer = document.querySelector('.recipe');


// api documentation -
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id  = window.location.hash.slice(1); // get the id except the # symbol
    console.log('id:', id);
    if (!id) return; // if no id, return so that spinner does not run forever
    // render the spinner on the recipeView
    recipeView.renderSpinner();
    // 1) Loading recipe
    await model.loadRecipe(id);
    const {recipe} = model.state;

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);

  } catch (err) {
    console.log(err);
    recipeView.renderError(); // not passing error message here
  }
}

const init = function () {
  recipeView.addHandlerRender(controlRecipes)
}

init();
//what if we have different events to listen to.
// easier to have all the events in an array

// when hash changes, run controlRecipes function
// window.addEventListener('hashchange', controlRecipes);
// when page first loads, run the controlRecipes function
// window.addEventListener('load', controlRecipes);


