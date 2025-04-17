import Quizine from "./Quizine";
import TopRest from "./TopRest";
import ResWithOnlineDeli from "./ResWithOnlineDeli";
import { UserProvider } from "../utils/context";
import BestPlacesCities from "./BestPlacesCities";
function Body() {
  return (
    <UserProvider>
      <div className='w-full mt-4'>
        <div className='w-[80%] flex flex-col ml-[10%] overflow-hidden'>
          <Quizine />
          <TopRest />
          <ResWithOnlineDeli/>
          <BestPlacesCities/>
        </div>
      </div>
    </UserProvider>
  );
}

export default Body;
