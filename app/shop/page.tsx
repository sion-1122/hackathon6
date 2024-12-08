import { FilterBar } from "@/components/fiterby";
import { products } from "@/components/forth";
import { HeroHeader } from "@/components/hero-header";
import { HeroSection } from "@/components/hero-section";
import { ShopHeader } from "@/components/pageHeader";
import { ProductCard } from "@/components/ProductCard";
import { AppWindow, Filter, WindArrowDown } from "lucide-react";
import React from "react";

const ShopPage = () => {
  return (
    <div>
      <HeroHeader
        backgroundImage="/Rectangle 1.png"
        breadcrumbItems={[
          { href: "/", label: "home" },
          { href: "/shop", label: "Shop" },
        ]}
        title="Shop"
      />
      <FilterBar />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
