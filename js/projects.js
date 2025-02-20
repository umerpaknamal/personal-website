const projectsData = [
  {
    "title": "Web Portal for Networking Provider Company (USA)",
    "role": "Technical Project Manager",
    "organization": "Merik Solutions",
    "technologies": ["Stylus", "Pug", "Core PHP"],
    "key_features": [
      "Region-based restrictions and package offerings",
      "Online payment integration",
      "Portal control for enabling/disabling services",
      "Packages for smart devices (TV, cameras, AC, fans, doors, etc.)"
    ],
    "responsibilities": [
      "Oversaw a specific part of the portal",
      "Managed the team, created tasks, and ensured development, testing, and deployment",
      "Handled payment and receipt submission processes"
    ]
  },
  {
    "title": "Banking System for Employee Loans (Canada)",
    "role": "Scrum Master",
    "organization": "Merik Solutions",
    "technologies": ["Vue.js", "Python", "Django", "Flutter"],
    "key_features": [
      "Monthly loan offerings for employed individuals",
      "Integration with PayPal",
      "Auto-notifications for loan limits and recovery timelines"
    ],
    "responsibilities": [
      "Assisted the Product Manager in app development",
      "Facilitated Agile ceremonies",
      "Ensured timely delivery of features and bug fixes"
    ]
  },
  {
    "title": "Human Resource Management System",
    "role": "Appian Analyst | Product Scrum Master",
    "organization": "Allure Digital",
    "technologies": ["Java", "Appian"],
    "key_features": [
      "Employee Management",
      "Payroll Management (overtime, dynamic tax, deductions, salary slips)",
      "Attendance & Leave Management",
      "Document Management",
      "Task Management",
      "Employee Letters"
    ],
    "responsibilities": [
      "Gathered requirements and translated them into technical specifications",
      "Facilitated Scrum ceremonies",
      "Collaborated with stakeholders to deliver a working HRM solution"
    ]
  },
  {
    "title": "InvesDocs – Email Management Solution",
    "role": "Appian Analyst | Product Scrum Master",
    "organization": "Allure Digital",
    "technologies": ["Java", "Appian"],
    "key_features": [
      "Email Integration (Outlook, Gmail)",
      "Email Fetching & Rules",
      "Workflow Management",
      "Reporting",
      "Email System Features (send, receive, spam filtering, custom folders, categorizations)"
    ],
    "responsibilities": [
      "Designed and implemented email management workflows",
      "Ensured seamless integration with Outlook and Gmail",
      "Provided technical guidance to the development team",
      "Conducted testing and ensured the system met client requirements"
    ]
  }
];

function createProjectTabs() {
  const tabList = document.getElementById('projects-tab-list');
  tabList.innerHTML = projectsData.map((project, index) => `
    <li class="${index === 0 ? 'active' : ''}" data-index="${index}">
      ${project.title}
    </li>
  `).join('');
}

function createProjectContent(project) {
  return `
    <div class="project-header">
      <h3 class="project-title">${project.title}</h3>
      <span class="project-role">${project.role}</span>
      <span class="project-org"><i class="fas fa-building"></i> ${project.organization}</span>
    </div>
    
    <div class="project-body">
      <div class="tech-stack">
        ${project.technologies.map(tech => 
          `<span class="tech-item"><i class="fas fa-code"></i> ${tech}</span>`
        ).join('')}
      </div>
      
      <div class="project-features">
        <h4><i class="fas fa-star"></i> Key Features</h4>
        <ul>
          ${project.key_features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      
      <div class="project-responsibilities">
        <h4><i class="fas fa-tasks"></i> Responsibilities</h4>
        <ul>
          ${project.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

function showProject(index) {
  // Update tab active state
  const tabs = document.querySelectorAll('#projects-tab-list li');
  tabs.forEach(tab => tab.classList.remove('active'));
  tabs[index].classList.add('active');
  
  // Update content
  const contentContainer = document.getElementById('projects-content');
  contentContainer.innerHTML = createProjectContent(projectsData[index]);
}

function initializeProjects() {
  createProjectTabs();
  showProject(0); // Show first project by default
  
  // Add click handlers to tabs
  document.getElementById('projects-tab-list').addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (li) {
      const index = parseInt(li.dataset.index);
      showProject(index);
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProjects);
