import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  image: string;
  name: string;
  designation: string;
}

const ProfileCard = ({ image, name, designation }: ProfileCardProps) => {
  return (
    <div className="w-64 mx-auto rounded-lg overflow-hidden shadow-lg bg-white text-gray-800">
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={`${name}'s profile`}
          width={500}
          height={500}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5 text-center">
        <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        <p className="text-gray-500 text-sm mt-1">{designation}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
