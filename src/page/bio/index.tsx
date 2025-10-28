import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Button from "./components/Button";

export default function Bio() {
  const [isSticky, setIsSticky] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;

      const documentHeight = document.documentElement.scrollHeight;

      setIsSticky(windowHeight < 580 && documentHeight > windowHeight);

      setContentHeight(windowHeight);
    };

    handleResize(); // Set initial values
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div
        className={`${isSticky}`}
        style={{
          backgroundImage: `url(https://apicgg.github.io/bio-link/assets/images/bg-image.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          minHeight: "10vh", // Đảm bảo background bao phủ toàn bộ màn hình
        }}
      >
        <div
          className={`${
            contentHeight > 580 ? "h-screen" : "h-full"
          } flex justify-center font-poppins`}
        >
          <div>
            <Profile />
            <Button />
            <Footer isSticky={isSticky} />
          </div>
        </div>
      </div>
    </>
  );
}
