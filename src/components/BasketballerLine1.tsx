const BasketballerLine1 = () => {
  return (
    <div className="bg-white flex flex-row">
      <div className="flex-[1] flex flex-row justify-end md:pt-[52px] md:pb-[10px] xl:pt-[124px] xl:pb-[69px]">
        <div className="w-[717px] pl-[31px]">
          <span className="block text-[90px] leading-[105px] text-textsecondary">
            PLAYERS
          </span>
          <div className="flex flex-row items-center md:mt-[34px] xl:mt-[68px]">
            <div className="flex flex-col">
              <span className="text-lg">01</span>
              <div className="bg-purple w-[19px] h-[5px] rounded-[2.5px] mt-1" />
            </div>
            <span className="text-4xl tracking-[1.5px] text-textthird ml-[10px]">
              CONNECTION
            </span>
          </div>
          <span className="md:max-w-[432px] xl:max-w-[571px] block md:text-lg xl:text-xl !leading-[28px] mt-[21px]">
            Connect with talented athlete directly, you can watch their skills
            through video showreels directly from Surface 1.
          </span>
        </div>
      </div>
      <div className="relative flex-[1] flex flex-row justify-center">
        <img
          src="/images/basketballer_xl.png"
          height={"auto"}
          className="hidden xl:block absolute w-[991px] min-w-[991px] top-[0] left-[-203px]"
        />
        <img
          src="/images/basketballer_md.png"
          height={"auto"}
          className="block xl:hidden absolute w-[436px] min-w-[436px] top-[33px] right-[0]"
        />
      </div>
    </div>
  );
};

export default BasketballerLine1;
