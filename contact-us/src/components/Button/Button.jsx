
import styles from "./Button.module.css";

const Button = (props) => {
  // Destructure the props you want to use explicitly
  const { icon, text, isOutline, ...rest } = props;

  return (
    <button  {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn} {...rest}>
      {icon}
      {text}
     
    </button>
  );
};

export default Button;