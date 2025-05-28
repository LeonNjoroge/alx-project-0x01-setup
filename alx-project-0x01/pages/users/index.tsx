import React, {useState} from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import {PostData, PostProps, UserProps} from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import UserModal from "@/components/common/UserModal";


const Users: React.FC = ({posts}) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserProps | null>(null);

    const handleAddUser = (newUser: UserProps) => {
        setUser({...newUser, id: posts.length + 1});
    };

    return (
        <div>
            <Header />

            <div className="flex justify-between p-4">
                <h1 className=" text-2xl font-semibold">User Content</h1>
                <button onClick={() => setModalOpen(true)}
                        className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
            </div>

            <div className="flex flex-col justify-center">
                {
                    posts.map(({ id, name, username, email, address, phone, website, company}: UserProps, key: number) => (
                        <UserCard id={id} name={name} username={username} email={email} address={address} phone={phone} website={website} company={company} />
                    ))
                }

            </div>
            {
                isModalOpen && (
                    <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
                )
            }

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