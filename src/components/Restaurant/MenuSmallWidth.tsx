import coffe from "../../assets/Restaurant/Menu/Coffe.webp";
import meat from "../../assets/Restaurant/Menu/meat.webp";
import spagetti from "../../assets/Restaurant/Menu/spagetti.webp";
type MenuSmallWidthToProps ={
    className:string
}


export const MenuSmallWidth = ({className}:MenuSmallWidthToProps) =>{

    return(
        <div className={`flex flex-row w-full   justify-center space-x-[5px]  ${className}`}>
        <img
          src={coffe}
          alt=""
          className="w-[96px] h-[146px] sm:w-[202px] sm:h-[186px]  object-cover"

            />
        <img
          src={spagetti}
          alt=""
          className="w-[102px] h-[146px] sm:w-[202px] sm:h-[186px]  object-cover"
        />

        <img
          src={meat}
          alt=""
          className="w-[86px] h-[146px] sm:w-[202px] sm:h-[186px]  object-cover"
        />
    </div>
    )
}