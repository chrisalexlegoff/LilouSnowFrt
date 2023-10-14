import { Metadata } from "next";
import MaintenanceComponentDesktop from "../components/desktop/maintenance/maintenance";
import MaintenanceComponentMobile from "../components/mobile/maintenance/maintenance";
import { maintenanceProps } from "../lib/interfaces/interfaces";

export const metadata: Metadata = {
  title: "Je reviens vite",
  description:
    "Le site lilousnow.fr est actuellement en refonte, nous revenons très vite",
  alternates: {
    canonical: "/maintenance",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const Maintenance = ({}: maintenanceProps): JSX.Element => {
  return (
    <>
      <div className="md:hidden">
        <MaintenanceComponentMobile />
      </div>
      <div className="hidden md:block">
        <MaintenanceComponentDesktop />
      </div>
    </>
  );
};

export default Maintenance;
