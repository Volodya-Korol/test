import logo from 'src/assets/image/logo/logo.svg';

export const Footer = () => {
  return (
    <div className="bg-white flex flex-col items-center my-10">
      <img src={logo} height="22px" />

      <p className="text-sm leading-[18px] text-center mt-[7px]">
         All rights reserved.
      </p>
    </div>
  );
};
