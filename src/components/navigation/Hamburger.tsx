import { useState } from "react";

type IHamburgerBtnProps = {
  isOpened?: boolean;
  toggled: Function
};

const HamburgerBtn = (props: IHamburgerBtnProps) => {
  const base = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const [isOpen, setIsOpen] = useState(props.isOpened);
  const onToggle = () => {
    setIsOpen(!isOpen);
    props.toggled(!isOpen);
  }
  
  return (
    <button
      className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
      onClick={() => onToggle()}
    >
      <div
        className={`${base} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${base} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${base} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export { HamburgerBtn }