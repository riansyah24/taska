import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getLists } from "../services/data.service.ts"
import type { ListData } from "../dto/list.dto.ts"
import ListTask from "../components/ListTask.tsx"
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Home = () => {
  let [lists, setLists] = useState<'loading' | ListData[]>("loading")
  
  const fetchingData = async() => {
    const data = await getLists()
    setLists(data)
  }
  
  useEffect(() => {
    fetchingData()
  },[])
  return (
    <div className="h-screen">
      <div className="bg-blue-950 text-white pt-2">
        {/* Navbar */}
        <nav className="flex py-3 justify-end p-5">
          <AccountCircleIcon fontSize="large"/>
        </nav>
        {/* Heading */}
        <div className="flex justify-between items-center p-5">
          <h1 className="text-2xl font-bold">My Task</h1>
          <Link className="border-2 font-bold border-white rounded p-1" to="/createtask"><AddIcon/></Link>
        </div>
      </div>
      {/* List Task */}
      <div className="p-5">
        <ul className="flex flex-col gap-4">
          {lists === "loading" ? <span>Loading ...</span> : lists.map((data:ListData,i:number) => <ListTask key={i} name={data.task_name} date={data.date} time={data.time} description={data.description}/>)}
        </ul>
      </div>
    </div>
  )
}

export default Home