
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeData } from "../features/infoSlice";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const HomePage = () => {


  const { infos } = useSelector((store) => store.infos);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);


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


              <Button onClick={handleOpen}>
                <i class="fa-solid fa-trash"></i>
              </Button>
              <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Delete.</DialogHeader>
                <DialogBody divider>
                  You want to Delete
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button variant="gradient" color="red" onClick={handleOpen}>
                    <span onClick={() => dispatch(removeData(i))}>Confirm</span>
                  </Button>
                </DialogFooter>
              </Dialog>



            </div>

          </div>
        </div>
      })}


    </div >

  )
}
export default HomePage
