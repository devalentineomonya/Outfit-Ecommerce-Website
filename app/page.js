import HomeHeroComponent from "@/components/HomeHeroComponent/HomeHeroComponent";
import MaxWidthContainer from "@/components/MaxWidthContainer/MaxWidthContainer";
import NewProductsContainer from "@/components/NewProductsContainer/NewProductsContainer";

export default function Home() {
  return (
<>
    <MaxWidthContainer>
      <HomeHeroComponent/>
      <NewProductsContainer/>
    </MaxWidthContainer>
</>
  );
}
