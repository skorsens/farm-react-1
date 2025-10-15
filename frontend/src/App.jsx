import Card from "./components/Card.jsx";
import './App.css';
import {useState, useEffect } from "react";

export default function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }
    return (
        <div className="bg-purple-800 text-white min-h-screen p-4 flex flex-col justify-center  items-center">
            <h2 className="mb-4">List of users</h2>
            <div className="grid grid-cols-1 gap-4">
                <ol>
                    {
                        users.map((user) => (
                                 <li key={user.id}>{user.name}</li>
                            )
                        )
                    }
                </ol>
            </div>
        </div>
    )
}
