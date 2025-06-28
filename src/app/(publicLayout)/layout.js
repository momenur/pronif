import Footer from "@/components/shared-components/footer/Footer";
import Navbar from "@/components/shared-components/navbar";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
