import { Link } from "react-router-dom";
import previewImage from "../../assets/Home/preview.jpg";

export const AboutHome = () => {
  return (
    <div className="flex flex-col 2xl:items-start xl:items-start 2xl:justify-start xl:justify-start justify-center items-center overflow-x-hidden overflow-y-hidden ">
      <div className="grid md:grid-cols-[24.2%_34.7%_25.8%_15.3%] grid-cols-1   lg:mx-[50px] 2xl:mx-0 xl:mx-[40px] mx-0 w-full">
        <div className="md:flex hidden b border-[#C7C7C7]  border-b"></div>
        <div className="border-s flex flex-col 2xl:flex-row xl:flex-row justify-around items-center space-y-2 2xl:space-y-0 xl:space-y-0 border-[#C7C7C7] 2xl:h-[168px] xl:h-[160px] order-5 md:order-none border-b">
          <div className="p-4 space-y-1">

          <p className="text-sm sm:text-xs md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-2xl uppercase 2xl:w-[256px] xl:w-[240px] font-cofo font-medium 2xl:text-[16px] text-[12px]  leading-[104%] tracking-[0%] p-2 lg:p-0">
            100 номерів у стилі сучасної класики — елегантно, стримано,
            комфортно
          </p>
          <p className="text-sm sm:text-xs md:text-[14px] lg:text-[14px] xl:text-xl 2xl:text-2xl uppercase 2xl:w-[256px] xl:w-[240px] font-cofo font-medium 2xl:text-[16px]  text-[12px]leading-[104%] leading-[15px] tracking-[0%] p-2 lg:p-0">
            Усе найкраще у Львові— площа Ринок і середмістя — за декілька хвилин
            пішки
          </p>
          </div>
        </div>

        <div className="border-[#C7C7C7] border-e flex border-s 2xl:border-s-0 xl:border-s-0 lg:border-s-0 2xl:justify-start xl:justify-start justify-center items-center order-5 md:order-none border-b">
          <div className="p-4 ">
            <p className="text-sm sm:text-xs  lg:text-[14px] xl:text-xl 2xl:text-2xl uppercase 2xl:w-[210px] xl:w-[200px] font-cofo font-medium 2xl:text-[16px] text-[12px] leading-[104%]  tracking-[0%] 2xl:ms-[44px] xl:ms-[40px] md:text-[14px] p-2 lg:p-0">
              Неймовірна панорама на Львів із ресторану RUFF та літньої тераси
              на даху
            </p>
          </div>
        </div>
        <div className="border-b border-[#C7C7C7]"></div>

        <div className="border-[#C7C7C7] lg:border-e-0  order-4 md:order-none  2xl:border-e-0 xl:border-e-0 border-b 2xl:border-b-0 xl:border-b-0 lg:block 2xl:py-0 xl:py-0 flex flex-col items-center py-10">
          <p className="text-sm sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl uppercase 2xl:text-[24px] xl:text-[22px] tracking-[-5%] font-medium 2xl:ps-[68px] xl:ps-[60px] lg:ps-[30px] 2xl:pt-[90px] xl:pt-[85px] text-[32px]">
            про нас
          </p>
        </div>

        <div className="border-s  border-[#C7C7C7]  flex flex-col  2xl:h-[307px] xl:h-[290px] order-1 md:order-none 2xl:pt-0 xl:pt-0 pt-10">
          <div className="2xl:mt-[90px] xl:mt-[85px] pb-4 xl:pb-0">
            <h1 className="text-sm sm:text-xs md:text-[36px]  lg:text-lg xl:text-xl 2xl:text-2xl uppercase 2xl:text-[100px] xl:text-[90px] text-[32px] text-[#242425] leading-[81%] tracking-[-7%] lg:text-[48px] whitespace-nowrap " >
              місце , де ви почуваєтесь
            </h1>
            <h1 className="text-sm sm:text-xs md:text-[36px]  lg:text-lg xl:text-xl 2xl:text-2xl uppercase 2xl:text-[100px] xl:text-[90px] text-[32px] text-[#242425] leading-[81%] tracking-[-7%] lg:text-[48px]">
              особливо
            </h1>
          </div>
        </div>
        <div className="flex flex-col relative border-s lg:border-s-0  2xl:border-s-0 xl:border-s-0 items-center lg:items-start 2xl:items-start xl:items-start border-e border-[#C7C7C7] order-3 md:order-none">
          <h1 className="text-sm sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl uppercase w-fit 2xl:absolute xl:absolute 2xl:mt-[90px] xl:mt-[85px] left-[-10px] 2xl:text-[100px] xl:text-[90px] text-[32px] text-[#242425] leading-[81%] tracking-[-10%] 2xl:pb-0 xl:pb-0 lg:pb-0 pb-10 md:pt-10 2xl:pt-0 xl:pt-0 lg:text-[48px]">
            
          </h1>
        </div>

        <div className=" 2xl:h-[720px] xl:h-[680px] border-[#C7C7C7] md:col-span-2 border-e ">
          <img
            src={previewImage}
            alt=""
            className="2xl:w-[1080px] xl:w-[980px] 2xl:h-[720px] xl:h-[680px] w-full"
          />
        </div>

        <div className="flex flex-col items-center border-e border-[#C7C7C7] ">
          <div className="2xl:space-y-[17px] xl:space-y-[15px] ">
            <p className="text-sm sm:text-xs md:text-[12px] lg:text-[14px] xl:text uppercase 2xl:text-[20px] xl:text-[18px] 2xl:leading-[24px] xl:leading-[22px] font-cofo tracking-[-4%] 2xl:w-[400px] xl:w-[440px] 2xl:p-0 xl:p-0 p-3 text-[14px] font-normal text-[#444444] ">
              Витончений інтер'єр, атмосфера затишку й величні краєвиди
              старовинного міста.
            </p>
            <p className="text-sm sm:text-xs md:text-base lg:text-[14px]  uppercase 2xl:text-[20px] xl:text-[18px] 2xl:leading-[24px] xl:leading-[22px] font-cofo tracking-[-4%] 2xl:w-[400px] xl:w-[420px] 2xl:p-0 xl:p-0 p-3 text-[14px] font-normal text-[#8C331B] md:text-[12px]">
              Відкрийте для себе Львів у всій його красі! Тут естетика й комфорт
              гармонійно переплелися, щоб дарувати вам незабутні враження.
            </p>
            <p className="text-sm sm:text-xs md:text-base lg:text-[14px] uppercase 2xl:text-[20px] xl:text-[18px] 2xl:leading-[24px] xl:leading-[22px] font-cofo tracking-[-4%] 2xl:w-[400px] xl:w-[420px] 2xl:p-0 xl:p-0 p-3 text-[14px] font-normal text-[#444444] mb-7 md:text-[12px]">
              Ми поєднали львівську автентику та європейську елегантність, щоб
              ви сповна насолодилися моментом.
            </p>
            <Link
              to="/about"
              className="border border-[#8C331B] hover:text-[#EDE8E5] ms-3 hover:bg-[#8C331B] uppercase text-[16px] font-medium xl:px-[29px] xl:py-[13px] lg:px-[20px] lg:py-[10px] md:px-[15px] md:py-[8px]  rounded-full text-[#8C331B] mb-0 "
            >
              детальніше
            </Link>

            <div className="relative  ">
              <div className=" absolute pt-[40px] text-center xl:text-start  w-full xl:w-fit">
                <h1 className=" whitespace-nowraptext-sm sm:text-xs md:text-base  xl:text-xl 2xl:text-2xl uppercase 2xl:text-[100px] xl:text-[70px] leading-[94%] text-[48px] md:text-[64px] lg:text-[36px]  tracking-[-10%] text-[#242425]">
                  якість та
                </h1>
                <h1 className="whitespace-nowrap   text-sm sm:text-xs md:text-base  xl:text-xl 2xl:text-2xl uppercase 2xl:text-[100px] xl:text-[70px] leading-[94%] text-[48px] md:text-[64px] lg:text-[36px] tracking-[-10%] text-[#242425]">
                  сервіс
                </h1>
                <h1 className="whitespace-nowrap text-sm sm:text-xs md:text-base  xl:text-xl 2xl:text-2xl uppercase 2xl:text-[100px] xl:text-[70px] leading-[94%] text-[48px] md:text-[64px] lg:text-[36px]  tracking-[-10%] xl:translate-x-1/4 h-fit">
                  високого
                </h1>
                <h1 className="whitespace-nowrap text-sm sm:text-xs md:text-base  xl:text-xl 2xl:text-2xl uppercase 2xl:text-[100px] xl:text-[70px] leading-[94%] text-[48px] md:text-[64px] lg:text-[36px]  tracking-[-10%] text-[#242425]">
                  рівня
                </h1>
              </div>
            </div>
           
          </div>
        </div>
            <div className= "border-[#C7C7C7] flex-1 lg:ms-[50px] xl:ms-[100px] h-[50px] " ></div>
        <div className="border-x border-[#C7C7C7] flex-1 lg-[100px] h-[50px]"></div>
        <div className="border-e border-[#C7C7C7] flex-1 lg:pe-[50px] p-5 h-[50px]"></div>
            <div className="border-e border-[#C7C7C7] md:flex hidden  h-[50px]"></div>
      </div>

      <div className="md:grid md:grid-cols-[24.2%_34.7%_25.8%_15.3%]  hidden"></div>
    </div>
  );
};
