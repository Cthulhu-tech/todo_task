import { Todo, TodoMessage } from "../interface/interface"

export const sortTodo = (todo: Todo) => {

  let typeOne:TodoMessage[] = []
  let typeTwo:TodoMessage[] = []
  let typeThree:TodoMessage[] = []

  todo.message.forEach((info) =>{

    if(info.type === 0){

      typeOne.push(info)

    }

    if(info.type === 1){
        
      typeTwo.push(info)

    }

    if(info.type === 2){
        
      typeThree.push(info)
        
    }

  })

  console.log('sort todo end');

  return [typeOne, typeTwo, typeThree];

}