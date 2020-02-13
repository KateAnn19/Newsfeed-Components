/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!


  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.
  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.
  Step 3: return the entire component.
  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.
  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/


let getArticles = document.querySelector('.articles');

//console.log(getArticles);


// Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
//   <div class="article">
//     <h2>{title of the article}</h2>
//     <p class="date">{date of the article}</p>
//     {three separate paragraph elements}
//     <span class='expandButton'></span>
//   </div>
//   Hint: You will need to use createElement more than once here!

function blogMaker(title, date, p1, p2, p3){
  let articleContainer = document.createElement('div');
  let h2Headings = document.createElement('h2');
  let paragraph0 = document.createElement('p');
  let paragraph1 = document.createElement('p');
  let paragraph2 = document.createElement('p');
  let paragraph3 = document.createElement('p');
  let spanEl = document.createElement('span');

  //----------------------------------------------------------
  //classmate did this to create a button instead
  //-----------------------------------------------------------
  // const articleButton = document.createElement('div');
  // const buttonOpen = document.createElement('button');
  //----------------------------------------------------------------

  paragraph0.textContent = date;
  h2Headings.textContent = title; 
  spanEl.textContent = "OPEN FOR MORE!"
  spanEl.style.fontFamily = "cursive";
  paragraph1.textContent = p1;
  paragraph2.textContent = p2;
  paragraph3.textContent = p3;
  

  articleContainer.classList.add('article');
  paragraph0.classList.add('date');
  spanEl.classList.add('expandButton');
  
  //----------------------------------------------
  //classmate did this. he created a button
  //----------------------------------------------------
  // articleButton.classList.add('expandButton',);
  // buttonOpen.classList.add('article-open');
  //----------------------------------------------------------
  

  //in this section we are setting up our HTML structure
  articleContainer.appendChild(h2Headings);
  articleContainer.appendChild(paragraph0);
  articleContainer.appendChild(paragraph1);
  articleContainer.appendChild(paragraph2);
  articleContainer.appendChild(paragraph3);
  articleContainer.appendChild(spanEl);

  //----------------------------------------------------
  //classmate did this. he created a button
  //---------------------------------------------------------
  // article.appendChild(articleButton);
  // articleButton.appendChild(buttonOpen);
  //-------------------------------------------------------------


   //-------------------------------------------------------------------
   //remember to use console.log statements to debug and make sure code is correct
   //-----------------------------------------------------------------
  //console.log('I exist!');
  //----------------------------------------------------------------------

  articleContainer.addEventListener('click', (e) => {
    articleContainer.classList.toggle('article-open');
  });
  

  //-------------------------------------------------------------------
  //classmate did this. he created a button 
  //-------------------------------------------------------------------
  // articleButton.addEventListener('click', (event) => {
  //   buttonOpen.classList.toggle('article-open');
  // })
  //--------------------------------------------------------------------------
  
 
//------------------------------------------------------------------------------
//I initially tried this
//-------------------------------------------------------------------------------
  // spanEl.addEventListener('click', () => {
  //   //articleContainer.classList.add('article-open');
  //   //articleContainer.toggle('toggle-on');
  //   articleContainer.classList.toggle('.article-open', false);
  //   //articleContainer.classList.toggle('close');
  //   console.log('clicked!');
  // });
//------------------------------------------------------------------------------------

  return articleContainer;
}


//----------------------------------------------------------------------------------------
//using map method 
//-------------------------------------------------------------------------------------------
// .map()
//---------------------------------------------------------------------------------------------

// We know that .map returns a new array with the items transformed (by our callback). We can then do whatever we please with this array.
data.map(content => {
  // Remember, we always need to return something when we use .map
  getArticles.appendChild(blogMaker(content.title, content.date, content.firstParagraph, content.secondParagraph, content.thirdParagraph));
});


//----------------------------------------------------------------------------------------
//using forEach method 
//-------------------------------------------------------------------------------------------
// .forEach()
//---------------------------------------------------------------------------------------------

// data.forEach((content) => {
//   //let newPost = blogMaker(arrayItem);
//   //console.log(content.date);
//   getArticles.appendChild(blogMaker(content.title, content.date, content.firstParagraph, content.secondParagraph, content.thirdParagraph));
//   //getArticles.appendChild(arrayItem);
// });

//-------------------------------------------------------------------------------------------------
//add a new article to the array 
//--------------------------------------------------------------------------------------------------
let newBlogPost = {
  title: 'High Altitude Baking in the Rocky Mountains',
  date: 'May 29, 2023',
  firstParagraph: `Carrot cake muffin muffin pastry liquorice. Gummi bears cake icing powder. Brownie chocolate carrot cake bonbon oat cake cake sweet roll. Lollipop marshmallow tart caramels icing biscuit caramels jujubes. Bonbon liquorice marshmallow chocolate bar dragée macaroon icing. Topping apple pie croissant pie icing cupcake chocolate cake. Tart candy canes soufflé oat cake tart danish. Gummies cotton candy chupa chups lemon drops gingerbread macaroon biscuit lemon drops. Sweet cheesecake icing caramels wafer powder tart candy canes carrot cake. Liquorice cake candy canes wafer lemon drops ice cream. Apple pie lemon drops sesame snaps cookie powder. Jujubes carrot cake macaroon. Gummies sweet soufflé biscuit sugar plum marzipan gummi bears cake.`,

  secondParagraph: `Bear claw pudding muffin. Topping oat cake wafer. Lemon drops apple pie marshmallow chocolate cake. Croissant ice cream chocolate bar bonbon muffin pudding cupcake gummi bears. Toffee cookie bear claw icing halvah fruitcake. Chocolate cake candy bear claw muffin gingerbread tiramisu brownie lollipop cheesecake. Apple pie donut lollipop fruitcake gummi bears icing sugar plum carrot cake. Lemon drops gummi bears cake. Jelly beans liquorice tiramisu gummi bears sugar plum gummies sesame snaps fruitcake. Carrot cake cake gummies fruitcake. Toffee chocolate sweet roll cake tart liquorice caramels oat cake soufflé. Sweet roll lollipop powder cupcake pastry croissant jelly beans carrot cake pie. `,

  thirdParagraph: `Danish chocolate powder ice cream jelly-o. Cake candy canes powder pastry biscuit halvah cookie. Cake apple pie pastry danish. Marzipan donut chocolate bar biscuit tiramisu ice cream. Wafer wafer lollipop lemon drops brownie lemon drops. Lollipop fruitcake chocolate bar danish apple pie candy chocolate cake toffee carrot cake. Fruitcake jelly halvah chocolate cookie pie danish. Jelly beans chocolate fruitcake chocolate bar pastry bear claw. Chocolate jujubes brownie marzipan sugar plum fruitcake chocolate halvah jujubes. Gingerbread pastry chupa chups marshmallow soufflé fruitcake carrot cake tiramisu ice cream. Candy tiramisu jujubes toffee chocolate cake gummies oat cake dessert powder. Macaroon gingerbread donut cupcake.`
};

data.push(newBlogPost);


//----------------------------------------------------------------------------------------------------------
// Do not need to iterate through everything. If you do it will be doubled
//-------------------------------------------------------------------------------------------------------------
getArticles.appendChild(blogMaker(newBlogPost.title, newBlogPost.date, newBlogPost.firstParagraph, newBlogPost.secondParagraph, newBlogPost.thirdParagraph));
//------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------
// Do not need to iterate through everything. If you do it will be doubled.
//-------------------------------------------------------------------------------------------------------------------------
// data.map(content => {
//   getArticles.appendChild(blogMaker(content.title, content.date, content.firstParagraph, content.secondParagraph, content.thirdParagraph));
// })
//--------------------------------------------------------------------------------------------------------------------------------


// Hint: You will need to use createElement more than once here!
//   Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.
//   Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.
//   Step 3: return the entire component.
//   Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.
//   Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.



//MY GOAL BELOW

//-----------------------------------------------------------------------------------------------------------------------------------------
//Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.
//refactor with object instead of 5 separate arguments
//----------------------------------------------------------------------------------------------------------------------------------------------