
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {
 
  const loadedCoffee = useLoaderData()
  console.log(loadedCoffee)

  return (
    <>

      <h1 className='text-3xl font-bold'>Coffee : {loadedCoffee.length}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        {
          loadedCoffee.map(coffee =>
             <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              ></CoffeeCard>)
        }
      </div>
  
    </>
  )
}

export default App
