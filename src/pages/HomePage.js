
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeData } from "../features/infoSlice";
const HomePage = () => {


  const { infos } = useSelector((store) => store.infos);
  const dispatch = useDispatch();

  const nav = useNavigate();
  return (
    <div className="grid grid-cols-4 gap-5 p-4">

      {infos.map((info, i) => {
        return <div key={info.id} className="shadow-lg">
          <img src={info.preview} alt="" />
          <div>
            <h1>{info.username}</h1>
            <p>{info.email}</p>
            <p>Gender: {info.gender}</p>
            <p>Country: {info.country}</p>
            <p>{info.msg.substring(0, 50)}</p>

            <h3>My Hobbies</h3>
            <hr />
            <div className="flex space-x-2">
              {info.hobby.map((ho, i) => {
                return <p className="" key={i}>{ho}</p>

              })}
            </div>

            <div className=" flex justify-end px-2 py-1 space-x-5">
              <button onClick={() => nav(`/update/${info.id}`)} ><i className="fa-solid fa-pen-to-square fa-lg"></i></button>

              <button onClick={() => dispatch(removeData(i))} ><i class="fa-solid fa-trash"></i>

              </button>



            </div>

          </div>
        </div>
      })}


    </div >
  )
}
export default HomePage
