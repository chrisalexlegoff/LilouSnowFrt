import ErrorDesktop from "./components/desktop/error/error";
import ErrorMobile from "./components/mobile/error/error";

export default function NotFound() {
  return (
    <>
      <div className="md:hidden">
        <ErrorMobile logoWhite={false} />
      </div>
      <div className="md:block hidden">
        <ErrorDesktop logoWhite={false} />
      </div>
    </>
  );
}
