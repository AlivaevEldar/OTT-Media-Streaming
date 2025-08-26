function IconWrapper({ children, type, ...rest }) {
  return (
    <div {...rest} className={`${type}`}>
      {children}
    </div>
  );
}

export default IconWrapper;
