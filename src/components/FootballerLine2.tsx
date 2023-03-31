const FootballerLine2 = () => {
  return (
    <div className="flex flex-row bg-[#F5F4F9] md:pt-[30px] xl:pt-[53px] md:pb-[30px] xl:pb-[51px]">
      <div className="flex-[1]" />
      <div className="md:flex-[1.5] xl:flex-[1] flex flex-col">
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <span className="text-lg">02</span>
            <div className="bg-purple w-[19px] h-[5px] rounded-[2.5px] mt-1" />
          </div>
          <span className="text-4xl tracking-[1.5px] text-textthird ml-[10px]">
            COLLABORATION
          </span>
        </div>
        <span className="max-w-[717px] md:text-lg xl:text-xl !leading-[28px] md:tracking-[0.837px] xl:tracking-[0.93px] mt-[21px] pr-[30.8px] xl:pr-[0]">
          Work with other student athletes to  increase visability. When you
          share and like other players videos it will increase your visability
          as a player. This is the team work aspect to Surface 1.
        </span>
      </div>
    </div>
  );
};

export default FootballerLine2;
