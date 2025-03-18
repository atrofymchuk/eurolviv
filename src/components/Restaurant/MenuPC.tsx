import { InViewWrapper } from "../utils/InViewWrapper";
import { coffe, meat, spagetti } from "../../store/exportsImg";
type MenuPCToProps ={
    className:string
}

export const MenuPC = ({className}:MenuPCToProps) =>{
    return(

        < >
        
        <div className={`flex  md:justify-end  md:pe-2.25 ${className}`}>
            <InViewWrapper>
            <img
              src={coffe}
              alt=""
              className={`lg:w-[326px] xl:w-[426px] 2xl:w-[526px] lg:h-[686px] md:w-[300px] md:h-[300px] w-[97px] h-[146px] object-cover `}
            />
            </InViewWrapper>
          </div>
          <div className={`flex  flex-col  text-center  items-center ${className}`}>
            <InViewWrapper>
            <img
              src={spagetti}
              alt=""
              className="lg:w-[326px] xl:w-[426px] 2xl:w-[526px] lg:h-[686px] md:w-[300px] md:h-[300px] w-[97px] h-[146px] object-cover "
            />
            </InViewWrapper>
          </div>
          <div className={`flex  md:ps-2.25  ${className}` }>
            <InViewWrapper>
            <img
              src={meat}
              alt=""
              className="lg:w-[326px] xl:w-[426px] 2xl:w-[526px] lg:h-[686px] md:w-[300px] md:h-[300px] w-[97px] h-[146px] object-cover"
            />
            </InViewWrapper>
          </div>
        </>
    )
}