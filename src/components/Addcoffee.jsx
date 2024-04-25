import Swal from 'sweetalert2'



const Addcoffee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)

        // send data to the server
        fetch('http://localhost:5000/coffees',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee added successfuly',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
    return (


        <div className="bg-gray-200 p-24">
            <h2 className="text-3xl">Add a new coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form row name and quantity*/}
                <div className="md:flex gap-4">
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Coffee name</span>
                            </div>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />

                        </label>
                    </div>
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Available Quantity</span>
                            </div>
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />

                        </label>
                    </div>
                </div>

                {/* form row supplier  and taste */}
                <div className="md:flex gap-4">
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Supplier</span>
                            </div>
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />

                        </label>
                    </div>
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Taste</span>
                            </div>
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />

                        </label>
                    </div>
                </div>

                {/* category and details */}
                <div className="md:flex gap-4">
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />

                        </label>
                    </div>
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />

                        </label>
                    </div>
                </div>

                {/* Photo url */}

                <div className="w-full">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />

                    </label>
                </div>


                
                <input type="submit" value="Add Coffee" className="w-full btn mt-5 btn-error" />
            </form>
        </div>
    );
};

export default Addcoffee;