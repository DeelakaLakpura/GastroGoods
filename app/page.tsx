export const revalidate = 0;

import Container from "./components/Container";
import HomeBanner from "./components/HeroImageSlider";
import ProductCard from "./components/products/ProductCard";
import getProducts, { IProductParams } from "@/actions/getProducts";
import NullData from "./components/NullData";

interface HomeProps{
  searchParams: IProductParams
}

export default async function Home({searchParams}: HomeProps) {
  const products = await getProducts(searchParams)
  

  

  if(products.length === 0){
    return <NullData title = 'Oops! No products found. Click "All" to clear filters'/>
  }

  //Fisher-Yates shuffle algorithm
  function shuffleArray(array: any){
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]]
    }

    return array
  }

  const shuffledProducts = shuffleArray(products)

  const Horizontal = () => {
    return <div className="border-2 border-green-700 h-[1px] w-16 mx-4"></div>;
  };

  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
          
        </div>
        <div className="flex items-center p-5">
  <Horizontal />
  <p className="text-xl">
    <span className="text-gray-600">All</span>
    <strong className="text-green-600 ml-1 text-xl">Products</strong>
  </p>
  <Horizontal />
</div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {shuffledProducts.map((product: any) => {
            return <ProductCard data={product} key={product.id}/>;
          })}
        </div>
      </Container>
    </div>
  );
}
