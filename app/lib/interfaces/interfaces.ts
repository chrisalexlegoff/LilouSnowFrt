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

export interface accueilProps {}

export interface maintenanceProps {}

export interface maintenanceMobileProps {}

export interface maintenanceDesktopProps {}

export interface reseauxProps {
  homeIcon: boolean;
  slug: string[];
  link?: string[];
  classname: string;
}
