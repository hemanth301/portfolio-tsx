export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  percentage: number;
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", percentage: 90 },
      { name: "TypeScript", percentage: 85 },
      { name: "Python", percentage: 80 },
      { name: "Java", percentage: 75 },
      { name: "C++", percentage: 65 },
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "React.js", percentage: 90 },
      { name: "HTML & CSS", percentage: 95 },
      { name: "Node.js", percentage: 85 },
      { name: "Angular", percentage: 70 },
      { name: "Vue.js", percentage: 65 },
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", percentage: 90 },
      { name: "Docker", percentage: 80 },
      { name: "AWS", percentage: 75 },
      { name: "Kubernetes", percentage: 65 },
      { name: "CI/CD", percentage: 80 },
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", percentage: 95 },
      { name: "Team Collaboration", percentage: 90 },
      { name: "Communication", percentage: 85 },
      { name: "Project Management", percentage: 80 },
      { name: "Leadership", percentage: 85 },
    ]
  }
];