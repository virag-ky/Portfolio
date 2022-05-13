import apiProjects from "./objects/api-projects.js";
import toolProjects from "./objects/tool-projects.js";
import gameProjects from "./objects/games.js";
import cssArtProjects from "./objects/css-art.js";
import cloneProjects from "./objects/clone.js";
import otherProjects from "./objects/other.js";

window.onload = () => {
  const menu = document.getElementById("menu");
  const sideNav = document.getElementById("side-nav");
  const projectsSection = document.getElementById("main-div");
  const projectsNavbar = [...document.getElementsByClassName("projects-nav")];

  menu.addEventListener("click", () => {
    sideNav.classList.toggle("hidden");
    menu.classList.toggle("slide");
  });

  const createProjects = (currentProjects) => {
    projectsSection.innerHTML = "";
    for (let i = 0; i < currentProjects.length; i += 1) {
      const projectsDiv = document.createElement("div");
      projectsDiv.setAttribute("class", "project");
      projectsDiv.innerHTML = `
  <img src=${currentProjects[i].image} alt="project" id="image-${currentProjects[i].id}">
  <h3>${currentProjects[i].title}</h3>
  <div class="languages-tools"></div>
  <button class='see-project'>See Project</button>
  `;

      for (let j = 0; j < currentProjects[i].languagesTools.length; j += 1) {
        const span = document.createElement("span");
        span.innerText = currentProjects[i].languagesTools[j];

        const languagesToolsDiv = [
          ...document.getElementsByClassName("languages-tools"),
        ];
        languagesToolsDiv.forEach((div) => div.appendChild(span));
        projectsSection.appendChild(projectsDiv);
      }
    }
  };

  projectsNavbar.forEach((item) =>
    item.addEventListener("click", (e) => {
      switch (e.target.innerText) {
        case "Clone":
          createProjects(cloneProjects);
          break;
        case "Games":
          createProjects(gameProjects);
          break;
        case "Tools":
          createProjects(toolProjects);
          break;
        case "CSS Art":
          createProjects(cssArtProjects);
          break;
        case "Other":
          createProjects(otherProjects);
          break;
        case "API":
          createProjects(apiProjects);
          break;
      }
    })
  );
  createProjects(otherProjects);
};
