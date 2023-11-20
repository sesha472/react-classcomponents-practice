import React from 'react'
 
 const Userslist = () => {

    let users=["person1","person2","person3","person4","person5","person6"]

    let perosn=[
        {id:1,
        name:"one"
        },
        {id:2,
            name:"two"
            },
            {id:3,
                name:"three"
                },
                {id:4,
                    name:"four"
                    }
    ];
    
   return (
     <div>
         {users.map((items,index)=><li key={items}>{items}</li>)} 
         {/*key must be unique */}
       
       <br></br>

       {perosn.map(
        (item)=><li key={item.id}>{item.name}</li>
       )}
     </div>
   )
 }
 
 export default Userslist

 
 