/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const sections = [
  {
    title: "HTML",
    description: `Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

      Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
      
      HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as <img /> and <input /> directly introduce content into the page. Other tags such as <p> surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags, but use them to interpret the content of the page.
      
      HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. Inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[2]`,
    img:
      "https://camo.githubusercontent.com/c995418fc13db76b03e656597fc492d7160ad504/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f77335f68746d6c352f77335f68746d6c352d69636f6e2e737667",
  },
  {
    title: "CSS",
    description: `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]

     CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file which reduces complexity and repetition in the structural content as well as enabling the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.
     
     Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.[4]
     
     The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable.
     
     The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents.[5]
     
     In addition to HTML, other markup languages support the use of CSS including XHTML, plain XML, SVG, and XUL.`,
    img: "https://pluralsight.imgix.net/paths/path-icons/css-c9b214f0d7.png",
  },

  {
    title: "JavaScript",
    description: `JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

      Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[8] JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior,[9] and all major web browsers have a dedicated JavaScript engine to execute it.
      
      As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). However, the language itself does not include any input/output (I/O), such as networking, storage, or graphics facilities, as the host environment (usually a web browser) provides those APIs.
      
      JavaScript engines were originally used only in web browsers, but they are now embedded in some servers, usually via Node.js. They are also embedded in a variety of applications created with frameworks such as Electron and Cordova.
      
      Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.`,
    img:
      "https://camo.githubusercontent.com/5ffc0bad36a1136cb56ea1df57e5dc76ad2624e5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6a6176617363726970742f6a6176617363726970742d686f72697a6f6e74616c2e737667",
  },

  {
    title: "JSON",
    description: `JavaScript Object Notation is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types`,
    img: "https://miro.medium.com/max/512/1*hMIqEMzV6ga93WL9HZEsyg.png",
  },
];
const projectName = "Web Development";
const main = document.getElementsByTagName("main")[0];
const page__header = document.querySelector(".page__header");
const navbar__list = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
const navFragment = document.createDocumentFragment();
const scrollButton = document.querySelector("#scroll");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function isInView(el) {
  let box = el.getBoundingClientRect();
  return box.top < window.innerHeight && box.bottom >= 0;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
document.title = projectName;
document.getElementById("projectName").innerText = projectName;
sections.forEach((section, index) => {
  const { title, description, img } = section;
  const sectionEl = document.createElement("section");

  // id="section1"
  sectionEl.setAttribute("id", `${title.replace(/\s/g, "").toLowerCase()}`);

  // data-nav="Section 1"
  sectionEl.setAttribute("data-nav", title);

  const div = document.createElement("div");
  div.classList.add("landing__container");
  const h2 = document.createElement("h2");
  h2.innerText = title;

  const p = document.createElement("p");
  p.innerText = description;

  const imgElment = document.createElement("img");
  imgElment.setAttribute("src", img);

  div.appendChild(h2);
  div.appendChild(p);

  sectionEl.appendChild(div);
  sectionEl.appendChild(imgElment);
  fragment.appendChild(sectionEl);

  // Build menu
  const anchor = document.createElement("a");
  anchor.innerText = title;
  anchor.setAttribute("href", `#${title.replace(/\s/g, "").toLowerCase()}`);
  anchor.setAttribute("data-menu-name", title);

  // active class
  if (index == 0) {
    sectionEl.classList.add("active");
    anchor.classList.add("active");
  }
  navFragment.appendChild(anchor);
});

main.appendChild(fragment);
navbar__list.appendChild(navFragment);

const menuItems = navbar__list.getElementsByTagName("a");
for (let item of menuItems) {
  item.addEventListener("click", (e) => {
    // remove active from other items
    for (let item of menuItems) {
      item.classList.remove("active");
    }

    // add active to current item
    e.preventDefault();
    item.classList.add("active");

    // navigate to section
    document
      .querySelector(item.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });

    // remove active class from other sections
    const sectionsItems = main.getElementsByTagName("section");
    for (let section of sectionsItems) {
      section.classList.remove("active");
    }
    // add active to current section
    document
      .getElementById(
        item.getAttribute("data-menu-name").replace(/\s/g, "").toLowerCase()
      )
      .classList.add("active");
  });
}

// Add class 'active' to section when near top of viewport

const sectionsItems = main.getElementsByTagName("section");
document.addEventListener("scroll", (e) => {
  scrollButton.classList.add("hidden");
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 40) {
    scrollButton.classList.remove("hidden");
    page__header.classList.remove("hidden");
  }

  // menu
  for (let item of menuItems) {
    item.classList.remove("active");
  }

  for (let section of sectionsItems) {
    // section
    const h2 = section.querySelector("h2");
    if (isInView(h2)) {
      section.classList.add("active");

      document
        .querySelector(
          `a[data-menu-name="${section.getAttribute("data-nav")}"]`
        )
        .classList.add("active");
    } else {
      section.classList.remove("active");
    }
  }
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

/** Scroll to top button **/

let intervalId = 0; // Needed to cancel the scrolling when we're at the top of the page

function scrollStep() {
  // Check if we're at the top already. If so, stop scrolling by clearing the interval
  if (window.pageYOffset === 0) {
    clearInterval(intervalId);
  }
  window.scroll(0, window.pageYOffset - 50);
}

function scrollToTop() {
  // Call the function scrollStep() every 16.66 millisecons
  intervalId = setInterval(scrollStep, 16.66);
}

// When the DOM is loaded, this click handler is added to our scroll button
scrollButton.addEventListener("click", scrollToTop);
