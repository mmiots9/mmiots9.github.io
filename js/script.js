// Get elements
const projectCont = document.querySelector('.projects-box-cont');

// Render project boxes

for (let i = 0; i < projectsSource.length; i++) {
  // 1. Create box
  const box = createBox(i);

  // 2. Add box to project container
  projectCont.innerHTML += box;
}


function createBox(i) {
    // Create constants
    const title = projectsSource[i].title;
    const url = projectsSource[i].url;
    const img = projectsSource[i].img;
    const alt = projectsSource[i].alt;
    const description = projectsSource[i].description;

    // Create code
    return `<a href="${url}" target="_blank">
                <div class="project-container">  
                        <img src="${img}" alt="${alt}" class="project-image">
                        <h3 class="project-title">${title}</h3>
                        <p class="project-description">${description}</p>
                </div>
            </a>`;
}