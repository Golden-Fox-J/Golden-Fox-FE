import { useState } from "react"
import Login_form from "./login";
// import Form from "@/components/form";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import HeroSection from "components/homepage/HeroSection";
import FeaturedProducts from "components/homepage/FeaturedProducts";
import FavoriteList from "components/favorite";
import { useAuth } from "context/auth";


export default function Home() {
  const { login,user } = useAuth()

  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <FavoriteList/>
      <Footer />
    </div>
  );
}