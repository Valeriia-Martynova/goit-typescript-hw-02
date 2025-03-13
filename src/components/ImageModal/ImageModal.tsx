import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Image } from "../../types";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  image: Image;
  onRequestClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  image,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      className={s.Modal}
      overlayClassName={s.Overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={s.Image}
      />
    </Modal>
  );
};

export default ImageModal;
