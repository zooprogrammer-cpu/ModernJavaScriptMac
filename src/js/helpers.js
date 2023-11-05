// contain functions that we reuse over and over again in the project
import {TIMEOUT_SEC} from "./config.js";
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function(url) {
  try {
    const fetchPro = fetch(url)
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`)
    return data
  } catch(err) {
    // console.log(err);
    // to ensure the errors in helper.js , for example if the recipe id is incorrect:
    // re-throw a new error so that it can be observed in model.js catch
    throw(err);
  }
}

