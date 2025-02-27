import { Link } from "react-router-dom";
import previewImage from "../../assets/Home/preview.jpg";

export const AboutHome = () => {
  return (
    <div className="flex flex-col xl:items-start xl:justify-start justify-center items-center">
      <div className="grid xl:grid-cols-[465px_667px_495px] grid-cols-[334px] md:grid-cols-[668px] lg:grid-cols-[1fr_1fr_1fr] lg:mx-[50px] xl:mx-0 mx-0">
        <div className="lg:flex hidden border-e border-[#C7C7C7] xl:border-e-0"></div>
        <div className="border-x flex flex-col xl:flex-row justify-around items-center    space-y-2 xl:space-y-0 border-[#C7C7C7] xl:h-[168px] order-5 lg:order-none">
          <p className="uppercase xl:w-[256px] font-cofo font-medium xl:text-[16px] text-[12px] xL:leading-[20.16px] tracking-[0%] p-2 lg:p-0 md:text-[14px]">
            100 номерів у стилі сучасної класики — елегантно, стримано,
            комфортно
          </p>
          <p className="uppercase xl:w-[256px] font-cofo font-medium xl:text-[16px] text-[12px] xl:leading-[20.16px] leading-[15px] tracking-[0%] p-2 lg:p-0 md:text-[14px]">
            Усе найкраще у Львові— площа Ринок і середмістя — за декілька хвилин
            пішки
          </p>
        </div>

        <div className="border-[#C7C7C7] border-e flex  border-s xl:border-s-0  lg:border-s-0 xl:justify-start justify-center items-center order-5 lg:order-none">
          <div>
            <p className="uppercase xl:w-[210px] font-cofo font-medium xl:text-[16px]   text-[12px] xl:leading-[20.16px] leading-[15px] tracking-[0%] xl:ms-[44px] md:text-[14px] p-2 lg:p-0">
              Неймовірна панорама на Львів із ресторану RUFF та літньої тераси
              на даху
            </p>
          </div>
        </div>

        <div className="border-[#C7C7C7] lg:border-e-0 border-t order-4 lg:order-none border-x xl:border-e-0 border-b xl:border-b-0 lg:block xl:py-0 flex flex-col items-center py-10">
          <p className="uppercase xl:text-[24px]  tracking-[-5%] font-medium xl:ps-[68px] lg:ps-[30px] xl:pt-[90px] text-[32px]">
            про нас
          </p>
        </div>
        
        <div className="border-s border-e border-[#C7C7C7] border-t flex flex-col items-center xl:h-[307px] order-1 lg:order-none xl:pt-0 pt-10">
          <div className="xl:mt-[90px]">
            <h1 className=" uppercase xl:text-[100px] text-[32px] text-[#242425] leading-[81%] tracking-[-7%]  lg:text-[48px]">
              місце , де ви
            </h1>
            <h1 className="uppercase xl:text-[100px] text-[32px] text-[#242425] leading-[81%] tracking-[-7%]  lg:text-[48px]">
              особливо
            </h1>
          </div>
        </div>
        <div className="flex flex-col relative xl:border-t border-s lg:border-s-0 lg:border-t xl:border-s-0 items-center lg:items-start xl:items-start border-e border-[#C7C7C7] order-3 lg:order-none ">
          <h1 className="uppercase w-fit xl:absolute   xl:mt-[90px] left-[-10px] xl:text-[100px] text-[32px] text-[#242425] leading-[81%] tracking-[-10%] xl:pb-0 lg:pb-0 pb-10 md:pt-10 xl:pt-0 lg:text-[48px]">
            почуваєтесь
          </h1>
        </div>
      </div>

      <div>
        <div className="grid xl:grid-cols-[1132px_495px] grid-cols-[334px] md:grid-cols-[668px] lg:grid-cols-[2fr_1fr] lg:mx-[50px] xl:mx-0 mx-0">
          <div className=" border-x xl:h-[720px] border-[#C7C7C7]"> 
            <img src={previewImage} alt="" className="xl:w-[1080px] xl:h-[720px] w-full" />
          </div>

          <div className="flex flex-col items-center lg:items-start xl:border-e xl:ms-[33px] border-x xl:border-x-0 border-[#C7C7C7] ">
            <div className="xl:space-y-[17px]  ">
              <p className="uppercase xl:text-[20px] xl:leading-[24px] font-cofo text-base tracking-[-4%] xl:w-[470px] xl:p-0 p-3 text-[14px] font-normal text-[#444444] md:text-[14px]">
                Витончений інтер’єр, атмосфера затишку й величні краєвиди
                старовинного міста.
              </p>
              <p className="uppercase xl:text-[20px] xl:leading-[24px] font-cofo text-base tracking-[-4%] xl:w-[440px] xl:p-0 p-3 text-[14px] font-normal text-[#8C331B] md:text-[14px]">
                Відкрийте для себе Львів у всій його красі! Тут естетика й
                комфорт гармонійно переплелися, щоб дарувати вам незабутні
                враження.
              </p>
              <p className="uppercase xl:text-[20px] xl:leading-[24px] font-cofo text-base tracking-[-4%] xl:w-[440px] xl:p-0  p-3 text-[14px] font-normal text-[#444444] mb-7 md:text-[14px]">
                Ми поєднали львівську автентику та європейську елегантність, щоб
                ви сповна насолодилися моментом.
              </p>
              <Link
                to="/about"
                className="border border-[#8C331B] hover:text-[#EDE8E5]  ms-3 hover:bg-[#8C331B] uppercase text-[16px] font-medium px-[29px] py-[13px] rounded-full text-[#8C331B] mb-0 "
              >
                детальніше
              </Link>

              <div className="relative  ">
                <div className="pt-[40px] p-5 xl:pb-0 text-center xl:text-start">
                  <h1 className="uppercase  xl:text-[100px] leading-[94%] text-[48px] md:text-[64px] lg:text-[24px] tracking-[-10%] text-[#242425]">
                    якість та
                  </h1>
                  <h1 className="uppercase xl:text-[100px] leading-[94%] text-[48px] md:text-[64px] lg:text-[24px] tracking-[-10%] text-[#242425] ">
                    сервіс
                  </h1>
                  <h1 className="uppercase xl:text-[100px] leading-[94%] text-[48px] md:text-[64px] lg:text-[24px] tracking-[-10%] xl:translate-x-41.5 h-fit">
                    високого
                  </h1>
                  <h1 className="uppercase xl:text-[100px] leading-[94%] text-[48px] md:text-[64px] lg:text-[24px] tracking-[-10%]  text-[#242425]">
                    рівня
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="border-e border-[#C7C7C7] lg:flex hidden "></div>
        </div>
      </div>

      <div className="xl:grid xl:grid-cols-[465px_667px_495px] hidden ">
  <div className="border-x border-[#C7C7C7] flex-1 lg:ms-[50px]"></div>
  <div className="border-e border-[#C7C7C7] flex-1 lg-[100px]"></div>
  <div className="border-e border-[#C7C7C7] flex-1 lg:me-[50px] p-5"></div>
</div>

    </div>
  );
};
