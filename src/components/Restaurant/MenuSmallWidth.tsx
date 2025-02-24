import coffe from "../../assets/Terrase/Menu/Coffe.png";
import meat from "../../assets/Terrase/Menu/meat.png";
import spagetti from "../../assets/Terrase/Menu/spagetti.png";
type MenuSmallWidthToProps ={
    className:string
}


export const MenuSmallWidth = ({className}:MenuSmallWidthToProps) =>{

    return(
        <div className={`flex flex-row w-full border-[#B3B3B3] border-x  justify-center space-x-[5px]  ${className}`}>
        <img
          src={coffe}
          alt=""
          className="w-[96px] h-[146px]  object-cover"

            />
        <img
          src={spagetti}
          alt=""
          className="w-[102px] h-[146px] object-cover"
        />

        <img
          src={meat}
          alt=""
          className="w-[86px] h-[146px]  object-cover"
        />
    </div>
    )
}