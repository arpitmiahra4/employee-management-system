import React, { createContext, useEffect, useState } from 'react'
import { DeletDataFromJson, getData, UpdateDataToJson } from '../api'


export const AppContext = createContext()



const initValue = {
    name: "",
    email : "",
    number: "",
    age:"",
    gender: "",
    maritalStatus: "",
    department: "",
    salary : "",
    image : ""   
}
  
const AppContextProvider = ({children}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [titleSortBy,settitleSortBy] = useState("asc")

    const [FilterByGender, setFilterByGender] = useState(null)
    const [FilterBy,setFilterBy] = useState(null)

    const [totalProduct, setTotalProduct] = useState(null)
  
    const [updateButton,setupdateButton] = useState(false)
    const [editedID, seteditedID] = useState(null)

    const [formData, setFormData] = useState(initValue)

    const limit = 4;
    
    const [page, setPage] = useState(1)
  
  
  
    useEffect(()=>{
        HandleEmotionData()
  
    },[page,titleSortBy,FilterBy,FilterByGender])
  
   // console.log()
  
  const HandleEmotionData = async ()=>{
  
        try{
            setLoading(true)
            const res = await getData({FilterByGender,FilterBy,titleSortBy,page,setTotalProduct,limit})
            setData(res)
           
            setLoading(false)
            
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }
  
    const handleDelet = (id)=>{
  
     
        setLoading(true)
        DeletDataFromJson(id)
        .then(res =>{
            HandleEmotionData()
        })
        .catch(err=>{
            setLoading(false)
        })
        
    }
  
    const handleEditData = (id)=>{
     
        let selectedData = data.filter((el)=>{
            return el.id == id
        })

        setFormData({...selectedData[0]})
    }

    const updateToServer = ()=>{
     
        setLoading(true)
      UpdateDataToJson(editedID,formData)
      .then((res)=>{
        HandleEmotionData()
        setupdateButton(false)
        setLoading(true)
        console.log(res)
        setFormData(initValue)
      })
      .catch((err)=>{
        setLoading(false)
      }) 



    }
  

   //const handleToggle = (id, newStatus) =>{

   //    setLoading(true)
   //    toggleTodo(id, newStatus)
   //    .then(res =>{
   //        handleGetTodos()
   //    })
   //    .catch(err=>{
   //        setLoading(false)
   //    })
   //    
   //} 

  return (
    <AppContext.Provider value={{data ,
        handleDelet,
        totalProduct,
        limit,
        page,setPage,
        handleEditData,
        setupdateButton,
        updateButton,titleSortBy,
        settitleSortBy,FilterBy,
        setFilterBy,FilterByGender,
        setFilterByGender,
        formData,initValue,HandleEmotionData,seteditedID,
        setFormData,updateToServer,loading}} >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
