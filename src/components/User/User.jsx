import { useParams } from "react-router-dom"

function User() {

    const {userid} = useParams()

  return (
    <div>
        <h1 className=" text-2xl text-center m-4 bg-green-400 p-4 rounded-md ">User: {userid}</h1>
        
    </div>
  )
}

export default User