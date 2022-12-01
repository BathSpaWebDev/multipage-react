import { useState } from 'react';

function Dashboard() {
    const [status, setStatus] = useState('scared');

    return(
        <div className="Dashboard">
            <h1>Hello from the Dashboard page</h1>
            <div className="profile">
                <div className="profile__picture">
                    <img src="/images/cat.png" alt="cat looking scared" />
                </div>
                <div className="profile__status">The current status is:
                    {status === 'not_scared' ? 'not scared' : status }
                </div>

                <h3>Change your cat's status</h3>
                <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>
                    <option value="scared">Scared</option>
                    <option value="terrified">Terrified</option>
                    <option value="not_scared">Not scared</option>
                </select>


            </div>
        </div>
    )
}
export default Dashboard;