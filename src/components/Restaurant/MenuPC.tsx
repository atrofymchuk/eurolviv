import { InViewWrapper } from "../utils/InViewWrapper";
import { coffe, meat, spagetti } from "../../store/exportsImg";
import cn from "classnames";
type MenuPCToProps ={
    className:string
}

export const MenuPC = ({className}:MenuPCToProps) =>{
    return(

        <>
        <div className={cn(`flex  md:justify-end space-x-[5px]  md:pe-2.25 ${className}`)}>
            <InViewWrapper>
            <img
              src={coffe}
              alt=""
              className={cn(`lg:w-[306px] xl:w-[386px] xl:h-[586px] 2xl:w-[526px]   lg:h-[486px] md:w-[240px] md:h-[300px] w-[97px] h-[146px] object-cover `)}
            />
            </InViewWrapper>
          </div>
          <div className={cn(`flex  flex-col  text-center  items-center ${className}`)}>
            <InViewWrapper>
            <img
              src={spagetti}
              alt=""
              className={cn("lg:w-[326px] xl:w-[426px] 2xl:w-[526px] xl:h-[586px] lg:h-[486px] md:w-[300px] md:h-[300px] w-[97px] h-[146px] object-cover ")}
            />
            </InViewWrapper>
          </div>
          <div className={cn(`flex  md:ps-2.25  ${className}`)}>
            <InViewWrapper>
            <img
              src={meat}
              alt=""
              className="lg:w-[306px] xl:w-[386px] xl:h-[586px]   2xl:w-[526px] lg:h-[486px] md:w-[240px] md:h-[300px] w-[97px] h-[146px] object-cover"
            />
            </InViewWrapper>
          </div>
        </>
    )
}