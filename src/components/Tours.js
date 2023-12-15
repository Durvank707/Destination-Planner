import Card from './Card';

function Tours({tours, removeTour}){

    return(
        <div className='container'>
            <div className='heading'>
                <h2>Destination Plans</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tours.id}  {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;