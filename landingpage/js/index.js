import { projectsData } from "./projects.js";

const container = document.getElementById('projects-container');

// console.log(projectsData)

projectsData.forEach(project => {
    const projectCard = document.createElement('a');
    projectCard.href = `/${project.path}`;
    projectCard.target = '_blank';
    projectCard.className = `project-card block bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg`;
    projectCard.innerHTML = `
            <div class="h-36 overflow-hidden bg-gray-200 rounded-t-xl relative group border-2 border-gray-100">
                <img src="${project.image || 'https://via.placeholder.com/600x400?text=Project+Screenshot'}" 
                    alt="${project.title}" 
                    class="w-full h-full object-cover transition-transform duration-300">
            </div>
            <div class="p-6">
                <h3 class="project-title text-xl font-semibold text-dark mb-2 transition-colors duration-300">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                ${project.tags.map(tag => `<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">${tag}</span>`).join('')}
                </div>
            </div>
    `
    container.appendChild(projectCard);
})


    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', ()=>{
        mobileMenu.classList.toggle('hidden');
    })

    // scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });