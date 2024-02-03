import { useState } from "react"

function App() {
  const [color, setcolor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duation-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button 
            onClick={()=> setcolor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"green"}}>green</button>
            <button 
             onClick={()=> setcolor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"blue"}}>blue</button>
            <button
             
             onClick={()=> setcolor("lavender")}
               className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor:"lavender"}}>lavender</button>
            <button 
            onClick={()=> setcolor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"black"}}>black</button>
            <button
            onClick={()=> setcolor("purple")}
               className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor:"purple"}}>purple</button>
            <button 
            onClick={()=> setcolor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor:"red"}}>red</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
