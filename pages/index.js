import { NavBar } from "../components/Navbar/Navbar";
import { Filters } from "../components/Filters/Filters";
import { Rides } from "../components/Rides/Rides";



export default function Home() {
   
   return (
   <>
   <NavBar /> 
   <Filters/> 
   <Rides />
   </>
  )
}
