//the code calculates the estimated reading time for the content within an <article> element of a webpage and adds a 'badge' displaying the estimated reading time.

//querySelector() is a built in javascript method that allows you to select an element from the DOM using a CSS selector
//the selector selects the first <article> element in the document (DOM of the webpage where the code is running) and assigns it to the variable `article`
//the DOM is a tree-like structure where each element on the page is represented as a node within the tree.
//the code searches within the DOM tree for the first <article> element and returns a reference to that element
//`document.querySelector` may return null if the selector doesn't match anything.


const article = document.querySelector("article");
if (article) { //checks if article is truthy
    const text = article.textContent; //extracts the text content from the `article` element and assigns it to the variable `text`
    const wordMatchRegExp = /[^\s]+/g; //regular expression. regexxxxx yeaaah bby. it matches one or mre consecutive non-whitespace characters. It is used to identify words in the text.
    const words = text.matchAll(wordMatchRegExp); //the matchAll method is used on the `text` string with the `wordMatchRegExp` pattern to find all cases of words in the text. it returns an iterator that yields all the matches. All the words are stored within words. look at iterator notes.
    //
    const wordCount = [...words].length; // converts the iterator 'words' to an array called wordCount and calculates the length of the array. This gives the total number of words in the 'text' content.
    const readingTime = Math.round(wordCount / 200); //calculates the estimated reading time by dividing the word count by 200 (assumptions on average person's reading speed)
    const badge = document.createElement("p"); //creates a new <p> element and assigns it to the variable 'badge'. This element will be used to display the reading time.

    badge.classList.add("color-secondary-text", "type--caption"); //adds CSS classes to the 'badge' element using the classList property (which provides a way to manipulate the classes of an element). .add() is a method to add classes to an element - in this case for styling purposes.
    badge.textContent = `⏱️ ${readingTime} min to read`; //sets the text content of the 'badge' element to display the reading time in minutes

    //support for API reference docs.
    const heading = article.querySelector("h1"); //selects the first <h1> element within the <article> and assigns it to the variable 'heading'. The purpose is to capture the element to access the content or manipulate its properties later in the code.
    //support of article docs with date
    const date = article.querySelector("time")?.parentNode; //attempts to select the parent node of <time> within the 'article' and assigns it to the variable 'date'. The '?' optoinal chaining operator is used to handle the case when the <time> element is not found, avoiding potential errors. the epurpose of selecting the parent node of the <item> element is to insert the 'badge' element.

    (date ?? heading).insertAdjacentElement("afterend", badge); //inserts the 'badge' element after either the 'date' element or the 'heading' element (whichever is truthy) in the DOM using the 'insertAdjacentElement()' method. the <date> or <h1> element are at the top of a webpage so the badge will be displayed nearby.
}

/*

Interesting JS in this code

Regular Expressions (regex) : used to count only the words inside the <article> element
InsertAdjacentElement() : used to insert the reading time node after the element
Classlist property : used to add CSS class names to the element class attribute
Optional chaining : used to access an object property that may be undefined or null
Nullish coalescing : returns the <heading> if the <date> is null or undefined


const mainAndArticleElements = document.querySelector("main, article");

mainAndArticleElements.forEach(element => {
    const text = element.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");

    badge.classList.add("color-secondary-text", "type--caption");
    badge.textCount = `⏱️ ${readingTime} min to read`;

    const heading= element.querySelector("h1");
    const date = element.querySelector("time")?.parentNode;
    (date ?? heading).insertAdjacentElement("afterend", badge);
});

*/