import { Outlet, useLocation } from "react-router-dom";
import GalleryNav from "../components/Gallery/GalleryNav"
import "./Gallery.css"; // Create this if it doesn't exist

export default function Gallery() {
  const location = useLocation();
  const isMainGallery = location.pathname === "/gallery";
  return (
    <div className="gallery-container">
      <GalleryNav />
      <div className="gallery-content">
        {isMainGallery ? <AnimatedGallery /> : <Outlet />}
      </div>
    </div>
  );
}