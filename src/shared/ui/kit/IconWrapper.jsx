function IconWrapper({ children, onClick, type }) {
  const styles = {
    burger: "p-3 border-3 border-black-15 bg-black-10 rounded-md laptop:hidden",
    crossPlatform:
      "p-2.5 border border-black-12 bg-black-08 rounded-lg laptop:p-3 laptop:rounded-[0.625rem] desktop:p-4 desktop:rounded-xl",
    questions:
      "p-2.5 border border-black-15 bg-black-12 rounded-md laptop:p-4 laptop:rounded-lg desktop:p-5 desktop:rounded-[0.625rem]",
    footer:
      "p-3 rounded-md border border-black-15 bg-black-10 desktop:p-4 desktop:rounded-lg",
    hero: "p-3 bg-black-06 border-black-15 border rounded-lg laptop:p-3.5",
    swiperNavigation:
      "p-2.5 border rounded-md border-black-12 bg-black-10 desktop:p-3.5 desktop:rounded-lg",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles[type]}`}
    >
      {children}
    </button>
  );
}

export default IconWrapper;
