import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={s.btnLoad} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
