// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";


// const useAdmin = () => {
//   const {user}=useContext(AuthContext);
//   const {data:isAdmin, isLoading:isAdminLoading}=useQuery({
//     queryKey:['isAdmin',user?.email],
//     queryFn:async()=>{
//         const res =await fetch(`http://localhost:5000/users/admin/${user?.email}`);
//         console.log('is admin response',res)
//         return res.data.admin;
//     }
//   })
//   return [isAdmin,isAdminLoading]
// };

// export default useAdmin;
// import { useQuery } from "@tanstack/react-query";

// import useAxiosSecure from "./useAxiosSecure";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

// const useAdmin = () => {
//     const {user, loading} =useContext(AuthContext);
//     const [axiosSecure] = useAxiosSecure();
//     // use axios secure with react query
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// }
// export default useAdmin;