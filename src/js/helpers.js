// contain functions that we reuse over and over again in the project
export const getJSON = async function(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`)
    return data;
  } catch(err) {
    // console.log(err);
    // to ensure the errors in helper.js , for example if the recipe id is incorrect:
    // re-throw a new error so that it can be observed in mode.js catch
    throw(err);
  }
}

