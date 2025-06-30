import "../../../styles/step-by-step.css";
import { stepsData } from "./helpers/uiData";

const StepByStepSection = () => (
  <section className="relative px-4 py-8 overflow-hidden bg-white sm:py-12 lg:py-16">
    <h1 className="font-semibold text-center text-20 md:text-32 text-primary-main tracking-[3px]">
      How it Works
    </h1>
    <p className="mb-10 text-center text-12 text-border-regular tracking-[2px]">
      Follow these simple steps to get started quickly and efficiently.
    </p>
    <div className="relative mx-auto max-w-7xl">
      {/* Flowing background paths - Desktop only */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5271ff" />
              <stop offset="50%" stopColor="#0cc0df" />
              <stop offset="100%" stopColor="#5ce1e6" />
            </linearGradient>
          </defs>
          <path
            d="M200,600 Q400,400 600,500 T1000,300 Q1100,200 1200,400"
            stroke="url(#pathGradient)"
            strokeWidth="120"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M0,200 Q300,100 500,300 T900,200 Q1000,150 1200,250"
            stroke="url(#pathGradient)"
            strokeWidth="100"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="relative z-10 space-y-8 lg:hidden sm:space-y-12">
        {stepsData?.map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.number}
              className="flex flex-col items-center max-w-md gap-4 mx-auto sm:flex-row sm:gap-6 sm:max-w-none"
            >
              {/* Step circle */}
              <div className="flex-shrink-0 order-1 sm:order-none">
                <div className="relative flex flex-col items-center justify-center w-20 h-20 border-4 rounded-full shadow-lg sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-primary-main border-secondary shadow-primary/30">
                  <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 -z-10"></div>
                  <span className="mb-1 font-semibold tracking-wider text-white text-10">
                    STEP
                  </span>
                  <span className="font-light leading-none text-white text-24 sm:text-32">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 order-2 text-center sm:text-left">
                <div className="mb-2 ">
                  <IconComponent
                    size={20}
                    className="mx-auto text-gray-400 sm:mx-0"
                  />
                </div>
                <h3 className="mb-2 font-semibold tracking-wide text-border-dark/90 text-14">
                  {step.headline}
                </h3>
                <p className="leading-relaxed text-gray-600 text-12">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Layout */}
      <div className="relative z-10 hidden lg:block steps-container">
        {stepsData?.map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.number}
              className={`absolute flex items-center gap-8 max-w-xs xl:max-w-sm ${step.position}`}
            >
              {/* Step circle */}
              <div className="flex-shrink-0 transition-all duration-500 hover:scale-125">
                <div className="relative flex flex-col items-center justify-center border-4 rounded-full shadow-xl w-28 h-28 xl:w-32 xl:h-32 bg-gradient-to-br from-primary to-primary-main border-secondary shadow-primary/30">
                  <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 -z-10"></div>
                  <span className="mb-1 font-semibold tracking-wider text-white text-10">
                    STEP
                  </span>
                  <span className="font-light leading-none text-white text-32 xl:text-48">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative flex-1 min-w-0 p-5 overflow-hidden transition-all duration-500 rounded-lg bg-primary/90 hover:bg-primary group hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
                <div className="absolute inset-0 rounded-xl">
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-main via-[#FFFF00] to-red group-hover:w-full transition-all duration-700 ease-out" />
                  <div className="absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b from-primary-main via-[#FFFF00] to-red group-hover:h-full transition-all duration-700 ease-out delay-200" />
                  <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-primary-main via-[#FFFF00] to-red group-hover:w-full transition-all duration-700 ease-out delay-400" />
                  <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t from-primary-main via-[#FFFF00] to-red group-hover:h-full transition-all duration-700 ease-out delay-600" />
                </div>
                <div className="mb-2">
                  <IconComponent
                    size={24}
                    className="transition-all duration-500 text-border-dark/50 group-hover:text-white"
                  />
                </div>
                <h3 className="mb-2 font-semibold tracking-wide transition-all duration-500 text-border-dark/60 text-14 group-hover:text-white">
                  {step.headline}
                </h3>
                <p className="leading-relaxed transition-all duration-500 group-hover:text-border-light text-12 text-border">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default StepByStepSection;
