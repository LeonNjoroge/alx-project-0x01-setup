import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import {PostProps, UserProps} from "@/interfaces";
import PostCard from "@/components/common/PostCard";


const Users: React.FC = ({posts}) => {

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

            <div className="flex flex-col justify-center">
                {
                    posts?.map(({ id, name, username, email, address, phone, website, company}: UserProps, key: number) => (
                        <UserCard id={id} name={name} username={username} email={email} address={address} phone={phone} website={website} company={company} />
                    ))
                }

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