import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        id: Date.now(), // simple unique ID
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg overflow-y-auto max-h-[90vh]">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input name="name" placeholder="Full Name" value={user.name} onChange={handleChange} className="input" />
                        <input name="username" placeholder="Username" value={user.username} onChange={handleChange} className="input" />
                        <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="input" />
                        <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="input" />
                        <input name="website" placeholder="Website" value={user.website} onChange={handleChange} className="input" />
                        <input name="street" placeholder="Street" value={user.address.street} onChange={(e) => setUser((prev) => ({ ...prev, address: { ...prev.address, street: e.target.value } }))} className="input" />
                        <input name="suite" placeholder="Suite" value={user.address.suite} onChange={(e) => setUser((prev) => ({ ...prev, address: { ...prev.address, suite: e.target.value } }))} className="input" />
                        <input name="city" placeholder="City" value={user.address.city} onChange={(e) => setUser((prev) => ({ ...prev, address: { ...prev.address, city: e.target.value } }))} className="input" />
                        <input name="zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={(e) => setUser((prev) => ({ ...prev, address: { ...prev.address, zipcode: e.target.value } }))} className="input" />
                        <input name="lat" placeholder="Latitude" value={user.address.geo.lat} onChange={(e) => setUser((prev) => ({ ...prev, address: { ...prev.address, geo: { ...prev.address.geo, lat: e.target.value } } }))} className="input" />
                        <input name="lng" placeholder="Longitude" value={user.address.geo.lng} onChange={(e) => setUser((prev) => ({ ...prev, address: { ...prev.address, geo: { ...prev.address.geo, lng: e.target.value } } }))} className="input" />
                        <input name="companyName" placeholder="Company Name" value={user.company.name} onChange={(e) => setUser((prev) => ({ ...prev, company: { ...prev.company, name: e.target.value } }))} className="input" />
                        <input name="catchPhrase" placeholder="Catch Phrase" value={user.company.catchPhrase} onChange={(e) => setUser((prev) => ({ ...prev, company: { ...prev.company, catchPhrase: e.target.value } }))} className="input" />
                        <input name="bs" placeholder="BS" value={user.company.bs} onChange={(e) => setUser((prev) => ({ ...prev, company: { ...prev.company, bs: e.target.value } }))} className="input" />
                    </div>

                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">
                            Cancel
                        </button>
                        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;