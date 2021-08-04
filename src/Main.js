// import React, { useState, useEffect } from "react";

// export const Main = () => {

//   const [users, setUsers] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [perPage, setPerPage] = useState(0);
//   const [currentPage, setcurrentPage] = useState(0);


//   const fetchData = async () => {
//     const response = await fetch(`https://reqres.in/api/users?page=1`);
//     const data = await response.json();
    
//     const mydata= data.dat
//     const myTotal = data.total;
//     setUsers(mydata);
//     setTotal(myTotal);
//     setPerPage(data.per_page);
//     setcurrentPage(data.page);
//     console.log(mydata);
//    console.log(myTotal);
//    console.log(data.per_page);
//    console.log(data.page);
//   };

//   useEffect(() => {
//     fetchData();
//   },[]);

// //   const pageNumbers = [];

// //     if (total !== 0)
// //      {
// //       for (let i = 1; i <= Math.ceil(total / perPage); i++) 
// //       {
// //         pageNumbers.push(i);
// //       }
// //      }
// // console.log(pageNumbers)
      
//   return (
//       <div>
//          <table>
//           <tbody>
//           {
//            users.map((user, index)=>(
//                <tr key={index}>
//                <td>{user.id}</td>
//                <td>{user.first_name}</td>
//                <td>{user.last_name}</td>
//              </tr>
//             ))
           
//         }
//           </tbody>
//          </table>
//          <div>
         
//          </div>
//    </div>
//   )
// }
