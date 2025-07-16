import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[60vh] md:h-[80vh] overflow-hidden bg-border-regular">
      <Image
        height={1200}
        width={700}
        src="/images/banner.png"
        alt="Animation Hero Background"
        className="object-cover w-full h-[60vh] md:h-[80vh]"
      />

      <Image
        height={700}
        width={600}
        alt="mouth image"
        src="/images/image6.png"
        className="absolute bottom-0 h-auto transform -translate-x-1/2 w-[600px] left-1/2"
      />
    </div>
  );
};

export default HeroSection;
