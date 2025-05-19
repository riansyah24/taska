interface Props {
  label:string;
  type:string;
  name:string
}

const Input = (props:Props) => {
  return (
    <div className="flex flex-col">
      <label className="text-blue-950">{props.label}</label>
      <input type={props.type} className="border-b-2 border-blue-950 outline-0 px-2 py-1" name={props.name} required/>
    </div>
  )
}

export default Input