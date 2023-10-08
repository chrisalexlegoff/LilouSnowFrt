// import MaintenanceComponentDesktop from "../components/desktop/maintenance/maintenance";
import MaintenanceComponentDesktop from "../components/desktop/maintenance/maintenance";
import MaintenanceComponentMobile from "../components/mobile/maintenance/maintenance";
import { maintenanceProps } from "../lib/interfaces/interfaces";

const Maintenance = ({
  seo,
  maintenanceMobile,
  maintenanceDesktop,
}: maintenanceProps): JSX.Element => {
  // const router = useRouter();
  // useEffect(() => {
  //   router.push("/maintenance", "je-reviens-tres-vite");
  // }, []);
  return (
     <> <div className="md:hidden">
        <MaintenanceComponentMobile
          seo={seo}
        />
      </div>
      <div className="hidden md:block">
        <MaintenanceComponentDesktop
          seo={seo}
        />
      </div>
      </> 
  );
};

export default Maintenance;
