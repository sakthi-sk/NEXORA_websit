import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesPreview from '../components/ServicesPreview';
import IndustriesSection from '../components/IndustriesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import FloatingChatButton from '../components/FloatingChatButton';
import MouseFollower from '../components/MouseFollower';

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise overflow-hidden">
      <MouseFollower />
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <ServicesPreview />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default Index;
