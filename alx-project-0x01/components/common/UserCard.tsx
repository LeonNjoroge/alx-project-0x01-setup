import React from "react";
import { UserCardProps } from "@/interfaces";

import { UserProps } from "@/interfaces";
import Image from "next/image";
import userImage from "@/public/userImage.png";

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
                <Image
                    src={userImage}
                    alt="User Profile"
                    width={70}
                    height={70}
                    className="rounded-full border"
                />
                <div>
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p className="text-gray-600">@{user.username}</p>
                </div>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: <a href={`https://${user.website}`} className="text-blue-600 hover:underline" target="_blank">{user.website}</a></p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p>{user.address.street}, {user.address.suite}</p>
                    <p>{user.address.city}, {user.address.zipcode}</p>
                    <p>Geo: Lat {user.address.geo.lat}, Lng {user.address.geo.lng}</p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Company</h3>
                    <p>Name: {user.company.name}</p>
                    <p className="italic text-gray-600">"{user.company.catchPhrase}"</p>
                    <p>Business: {user.company.bs}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
