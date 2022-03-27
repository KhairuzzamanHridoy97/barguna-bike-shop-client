import { useContext } from "react";
import { AuthConext } from "../Contexts/AuthProvider/AuthProvider";

const useAuth =()=>{
    const auth = useContext(AuthConext)
    return auth
}

export default useAuth;