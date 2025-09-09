
import React from "react";
import { Button } from "./ui/button";

const Hero = ({ navigate }) => {
  return (
    <div
      className="relative h-[calc(100vh-100px)] bg-cover bg-center"
      style={{
        backgroundImage: `
             linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
          url('https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D')
        `,
        paddingTop: "100px",
      }}
    >
      <div className="flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Welcome to your Dream Shop
          </h1>
          <p className="text-lg sm:text-2xl mb-8">
            Discover amazing products and deals just for you.
          </p>
          <Button onClick={() => navigate("/products")} size="lg">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;