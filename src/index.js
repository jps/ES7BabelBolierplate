"strict"

const Alexa = require('alexa-sdk');
const recipes = require('./recipes');

async function loadStory() {
  try {
    let story = await getJSON('story.json');
    let another= recipes.RECIPE_DE_DE.ackerboden
    addHtmlToPage(story.heading + another);
    for (let chapter of story.chapterURLs.map(getJSON)) {
      addHtmlToPage((await chapter).html);
    }
    addTextToPage("All done");
  } catch (err) {
    addTextToPage("Argh, broken: " + err.message);
  }
  document.querySelector('.spinner').style.display = 'none';
}