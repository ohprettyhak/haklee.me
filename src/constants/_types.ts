export interface Period {
  start: string;
  end: string;
}

interface Link {
  website?: string;
  github?: string;
  application?: string;
}

export interface CommonAttributes {
  title: string;
  description: string;
  period: Period;
  technologies: string[];
  responsibilities: string[];
  links: Link;
  members: string;
}
