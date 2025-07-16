import Image from "next/image";

const HeroSection = () => (
  <div className="relative overflow-hidden">
    <Image
      height={700}
      width={700}
      src="/images/banner.png"
      alt="Animation Hero Background"
      className="object-cover w-full h-[700px]"
    />

    <Image
      height={700}
      width={600}
      alt="mouth image"
      src="/images/mouth.png"
      className="absolute bottom-10 h-auto transform -translate-x-1/2 w-[700px] left-1/2"
    />
  </div>
);

export default HeroSection;
