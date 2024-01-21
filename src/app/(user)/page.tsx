import Banner from "@/components/Banner";
import BestSellers from "@/components/BestSellers";
import HomeBanner from "@/components/HomeBanner";
import Onsale from "@/components/Onsale";
import NewArrival from "@/components/NewArrival";
import YearProduct from "@/components/YearProduct";
import { client } from "@/lib/sanityClient";
import { groq } from "next-sanity";
import mposterImg from "@/assets/mposter1.jpg";
import Image from "next/image";

export const revalidate = 10;
const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;

const newArrivalQuery = groq`*[_type == 'product' && position == 'New Arrivals']{
...
} | order(_createdAt asc)`;

const onSaleQuery = groq`*[_type == 'product' && position == 'on Sale']{
  ...
 } | order(_createdAt asc)`;
const bestSellersQuery = groq`*[_type == 'product' && position == 'Bestsellers']{
  ...
 } | order(_createdAt asc)`;

const specialOffersQuery = groq`*[_type == 'product' && position == 'Special Offers']{
  ...
 } | order(_createdAt asc)`;

const HomePage = async () => {
  const banners = await client.fetch(bannerQuery);
  const newArrivalProducts = await client.fetch(newArrivalQuery);
  const bestSellersProducts = await client.fetch(bestSellersQuery);
  const specialOffersProducts = await client.fetch(specialOffersQuery);
  const onSaleProducts = await client.fetch(onSaleQuery);

  return (
    <main className="text-sm overflow-hidden min-h-screen">
      <HomeBanner />
      <NewArrival products={newArrivalProducts} />
      <BestSellers products={onSaleProducts} title="Our Bestsellers" />
      <Banner banners={banners} />
      <BestSellers products={bestSellersProducts} title="Our Bestsellers" />
      <YearProduct />
      <BestSellers products={specialOffersProducts} title="Special Offers" />
      <div>
        <Image src={mposterImg} alt="poster image" className="w-full h-full" />
      </div>
    </main>
  );
};

export default HomePage;
