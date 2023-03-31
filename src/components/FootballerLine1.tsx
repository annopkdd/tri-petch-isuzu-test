const FootballerLine1 = () => {
  return (
    <div className="bg-white flex flex-row">
      <div className="relative flex-[1] flex flex-row justify-center">
        <img
          src="/images/footballer_xl.png"
          height={"auto"}
          className="hidden xl:block absolute w-[678px] min-w-[678px] top-[35px] right-[155px]"
        />
        <img
          src="/images/footballer_md.png"
          height={"auto"}
          className="block xl:hidden absolute w-[334px] min-w-[334px] top-[102px] left-[0]"
        />
      </div>
      <div className="md:flex-[1.5] xl:flex-[1] flex flex-col md:pt-[81px] xl:pt-6 md:pb-[38px] xl:pb-[56px]">
        <span className="text-[90px] leading-[105px] text-textsecondary">
          ATHLETS
        </span>
        <div className="flex flex-row items-center md:mt-[34px] xl:mt-[59px]">
          <div className="flex flex-col">
            <span className="text-lg">01</span>
            <div className="bg-purple w-[19px] h-[5px] rounded-[2.5px] mt-1" />
          </div>
          <span className="text-4xl tracking-[1.5px] text-textthird ml-[10px]">
            CONNECTION
          </span>
        </div>
        <span className="md:text-lg xl:text-xl !leading-[28px] md:mt-[21px] xl:mt-[31px] pr-[20px]">
          Connect with coaches directly, you can ping coaches to view profile.
        </span>
      </div>
    </div>
  );
};

export default FootballerLine1;
