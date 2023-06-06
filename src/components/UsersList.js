import { useEffect } from "react";
import{useSelector} from 'react-redux'
import { fetchUsers,addUser} from "../store";
import Button  from "./Button";
import { useThunk } from "../hook/use-thunk";
import Skelton from "./Skeleton";
import UsersListItem from "./UsersListItem";



function UsersList(){
   
    const[doFetchUsers,isLoadingUsers,loadingUsersError]=useThunk(fetchUsers)
    const[doCraeteUser,isCreatingUser,creatingUserError]=useThunk(addUser)

//  const{isLoading,data,error}=useSelector((state)=>{
//     console.log(state.users)
//     return state.users

//  })

 const{data}=useSelector((state)=>{
    console.log(state.users)
    return state.users

 })



    useEffect(()=>{
        doFetchUsers()

    },[doFetchUsers ]);  

    const handleUserAdd=()=>{
        doCraeteUser()
    } 

    // if(isLoading){
    //     return<Skelton times={6} className="h-10 w-full"/> 
        
        
    // }
    // if(error){
    //     return<div>Error fetching data..</div>
    // }

    let content;
     if(isLoadingUsers){
        content=<Skelton times={6} className="h-10 w-full"/> 
        
        
    }
   else if(loadingUsersError){
        content=<div>Error fetching data..</div>
    }
    else{
        content=data.map((user)=>{
            return <UsersListItem key={user.id} user={user}/> 
            
         })
    }


   
   
    return<div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
             
                <Button loading={isCreatingUser} onClick={handleUserAdd}>+Add user</Button>
            
            {
                creatingUserError && "Error creating user"
            }
           
        </div>
        {content }
        </div>
}

export default UsersList;