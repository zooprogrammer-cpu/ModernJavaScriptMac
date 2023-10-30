import {API_URL} from "./config.js";
import {getJSON} from "./helpers.js";

export const state = {
  recipe : {}
};

// what gets the data. Business Logic.
// loadRecipe is an async function that returns something
// loadRecipe is not a pure function.
// It has side effect of manipulating state.recipe object above test

export const loadRecipe = async function(id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    // console.log(res, data);
    // let recipe = data.data.recipe;
    // using destructuring
    const {recipe} = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }
    console.log(state.recipe);

  } catch (err) {
    console.log(err);
    alert(err);
  }

}