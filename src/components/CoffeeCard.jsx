

const CoffeeCard = ({coffee}) => {
    
    const {name, quantity, supplier, taste, category, details, photo} = coffee;
    return (
        <div className="p-5">
            <div className="card card-side bg-base-100 shadow-xl space-y-4">
                <figure><img className="h-[200px] w-[300px]" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>Name : {name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;