export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export const educationData: Education[] = [
  {
    degree: "10th",
    institution: "Sri Chaitanya Techno School",
    location: "Tenali",
    period: "2017 - 2018",
    description: "Completed Secondary Schooling with a Strong Foundation in Science and Mathematics."
  },
  {
    degree: "Inter",
    institution: "Sri Chaitanya Junior College",
    location: "Tenali",
    period: "2019 - 2020",
    description: "Built a solid foundation in analytical thinking, logical reasoning, and quantitative problem-solving. Participated in Olympiads and academic seminars, nurturing a keen interest in computer science"
  },
  {
    degree: "University",
    institution: "Koneru Lakshmaih University",
    location: "Vijayawada",
    period: "2022 - 2026",
    description: "Pursuing Bachelor of Technology (B.Tech) at KL University with a specialization in Game Development and UI/UX Design."
  }
];