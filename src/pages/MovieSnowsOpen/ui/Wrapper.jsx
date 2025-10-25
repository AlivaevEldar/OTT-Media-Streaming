function Wrapper({ className, ...rest }) {
  return (
    <article
      {...rest}
      className={`p-6 laptop:p-10 bg-black-10 rounded-[0.625rem] border border-black-15 ${className}`}
    ></article>
  );
}

export default Wrapper;