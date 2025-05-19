interface Props {
  name:string
  description:string;
  date:string;
  time:string;
}

const ListTask = (props:Props) => {
  return (
    <li className="border-2 border-blue-950 rounded p-3">
      <h1 className="text-xl font-bold">{props.name}</h1>
      <p className="text-blue-950 font-medium">{props.description}</p>
      <p className="text-blue-950"><span>{props.date}</span> <span>{props.time}</span></p>
    </li>
  )
}

export default ListTask