import * as model from './model.js';
import 'core-js/stable'; // support old browsers . poly filling
import 'regenerator-runtime/runtime';
import recipeView from "./views/recipeView.js";


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
    console.error(err);
  }
}
//Implementing PublisherSubscriber pattern.
// Render recipe. Call the addHandlerRender from recipeView.js.
// Pass controlRecipes since we want this method to execute as soon as the event happens.
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
}
// init runs when the program first runs. and it calls the addHandlerRender.
// We
init();

// controlRecipes();
//what if we have different events to listen to.
// easier to have all the events in an array

// ['hashchange', 'load'].forEach(ev=> window.addEventListener(ev, controlRecipes));
// when hash changes, run controlRecipes function
// window.addEventListener('hashchange', controlRecipes);
// when page first loads, run the controlRecipes function
// window.addEventListener('load', controlRecipes);


