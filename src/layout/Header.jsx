import Topbar from "./Topbar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className=" sticky top-0 z-50">
      <Topbar />
      <Navbar />
    </div>
  );
}
