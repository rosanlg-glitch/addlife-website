import Topbar from "./Topbar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 dark bg-surface">
      <Topbar />
      <Navbar />
    </div>
  );
}
