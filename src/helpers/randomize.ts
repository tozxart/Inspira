import { Project } from "../components/types";

export function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getRandomProjectsForSlider(
  projects: Project[],
  count: number = 12
): Project[] {
  const validProjects = projects.filter(
    (project) =>
      project.images &&
      project.images.length > 0 &&
      (project.pinned || project.images.length >= 2)
  );

  return getRandomItems(validProjects, count);
}
