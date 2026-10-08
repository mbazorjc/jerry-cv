const profiles = {
  iaea: {
    profile: `Nuclear engineer and international technical professional with experience across Nigeria's nuclear programme, nuclear systems and reliability research in South Korea, current advanced research in China, and international nuclear capacity-building activities. Brings a practical combination of nuclear power development, safety and security, probabilistic risk/reliability analysis, computational engineering, technical communication, and stakeholder coordination. Strong interest in supporting IAEA work in technical cooperation, nuclear safety and security, capacity building, programme delivery, and evidence-based engineering analysis.`,
    values: [
      ["Nuclear Power Programmes", "Supported technical activities associated with Nigeria's nuclear power development programme, including preconstruction planning."],
      ["Safety & Reliability", "Probabilistic safety analysis, RAMS, risk assessment, dynamic reliability and seismic PSA experience."],
      ["Nuclear Security", "Certified Nuclear Security Professional, radioactive source security specialization, and nuclear security risk research."],
      ["Technical Cooperation", "African nuclear capacity building, youth engagement, international workshops and stakeholder coordination."],
      ["Computational Analysis", "Python, C++, CUDA, Monte Carlo/MCMC, Linux, scientific simulation and data analysis."],
      ["Communication", "Technical writing, training, presentations, public engagement and cross-cultural collaboration."]
    ],
    experience: [
      {title: "Senior Scientific Officer / Assistant Lecturer", org: "Nigeria Atomic Energy Commission (NAEC), Nigeria", dates: "2019–Present", bullets: ["Supported technical activities associated with Nigeria's nuclear power development programme, including planning and analysis of preconstruction approaches.", "Prepared and presented technical material for engineering and nuclear-sector stakeholders.", "Supported scientific training, technical capacity development, research activities and documentation."]},
      {title: "Engineering Researcher – Nuclear Engineering", org: "UNIST, South Korea", dates: "2016–2018", bullets: ["Developed reliability and risk models for complex systems, including nuclear power plant applications.", "Developed GPU-accelerated Monte Carlo/MCMC workflows using NVIDIA GPGPU platforms and CUDA.", "Investigated neutron transport, dynamic reliability and infrastructure risk; contributed to international technical publications."]},
      {title: "Research Intern – Operations & Maintenance", org: "KHNP Central Research Institute, South Korea", dates: "2015", bullets: ["Worked with the Operations and Maintenance section in a major nuclear-industry research environment.", "Supported energy-related workshops and technical knowledge exchange with experienced nuclear professionals."]},
      {title: "Assistant Carrier Room Maintenance Officer", org: "Nigerian Telecommunications Limited (NITEL)", dates: "2006–2009", bullets: ["Gained hands-on exposure to receiver modules, repeaters, transmission stations, hardware/mechanical maintenance and legacy-system troubleshooting."]}
    ],
    research: ["Nuclear Power Development", "Probabilistic Safety Analysis", "Reliability & Risk Engineering", "Neutron Transport", "Radiation Damage", "Materials for Energy Systems", "HPC / CUDA", "Scientific Computing", "Nuclear Security", "Technical Cooperation"],
    skills: [
      ["Safety & Security", "Nuclear safety, probabilistic safety analysis, risk assessment, RAMS, nuclear security, radioactive source security."],
      ["Nuclear / Engineering", "NPP systems, thermal hydraulics, neutron transport, materials, system modeling, reliability."],
      ["Computing", "Python, C++, CUDA, MATLAB, Linux, Git, Docker, HPC, Monte Carlo, MCMC."],
      ["Simulation", "LAMMPS, VASP, Quantum Espresso, COMSOL, ANSYS, MOOSE, MARS-KS, RELAP5."],
      ["Communication", "Technical writing, training, presentations, stakeholder engagement and science communication."],
      ["Languages", "English (fluent), Korean (advanced), Igbo, Hausa, Yoruba; Chinese (beginner)."]
    ],
    publications: [
      "J.C. Mbazor, M. Torbol, “Scalability of MCMC Algorithms on Different Parallel Frameworks,” R-CCS International Symposium, Kobe, Japan, 2019.",
      "J.C. Mbazor, M. Torbol, “Risk Analysis of Chemical Industrial Complex Using Parallel CUDA Algorithms,” IALCCE, Ghent, Belgium, 2018.",
      "J.C. Mbazor, M. Torbol, “The Nexus between Neutron Transport Equation and Dynamic Reliability Analysis of NPPs,” IYNC, Hangzhou, China, 2016.",
      "J.C. Mbazor, D.S. Kessel, “Nuclear Security Risk Analysis in Nuclear Power Plant Decommissioning Phase,” ANS Winter Meeting, 2015."
    ]
  },
  template: {
    profile: "Replace this text with a target-specific professional profile.",
    values: [["Target 1", "Value proposition."], ["Target 2", "Value proposition."], ["Target 3", "Value proposition."]],
    experience: [],
    research: ["Add research focus", "Add technical capability"],
    skills: [["Skills", "Replace with target-specific skills."]],
    publications: []
  }
};

const params = new URLSearchParams(window.location.search);
const profileName = params.get('profile') || 'iaea';
const data = profiles[profileName] || profiles.iaea;

document.title = profileName === 'iaea'
  ? 'Jeremiah Mbazor | IAEA Professional Profile'
  : 'Jeremiah Mbazor | Professional Profile';

document.getElementById('profileText').textContent = data.profile;

document.getElementById('valueCards').innerHTML = data.values.map(([h,p]) => `
  <article class="card"><h3>${h}</h3><p>${p}</p></article>
`).join('');

document.getElementById('experienceList').innerHTML = data.experience.map(e => `
  <article class="experience-item">
    <h3>${e.title}</h3>
    <div class="meta">${e.org} · ${e.dates}</div>
    <ul>${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
  </article>
`).join('') || '<p>Add target-specific experience in <code>profile.js</code>.</p>';

document.getElementById('researchList').innerHTML = data.research.map(r => `<span class="tag">${r}</span>`).join('');

document.getElementById('skillsGrid').innerHTML = data.skills.map(([h,p]) => `
  <article class="skill-box"><h3>${h}</h3><p>${p}</p></article>
`).join('');

document.getElementById('publicationList').innerHTML = data.publications.map(p => `<div class="publication">${p}</div>`).join('') || '<p>Add target-specific publications.</p>';
