/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩--------------  SWITCH SITE ---------------⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

//Selectors
const TodoContainer = document.getElementById("container-tasks");
const WatchListContainer = document.getElementById("container-watchlist");
const bodyboi = document.querySelector(".body-todo-before");
const yourWatchList = document.querySelector(".WatchListText");
const yourTasks = document.querySelector(".taskstext");
const todoNav = document.getElementById("nav-Tasks");
const watchListNav = document.getElementById("nav-Watchlist");

//Event Listeners
watchListNav.addEventListener("click", switchSite);
todoNav.addEventListener("click", switchSite);

//Style for moving line when in "WatchList"
var styleYourWatchList = `
color: white;
  margin-top: -55px;
  font-family: "Fugaz One", cursive;
  color: white;
  text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
  -webkit-animation: slide 1s;
  animation: slide 1s;
`;
//Style for moving line when in "Todos"
var styleYourTasks = `
color: white;
  margin-top: 30px;
  font-family: "Fugaz One", cursive;
  color: white;
  text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
  -webkit-animation: slideDown 1s;
  animation: slideDown 1s;
`;

//Functions
function switchSite(navClick) {
  if (navClick.target.id == "nav-Watchlist") {
    TodoContainer.style.display = "none";
    WatchListContainer.style.display = "block";
    todoNav.style.opacity = "0.4";
    watchListNav.style.opacity = "1";

    yourWatchList.style = styleYourWatchList;
    bodyboi.style.animation = "pulse 1s reverse";

    setTimeout(function () {
      bodyboi.style.animation = "";
      bodyboi.classList.add("body-watchlist-after");
      bodyboi.classList.remove("body-todo-before");
      yourWatchList.style = styleYourWatchList;
    }, 1000);
  } else {
    todoNav.style.opacity = "1";
    watchListNav.style.opacity = "0.4";

    yourTasks.style = styleYourTasks;

    WatchListContainer.style.display = "none";
    TodoContainer.style.display = "block";

    bodyboi.classList.add("body-todo-before");
    bodyboi.classList.remove("body-watchlist-after");
    bodyboi.style.animation = "pulse 1s forwards";
    setTimeout(function () {
      bodyboi.style.animation = "";
    }, 1000);
  }
}

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩------------- BOOT FUNCTIONS------------⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

function highlightNav() {
  if (TodoContainer.style.display === "none") {
    todoNav.style.opacity = "0.4";
    watchListNav.style.opacity = "1";
  } else if (TodoContainer.style.display === "block") {
    todoNav.style.opacity = "1";
    watchListNav.style.opacity = "0.4";
  }
}

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩----------- MAKE&ADD TODO CARD -----------⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

//Selectors
const todoInput = document.querySelector(".todo-input-text");
const todoInputTime = document.querySelector(".todo-input-time");
const todoListRow = document.getElementById("cardRow");
const addTodoBtn = document.querySelector(".add-todo-btn");
const saveTodoBtn = document.querySelector(".save-todo-btn");
const addTodoButton = document.querySelector(".add-todo-btn");
const saveTodoButton = document.querySelector(".save-todo-btn");

//Event Listeners
addTodoBtn.addEventListener("click", addTodo);
saveTodoBtn.addEventListener("click", saveTodo);

const cardToEdit = [];

function saveTodo() {
  cardToEdit.forEach((a) => console.log(a));

  if (todoInput.value === "" || !todoInput.value.trim()) {
    alert("Please write a todo!");
  } else {
    cardToEdit[0].children[1].innerText = todoInput.value;
    cardToEdit[0].children[2].innerText = todoInputTime.value;

    saveTodoButton.classList.add("hide");
    saveTodoBtn.classList.add("hide");
    addTodoButton.classList.remove("hide");
    addTodoBtn.classList.remove("hide");

    todoInput.setAttribute("placeholder", "Task...");
    todoInputTime.setAttribute("placeholder", "Time...");

    closeModal();
  }
}

//Functions
function addTodo(event) {
  if (todoInput.value === "" || !todoInput.value.trim()) {
    alert("Please write a todo!");
  } else {
    // Create col wrapper div
    const todoCol = document.createElement("div");
    todoCol.classList.add("col-md-4");

    // Create card wrapper div
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = "todoCard";

    // Create aTag for trash image
    const trashAtag = document.createElement("a");
    trashAtag.classList.add("trash-icon");
    trashAtag.href = "javascript:void(0)";

    // Create section for Atags (images)
    const sectionAtags = document.createElement("section");
    sectionAtags.classList.add("Atags");

    //Create Upper Atags which will get img from css.
    const atagCheckBox = document.createElement("a");
    atagCheckBox.classList.add("unchecked-icon");
    atagCheckBox.href = "javascript:void(0)";

    const aTagEdit = document.createElement("a");
    aTagEdit.classList.add("edit-icon");
    aTagEdit.classList.add("edit-icon-appear");
    aTagEdit.href = "javascript:void(0)";

    // Create todo list item and input text

    const todoItem = document.createElement("li");
    todoItem.classList.add("card-body");
    todoItem.classList.add("todo-item");
    //todoItem.classList.add("text-center");
    todoItem.innerText = todoInput.value;

    // Create br inside todoitem
    const brBreak = document.createElement("br");

    // Create small for time with text muted
    const smallMutedTime = document.createElement("small");
    smallMutedTime.innerText = todoInputTime.value;

    sectionAtags.appendChild(atagCheckBox);
    sectionAtags.appendChild(aTagEdit);
    card.appendChild(sectionAtags);

    todoItem.appendChild(brBreak);
    //todoItem.appendChild(smallMutedTime);
    card.appendChild(todoItem);
    card.appendChild(smallMutedTime);
    card.appendChild(trashAtag);

    todoCol.appendChild(card);

    todoListRow.insertBefore(todoCol, todoListRow.children[0]);

    // Clear input values

    todoInput.value = "";
    todoInputTime.value = "";

    // closes the Modal
    modal.style.display = "none";
  }
}

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩------- CHECK, EDIT OR REMOVE CARD -------⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

// Event Listeners
todoListRow.addEventListener("click", iconClickCheck);

//functions
function iconClickCheck(event) {
  // Check which target/icon was clicked...
  // Get clicked target/icon
  const clickedIcon = event.target;
  console.log(clickedIcon);

  // Get clicked target/icon parent
  const iconParent = clickedIcon.parentElement;
  console.log(iconParent);

  const todoToChange = iconParent.parentElement;

  // If clicked target has class "unchecked-icon"
  if (clickedIcon.classList.contains("unchecked-icon")) {
    completeTodo(todoToChange);
  } else if (clickedIcon.classList.contains("checkmark-icon")) {
    unCompleteTodo(todoToChange);
  } else if (clickedIcon.classList.contains("trash-icon")) {
    removeTodo(todoToChange);
  } else if (clickedIcon.classList.contains("edit-icon")) {
    editTodo(todoToChange);
  }
}

function editTodo(todoToChange) {
  // Get innerText of card and time

  cardToEdit.push(todoToChange);

  console.log(todoToChange);

  const taskText = todoToChange.children[1].innerText;
  console.log(taskText);

  const timeText = todoToChange.children[2].innerText;
  console.log(timeText);

  // display modal with changed placeholders
  todoInput.setAttribute("placeholder", taskText);
  todoInputTime.setAttribute("placeholder", timeText);

  // CHANGE ADD BUTTON IN MODAL TO SAVE BUTTON

  addTodoButton.classList.add("hide");
  addTodoBtn.classList.add("hide");
  saveTodoButton.classList.remove("hide");
  saveTodoBtn.classList.remove("hide");

  openModal();
}

function removeTodo(todoToChange) {
  todoToChange.remove();

  myFunction();
}

function completeTodo(todoToChange) {
  todoToChange.classList.add("completed");
  const sectionChild = todoToChange.children;
  const icon = todoToChange.querySelector(".unchecked-icon");
  icon.classList.add("checkmark-icon");
  icon.classList.remove("unchecked-icon");
  const editIconToHidden = todoToChange.querySelector(".edit-icon");
  editIconToHidden.classList.remove("edit-icon");
}

function unCompleteTodo(todoToChange) {
  todoToChange.classList.remove("completed");
  const sectionChild = todoToChange.children;
  console.log(sectionChild);
  const icon = todoToChange.querySelector(".checkmark-icon");
  console.log(icon);
  icon.classList.remove("checkmark-icon");
  icon.classList.add("unchecked-icon");
  const editIconToAppear = todoToChange.querySelector(".edit-icon-appear");
  editIconToAppear.classList.add("edit-icon");
}

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩---- POPUP FOR CARD REMOVAL AND EDIT -----⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

//Selectors
const popup = document.getElementById("myPopup");
//functions
function myFunction() {
  popup.classList.toggle("show");

  setTimeout(function () {
    popup.classList.toggle("show");
  }, 2000);
}

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩----------- ADDING TODO MODAL -----------⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

//Selectors
const modal = document.getElementById("modalAddTask");
const modalMovieContent = document.querySelector(".modalMovie-content");
const modalTaskContent = document.querySelector(".modalTask-content");
const openModalBtn = document.getElementById("openModalTaskBtn");
const closeModalBtn = document.getElementById("closeModalTaskBtn");
const closeModalBtn2 = document.getElementById("closeModalTaskBtn2");
const borderAnimation = document.querySelector(".rainbow");

//EventListeners
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
closeModalBtn2.addEventListener("click", closeModal);
window.addEventListener("click", clickOutsideClose);

//Style-code for border-animation to appear
var styleCode = `
width: 100%;
  height: 100%;
  -webkit-animation: o-rotate-360 linear 8s infinite;
  animation: o-rotate-360 linear 8s infinite;
  animation-name: modalopen;
  animation-duration: 0.75s;
`;
//Style-code for border-animation to stop re-run
var styleCode2 = `
width: 100%;
  height: 100%;
  -webkit-animation: o-rotate-360 linear 8s infinite;
  animation: o-rotate-360 linear 8s infinite;
`;

//Functions
function openModal() {
  if (WatchListContainer.style.display === "none") {
    modal.style.display = "block";
    modalMovieContent.style.display = "none";
    modalTaskContent.style.display = "block";
  } else {
    modal.style.display = "block";
    modalTaskContent.style.display = "none";
    modalMovieContent.style.display = "block";
  }
}

function closeModal() {
  modal.style.display = "none";
  todoInput.value = "";
  todoInputTime.value = "";
  searchInput.value = "";
}
function clickOutsideClose(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    todoInput.value = "";
    todoInputTime.value = "";
    searchInput.value = "";
  }
}

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩----------- CLOCK TIME CLICK -----------⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

//Selectors
const clockIcon = document.querySelector(".clock-icon");
const inputTime = document.querySelector(".todo-input-time");

//Event Listeners
clockIcon.addEventListener("click", displayTimeInputs);

//Functions
function displayTimeInputs(e) {
  if (inputTime.style.display === "none") {
    inputTime.style.display = "block";
    clockIcon.style.filter = "invert(1)";
  } else {
    inputTime.style.display = "none";
    clockIcon.style.filter = "invert(0.5)";
  }
}

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩-------------- SEARCHBAR ---------------⇩  */
/*  ⇩---- API REQUEST & OPEN MOVIE MODAL ----⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

//Selectors
const searchInput = document.querySelector(".inputSearch");
const searchButton = document.getElementById("searchBtn");
const poster = document.querySelector(".poster");
const backgroundImg = document.querySelector(".movie-img");
const title = document.querySelector(".movieTitle");
const genres = document.querySelector(".movieGenres");
const duration = document.querySelector(".movieDuration");
const rottenRating = document.querySelector(".rottentomatoes");
const imdbRating = document.querySelector(".imdb");
const description = document.querySelector(".description");

//Event Listeners
searchButton.addEventListener("click", getMovieInfo);

//Functions

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}

async function getMovieInfo() {
  const titleInput = searchInput.value;
  let movieData = await axios.get(
    "https://www.omdbapi.com/?t=" + titleInput + "&apikey=5c556192&plot=full"
  );
  movie = movieData.data;

  //Styles
  styleBackgroundImg = `
width: 100%;
height: 150px;
background-image: linear-gradient(
    rgba(39, 39, 39, 0.8),
    rgba(73, 73, 73, 0.8)
  ),
  url(${movie.Poster});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
z-index: 1;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
-webkit-mask-image: -webkit-gradient(
  linear,
  left top,
  left bottom,
  color-stop(0, black),
  color-stop(0.35, black),
  color-stop(0.5, black),
  color-stop(0.65, black),
  color-stop(0.85, rgba(0, 0, 0, 0.6)),
  color-stop(1, transparent)
);
position: relative;
padding-bottom: 42%;
`;

  poster.src = movie.Poster;
  backgroundImg.style = styleBackgroundImg;
  title.innerText = movie.Title;
  genres.innerText = movie.Genre;
  duration.innerText = movie.Runtime;
  imdbRating.innerText = movie.imdbRating;
  rottenRating.innerText = movie.Ratings[1].Value;
  const plot = movie.Plot;
  const plotToShow = plot.substring(0, 350) + "...";
  description.innerText = plotToShow;

  const titleToUpper = titleCase(titleInput);

  if (listOfTitles.includes(titleToUpper)) {
    wLBtnBackground.style = styleBackgroundChecked;
    wLBtnForeground.style = styleForegroundChecked;
    wLBtnLine.style = styleLineChecked;
    wLBtnLine2.style = styleLine2Checked;
    watchlistAddRemoveText.innerText = "Remove from watchlist";
  } else {
    wLBtnBackground.style = styleBackgroundUnChecked;
    wLBtnForeground.style = styleForegroundUnChecked;
    wLBtnLine.style = styleLineUnChecked;
    wLBtnLine2.style = styleLine2UnChecked;
    watchlistAddRemoveText.innerText = "Add to watchlist";
  }

  openModal();
}

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩----------- ADD TO WATCHLIST -------------⇩  */
/*  ⇩------------- BTN ANIMATION -------------⇩  */
/*  ⇩---------- Add To Watchlist -----------⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

//Selectors
const wLBtn = document.querySelector(".circle");
const checkBox = document.getElementById("toggleWLBtn");
const wLBtnBackground = document.querySelector(".background");
const wLBtnForeground = document.querySelector(".foreground");
const wLBtnLine = document.querySelector(".line");
const wLBtnLine2 = document.querySelector(".line2");
const watchlistAddRemoveText = document.querySelector(
  ".watchlistAddRemoveText"
);
const watchlistRow = document.querySelector("#watchlistRow");

//EventListeners
wLBtn.addEventListener("click", toggleWLBtn);

//Styles
styleBackgroundChecked = `
fill: transparent;
  transition: all 200ms ease;
  stroke: transparent;
`;

styleBackgroundUnChecked = `
fill: transparent;
  stroke: #1abc9c;
  transition: all 200ms ease;
`;

styleForegroundChecked = `
fill: transparent;
stroke-dasharray: 377;
stroke: #ee3769;
transform-origin: 50% 50%;
transform: rotate(-270deg);
transition: all 800ms ease;
stroke-dashoffset: 0;
  transform: rotate(-90deg);
`;

styleForegroundUnChecked = `
fill: transparent;
stroke-dasharray: 377;
stroke-dashoffset: 377;
stroke: #ee3769;
transform-origin: 50% 50%;
transform: rotate(-270deg);
transition: all 800ms ease;
`;

styleLineChecked = `
stroke-width: 2;
  transform-origin: 50% 50%;
  transition: all 500ms ease;
  stroke: #ee3769;
  transform: rotate(180deg);
`;

styleLineUnChecked = `
stroke-width: 2;
  stroke: #1abc9c;
  transform-origin: 50% 50%;
  transition: all 500ms ease;
`;

styleLine2Checked = `
transform: rotate(-90deg);
transform: rotate(0);
stroke: #ee3769;
`;

styleLine2UnChecked = `
transform: rotate(-90deg);
`;

const listOfTitles = [];

//Functions
function toggleWLBtn() {
  if (checkBox.checked == true) {
    wLBtnBackground.style = styleBackgroundChecked;
    wLBtnForeground.style = styleForegroundChecked;
    wLBtnLine.style = styleLineChecked;
    wLBtnLine2.style = styleLine2Checked;
    watchlistAddRemoveText.innerText = "Remove from watchlist";

    if (!listOfTitles.includes(movie.Title)) {
      const col = document.createElement("div");
      col.classList.add("col-md-3");

      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("watchlistCard");

      const img = document.createElement("div");
      img.classList.add("imgDiv");
      const id = movie.Title.replaceAll(" ", "-");
      img.innerHTML = `<a href="javascript:void(0)" class="${id} card-img-top img-watchlist " style="content: url(${movie.Poster});"></a>`;

      const imgTitle = document.createElement("div");
      imgTitle.classList.add("card-img-text");
      imgTitle.classList.add("pt-3");
      imgTitle.innerText = movie.Title;

      card.appendChild(img);
      card.appendChild(imgTitle);
      col.appendChild(card);
      watchlistRow.appendChild(col);

      listOfTitles.push(movie.Title);
    }
  } else {
    wLBtnBackground.style = styleBackgroundUnChecked;
    wLBtnForeground.style = styleForegroundUnChecked;
    wLBtnLine.style = styleLineUnChecked;
    wLBtnLine2.style = styleLine2UnChecked;
    watchlistAddRemoveText.innerText = "Add to watchlist";

    removeFromWatchlist(movie.Title);
  }
}

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩----------- OPEN MODAL FROM  -------------⇩  */
/*  ⇩------------- WATCHLIST -------------⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

//Selectors

//Event Listeners
watchlistRow.addEventListener("click", openMovieInfoFromWL);

//FUnction
async function openMovieInfoFromWL(e) {
  const titleInput = e.target.classList[0].replaceAll("-", " ");
  let movieData = await axios.get(
    "https://www.omdbapi.com/?t=" + titleInput + "&apikey=5c556192&plot=full"
  );
  movie = movieData.data;

  const titleToUpper = titleCase(titleInput);

  if (listOfTitles.includes(titleToUpper)) {
    wLBtnBackground.style = styleBackgroundChecked;
    wLBtnForeground.style = styleForegroundChecked;
    wLBtnLine.style = styleLineChecked;
    wLBtnLine2.style = styleLine2Checked;
    watchlistAddRemoveText.innerText = "Remove from watchlist";
  } else {
    wLBtnBackground.style = styleBackgroundUnChecked;
    wLBtnForeground.style = styleForegroundUnChecked;
    wLBtnLine.style = styleLineUnChecked;
    wLBtnLine2.style = styleLine2UnChecked;
    watchlistAddRemoveText.innerText = "Add to watchlist";
  }

  //Styles
  styleBackgroundImg = `
width: 100%;
height: 150px;
background-image: linear-gradient(
    rgba(39, 39, 39, 0.8),
    rgba(73, 73, 73, 0.8)
  ),
  url(${movie.Poster});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
z-index: 1;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
-webkit-mask-image: -webkit-gradient(
  linear,
  left top,
  left bottom,
  color-stop(0, black),
  color-stop(0.35, black),
  color-stop(0.5, black),
  color-stop(0.65, black),
  color-stop(0.85, rgba(0, 0, 0, 0.6)),
  color-stop(1, transparent)
);
position: relative;
padding-bottom: 42%;
`;

  poster.src = movie.Poster;
  backgroundImg.style = styleBackgroundImg;
  title.innerText = movie.Title;
  genres.innerText = movie.Genre;
  duration.innerText = movie.Runtime;
  imdbRating.innerText = movie.imdbRating;
  rottenRating.innerText = movie.Ratings[1].Value;
  const plot = movie.Plot;
  const plotToShow = plot.substring(0, 350) + "...";
  description.innerText = plotToShow;

  openModal();
}

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩----------- TIPS MOVIES -------------⇩  */
/*  ⇩------------- SLIDER -------------⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩------- TIPS MOVIES and WATCHLIST --------⇩  */
/*  ⇩---------- OPEN SPEC MODAL -----------⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

//Selectors
const clickOnTipsMovie = document.querySelector(".carousel-inner");
const wLAddBtn = document.querySelector(".WLBtn");
const checkBoxAdd = document.getElementById("toggleWLBtn");
let movie;

//Event Listeners
clickOnTipsMovie.addEventListener("click", getMovieInfoClick);

//Functions
async function getMovieInfoClick(e) {
  const titleInput = e.target.id.replaceAll("-", " ");
  let movieData = await axios.get(
    "https://www.omdbapi.com/?t=" + titleInput + "&apikey=5c556192&plot=full"
  );
  movie = movieData.data;

  const titleToUpper = titleCase(titleInput);

  if (listOfTitles.includes(titleToUpper)) {
    wLBtnBackground.style = styleBackgroundChecked;
    wLBtnForeground.style = styleForegroundChecked;
    wLBtnLine.style = styleLineChecked;
    wLBtnLine2.style = styleLine2Checked;
    watchlistAddRemoveText.innerText = "Remove from watchlist";
  } else {
    wLBtnBackground.style = styleBackgroundUnChecked;
    wLBtnForeground.style = styleForegroundUnChecked;
    wLBtnLine.style = styleLineUnChecked;
    wLBtnLine2.style = styleLine2UnChecked;
    watchlistAddRemoveText.innerText = "Add to watchlist";
  }

  //Styles
  styleBackgroundImg = `
width: 100%;
height: 150px;
background-image: linear-gradient(
    rgba(39, 39, 39, 0.8),
    rgba(73, 73, 73, 0.8)
  ),
  url(${movie.Poster});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
z-index: 1;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
-webkit-mask-image: -webkit-gradient(
  linear,
  left top,
  left bottom,
  color-stop(0, black),
  color-stop(0.35, black),
  color-stop(0.5, black),
  color-stop(0.65, black),
  color-stop(0.85, rgba(0, 0, 0, 0.6)),
  color-stop(1, transparent)
);
position: relative;
padding-bottom: 42%;
`;

  poster.src = movie.Poster;
  backgroundImg.style = styleBackgroundImg;
  title.innerText = movie.Title;
  genres.innerText = movie.Genre;
  duration.innerText = movie.Runtime;
  imdbRating.innerText = movie.imdbRating;
  rottenRating.innerText = movie.Ratings[1].Value;
  const plot = movie.Plot;
  const plotToShow = plot.substring(0, 350) + "...";
  description.innerText = plotToShow;

  openModal();
}

/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩  */
/*  ⇩------- REMOVE FROM WATCHLIST --------⇩  */
/* ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ */

function removeFromWatchlist(Title) {
  const title = Title;

  const movie = title.replaceAll(" ", "-");

  const movieToRemove = document.querySelector("." + movie);

  const parent = movieToRemove.parentElement;
  const grandparent = parent.parentElement;
  const colToRemove = grandparent.parentElement;
  const watchlistRow = colToRemove.parentElement;

  console.log(watchlistRow);

  watchlistRow.removeChild(colToRemove);

  listOfTitles.splice(listOfTitles.indexOf(title), 1);

  modal.style.display = "none";
}
