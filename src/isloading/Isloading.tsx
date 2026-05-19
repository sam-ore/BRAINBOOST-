import { BallTriangle } from "react-loader-spinner"


const Isloading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        
<BallTriangle
height={100}
width={100}
radius={6}
color="yellow"
ariaLabel="ball-triangle-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>
    </div>
  )
}

export default Isloading