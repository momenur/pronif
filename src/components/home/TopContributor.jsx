import AppCard from "@/ui/AppCard";
import React from "react";

const TopContributor = () => {
  const userCards = [
    {
      initials: "JD",
      name: "John Doe",
      membership: "Premium Member",
      projects: 12,
      followers: "2.4k",
      following: 180,
    },
    {
      initials: "AR",
      name: "Alice Rivera",
      membership: "Standard Member",
      projects: 8,
      followers: "980",
      following: 120,
    },
    {
      initials: "MK",
      name: "Michael Khan",
      membership: "Pro Member",
      projects: 25,
      followers: "5.3k",
      following: 340,
    },
  ];

  return (
    <section
      className="px-5 pt-48 pb-48 bg-black/10"
      style={{
        clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
        width: "100%",
      }}
    >
      <h1 className="font-semibold text-center text-20 md:text-32 text-primary-main tracking-[3px]">
        Top Contributors
      </h1>
      <p className="mb-16 text-center text-12 text-border-regular tracking-[2px]">
        Celebrating those who make the biggest impact in our community.
      </p>
      <div className="grid grid-cols-1 gap-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl">
        {userCards.map((user, index) => (
          <AppCard key={index}>
            <div className="space-y-4 ">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-24">Profile</h2>
                <div className="w-8 h-8 rounded-full bg-white/20"></div>
              </div>
              <p className="text-16 opacity-90">Manage your account settings</p>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-white/20">
                  <span className="font-bold text-24">{user.initials}</span>
                </div>
                <h3 className="font-semibold text-20">{user.name}</h3>
                <p className="opacity-75 text-14">{user.membership}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-14">Projects</span>
                  <span className="font-medium text-16">{user.projects}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-14">Followers</span>
                  <span className="font-medium text-16">{user.followers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-14">Following</span>
                  <span className="font-medium text-16">{user.following}</span>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button className="w-2/3 py-3 mx-auto font-medium transition-colors rounded-lg bg-white/20 text-16 hover:bg-white/30 whitespace-nowrap">
                  Edit Profile
                </button>
              </div>
            </div>
          </AppCard>
        ))}
      </div>
    </section>
  );
};

export default TopContributor;
