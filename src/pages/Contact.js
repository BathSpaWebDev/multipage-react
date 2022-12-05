import { useState, useCallback } from "react";

function Contact() {

     // get current date
     const d = new Date();
     const todayDate =  d.toISOString().substring(0,10);
     const dMax = new Date(d.setMonth(d.getMonth() + 1)).toISOString().substring(0, 10);
 

    const [name, setName] = useState('');
    const [bookingDate, setBookingDate] = useState(todayDate);
    const [numPpl, setNumPpl] = useState();
    const [tel, setTel] = useState('');

    const allergyOptions = ['peanuts', 'seafood','other'];

    const [allergies, setAllergies] = useState(
        new Array(allergyOptions.length).fill(false)
    );

    const handleCheckboxChange = (position) => {
        const updatedCheckedState = allergies.map((item, index) =>
          index === position ? !item : item
        );
        setAllergies(updatedCheckedState);
    };
    

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name, bookingDate, numPpl, tel);
        console.log(allergies);
    }


    return(
        <div className="Contact">
    
            {/* Form starts here */}
            <form action="" id="booking-form" onSubmit={submitHandler}>
            <h1>Booking form</h1>

            {/* name */}
            <div className="form-row">
                <label htmlFor="name">Your name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            {/* Date */}
            <div className="form-row">
                <label htmlFor="booking-date">When would you like to book?</label>
                <input 
                    type="date" 
                    id="booking-date" 
                    name="booking-date"
                    value={bookingDate}
                    min={todayDate}
                    max={dMax} 
                    onChange={(e) => setBookingDate(e.target.value)}
                />  
            </div>

             {/* number of people */}
             <div className="form-row">
                <label htmlFor="numberOfPpl">How many people:</label>
                <select name="numberOfPpl" id="numberOfPpl" value={numPpl} onChange={(e) => setNumPpl(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="0">Group larger than 10</option>
                </select>
            </div>
            {/* Tel */}
            <div className="form-row">
                <label htmlFor="tel">Contact number</label>
                <input type="tel" name="tel" id="tel" value={tel} onChange={(e) => setTel(e.target.value)}/>
            </div>
            {/* Allergies  */}
            <div className="form-row">
                <fieldset>
                    <legend>Allergies</legend>

                   { 
                    allergyOptions.map((option,i)=> {
                            return (
                                <div key={`option-${i}`}>
                                    <label htmlFor={option}>{option.toUpperCase()}</label>
                                    <input 
                                        type="checkbox" 
                                        name="allergies" 
                                        id={option} 
                                        value={option} 
                                        checked={allergies[i]} 
                                        onChange={() => handleCheckboxChange(i)}
                                    />
                                </div>

                            );
                        })
                    }

                </fieldset>
            </div>

            <button type="submit">Submit</button>
        </form>



        </div>
    )
}
export default Contact;