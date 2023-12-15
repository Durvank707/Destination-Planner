import data from './data';
import Tours from './components/Tours';
import React,{useState} from 'react';

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id!==id)
    setTours(newTour);
  }

  if(tours.length === 0){
    return (
      <div className='refresh'>
        <h2 className='title'>No Tours Left</h2>
        <button className='bttn' onClick={()=>setTours(data)}>
          <h4>Refresh</h4>
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>

  )
};

export default App;
