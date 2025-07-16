import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <Image
        height={1200}
        width={700}
        src="/images/image1.png"
        alt="Animation Hero Background"
        className="object-cover w-full h-[60vh] md:h-[80vh]"
      />
    </div>
  );
};

export default HeroSection;
