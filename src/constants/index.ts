import { Locale, Localization } from "models/localization";
import { Project } from "models/project";
import { Skill } from "models/skill";
import { Technique } from "models/technique";

import localizationsEnJson from "./localizations/en.json";
import localizationsNlJson from "./localizations/nl.json";
import projectsEnJson from "./projects/en.json";
import projectsNlJson from "./projects/nl.json";
import skillsJson from "./skills/skills.json";

export const localizations: Record<Locale, Localization> = {
  en: localizationsEnJson,
  nl: localizationsNlJson,
};

export const projects: Record<Locale, Project[]> = {
  en: projectsEnJson as Project[],
  nl: projectsNlJson as Project[],
};

export const skills: Record<Skill, Technique[]> = {
  frontend: skillsJson.frontend as Technique[],
  backend: skillsJson.backend as Technique[],
  tool: skillsJson.tool as Technique[],
};

export default {
  localizations,
  projects,
  skills,
};
