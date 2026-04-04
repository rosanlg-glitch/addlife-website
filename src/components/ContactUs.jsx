import { Link } from "react-router-dom";
import Button from "./Button";

export default function ContactUs() {
  return (
    <div className="bg-surface py-16 px-6">
      <div className="max-w-7xl mx-auto items-center justify-between gap-10">
        {/* Left - Text */}
        <div className="">
          <p className="ph text-primary">For Enquiry</p>
          <h2 className="h2 text-text ">
            Get in touch with us. <br />
            We're here to assist you.
          </h2>
          <p className="text-muted text-sm leading-relaxed mt-2 max-w-2xl">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem
            Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
          </p>
        </div>

        {/* Right - Button */}
        <div className="mt-6">
          <Link to="/contact">
            <Button>Contact Us →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
