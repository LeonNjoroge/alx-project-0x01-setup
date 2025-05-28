import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import {UserProps} from "@/interfaces";


const Users: React.FC = () => {

    const sampleUser: UserProps = {
        id: 1,
        name: "Jane Doe",
        username: "janedoe",
        email: "jane.doe@example.com",
        address: {
            street: "456 Maple Street",
            suite: "Suite 789",
            city: "Springfield",
            zipcode: "54321",
            geo: {
                lat: "37.7749",
                lng: "-122.4194",
            },
        },
        phone: "555-123-4567",
        website: "janedoe.dev",
        company: {
            name: "Tech Solutions Inc.",
            catchPhrase: "Empowering innovation everywhere",
            bs: "disrupt intuitive platforms",
        },
    };

    return (
        <div>
            <Header />

            <div className="flex justify-center">
                < UserCard  user={sampleUser} />
            </div>


        </div>
    )
}



export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Users;