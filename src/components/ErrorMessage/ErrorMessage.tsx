import s from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={s.ErrorMessage}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
