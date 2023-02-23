import { useState } from "react";
import ItemList from "../Secondary components/ItemPage/ItemList";
import MobileMenu from "../Secondary components/ItemPage/MobileMenu";
import NavBar from "../Reusable Components/NavBar";
import Footer from "../Reusable Components/Footer";
import MobileFilter from "../Secondary components/ItemPage/MobileFilter";
import ItemFilter from "../Secondary components/ItemPage/ItemFilter";
import Pagination from "../Secondary components/ItemPage/Pagination";

const breadcrumbs = [{ id: 1, name: "Men", href: "#" }];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];
const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    location: "Kutaisi",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    location: "Kutaisi",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];
const navigation = {
  categories: [
    {
      id: "aboutUs",
      name: "About Us",
    },
    {
      id: "categories",
      name: "Categories",
    },
    {
      id: "items",
      name: "Items",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <div>
        <MobileMenu
          navigation={navigation}
          classNames={classNames}
          setMobileMenuOpen={setMobileMenuOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          mobileMenuOpen={mobileMenuOpen}
        ></MobileMenu>
        <NavBar></NavBar>
      </div>

      <div>
        <MobileFilter
          classNames={classNames}
          filters={filters}
          setMobileFiltersOpen={setMobileFiltersOpen}
          mobileFiltersOpen={mobileFiltersOpen}
        ></MobileFilter>
        <ItemFilter breadcrumbs={breadcrumbs}></ItemFilter>
        <ItemList
          setMobileFiltersOpen={setMobileFiltersOpen}
          products={products}
          filters={filters}
        ></ItemList>
        <Pagination></Pagination>
        <Footer></Footer>
      </div>
    </div>
  );
}
