import React from 'react'
 
 const Userslist = () => {

    let users=["person1","person2","person3","person4","person5","person6"]
   return (
     <div>
         {users.map((items,index)=><p key={items}>{items}</p>)} 
         {/*key must be unique */}
       
     </div>
   )
 }
 
 export default Userslist

 
 