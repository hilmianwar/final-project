import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white font-monts text-sm bg-neutral-900 py-6 ">
      <div className="flex justify-center items-center text-center lg:text-start flex-col lg:flex-row lg:justify-between lg:mx-32">
        <div className="w-96  lg:text-justify mb-8 lg:mb-0">
          <h2 className="text-xl font-semibold">Voyager Travel</h2>
          <p className="mt-6">
            We are here to make your vacations more memorable and unforgettable,
            always working with passion to promote Indonesian tourism.
          </p>
          <div className="flex mt-4 gap-6 justify-center lg:justify-start">
            <Link to="https://github.com/hilmianwar" className="text-3xl">
              <BsGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/hilmi-anwar/"
              className="text-3xl"
            >
              <BsLinkedin />
            </Link>
            <Link
              to="https://www.instagram.com/hilmianwar__/"
              className="text-3xl"
            >
              <BsInstagram />
            </Link>
          </div>
        </div>
        <div>
          <div className="text-md leading-8 mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="mt-4">Email: Dahar@gmail.com</p>
            <p>Telephone: (123) 456-7890</p>
            <p>Address: Jl. Dieng Km 11, Wonosobo, Central Java</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col text-md leading-8">
            <h2 className="text-xl font-semibold">Useful Link</h2>
            <Link to="/categories" className="mt-4">
              Categories
            </Link>
            <Link to="/destination">Destination</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
