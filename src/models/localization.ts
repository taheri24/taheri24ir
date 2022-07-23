import { NavigationItem } from "models/navigation";
import { Technique } from "models/technique";

export type Locale = "en" | "nl";

export type Localization = {
  site: {
    title: string;
    navigation: Record<NavigationItem, string>;
  };
  intro: {
    title: string;
    description: {
      line1: string;
      line2: string;
    };
    showWork: string;
  };
  projects: {
    subtitle: string;
    title: string;
    seeProject: string;
    previous: string;
    next: string;
  };
  skills: {
    subtitle: string;
    title: string;
    frontend: string;
    backend: string;
    tool: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
  techniques: Record<Technique, string>;
};

export type Namespace = keyof Localization;
