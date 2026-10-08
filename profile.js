const profiles = {
  master: {
    profile: "Multilingual nuclear engineer, computational researcher, and international technical professional with over a decade of experience spanning nuclear power development, high-performance computing (HPC), probabilistic safety analysis, and advanced materials research. Proven track record in bridging advanced computational engineering (CUDA, C++, Python, Monte Carlo, Machine Learning) with practical energy systems, nuclear security, and international capacity building. Active peer reviewer for IOP journals and published researcher in techno-economics, multiphysics simulation, Density Functional Theory (DFT), and High-Entropy Alloys (HEAs). Passionate about leveraging scientific computing, ML, and techno-economic modeling to solve complex challenges in clean energy, fusion, small modular reactors (SMRs), and sustainable development.",
    values: [
      ["Computational Engineering & HPC", "GPU-accelerated Monte Carlo/MCMC, CUDA, C++, Python, and Dockerized scientific workflows (LAMMPS, GEANT4) for complex system modeling."],
      ["Advanced Materials, DFT & ML", "Researching radiation damage, grain-boundary segregation in Hastelloy-N, and vacancy formation in High-Entropy Alloys (HEAs) using DFT and Machine Learning."],
      ["Techno-Economics & Energy Policy", "Evaluating the viability of Small Modular Reactors (SMRs) for behind-the-meter data-center power provision in Sub-Saharan Africa."],
      ["Nuclear Power & Safety", "Extensive experience with Nigeria's NPP deployment, probabilistic safety analysis (PSA), RAMS, dynamic reliability, and nuclear security (CNSP)."],
      ["International Cooperation & Leadership", "Board Member of IYNC, Founder of NYGN and Stepup Nuclear, and host of the AfriNuke Podcast driving African nuclear capacity building."],
      ["Multiphysics & System Codes", "Proficient in COMSOL, ANSYS, MOOSE, MARS-KS, RELAP5, MAAP, and PCTRAN for thermal-hydraulics, severe accident analysis, and system integration."]
    ],
    experience: [
      {title: "PhD Researcher – Nuclear Engineering & Materials", org: "Xi'an Jiaotong University, China", dates: "2024–Present", bullets: ["Conducting advanced research on radiation-induced defect evolution, DFT-validated potentials, and ML-driven materials discovery.", "Developing computational approaches and techno-economic models for advanced energy systems, SMRs, and MSRs.", "Utilizing HPC, LAMMPS, VASP, and scientific simulation tools for materials and energy research."]},
      {title: "Senior Scientific Officer / Assistant Lecturer", org: "Nigeria Atomic Energy Commission (NAEC)", dates: "2010–2024", bullets: ["Supported technical activities for Nigeria's nuclear power development programme, including preconstruction planning and techno-economic assessments.", "Delivered technical training, supervised engineering computing projects, and supported national capacity-building.", "Prepared technical reports and coordinated stakeholder engagement across ministries and international bodies."]},
      {title: "Engineering Researcher – Nuclear Systems & HPC", org: "UNIST, South Korea", dates: "2016–2018", bullets: ["Developed GPU-accelerated Monte Carlo and MCMC workflows using NVIDIA GPGPU and CUDA (>10x speedup).", "Investigated the nexus between neutron transport and dynamic reliability analysis of nuclear systems.", "Produced technical publications and presented research at international symposia (R-CCS, IALCCE, PSAM)."]},
      {title: "Research Intern – Operations & Maintenance", org: "KHNP Central Research Institute, South Korea", dates: "2015", bullets: ["Worked in the O&M section, contributing to full-scope simulator development and background radiation studies.", "Gained practical exposure to nuclear plant technical activities, severe accident codes (MAAP), and radiation protection."]},
      {title: "Energy Infrastructure & Mining Operations", org: "SoftJoule / Trojan Mining, Nigeria", dates: "Project-based", bullets: ["Managed Bitcoin mining infrastructure and energy provisioning in resource-constrained environments.", "Balanced energy supply reliability, cost optimization, and system uptime for high-load hardware."]},
      {title: "Assistant Carrier Room Maintenance Officer", org: "Nigerian Telecommunications Limited (NITEL)", dates: "2006–2009", bullets: ["Maintained receiver modules, repeaters, and transmission stations at national telecommunications infrastructure.", "Performed hardware/mechanical maintenance and legacy-system troubleshooting."]}
    ],
    research: ["Computational Nuclear Engineering", "HPC & GPU Computing", "DFT & Atomistic Modeling", "Machine Learning for Materials", "High-Entropy Alloys (HEAs)", "Multiphysics Simulation", "Techno-Economics of SMRs", "Neutron Transport", "Radiation Damage & Materials", "Probabilistic Safety Analysis (PSA)", "Energy Systems & Data Centers", "Nuclear Security", "Peer Review (IOP Journals)"],
    skills: [
      ["Computing & HPC", "Python, C++, CUDA, MATLAB, Linux, Git, Docker, HPC, Monte Carlo, MCMC, OpenMP, Machine Learning."],
      ["Simulation & Modeling", "LAMMPS, GEANT4, VASP, Quantum Espresso, COMSOL, ANSYS, MOOSE, MARS-KS, RELAP5, MAAP, PCTRAN, SolidWorks."],
      ["Nuclear & Safety", "NPP systems, thermal hydraulics, neutron transport, RAMS, PSA, severe accident analysis, radioactive source security (CNSP)."],
      ["Leadership & Comm.", "Technical writing, science communication, podcasting (AfriNuke), stakeholder engagement, Peer Reviewer (IOP Environmental Sustainability)."],
      ["Languages", "English (fluent), Korean (advanced), Chinese (beginner), Igbo, Hausa, Yoruba."]
    ],
    publications: [
      "Mbazor JC, Ibrahim SA, Awodi N, Yao E. “Techno-economic viability of small modular reactors for behind-the-meter data-centre power provision in Sub-Saharan Africa.” SSRN Preprint (Under review at Applied Energy), 2026.",
      "Mbazor JC et al. “Tellurium grain-boundary segregation, trapping and cohesion loss in Ni and Hastelloy-N from a DFT-validated potential.” Modelling and Simulation in Materials Science and Engineering (Under Review), 2026.",
      "Mbazor JC et al. “Equilibrium grain-boundary chemistry suppresses deep tellurium traps in Hastelloy-N.” Journal of Nuclear Materials (Under Review), SSRN Preprint, 2026.",
      "Mbazor JC et al. “Machine Learning Prediction of Vacancy Formation Energies in CoNiCrFe High-Entropy Alloy: The Role of Atomic Descriptors and Local Chemical Order.” SSRN Preprint, 2026.",
      "J.C. Mbazor, M. Torbol, “Scalability of MCMC Algorithms on Different Parallel Frameworks,” R-CCS International Symposium, Kobe, Japan, 2019.",
      "J.C. Mbazor, M. Torbol, “Risk Analysis of Chemical Industrial Complex Using Parallel CUDA Algorithms,” IALCCE, Ghent, Belgium, 2018."
    ]
  },
  iaea: {
    profile: "Nuclear engineer and international technical professional with experience across Nigeria's nuclear programme, nuclear systems and reliability research in South Korea, current advanced research in China, and international nuclear capacity-building activities. Brings a practical combination of nuclear power development, safety and security, probabilistic risk/reliability analysis, techno-economic modeling for SMRs, advanced reactor materials (MSRs), computational engineering, technical communication, and stakeholder coordination. Active peer reviewer and published researcher with strong interest in supporting IAEA work in technical cooperation, nuclear safety and security, capacity building, programme delivery, and evidence-based engineering analysis.",
    values: [
      ["Nuclear Power Programmes", "Supported technical work related to Nigeria's first NPP deployment and preconstruction planning."],
      ["Techno-Economics & SMRs", "Evaluating the viability of Small Modular Reactors (SMRs) for behind-the-meter data-center power provision in Sub-Saharan Africa."],
      ["Advanced Reactor Materials", "Researching grain-boundary chemistry and tellurium trapping in Hastelloy-N, critical for Molten Salt Reactors (MSRs) and next-gen systems."],
      ["Safety & Reliability", "Probabilistic safety analysis, RAMS, risk assessment, dynamic reliability, seismic PSA."],
      ["Nuclear Security", "Certified Nuclear Security Professional; radioactive source security specialization; security risk research."],
      ["Technical Cooperation", "African nuclear capacity building, youth engagement (IYNC Board), international workshops and stakeholder coordination."]
    ],
    experience: [
      {title: "Senior Scientific Officer / Assistant Lecturer", org: "Nigeria Atomic Energy Commission (NAEC), Nigeria", dates: "2010–2024", bullets: ["Supported technical activities associated with Nigeria's nuclear power development programme, including planning and analysis of preconstruction approaches.", "Prepared and presented technical material for engineering and nuclear-sector stakeholders.", "Supported scientific training, technical capacity development, research activities and documentation."]},
      {title: "Engineering Researcher – Nuclear Engineering", org: "UNIST, South Korea", dates: "2016–2018", bullets: ["Developed reliability and risk models for complex systems, including nuclear power plant applications.", "Developed GPU-accelerated Monte Carlo/MCMC workflows using NVIDIA GPGPU platforms and CUDA.", "Investigated neutron transport, dynamic reliability and infrastructure risk; contributed to international technical publications."]},
      {title: "Research Intern – Operations & Maintenance", org: "KHNP Central Research Institute, South Korea", dates: "2015", bullets: ["Worked with the Operations and Maintenance section in a major nuclear-industry research environment.", "Supported energy-related workshops and technical knowledge exchange with experienced nuclear professionals."]},
      {title: "Assistant Carrier Room Maintenance Officer", org: "Nigerian Telecommunications Limited (NITEL)", dates: "2006–2009", bullets: ["Gained hands-on exposure to receiver modules, repeaters, transmission stations, hardware/mechanical maintenance and legacy-system troubleshooting."]}
    ],
    research: ["Nuclear Power Development", "Techno-Economics of SMRs", "Advanced Reactor Materials (Hastelloy-N/MSRs)", "Probabilistic Safety Analysis", "Reliability & Risk Engineering", "Neutron Transport", "HPC / CUDA", "Scientific Computing", "Nuclear Security", "Technical Cooperation", "Peer Review (IOP Journals)"],
    skills: [
      ["Safety & Security", "Nuclear safety, probabilistic safety analysis, risk assessment, RAMS, nuclear security, radioactive source security."],
      ["Nuclear / Engineering", "NPP systems, thermal hydraulics, neutron transport, materials, system modeling, reliability."],
      ["Computing", "Python, C++, CUDA, MATLAB, Linux, Git, Docker, HPC, Monte Carlo, MCMC, Machine Learning."],
      ["Simulation", "LAMMPS, VASP, Quantum Espresso, COMSOL, ANSYS, MOOSE, MARS-KS, RELAP5."],
      ["Communication", "Technical writing, training, presentations, stakeholder engagement, Peer Reviewer (IOP)."],
      ["Languages", "English (fluent), Korean (advanced), Igbo, Hausa, Yoruba; Chinese (beginner)."]
    ],
    publications: [
      "Mbazor JC, Ibrahim SA, Awodi N, Yao E. “Techno-economic viability of small modular reactors for behind-the-meter data-centre power provision in Sub-Saharan Africa.” SSRN Preprint (Under review at Applied Energy), 2026.",
      "Mbazor JC et al. “Equilibrium grain-boundary chemistry suppresses deep tellurium traps in Hastelloy-N.” Journal of Nuclear Materials (Under Review), SSRN Preprint, 2026.",
      "Mbazor JC et al. “Tellurium grain-boundary segregation, trapping and cohesion loss in Ni and Hastelloy-N from a DFT-validated potential.” Modelling and Simulation in Materials Science and Engineering (Under Review), 2026.",
      "J.C. Mbazor, M. Torbol, “Scalability of MCMC Algorithms on Different Parallel Frameworks,” R-CCS International Symposium, Kobe, Japan, 2019.",
      "J.C. Mbazor, M. Torbol, “Risk Analysis of Chemical Industrial Complex Using Parallel CUDA Algorithms,” IALCCE, Ghent, Belgium, 2018."
    ]
  },
  openstar: {
    profile: "Computational nuclear engineer and interdisciplinary researcher with experience spanning nuclear systems, high-performance computing, GPU-accelerated scientific computing, multiphysics simulation, and advanced materials research (DFT, Machine Learning, Hastelloy-N, High-Entropy Alloys). Experienced in developing numerical models, simulation workflows, and scientific software for complex physical and engineering systems. Particularly interested in fusion energy, advanced energy systems, plasma-material interactions, and the development of reliable technologies for scalable clean power.",
    values: [
      ["HPC & GPU Computing", "CUDA, GPGPU, parallel computing, Monte Carlo, MCMC, achieving >10x speedups over single-thread CPU execution."],
      ["Advanced Materials, DFT & ML", "Investigating Tellurium grain-boundary segregation in Hastelloy-N and using Machine Learning to predict vacancy formation energies in CoNiCrFe High-Entropy Alloys (HEAs)."],
      ["Multiphysics Simulation", "COMSOL, ANSYS, MOOSE, MATLAB/Simulink, LAMMPS, VASP, and Quantum Espresso for complex system modeling."],
      ["Materials & Radiation", "Researching radiation damage, defect evolution, and materials behavior under extreme environments."],
      ["Systems Engineering", "RAMS, probabilistic safety analysis, risk analysis, and performance assessment of complex energy systems."],
      ["Reproducible Science", "Linux, Docker, Git/GitHub, and porting scientific tools like LAMMPS and GEANT4 to containerized environments."]
    ],
    experience: [
      {title: "PhD Researcher – Materials & Radiation", org: "Xi'an Jiaotong University, China", dates: "2024–Present", bullets: ["Conducting research on radiation-induced defect evolution, grain-boundary segregation, and ML-driven materials discovery using HPC and DFT.", "Developing computational approaches for understanding degradation of advanced energy materials like Hastelloy-N and HEAs."]},
      {title: "Engineering Researcher – HPC & Nuclear Systems", org: "UNIST, South Korea", dates: "2016–2018", bullets: ["Developed GPU-accelerated Monte Carlo and MCMC computational workflows using NVIDIA Tesla K80.", "Optimized memory access and execution performance using GPU profiling tools.", "Investigated neutron transport and dynamic reliability analysis of nuclear power systems."]},
      {title: "Senior Scientific Officer", org: "Nigeria Atomic Energy Commission (NAEC)", dates: "2010–2024", bullets: ["Taught computational physics and supervised engineering computing projects.", "Developed technical studies concerning advanced energy systems and reliability."]}
    ],
    research: ["Computational Nuclear Engineering", "HPC & GPU Computing", "DFT & Atomistic Modeling", "Machine Learning for Materials", "High-Entropy Alloys (HEAs)", "Multiphysics Simulation", "Neutron Transport", "Radiation Damage", "Materials for Fusion/Energy Systems", "Dockerized Scientific Computing", "Systems Reliability"],
    skills: [
      ["Computing & HPC", "C++, Python, CUDA, OpenMP, Bash, Git, Linux, Docker, Machine Learning."],
      ["Simulation", "LAMMPS, GEANT4, VASP, Quantum Espresso, COMSOL, ANSYS, MOOSE, MARS-KS."],
      ["Nuclear Systems", "Neutron transport, reactor physics, thermal hydraulics, probabilistic safety analysis."],
      ["Research", "Scientific writing, data visualization, reproducible workflows, parallel algorithms, Peer Reviewer (IOP)."]
    ],
    publications: [
      "Mbazor JC et al. “Tellurium grain-boundary segregation, trapping and cohesion loss in Ni and Hastelloy-N from a DFT-validated potential.” Modelling and Simulation in Materials Science and Engineering (Under Review), 2026.",
      "Mbazor JC et al. “Equilibrium grain-boundary chemistry suppresses deep tellurium traps in Hastelloy-N.” Journal of Nuclear Materials (Under Review), SSRN Preprint, 2026.",
      "Mbazor JC et al. “Machine Learning Prediction of Vacancy Formation Energies in CoNiCrFe High-Entropy Alloy: The Role of Atomic Descriptors and Local Chemical Order.” SSRN Preprint, 2026.",
      "J.C. Mbazor, M. Torbol, “Scalability of MCMC Algorithms on Different Parallel Frameworks,” R-CCS, 2019.",
      "J.C. Mbazor, M. Torbol, “Risk Analysis Using Parallel CUDA Algorithms,” IALCCE, 2018."
    ]
  },
  ipcc: {
    profile: "Multilingual nuclear engineer and sustainability researcher with extensive experience in international scientific cooperation, data-driven research, and policy-relevant technical reporting. Skilled in data analysis, literature synthesis, and interdisciplinary collaboration aligned with global climate and sustainability processes. Active peer reviewer for environmental journals.",
    values: [
      ["Research & Technical Writing", "Supporting author teams, compiling technical reports, and managing references for international assessments."],
      ["Data Analysis & Visualization", "Proficient in Python, R, and statistical analysis for climate, energy, and sustainability datasets."],
      ["International Cooperation", "Engaging stakeholders across institutions and promoting sustainable development in the Global South."],
      ["Policy Engagement", "Bridging the gap between complex engineering data and actionable sustainability policy."],
      ["Workflow Automation", "Using Git/GitHub and scripting to streamline large-scale literature reviews and data management."],
      ["Inclusive Science", "Advocating for Indigenous Knowledge and region-specific experiences in global assessments."]
    ],
    experience: [
      {title: "Scientific Officer / Lecturer", org: "Nigeria Atomic Energy Commission (NAEC)", dates: "2010–Present", bullets: ["Supported research dissemination, literature review, and stakeholder coordination across ministries.", "Delivered technical training and supported policy dialogue on sustainable energy and resilience."]},
      {title: "Engineering Researcher", org: "UNIST & Xi'an Jiaotong University", dates: "2016–Present", bullets: ["Conducted scientific literature synthesis and contributed to international research reports.", "Developed reproducible analysis workflows and figures using Python and R."]},
      {title: "Technical Cooperation Advocate", org: "Generation Atomic / NYGN", dates: "2019–Present", bullets: ["Engaged in climate and clean-energy advocacy through data-driven communication campaigns.", "Supported integration of local knowledge and public awareness on sustainable technology."]}
    ],
    research: ["Climate & Energy Policy", "Sustainable Development", "Data Analysis (Python/R)", "Technical Editing", "Literature Synthesis", "Science Communication", "Stakeholder Engagement", "Peer Review (IOP Environmental)"],
    skills: [
      ["Data & Computing", "Python, R, Excel, Git/GitHub, Workflow Automation, Data Visualization."],
      ["Research Support", "Literature review, reference management (EndNote/Mendeley), quality assurance, technical editing."],
      ["Communication", "Scientific writing, cross-cultural collaboration, policy dialogue, podcasting."],
      ["Languages", "English (fluent), Chinese, Korean, Hausa, Yoruba, Igbo."]
    ],
    publications: [
      "Mbazor JC, Ibrahim SA, Awodi N, Yao E. “Techno-economic viability of small modular reactors for behind-the-meter data-centre power provision in Sub-Saharan Africa.” SSRN Preprint (Under review at Applied Energy), 2026.",
      "Dynamic Reliability Modelling for Sustainable Energy Programme Execution.",
      "Seismic Risk Analysis of Energy Systems Under Disaster Conditions.",
      "Nuclear Power Plant Security and Sustainability Risk Assessment."
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
const profileName = params.get('profile') || 'master';
const data = profiles[profileName] || profiles.master;

const titles = {
  master: 'Jeremiah Mbazor | Comprehensive Professional Profile',
  iaea: 'Jeremiah Mbazor | IAEA Professional Profile',
  openstar: 'Jeremiah Mbazor | Computational Nuclear Engineer & HPC',
  ipcc: 'Jeremiah Mbazor | Sustainability & Climate Research',
  template: 'Jeremiah Mbazor | Professional Profile'
};
document.title = titles[profileName] || 'Jeremiah Mbazor | Professional Profile';

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
