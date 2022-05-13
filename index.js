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
          seeProjects();
          break;
        case "Games":
          createProjects(gameProjects);
          seeProjects();
          break;
        case "Tools":
          createProjects(toolProjects);
          seeProjects();
          break;
        case "CSS Art":
          createProjects(cssArtProjects);
          seeProjects();
          break;
        case "Other":
          createProjects(otherProjects);
          seeProjects();
          break;
        case "API":
          createProjects(apiProjects);
          seeProjects();
          break;
      }
    })
  );

  createProjects(otherProjects);

  const seeProjects = () => {
    const seeProjectBtn = [...document.querySelectorAll(".see-project")];

    seeProjectBtn.forEach((button) =>
      button.addEventListener("click", () => {
        const popUp = document.createElement("div");
        popUp.classList.add("popup");
        popUp.innerHTML = `<button class="exit"><i class="fas fa-times"></i></button>`;

        const mainSection = document.querySelector("main");
        mainSection.appendChild(popUp);

        document.body.style.overflowY = "hidden";
        sideNav.style.visibility = "hidden";
        projectsSection.style.visibility = "hidden";
        mainSection.classList.toggle("margin-zero");

        const exitBtn = [...document.querySelectorAll(".exit")];

        for (let k = 0; k < exitBtn.length; k += 1) {
          exitBtn[k].addEventListener("click", () => {
            popUp.remove();
            document.body.style.overflowY = "scroll";
            projectsSection.style.visibility = "visible";
            sideNav.style.visibility = "visible";
            mainSection.classList.toggle("margin-zero");
          });
        }
      })
    );
  };
  seeProjects();
};
