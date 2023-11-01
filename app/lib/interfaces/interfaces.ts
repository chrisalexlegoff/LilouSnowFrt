// SEO
export interface seoProps {
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    canonicalURL: string;
    metaImage: { data: { attributes: { url: string } } };
    metaRobots: string;
    metaSocial: [];
  };
}

// Accueil mobile
export interface homeMobileProps {
  h1Sun: string;
  h2Sun: string;
  h3Sun: string;
  h2Sdeux: string;
  paragrapheSdeux: string;
  imagesSun: any;
  imagesSdeux: any;
  buttonSdeux: string;
}

export interface sectionsProps {
  logoWhite: boolean;
  category?: string;
}

export interface maintenanceProps {}

export interface maintenanceMobileProps {}

export interface maintenanceDesktopProps {}

export interface reseauxProps {
  homeIcon?: boolean;
  slug: string[];
  link?: string[];
  classname: string;
  colorIcon: string;
  widthIcon: string;
  heightIcon: string;
}

export interface questionsProps {
  classname: string;
  nombreElementsAffiches: number;
  isMobile: boolean;
}

export interface loaderProps {
  color: string;
  width: string;
  height: string;
  classname?: string;
}

export interface ScrollToTopProps {
  colorFill: string;
  colorStroke: string;
  width: string;
  height: string;
}

export interface flecheProps {
  color: string;
}

export interface hexogoneProps {
  colorFond: string;
  colorPath: string;
}

export interface videoProps {
  classname: string;
  videoName: string;
}

export interface retourProps {
  color: string;
  classname: string;
}

export interface reactPlayerButtonProps {
  color: string;
  classname: string;
}
export interface sliderProps {
  imageSrcBefore: string;
  imageSrcAfter: string;
}
