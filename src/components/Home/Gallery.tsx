import GallerySlider from "../gallery/gallery";

export default function Gallery() {
  return (
    <div className="py-16 dark:bg-gray-900" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold tracking-tight border-l-4 border-blue-600 pl-4">Gallery</h2>
      </div>
      <GallerySlider />
    </div>
  );
}