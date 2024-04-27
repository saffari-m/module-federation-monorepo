type ButtonProps = {
  text?: string;
  title?: string;
  className?: string;
};
export const Button = (props: ButtonProps) => {
  const { text, title, className } = props;  
  return (
    <button title={title} className={className}>
      {text}
    </button>
  );
};

