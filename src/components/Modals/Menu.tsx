import { IoClose } from "react-icons/io5";
import { useMenuStore } from "../../store/useMenuStore";
import { InViewWrapper } from "../utils/InViewWrapper";
import cn from "classnames";
export default function ModalMenu({ onCloseGlobalModal }: { onCloseGlobalModal: () => void }) {
  const { menuItems } = useMenuStore();

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[90vh] py-5 justify-items-center">
      <button
        className="absolute top-2 -right-1.5 text-2xl hover:cursor-pointer"
        onClick={onCloseGlobalModal}
      >
        <IoClose color="#8C331B" width={38} height={38} />
      </button>
      {menuItems.map((item, index) => (
        <div
          key={item.title}
          className={cn(`${
            index === menuItems.length - 1 && "lg:col-span-1 justify-self-center"
          }`)}
        >
          <div className="flex justify-center 2xl:w-full 2xl:max-w-[537px] p-5 border border-[#b3b3b3]">
            <div className="flex flex-col justify-between lg:items-center">
              <h3 className="uppercase lg:text-[21.5px] text-[16px] font-semibold">
                {item.title}
              </h3>
              <p className="uppercase lg:text-[14px] text-[16px] text-[#6B6B6B] pe-5">
                {item.ingredients.join(", ")} -
                <span className="font-semibold">{item.grams}</span>
              </p>
            </div>
            <InViewWrapper>
              <img loading="lazy"
                src={item.previewImage}
                alt={item.title}
                className="lg:w-full max object-cover max-w-[280px]"
              />
            </InViewWrapper>
          </div>
        </div>
      ))}
    </div>
  );
}
