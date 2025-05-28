import React from "react";
import {Address, Company, UserCardProps} from "@/interfaces";

import { UserProps } from "@/interfaces";
import Image from "next/image";
import userImage from "@/public/userImage.png";

const UserCard: React.FC<UserProps> = ({id, name, username, email, address, phone, website, company}) => {
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
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-gray-600">@{username}</p>
                </div>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Website: <a href={`https://${website}`} className="text-blue-600 hover:underline" target="_blank">{website}</a></p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p>{address.street}, {address.suite}</p>
                    <p>{address.city}, {address.zipcode}</p>
                    <p>Geo: Lat {address.geo.lat}, Lng {address.geo.lng}</p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Company</h3>
                    <p>Name: {company.name}</p>
                    <p className="italic text-gray-600">"{company.catchPhrase}"</p>
                    <p>Business: {company.bs}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
