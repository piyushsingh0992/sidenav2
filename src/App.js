
import './App.css';
import Sidenav2 from "./sidenav2/Sidenav2.js";
function App() {
  let section = [
    { text: "Installation", link: "installation" },
    { text: "Action button", link: "actionButton" },
    { text: "Alert", link: "alert" },
    { text: "Avatar", link: "avatar" },
    { text: "Badge", link: "badge" },
    { text: "Button", link: "button" },
    { text: "Card", link: "card" },
    { text: "Check-box", link: "checkBox" },
    { text: "Chip", link: "chip" },
    { text: "Dropdown", link: "dropdown" },
    { text: "Footer", link: "footer" },
    { text: "Loader", link: "loader" },
    { text: "Modal", link: "modal" },
    { text: "Navigation bar", link: "navbar" },
    { text: "Pagination", link: "pagination" },
    { text: "Rating", link: "rating" },
    { text: "Side Navgation bar 1", link: "sidenav21" },
    { text: "Side Navgation bar 2", link: "sidenav22" },
    { text: "Slider", link: "slider" },
    { text: "SlideShow", link: "slideShow" },
    { text: "Snackbar", link: "snackbar" },
    { text: "Stepper", link: "stepper" },
    { text: "Switch", link: "switch" },
    { text: "Text-Field", link: "textField" },
    { text: "Responsive-Images", link: "images" },
  ];

  
  let routes=[{ text: "HOME" },{ text: "GITHUB" }]
  // routeArray={} brand={}

  return (
    <div classtext="App">
      <Sidenav2 optionArray={section} routeArray={routes} brand={{text:'Moonlight'}} />
    </div>
  );
}

export default App;
