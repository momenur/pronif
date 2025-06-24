import Navbar from "@/components/shared-components/navbar";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PublicLayout;
