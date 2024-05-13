import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastName}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city} ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/EduardoLoreto_${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/EduardoLoreto${variables.github}"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/eduardoloreto${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/eduardoloreto_${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "data:image/jpeg;base64,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",
    // this is the url for the profile avatar
    avatarURL:
      "https://media.licdn.com/dms/image/D4E03AQGpPMTB8GmK6g/profile-displayphoto-shrink_200_200/0/1665245310516?e=1721260800&v=beta&t=FchiturYb4k1hjzlTLaA9Xp8f8UXo4b6W8q9uvRxIkQ",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
