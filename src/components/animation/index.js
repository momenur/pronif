import Image from "next/image";
import HeroSection from "./HeroSection";

const AnimationPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="relative flex items-center justify-center">
        <Image
          height={800}
          width={700}
          alt="rotate image"
          src="/images/rotateImageBg.png"
          className="w-[800px]"
        />
        <Image
          height={400}
          width={400}
          alt="rotate image"
          src="/images/rotate.png"
          className="absolute bottom-32 size-[400px] mr-10 autoRotate"
        />
      </div>
    </div>
  );
};

export default AnimationPage;
