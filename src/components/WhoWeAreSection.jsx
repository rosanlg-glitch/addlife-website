import { status } from "../data";
import Button from "./Button";

export default function WhoWeAreSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="ph">Who We Are</p>
        <h2 className="h2">
          AddLife is known for its reliability and excellent customer service.
        </h2>
      </div>

      {/* Two Column */}
      <div className="flex items-center gap-10">
        <div className="flex-1">
          <img
            className="w-full h-60 object-cover rounded-md"
            src="/img.jpg"
            alt="who we are"
          />
        </div>
        <div className="flex-1">
          <p className="pd">
            We maintain this reputation by ensuring that all essential equipment
            has redundancies in event of unforeseeable & unavoidable machine
            stoppage which translates to minimal downtime and best in class
            service to customers.
          </p>
          <Button>Know us more</Button>
        </div>
      </div>

      {/* Status */}
      <div className="flex justify-center items-center mt-10 py-8">
        {status.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <div className="flex items-center gap-3 px-10">
              {item.icon && (
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />
              )}
              <div>
                <p className="text-2xl font-bold text-text">{item.value}</p>
                <p className="text-xl text-muted">{item.label}</p>
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
