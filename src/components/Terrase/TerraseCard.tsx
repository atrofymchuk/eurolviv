type TerraseCardToProps ={
    index:number
    el:string
    length:number
}

export const TerraseCard = ({index,el, length}:TerraseCardToProps) =>{
    return(
        <div
            key={index}
            className={`border-e border-[#B3B3B3AD] p-[13px]
              ${index === length - 1 ? "pe-0" : ""}
              ${index === 0 ? "ps-0" : ""}
             `}
          >
            <img src={el} alt="" className="w-full h-[546px] object-cover" />
          </div>
    )
}