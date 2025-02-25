import { Link } from "react-router-dom"

 

export   const RoomsListHeader = () =>{

    return(
        <div
        className="absolute left-0 top-full w-48 bg-white text-black rounded shadow-lg py-2 z-40"
     
      >
        <Link
          to="/rooms/standart-single"
          className="block px-4 py-2 "
        >
          стандарт однокімнатний
        </Link>
        
        <Link
          to="/rooms/standart-two-bed"
          className="block px-4 py-2 "
        >
          Стандарт з двома ліжками
        </Link>
       
        <Link
          to="/rooms/standart-big-bed-balcony"
          className="block px-4 py-2 "
        >
          стандарт велике ліжко з балконом
        </Link>
        <Link
          to="/rooms/standart-two-bed-balcony"
          className="block px-4 py-2 "
        >
          стандарт два ліжка з балконом
        </Link>
       
        <Link
          to="/rooms/standart-big-bed"
          className="block px-4 py-2 "
        >
          стандарт з великим ліжком
        </Link>
        <Link
          to="/rooms/standart-two-bed"
          className="block px-4 py-2 "
        >
          стандарт з двома ліжками
        </Link>
        <Link
          to="/rooms/semi-lux"
          className="block px-4 py-2 "
        >
          напів
        </Link>
        <Link
          to="/rooms/lux-two-rooms"
          className="block px-4 py-2 "
        >
          люкс двокімнатний
        </Link>
        <Link
          to="/rooms/lux-imperial"
          className="block px-4 py-2 "
        >
          люкс imperial
        </Link>
        <Link
          to="/rooms/lux-elegant"
          className="block px-4 py-2 "
        >
          люкс elegant
        </Link>
      </div>
    )
 }