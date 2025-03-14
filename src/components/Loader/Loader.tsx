import { GridLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.Loader}>
      <GridLoader color="#044e07" />
    </div>
  );
};

export default Loader;
