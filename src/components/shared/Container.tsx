interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IProps> = ({ children, className = "" }) => {
  return (
    <div className={`px-4 md:px-4 container_px lg:px-[100px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
