import Loader from "./components/loader/loader";

export default function Loading() {
  return (
    <div className="w-full fixed h-screen flex justify-center items-center bg-blanc z-50">
      <Loader color="#000707" width="71px" height="62px" />
    </div>
  );
}
