import { InViewWrapper } from "../utils/InViewWrapper";
import { coffe, meat, spagetti } from "../../store/exportsImg";
import cn from "classnames";
type MenuPCToProps ={
    className:string
}

export const MenuPC = ({className}:MenuPCToProps) =>{
    return(

        <>
        <div className={cn(`flex  md:justify-end space-x-[5px]   border-[#B3B3B3]  md:pe-2.25 ${className}`)}>
            <InViewWrapper>
            <img
              src={coffe}
              alt=""
              className={cn(`lg:w-[306px] xl:w-[386px] xl:h-[586px] 2xl:w-[446px]   2xl:h-[686px]  lg:h-[486px] md:w-[240px] md:h-[300px] w-[97px] h-[146px] object-cover `)}
            />
            </InViewWrapper>
          </div>
          <div className={cn(`flex  flex-col  text-center lg:border-x border-[#B3B3B3] items-center ${className}`)}>
            <InViewWrapper>
            <img
              src={spagetti}
              alt=""
              className={cn("lg:w-[326px] xl:w-[426px] 2xl:w-[513px] xl:h-[586px]  2xl:h-[686px] lg:h-[486px] md:w-[300px] md:h-[300px] w-[97px] h-[146px] object-cover ")}
            />
            </InViewWrapper>
          </div>
          <div className={cn(`flex  border-[#B3B3B3]  md:ps-2.25  ${className}`)}>
            <InViewWrapper>
            <img
              src={meat}
              alt=""
              className="lg:w-[306px] xl:w-[386px] xl:h-[586px]   2xl:w-[457px] 2xl:h-[686px]  lg:h-[486px] md:w-[240px] md:h-[300px] w-[97px] h-[146px] object-cover"
            />
            </InViewWrapper>
          </div>
        </>
    )
}