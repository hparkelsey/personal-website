import job_hunter from "./job_hunter.gif";
import naqtracker from './naqtracker.gif';

const projects = [
  {
    id: "aa823",
    title: "Job Hunter",
    description: [
      {
        id: 111,
        text: "Allowed users to search for and apply to jobs posted on LinkedIn, Indeed, Glassdoor, ZipRecruiter, Dice and other job boards in a single platform.",
      },
      {
        id: 121,
        text: "Fetched job listings using the JSearch API and Axios to render job descriptions, qualifications, and responsibilities.",
      },
      {
        id: 131,
        text: "Implemented the search functionality to search for popular, nearby, full-time, part-time, and contract jobs.",
      },
    ],
    tech: [
      {
        id: 1000,
        name: "JavaScript",
      },
      {
        id: 1111,
        name: "React Native",
      },
      {
        id: 1222,
        name: "JSearch API",
      },
      {
        id: 1333,
        name: "React",
      },
    ],
    demoLink: "no",
    repoLink: "https://github.com/hparkelsey/job_hunter",
    variant: "fromLeft",
    image: job_hunter,
    translateY: "10",
  },
  {
    id: 1,
    title: "NAQTracker",
    description: [
      {
        id: 11,
        text: "Developed a Vanilla JavaScript web app in high school that digitizes the scorekeeping process of National Academic Quiz Tournament rounds.",
      },
      {
        id: 12,
        text: "Reduced human error, improved tournament efficiency, and guided users to easily keep accurate and consistent scores",
      },
      {
        id: 13,
        text: "Designed UI/UX and tested application in real NAQT rounds.",
      },
    ],
    tech: [
      {
        id: 111,
        name: "JavaScript",
      }
    ],
    demoLink: "no",
    repoLink: "https://github.com/hparkelsey/NAQTracker",
    variant: "fromLeft",
    image: naqtracker,
    translateY: "70",
  },
];

export default projects;
