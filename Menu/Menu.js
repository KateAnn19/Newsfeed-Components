/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

let bigOlMenuContainer = document.querySelector('.header');
console.log(bigOlMenuContainer);



function fancyMenu(fancyArray){
  let firstDivWithMenuClass = document.createElement('div');
  let unOrderedList = document.createElement('ul');

  firstDivWithMenuClass.appendChild(unOrderedList);


  let menuButton = document.querySelector('.menu-button');
  firstDivWithMenuClass.classList.add('menu');
  

  fancyArray.forEach(function(data) {
    let fancyListItems = document.createElement('li');
    //console.log(data);
    fancyListItems.textContent = data;   //I did not understand this
    unOrderedList.appendChild(fancyListItems);  
  });
  

menuButton.addEventListener('click', (e) => {
  firstDivWithMenuClass.classList.toggle('menu--open');
});

return firstDivWithMenuClass;

}


bigOlMenuContainer.appendChild(fancyMenu(menuItems));



//stretch

// Close Button

//   Add a close (or 'read') button to each Article component. When clicked the article will disappear.

// * Component Constructor
  
//   Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. 

// * Implement a way to write your own articles using the Component Constructor and some input fields. 