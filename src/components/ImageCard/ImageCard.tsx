import s from "./ImageCard.module.css";
import { Image } from "../../types";

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.card} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
