// Centralized portfolio content for Jeaime Powell.
// Sourced from LinkedIn profile (Profile.pdf) provided by the user.

export const profile = {
  name: "Jeaime Powell",
  title: "Systems Analyst & Community Building Specialist",
  tagline:
    "Building bridges between high-performance computing, IoT, and the next generation of technologists.",
  location: "Orlando, Florida, United States",
  email: "jeaimehp@gmail.com",
  photo: "/jeaime-powell.jpg",
  links: {
    linkedin: "https://www.linkedin.com/in/jeaimehp",
    github: "https://github.com/jeaimehp",
  },
  summary:
    "IT Professional with diverse experience across multiple industries. Demonstrated ability to quickly learn and adapt to new technology. Exceptional problem-solving skills, especially when it comes to designing solutions. Detail-oriented and organized, as well as extremely efficient at multi-tasking. A leader who works well in collaborative environments.",
};

export const stats = [
  { label: "Years in IT", value: "20+" },
  { label: "Supercomputers Managed", value: "5" },
  { label: "Students Mentored", value: "100s" },
  { label: "Hackathons Chaired", value: "20+" },
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "High-Performance Computing",
    icon: "server",
    skills: [
      "Cray XC40 / XC30 Administration",
      "Lustre & GPFS Filesystems",
      "InfiniBand Infrastructure",
      "Bright Cluster Manager",
      "Linux Cluster Sysadmin",
      "LSF & Slurm Scheduling",
      "XSEDE / ACCESS Campus Champion",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "cloud",
    skills: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Globus Connect Server",
      "DDN GridScaler",
      "EMC Shared Storage",
      "10Gb / 100Gb Ethernet",
    ],
  },
  {
    title: "IoT & Embedded Systems",
    icon: "cpu",
    skills: [
      "Arduino & Raspberry Pi",
      "ESP32 / C++ Firmware",
      "Mosquitto (MQTT) & TCP/IP",
      "Environmental Sensors",
      "Cellular IoT Networks",
      "Fused Deposition Modeling (3D Printing)",
    ],
  },
  {
    title: "AI & Emerging Tech",
    icon: "brain",
    skills: [
      "Agentic AI Development",
      "AI for Application Building",
      "Blockchain — Ethereum / Helium / Solaris",
      "Smart Contract Development",
      "Remote Sensing & AVHRR Imagery",
      "Neural Network Image Classification",
    ],
  },
  {
    title: "Education & Community",
    icon: "graduation-cap",
    skills: [
      "Curriculum Development",
      "STEM Outreach (K-12)",
      "Hackathon Organizing (HackHPC.org)",
      "Criterion-Referenced Instruction",
      "Workforce Development",
      "Cross-cultural Collaboration",
    ],
  },
  {
    title: "Programming & Tools",
    icon: "code",
    skills: [
      "C / Fortran (95, 2003)",
      "Linux / SUSE Enterprise",
      "Python Scripting",
      "Version Control (Git)",
      "PostgreSQL Databases",
      "Technical Documentation",
    ],
  },
];

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  duration: string;
  current?: boolean;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Systems Analyst",
    org: "Omnibond Systems LLC.",
    location: "Orlando, Florida",
    period: "Oct 2024 — Present",
    duration: "2 yrs 1 mo",
    current: true,
    highlights: [
      "Delivers systems analysis and engineering for Omnibond's identity and access management platform (OpenIAM) and supporting infrastructure.",
      "Bridges engineering teams and stakeholders to drive reliability, security, and product readiness across customer deployments.",
    ],
  },
  {
    role: "University Lecturer",
    org: "The University of Texas at Austin",
    location: "Austin, Texas",
    period: "Jan 2018 — Oct 2024",
    duration: "6 yrs 10 mo",
    highlights: [
      "Designed and taught SDS 322/392 (formerly 222/292) — Introduction to Scientific Programming in C and Fortran (95, 2003).",
      "Curriculum covered data types and structures, control structures, algorithms, performance measurement, and C/Fortran interoperability.",
      "Mentored hundreds of undergraduate and graduate students across scientific computing workflows.",
    ],
  },
  {
    role: "Senior Systems Administrator",
    org: "Texas Advanced Computing Center (TACC)",
    location: "Austin, Texas",
    period: "Apr 2017 — Sep 2024",
    duration: "7 yrs 6 mo",
    highlights: [
      "Researched and operated Information Systems supporting Environmental IoT Sensors, Decision Support Services, and HPC frameworks.",
      "Designed cloud-based back-end infrastructure for public-facing decision support systems across internal clouds, Microsoft Azure, Google Cloud Platform, and AWS.",
      "Deployed low-cost environmental sensors using Arduino and Raspberry Pi for funded research projects including µP-STREAM, PlanetTexas 2050, Stengl-Weyer Biosensing, and the Balcones Canyon Land Hook Fellowship.",
      "Mentored graduate and undergraduate students, fostering technical skills and guiding research projects.",
      "Developed and led curriculum for high-school STEM outreach specializing in Environmental Sensors, Robotics, Cybersecurity, and Arduino-based Wearables for underserved communities.",
      "Chaired the Organizing Committee for HackHPC.org, facilitating HPC and Cyber Infrastructure workforce development through hackathons for students, faculty, and cross-industry professionals.",
      "Maintained and expanded production storage resources, including Cray supercomputing hardware (Lonestar5).",
      "Provided Linux cluster systems administration support — diagnosing Linux kernel, module, and library performance issues.",
    ],
  },
  {
    role: "IoT Sensors Specialist",
    org: "Helios LLC",
    location: "Denver, Colorado",
    period: "Oct 2022 — Jun 2023",
    duration: "9 mo",
    highlights: [
      "Designed, coded, and tested firmware integrating in-situ microcontroller sensors with cloud services over cellular networks.",
      "Used Mosquitto (MQTT) and TCP/IP with C++ on an ESP32-based embedded system.",
      "Served as blockchain expert consultant for data confidentiality, integrity, and availability on Ethereum, Solaris, and Helium networks.",
      "Authored smart contracts on the Ethereum blockchain.",
      "Operated a fused deposition modeling 3D printing farm for micro-manufacturing.",
      "Liaised between electrical engineers, programming contractors, and executive project members.",
    ],
  },
  {
    role: "Systems Analyst",
    org: "Cray Inc.",
    location: "Greater Orlando",
    period: "Apr 2015 — Apr 2017",
    duration: "2 yrs 1 mo",
    highlights: [
      "Managed the secured Cray XC40 supercomputer (Surge) as a National Critical Infrastructure resource — GPFS, LSF, InfiniBand, Aires, Cray Linux Environment, SUSE Enterprise Linux, Bright Computing, DDN Gridscaler, EMC shared storage, and 10Gb/100Gb Ethernet.",
      "Attained and maintained security clearance per job requirement.",
      "Site team lead for the supercomputer maintenance crew.",
      "Successfully completed governmental agency system acceptance testing and processing.",
      "Certified on Cray XC30 Administrator & Hardware Support (Apr 2015) and DDN GridScaler / GPFS Administrator (Mar 2016).",
    ],
  },
  {
    role: "High Performance Computing Systems Administrator",
    org: "Old Dominion University",
    location: "Norfolk, Virginia",
    period: "Feb 2014 — Apr 2015",
    duration: "1 yr 3 mo",
    highlights: [
      "Oversaw comprehensive management of the Turing Community Cluster — a heterogeneous Cray/Dell RHEL cluster with Nvidia Tesla GPUs, Xeon Phi MICs, Lustre parallel storage, Isilon NFS, InfiniBand, and Bright Cluster Manager.",
      "Developed and delivered course materials for an HPC training program used by faculty, students, and technology staff.",
      "Implemented and maintained the Lustre file system to optimize storage functionality.",
      "Spearheaded implementation of Globus Connect Server for efficient data transfer.",
      "Chaired and hosted the inaugural campus-wide High-Performance Computing Day.",
    ],
  },
  {
    role: "Grid Manager",
    org: "Elizabeth City State University",
    location: "Elizabeth City, NC",
    period: "Jul 2006 — Jan 2014",
    duration: "7 yrs 7 mo",
    highlights: [
      "Administered the 64-node Umfort Linux Computing Cluster including user, storage, software, and hardware management.",
      "Apple XSERVE Systems Administrator — web servers, SAN storage, OpenDirectory, Quicktime Streaming, Xgrid, Podcast Producer.",
      "Systems lead for Seaspace Corporation Terascan satellite ground stations (1.5m L-Band, 2.4m GOES East and West dishes).",
      "Systems lead for the Aviation program's CSC Air Traffic Control Simulator and four Firebird Flight Simulators (full-motion, cockpit, and desktop stations).",
      "Lead systems analyst for IT Client Services special projects — grant writing for technology systems, new OS testing, mobile device network integration, cluster server room implementation, VDI, and CNC machine infrastructure.",
      "Research mentor for undergraduates in STEM.",
    ],
  },
  {
    role: "Technical Training Specialist",
    org: "Canon Information Technology Services",
    location: "Chesapeake, VA",
    period: "Dec 2002 — Jun 2007",
    duration: "4 yrs 7 mo",
    highlights: [
      "Crafted operational and technical training programs using the Criterion-Referenced Instruction methodology, complete with modular labs and skill checks.",
      "Lead instructor for Printers, Multifunction, Macintosh, Networking, and Small Office/Home Office product groups.",
      "Built a training inventory database system in Microsoft Access to streamline coordination.",
      "Developed Job Aids, Quick Reference Guides, Procedural Guides, Performance-based Labs, and Skill Checks.",
      "Authored Standard Operating Procedures (SOPs) used as operational guidelines.",
      "Presidential Excellence Award, January 2005.",
    ],
  },
];

export type Honor = {
  title: string;
  org?: string;
  year?: string;
  description?: string;
};

export const honors: Honor[] = [
  {
    title: "Graduate Leadership Award",
    org: "Elizabeth City State University",
  },
  {
    title: "PolarGrid Greenland Field Deployment Team",
    description:
      "Member of the PolarGrid field deployment team conducting cyberinfrastructure research in Greenland.",
  },
  {
    title: "Principal Investigator — µP-STREAM",
    description:
      "Micro-controller Platform Sending Telemetry Real-time for Earth's Adaptive Models.",
  },
  {
    title: "Principal Investigator — Cloudify Gateways (ODSACK)",
    description:
      "Federated Science Gateway for On-Demand Research Analysis and Collaborative Knowledge.",
  },
  {
    title: "Co-PI — [Pilot] HPC ED",
    description:
      "Building a Federated Repository and Increasing Access through Cybertraining.",
  },
  {
    title: "Presidential Excellence Award",
    org: "Canon Information Technology Services",
    year: "Jan 2005",
  },
];

export type Publication = {
  title: string;
  venue?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Development of an algorithm to predict coastal buoy temperature from Advanced Very High Resolution Radiometer (AVHRR)",
  },
  {
    title:
      "Methodology for Imagery Metadata Collection and Entry into a PostgreSQL Database using Stampede2",
  },
  {
    title:
      "Hands-on GPS and remote sensing training for high school learners during IGARSS 2009 in Cape Town, South Africa",
  },
  {
    title: "LEAF: Logger for ecological and atmospheric factors",
  },
  {
    title:
      "Spectroscopic Image Signature Classification of Land Cover Types using Multi-Spectral Data within a Neural Network",
  },
];

export type Certification = {
  name: string;
  org?: string;
  year?: string;
};

export const certifications: Certification[] = [
  { name: "A+ Certification" },
  { name: "Network+ Certification" },
  { name: "Security+ Certification" },
  { name: "AI for App Building" },
  {
    name: "Hack the Hackathon: Shaping the Future of Hackathon Research and Practice",
  },
  {
    name: "Cray XC30 Administrator and Hardware Support Certification",
    org: "Cray Inc.",
    year: "Apr 2015",
  },
  {
    name: "DDN GridScaler and GPFS Administrator Certification",
    org: "DDN",
    year: "Mar 2016",
  },
  {
    name: "Criterion-Reference Instruction Certification",
    org: "Canon",
    year: "Jun 2005",
  },
];

export type Education = {
  degree: string;
  field: string;
  org: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "PhD — In Progress",
    field: "Information Systems",
    org: "Dakota State University",
    period: "",
  },
  {
    degree: "Master's degree",
    field: "Applied Mathematics — Remote Sensing",
    org: "Elizabeth City State University",
    period: "2007 — 2010",
  },
  {
    degree: "Bachelor's degree",
    field: "Computer Science",
    org: "Elizabeth City State University",
    period: "1997 — 2004",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Honors", href: "#honors" },
  { label: "Publications", href: "#publications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
