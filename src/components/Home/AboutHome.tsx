import { Link } from "react-router-dom";
import previewImage from "../../assets/Home/preview.jpg";

export const AboutHome = () => {
  return (
    <div className="flex flex-col ">
      <div className="grid grid-cols-[465px_667px_495px]">
        <div></div>
        <div className="border-x flex justify-around items-center  border-[#C7C7C7] lg:h-[168px]">
          <p className="uppercase lg:w-[256px] font-cofo font-medium text-[16px] leading-[20.16px] tracking-[0%]">
            100 номерів у стилі сучасної класики — елегантно, стримано,
            комфортно
          </p>
          <p className="uppercase lg:w-[256px] font-cofo font-medium text-[16px] leading-[20.16px] tracking-[0%]">
            Усе найкраще у Львові— площа Ринок і середмістя — за декілька хвилин
            пішки
          </p>
        </div>
        <div className="border-[#C7C7C7] border-e flex  items-center">
          <div>
            <p className="uppercase lg:w-[210px] font-cofo font-medium text-[16px] leading-[20.16px] tracking-[0%] lg:ms-[44px] ">
              Неймовірна панорама на Львів із ресторану RUFF та літньої тераси
              на даху
            </p>
          </div>
        </div>
        <div className="border-[#C7C7C7]  border-t ">
          <p className="uppercase lg:text-[24px]  tracking-[-5%] font-medium ps-[68px] pt-[90px]">
            про нас
          </p>
        </div>
        <div className="border-s border-e border-[#C7C7C7] border-t flex flex-col items-center lg:h-[307px]">
          <div className="mt-[90px]">
            <h1 className=" uppercase text-[100px] text-[#242425] leading-[81%] tracking-[-7%] ">
              місце , де ви
            </h1>
            <h1 className="uppercase text-[100px] text-[#242425] leading-[81%] tracking-[-7%] ">
              особливо{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col relative border-t border-e border-[#C7C7C7] ">
          <h1 className="uppercase w-fit absolute mt-[90px] left-[-10px] text-[100px] text-[#242425] leading-[81%] tracking-[-10%] ">
            почуваєтесь
          </h1>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-[1132px_495px]">
          <div className=" border-x h-[720px] border-[#C7C7C7]">
            <img src={previewImage} alt="" className="w-[1080px] h-[720px] " />
          </div>

          <div className="flex flex-col items-center  border-e ms-[33px] border-[#C7C7C7]">
            <div className="space-y-[17px] ">
              <p className="uppercase text-[20px] leading-[24px] font-cofo text-base tracking-[-4%] w-[440px] font-normal text-[#444444]">
                Витончений інтер’єр, атмосфера затишку й величні краєвиди
                старовинного міста.
              </p>
              <p className="uppercase text-[20px] leading-[24px] font-cofo text-base tracking-[-4%] w-[440px] font-normal text-[#8C331B]">
                Відкрийте для себе Львів у всій його красі! Тут естетика й
                комфорт гармонійно переплелися, щоб дарувати вам незабутні
                враження.
              </p>
              <p className="uppercase text-[20px] leading-[24px] font-cofo text-base tracking-[-4%] w-[440px] font-normal text-[#444444] mb-7">
                Ми поєднали львівську автентику та європейську елегантність, щоб
                ви сповна насолодилися моментом.
              </p>
              <Link
                to="/about"
                className="border border-[#8C331B] hover:text-[#EDE8E5] hover:bg-[#8C331B] uppercase text-[16px] font-medium px-[29px] py-[13px] rounded-full text-[#8C331B] mb-0 "
              >
                детальніше
              </Link>

              <div className="relative  ">
                <div className="pt-[40px]">
                  <h1 className="uppercase  text-[100px] leading-[94%] tracking-[-10%] text-[#242425]">
                    якість та
                  </h1>
                  <h1 className="uppercase text-[100px] leading-[94%] tracking-[-10%] text-[#242425] ">
                    сервіс
                  </h1>
                  <h1 className="uppercase text-[100px] leading-[94%] tracking-[-10%] translate-x-41.5 h-fit">
                    виского
                  </h1>
                  <h1 className="uppercase text-[100px] leading-[94%] tracking-[-10%]  text-[#242425]">
                    сервіс
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="border-e border-[#C7C7C7] "></div>
        </div>
      </div>

      <div className="grid grid-cols-[465px_667px_495px]">
        <div className="border-x border-[#C7C7C7] h-[126px]"></div>
        <div className="border-e border-[#C7C7C7] h-[126px]"></div>
        <div className="border-e border-[#C7C7C7] h-[126px]"></div>
      </div>
    </div>
  );
};
