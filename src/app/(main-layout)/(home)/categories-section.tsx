import Image from "next/image";
import img1 from "@/assets/imgs/categories/1.png";
import img2 from "@/assets/imgs/categories/2.png";
import img3 from "@/assets/imgs/categories/3.png";
import { CategoryCardLink } from "./category-card-link";

export function CategoriesSection() {
  return (
    <section className="grid container gap-4 md:grid-cols-2">
      {/* // TODO: Add search params to the link component href to filter the product with  */}
      <div className="relative row-span-2">
        <Image src={img1} alt="" aria-hidden="true" />
        <CategoryCardLink category="Living Room" href="/shop#" className="top-6 sm:top-8" />
      </div>
      <div className="relative">
        <Image src={img2} alt="" aria-hidden="true" />
        <CategoryCardLink category="Bedroom" href="/shop#" />
      </div>
      <div className="relative">
        <Image src={img3} alt="" aria-hidden="true" />
        <CategoryCardLink category="Kitchen" href="/shop#" />
      </div>
    </section>
  );
}
