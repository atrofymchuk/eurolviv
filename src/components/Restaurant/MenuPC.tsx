import coffe from "../../assets/Terrase/Menu/Coffe.png";
import meat from "../../assets/Terrase/Menu/meat.png";
import spagetti from "../../assets/Terrase/Menu/spagetti.png";

type MenuPCToProps ={
    className:string
}

export const MenuPC = ({className}:MenuPCToProps) =>{
    return(

        < >
        
        <div className={`flex  lg:justify-end border-s border-[#B3B3B3] lg:pe-2.25 ${className}`}>
            <img
              src={coffe}
              alt=""
              className={`lg:w-[456px] lg:h-[686px] w-[97px] h-[146px] object-cover `}
            />
          </div>
          <div className={`flex border-[#B3B3B3] flex-col  text-center  items-center ${className}`}>
            <img
              src={spagetti}
              alt=""
              className="lg:w-full lg:h-[686px] w-[97px] h-[146px] object-cover "
            />
          </div>
          <div className={`flex border-[#B3B3B3] lg:ps-2.25 border-e ${className}` }>
            <img
              src={meat}
              alt=""
              className="lg:w-[456px] lg:h-[686px] w-[97px] h-[146px] object-cover"
            />
          </div>
        </>
    )
}