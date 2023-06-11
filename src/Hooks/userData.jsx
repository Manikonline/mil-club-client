// import { useQuery } from '@tanstack/react-query'

// import { useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
// import useAxiosSecure from './useAxiosSecure';


// const useCart = () => {
//     const { user, loading } = useContext(AuthContext)
//     // const token = localStorage.getItem('access-token');
//     const [axiosSecure] = useAxiosSecure();
//     const { refetch, data: userdata = [] } = useQuery({
//         queryKey: ['users', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure(`/users?email=${user?.email}`)
//             console.log('res from axios', res)
//             return res.data;
//         },
//     })

//     return [userdata, refetch]

// }
// export default useCart;