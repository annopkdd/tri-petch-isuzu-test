import {
  AthletsArticle1,
  AthletsArticle2,
  AthletsArticle3,
  PlayerArticle1,
  PlayerArticle2,
  PlayerArticle3,
} from "./article";

const TableAndDesktopSize = () => {
  return (
    <div className="flex flex-col">
      {/* Football Line 1 */}
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
        <div className="flex flex-col md:flex-[1.5] xl:flex-[1] md:pt-[81px] xl:pt-6 md:pb-[38px] xl:pb-[56px]">
          <span className="text-[90px] leading-[105px] text-textsecondary">
            ATHLETS
          </span>
          <AthletsArticle1 className="md:mt-[34px] xl:mt-[59px]" />
        </div>
      </div>

      {/* Football Line 2 */}
      <div className="flex flex-row bg-[#F5F4F9] md:pt-[30px] xl:pt-[53px] md:pb-[30px] xl:pb-[51px]">
        <div className="flex-[1]" />
        <AthletsArticle2 className="md:flex-[1.5] xl:flex-[1]" />
      </div>

      {/* Football Line 3 */}
      <div className="flex flex-row bg-[#5E3DB3] md:pt-[30px] xl:pt-[85px] md:pb-[30px] xl:pb-[98px]">
        <div className="flex-[1] " />
        <AthletsArticle3 className="md:flex-[1.5] xl:flex-[1]" />
      </div>

      {/* Basketball Line 1 */}
      <div className="bg-white flex flex-row">
        <div className="flex-[1] flex flex-row justify-end md:pt-[52px] md:pb-[10px] xl:pt-[124px] xl:pb-[69px]">
          <div className="w-[717px] pl-[31px]">
            <span className="block text-[90px] leading-[105px] text-textsecondary">
              PLAYERS
            </span>
            <PlayerArticle1 className="md:mt-[34px] xl:mt-[68px]" />
          </div>
        </div>
        <div className="relative flex-[1] flex flex-row justify-center">
          <img
            src="/images/basketballer_xl.png"
            height={"auto"}
            className="hidden xl:block absolute w-[991px] min-w-[991px] top-[0] left-[-210px]"
          />
          <img
            src="/images/basketballer_md.png"
            height={"auto"}
            className="block xl:hidden absolute w-[436px] min-w-[436px] top-[33px] right-[0]"
          />
        </div>
      </div>

      {/* Basketball Line 2 */}
      <div className="bg-[#F5F4F9] flex flex-row">
        <div className="flex-[1] flex flex-row justify-end md:pt-[51px] xl:pt-[52px] md:pb-[65px] xl:pb-[102px]">
          <PlayerArticle2 className="w-[717px] pl-[31px]" />
        </div>
        <div className="flex-[1]" />
      </div>

      {/* Basketball Line 3 */}
      <div className="bg-[#090C35] flex flex-row">
        <div className="flex-[1] flex flex-row justify-end pt-6 md:pt-[60px] xl:pt-[87px] md:pb-[28px] xl:pb-[70px]">
          <PlayerArticle3 className="w-[717px] pl-[31px]" />
        </div>
        <div className="relative flex-[1] flex flex-row justify-center" />
      </div>
    </div>
  );
};

export default TableAndDesktopSize;
