import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Safwan | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: 'Click here to explore',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am currently a year 3 student in Temasek Polytechnic pursuing a Diploma in Cybersecurity and Digital Forensics. Cybersecurity has always been a big interest of mine that was sparked when I was a kid reading and watching videos about hackers and ethical hackers. ',
  paragraphTwo: 'When I am not working on school projects, I enjoy participating in capture the flags and hackathons on Ctftime or Hackthebox. I also have a big interest in learning and researching new things such as blockchain technology, particularly about how we can utilise it in aspects such as cyber security or even supply chains in companies to make our lives better or more efficient.',
  paragraphThree: 'Other hobbies I have include researching and finding new crypto projects to invest in. I also enjoy collecting and reselling sneakers.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'auditthing.jpg',
    title: 'Audit Thing - Linux auditing tool based on CIS CentOS 8 Benchmark',
    info: 'For my final year project, me and my team were assigned the topic of Linux Auditing tool. We decided to go with a centOS 8 envirmonment as it is what we were taught during our IT Security Management and Audit module in our previous semester. Our goal was to make a tool that simplifies and speeds up auditing a linux machine for security vulnerabilities. Users would be able to also download their needed audit configuration based on the type of system they are using, from a website I created that is easy to navigate',
    info2: '',
    url: 'https://github.com/safwan234567/Linux-Auditing-Major-Project',
    repo: 'https://github.com/safwan234567/Linux-Auditing-Major-Project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'securewebsite.png',
    title: 'OWASP Top 10 secure website',
    info: 'During my second year of my Diploma in Cybersecurity and Digital Forensics during my Secure Web Development module, I created a secure website, using threat modeling and STRIDE to plan what security measures I would need for a course website. I implemented things such as sessions, xss protection, sanitised inputs using regular expression and prepared statements. The project was done in a group and we used agile workflow to finish everything on time and efficiently.',
    info2: '',
    url: 'https://github.com/safwan234567/SWAP-Project',
    repo: 'https://github.com/safwan234567/SWAP-Project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ehip.png',
    title: 'Ethical hacking project',
    info: 'During my Ethical Hacking and Intrusion Prevention module, we were tasked to find as many vulnerabilities in the machines and to exploit them to gain access to as much data as possible on the machines. I was not given the login info to any of the machines and had to hack my way into the OSGW machine from my Kali linux machine. I used tools such as nmap, metasploit, john the ripper and others to hack into these machines (which comprised of both Windows and Linux systems).',
    info2: 'After using the exploits, I had to write a report to write about the impact, CVSSv3 Vectors, descripttion of the attack, and the recommendations to prevent the exploit from working in the future.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'safwanshah.work@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
   /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },*/
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/safwan-shahjehan-b5648820b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/safwan234567',
    },
  ],
};

// Github start/fork buttons
/*export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};*/
