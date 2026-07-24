export interface Thesis {
  title: string;
  desc: string;
}

export interface Education {
  year: string;
  type: string;
  degree: string;
  university: string;
  desc: string;
  thesis?: Thesis;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  desc?: string;
  points?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  image: string;
  status?: string;
  link?: string;
  icon?: string;
}
