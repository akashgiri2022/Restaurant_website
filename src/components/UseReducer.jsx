import React,{  useReducer} from 'react'
import "./style.css"


const reducer=(state,action)=>{
  if(action.type==="incr"){
    state=state+1;
  }
  if(state>0 && action.type==="dec"){
    state=state-1;
  }
  return state;
}

const UseReducer = () => {



  // const [myNum,setmyNum]=useState(0);
  // useEffect(()=>{
  //   document.title=`chats(${myNum})`
  // })
const initialData=0;

  const [state,dispatch]=useReducer(reducer,initialData)


  // if(myNum<0){
  //   setmyNum(0);  
  // }
  return (
    <>

    <h1 className='p'>{state}</h1>



    <div className='divin'>
        <button className='btnin' onClick={()=>dispatch({type:"incr"})}>
          <h1>+</h1>
        </button>
    </div>
    <div className='divde'>
        <button className='btnde' onClick={()=>dispatch({type:"dec"})}>
          <h1>-</h1>
          </button>
    </div>
      
    </>
  )
}

export default UseReducer
