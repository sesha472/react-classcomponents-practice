import React from 'react'
 
 const Userslist = () => {

    let users=["person1","person2","human3","person4","human5","person6"]

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
         {users.map((items,index)=><li key={items}>{items}</li>)} <hr/>
         {users.filter(
            (item)=>{
                if(item.includes("p")){
                    return item
                }
                }).map(item=><li>{item}</li>)
                
                }
         {/*key must be unique */}
       
       <br></br>

       {perosn.map(
        (item)=><li key={item.id}>{item.name}</li>
       )}
     </div>
   )
 }
 
 export default Userslist

 
 