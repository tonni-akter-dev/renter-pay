interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IProps> = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1340px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
