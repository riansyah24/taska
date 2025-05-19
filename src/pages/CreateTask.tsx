import { Link } from "react-router-dom"
import { createTask } from "../services/data.service.ts"
import Input from "../components/Input.tsx"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CreateTask = () => {
  const submitTask = async (formData:FormData) => {
    const taskName = formData.get("taskName") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const description = formData.get("description") as string
    await createTask(taskName,description,date,time)
    window.location.assign("/")
  }
  return (
    <div className="h-screen">
      {/*Navbar*/}
      <nav className="p-5">
        <Link to="/"><ArrowBackIcon sx={{ color:"#2a4365" }}/></Link>
      </nav>
      {/*Heading*/}
      <div className="pt-2 p-5">
        <h1 className="text-2xl text-blue-950 font-bold">Create New Task</h1>
      </div>
      {/*Form*/}
      <div className="p-5 h-3/4">
        <form className="flex flex-col gap-10 justify-between h-full" action={submitTask}>
          <Input label="Task Name" type="text" name="taskName"/>
          <Input label="Date" type="date" name="date"/>
          <Input label="Time" type="time" name="time"/>
          <Input label="Description" type="text" name="description"/>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-950 font-bold text-white text-xl rounded w-3/4 py-2">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask