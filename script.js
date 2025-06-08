const searchInput = document.getElementById("searchInput");
const courseResults = document.getElementById("courseResults");

// Mapping keywords to course detail pages
const courseMap = {
  "web development": "course_details/web_development.html",
  "full stack": "course_details/web_development.html",
  "frontend": "course_details/web_development.html",
  "data science": "course_details/data_science.html",
  "machine learning": "course_details/data_science.html",
  "ui ux": "course_details/ui_ux_design.html",
  "ui/ux": "course_details/ui_ux_design.html",
  "design": "course_details/ui_ux_design.html"
};

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const query = searchInput.value.trim().toLowerCase();
    const matchedKey = Object.keys(courseMap).find(key => query.includes(key));

    if (matchedKey) {
      window.location.href = courseMap[matchedKey];
    } else {
      courseResults.innerHTML = `<p class="text-danger mt-3">Course not found!</p>`;
    }
  }
});
