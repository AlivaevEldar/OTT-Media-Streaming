
function Button({ styles, children, icon, ...rest }) {
  return (
    <button
      {...rest}
      type="button"
      className={`bg-red-45 text-absolute-white font-semibold flex gap-x-1 items-center justify-center ${styles}`}
    >
      {icon ? (
        <img
          className="w-6 desktop:w-7"
          src={icon}
          alt=""
          width={24}
          height={24}
        />
      ) : null}
      {children}
    </button>
  );
}

export default Button;
