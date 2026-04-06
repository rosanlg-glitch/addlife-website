import { status } from "../data";
import Button from "./Button";

export default function WhoWeAreSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="ph">Who We Are</p>
        <h2 className="h2">
          AddLife is known for its reliability and excellent customer service.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 w-full">
          <img
            className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover rounded-md"
            src="/img.jpg"
            alt="who we are"
          />
        </div>
        <div className="flex-1 w-full">
          <p className="pd">
            {/* description */}
            We maintain this reputation by ensuring that all essential equipment
            has redundancies in event of unforeseeable & unavoidable machine
            stoppage which translates to minimal downtime and best in class
            service to customers.
          </p>
          <Button>Know us more</Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-10 py-8 gap-4">
        {status.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <div className="flex items-center gap-3 px-4 md:px-6 lg:px-10">
              {item.icon && (
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />
              )}
              <div>
                <p className="text-xl md:text-2xl font-bold text-text">
                  {item.value}
                </p>
                <p className="text-base md:text-xl text-muted">{item.label}</p>
              </div>
            </div>
            {index < status.length - 1 && (
              <div className="w-[1px] h-10 bg-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
