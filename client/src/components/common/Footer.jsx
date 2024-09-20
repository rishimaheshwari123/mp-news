import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assests/logo.jpg";
import axios from "axios";

const Footer = () => {
  const { token } = useSelector((state) => state.auth);


  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalVisits: 0,
    totalNews: 0,
    totalCategories: 0,
    totalSubCategories: 0,
  });
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/dashboard`);
        setStats(response.data);
      } catch (error) {
        console.error('Failed to fetch dashboard statistics', error);
      }
    };

    fetchStats();
  }, []);


  return (
    <footer className="bg-black text-white ">
      <div className="container mx-auto p-5 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="h-16 bg-white" />
        </div>

        {/* Slogan and Contact */}
        <p className="mb-4">
          MP News is the best news website. It provides news from many areas.
        </p>

        <p className="mb-4">
          Contact us:{" "}
          <a
            href="mailto:anantvishwakarma@gmail.com"
            className="text-red-600 hover:underline"
          >
            anantvishwakarma@gmail.com
          </a>
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://www.facebook.com/BLB24NEWS?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.youtube.com/@BLBNEWS24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600"
          >
            <FaTwitter size={24} />
          </a>
          <a href="mailto:livebharatpur@gmail.com" className="text-blue-500">
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://wa.me/+919873237885"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Address */}
        <div className="mb-4 text-sm">
          <p>
            Anant Vishwakarma <br />
            Vivek Apartment 4, E-7, Arera Colony, Bhopal
          </p>
          <p>Phone: 9873237885</p>
          <p>
            Email:{" "}
            <a
              href="mailto:anantvishwakarma@gmail.com"
              className="text-red-600 hover:underline"
            >
              anantvishwakarma@gmail.com
            </a>
          </p>
        </div>

        {/* Bottom Links */}
        <div className="flex justify-center items-center py-4 border-t border-gray-600">
          <div className="flex space-x-4 text-sm">
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <span>|</span>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
            <span>|</span>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/disclaimer" className="hover:underline">
              Disclaimer
            </Link>
            <span>|</span>

            {token ? (
              <Link to="/admin/dashboard" className="hover:underline">
                Admin Login
              </Link>
            ) : (
              <Link to="/login" className="hover:underline">
                Admin Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-white text-center py-2 text-xs border-t border-gray-700">
        All Right Reserved. Designed and Developed by <br />
        <br />
        <a
          href="https://inextets.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          Made
        </a>{" "}
        by - I Next Ets
        <br />
        <p className=" mt-3">   Visits :- {stats.totalVisits}</p>

      </div>
    </footer>
  );
};

export default Footer;
