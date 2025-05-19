import type { ListData } from "../dto/list.dto.ts"
import supabase from "../database/supabase.ts"

export async function getLists() : Promise<ListData[]>{
  const { data, error } = await supabase
    .from('taska')
    .select(); 
  
  if (error) {
    console.error('Error:', error);
    throw error;
  }
  
  return data.reverse() || [];
}

export async function createTask(name:string,description:string,date:string,time:string) : Promise<void>{
  const { data, error } = await supabase
    .from('taska')
    .insert([
      { 
        task_name: name, 
        date: date,
        time:time,
        description: description
      }
    ])
    .select();
  
  if (error) console.error('Error:', error);
  else console.log('Data created:', data);
}