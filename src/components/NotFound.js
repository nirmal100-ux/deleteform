import { useNavigate } from "react-router"

const NotFound = () => {

  const nav = useNavigate();

  return (
    <div className="h-[450px] w-[400px] mx-auto">
      <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_scqggbnw.json" background="transparent" speed="1" loop autoplay></lottie-player>
      <button onClick={() => nav(-1)} className="w-full hover:text-green-700 "> Back To Home</button>
    </div>
  )
}
export default NotFound