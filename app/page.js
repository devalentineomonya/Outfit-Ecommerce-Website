import HomeHeroComponent from "@/components/HomeHeroComponent/HomeHeroComponent";
import MaxWidthContainer from "@/components/MaxWidthContainer/MaxWidthContainer";
import NewProductsContainer from "@/components/NewProductsContainer/NewProductsContainer";
import OtherProjectsBanner from "@/components/OtherProjectsBanner/OtherProjectsBanner";

export default function Home() {
  return (
<>
    <MaxWidthContainer>
      <HomeHeroComponent/>
      <NewProductsContainer/>
      <OtherProjectsBanner/>
    </MaxWidthContainer>
</>
  );
}
