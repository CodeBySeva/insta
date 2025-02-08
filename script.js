import { header } from "./Components/header.js";
import { createStoryElement } from "./Components/stories.js";
import { render } from "./libs/utils.js";

header();

const storiesContainer = document.querySelector(".stories-container");


fetch('http://localhost:3001/stories')
.then(response => response.json())
.then(data => render(data, storiesContainer, createStoryElement))
.catch(error => console.error(error))