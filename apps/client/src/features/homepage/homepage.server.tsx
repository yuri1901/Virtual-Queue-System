import { homepageServerStyles as styles } from "./homepage.server.styles";
import { CtaSection } from "./server/CtaSection";
import { FeaturesSection } from "./server/FeaturesSection";
import { Footer } from "./server/Footer";
import { Header } from "./server/Header";
import { HeroSection } from "./server/HeroSection";
import { HowItWorksSection } from "./server/HowItWorksSection";
import { PricingSection } from "./server/PricingSection";
import { UseCasesSection } from "./server/UseCasesSection";
import { HOMEPAGE_MOCK_DATA } from "./shared";

async function getHomepageData() {
  return HOMEPAGE_MOCK_DATA;
}

async function HomepageFeature() {
  const data = await getHomepageData();

  return (
    <div className={styles.root}>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection data={data.featureData} />
        <HowItWorksSection data={data.stepsData} />
        <UseCasesSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export { HomepageFeature };
