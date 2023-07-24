import React,{useContext, useState} from 'react'; 



const myContext = React.createContext(); 

export const ContextWrapper = ({children}) => {
    let [isModalActive, setModelActive] = useState(false)
    let [isSidebarActive, setSidebarActive] = useState(false)
    
    const openSidebar = () => {
        console.log("opening sidebar")
        setSidebarActive(true)
        console.log(isSidebarActive)
    }
    const closeSidebar = () => {
        setSidebarActive(false)
    }
    const openModal = () => {
        setModelActive(true)
    }
    const closeModal = () => {
        setModelActive(false)
    }


    return <myContext.Provider value={{isModalActive, isSidebarActive, openSidebar, closeSidebar, openModal, closeModal}}> 
        {children}
    </myContext.Provider>
}

export const useGlobalContext = () => {
    const data = useContext(myContext)
    return data
}

