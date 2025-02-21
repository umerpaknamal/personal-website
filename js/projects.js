const projectsData = [
  {
    "title": "3-Tier Performance Management System for Managers",
    "role": "Appian Developer",
    "organization": "Allure Digital",
    "technologies": ["Appian", "MySql","Data Analytics", "UI/UX", "Process Model Design"],
    "key_features": [
      "Enable managers to design and deploy tailored performance evaluation surveys with dynamic question types.It Incorporates real-time peer reviews for each survey question,comes with an interactive dashboard to visualize performance metrics, trends, and actionable insights."
    ],
    "responsibilities": [
      "Designed and configured Appian interfaces, process models, and record types to automate survey workflows and feedback collection.",
      "Integrated peer review functionality using Appian’s SAIL forms and expression rules, ensuring real-time updates and data validation.",
      "Built the analytics dashboard with Appian’s reporting tools, leveraging data from MySQL databases for dynamic visualizations.",
      "Conducted end-to-end testing and debugging to ensure seamless user experiences across HR teams and employees."
    ]
  },
  
  {
    "title": "Human Resource Management System",
    "role": "Appian Developer",
    "organization": "Allure Digital",
    "technologies": ["Appian","Database Design", "UI/UX", "Process Model Design"],
    "key_features": [
      "Employee Management",
      "Payroll Management",
      "Attendance & Leave Management",
      "Task Management",
      "Performance Management"
    ],
    "responsibilities": [

      "Built Attendance Device Data Pipeline – Integrated biometric attendance devices with Appian, developing a data ingestion pipeline that processes and maps employee attendance logs to HR modules for accurate payroll calculations.",
      "Optimized Process Workflows – Created workflow automations for employee onboarding, leave management, and payroll approval.",
      "Agile Project Execution – Actively participated in Scrum and Kanban workflows, ensuring timely sprints and efficient task management in the project lifecycle."
    ]
  },
  {
    "title": "InvesDocs – Email workflow Management",
    "role": "Appian Developer",
    "organization": "Allure Digital",
    "technologies": ["Appian","Database Design", "UI/UX", "Process Model Design"],
    "key_features": [
      "Email Integration (Outlook, Gmail)",
      "Email Fetching & Rules",
      "Workflow Management",
      "Reporting",
      "Email System Features (send, receive, spam filtering, custom folders, categorizations)"
    ],
    "responsibilities": [
      "Contributed to the development of a workflow automation system in Appian, streamlining operations across multiple departments and eliminating manual processes.",
      "Implemented a real-time email retrieval architecture using webhooks, ensuring seamless integration with Gmail and Outlook APIs for automated email processing and workflow triggers.",
      "Leveraged REST APIs to connect Appian with email services, automating inbound and outbound email workflows for improved communication efficiency.",
    ]
  },
  {
    "title": "Azure GPT Email Labelling Automation",
    "role": "Backend Developer",
    "organization": "Allure Digital",
    "technologies": ["Azure GPT", "Python", "REST APIs", "Azure Functions"],
    "key_features": [
        "Content-based email analysis using Azure GPT",
        "Automatic categorization and labelling of emails",
        "Reduces manual effort and ensures accurate email sorting"
    ],
    "responsibilities": [
        "Developed a backend automation trigger for real-time email classification",
        "Integrated Azure GPT to analyze and label incoming emails based on content",
        "Designed and implemented a robust email sorting mechanism to improve workflow efficiency",
        "Ensured seamless integration with enterprise email systems",
        "Optimized system performance to handle high email traffic efficiently"
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
