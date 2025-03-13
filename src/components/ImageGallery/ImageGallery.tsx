import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image) => (
        <li key={image.id} className={s.ImageGalleryItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
