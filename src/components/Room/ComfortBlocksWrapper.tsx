import { IconsState, Room } from "../../types/types";
import { ComfortsBlock } from "./ComfotsBlock";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import "./styles.css";
type ComfortsBlockToProps = {
  icons?: IconsState;
  room?: Room;
};

export const ComfortsBlocksWrapper = ({
  icons,
  room,
}: ComfortsBlockToProps) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const blocksRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const blocks = blocksRefs.current.filter(Boolean);
    if (blocks.length === 0) return;
    
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      
      const firstBlock = blocks[0];
      if (firstBlock) {
        firstBlock.style.position = 'sticky';
        firstBlock.style.top = '0';
        firstBlock.style.zIndex = '10';
      }
      
      for (let i = 1; i < blocks.length; i++) {
        const block = blocks[i];
        if (!block) continue;
        
        const overlapProgress = Math.min(1, Math.max(0, scrollTop / 300));
        
        const translateY = -overlapProgress * (block.offsetHeight * 0.6);
        if(translateY < -502.2){
          block.style.transform = `translateY(${translateY}px)`;
        }
        
        block.style.zIndex = `${20 + i}`;
      }
    };
    
    container.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          window.scrollTo({
            top: entry.target.getBoundingClientRect().top + window.pageYOffset - 153,
            behavior: 'smooth'
          });
        }
      },
      { threshold: 0.7 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  if (!icons || !room) return null;
  
  const commonProps = {
    imgStyle: {
      ammentiesImageFst: room.about.ammetiveImgStyleFst,
      ammentiesImageScd: room.about.ammetiveImgStyleScd,
    },
    mobileImages: room.about.ammentiesMobileImages
  };
  
  const standardStyle = {
    bgColor: "bg-[#EDE8E5]",
    text: "text-[#6B6B6B]",
    headerColor: "text-black",
  };
  
  const luxStyle = {
    bgColor: "bg-[#A47762]",
    text: "text-[#E1E1E1]",
    headerColor: "text-white",
  };
  
  const setBlockRef = (index: number) => (el: HTMLDivElement | null) => {
    blocksRefs.current[index] = el;
  };
  
  return (
    <div 
      className="relative 2xl:h-[43vw] xl:h-[46.22vw]  overflow-y-auto scrollbar-hide" 
      ref={containerRef} 
      style={{ 
        perspective: "800px",
        scrollBehavior: "smooth"
      }}
    >
      {room.isLux ? (
        <>
          <div 
            ref={setBlockRef(0)} 
            className="w-full sticky top-0"
            style={{ 
              transition: "transform 0.3s ease-out",
            }}
          >
            <ComfortsBlock
              title={t("room.comfortBlock.title")}
              icons={icons.ammentiesInRoom}
              {...commonProps}
              images={[room.about.ammentiesImages[0], room.about.ammentiesImages[1], room.about.ammentiesMobileImages[0]]}
              style={luxStyle}
              type={room.type}
            />
          </div>
          
          {icons.bedRoom && (
            <div 
              ref={setBlockRef(1)} 
              className="w-full sticky top-0"
              style={{ 
                transition: "transform 0.3s ease-out",
              }}
            >
              <ComfortsBlock
                title={t("room.comfortBlock.title2")}
                icons={icons.bedRoom}
                {...commonProps}
                images={[room.about.ammentiesImages[2], room.about.ammentiesImages[3], room.about.ammentiesMobileImages[1]]}
                style={standardStyle}
                type={room.type}
              />
            </div>
          )}
          
          <div 
            ref={setBlockRef(2)} 
            className="w-full relative z-10"
            style={{ 
              transition: "transform 0.3s ease-out ",
            }}
          >
            <ComfortsBlock
              title={t("room.comfortBlock.title3")}
              icons={icons.bathRoom}
              {...commonProps}
              images={[room.about.ammentiesImages[4], room.about.ammentiesImages[5], room.about.ammentiesMobileImages[2]]}
              style={standardStyle}
              type={room.type}
            />
          </div>
        </>
      ) : (
        <>
          <div 
            ref={setBlockRef(0)} 
            className="w-full"
            style={{ 
              transition: "transform 0.3s ease-out",
            }}
          >
            <ComfortsBlock
              title={t("room.comfortBlock.title4")}
              icons={icons.ammentiesInRoom}
              {...commonProps}
              images={[room.about.ammentiesImages[0], room.about.ammentiesImages[1], room.about.ammentiesMobileImages[0]]}
              style={standardStyle}
              type={room.type}
            />
          </div>
     
          <div 
            ref={setBlockRef(1)} 
            className="w-full sticky top-0"
            style={{ 
              transition: "transform 0.3s ease-out",
            }}
          >
            <ComfortsBlock
              title={t("room.comfortBlock.title3")}
              icons={icons.bathRoom}
              {...commonProps}
              images={[room.about.ammentiesImages[2], room.about.ammentiesImages[3], room.about.ammentiesMobileImages[1]]}
              style={standardStyle}
              type={room.type}
            />
          </div>
        </>
      )}
    </div>
  );
};