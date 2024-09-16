import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaSearch } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { fetchCategory } from "../../../services/operations/admin";
import SearchBox from "./SearchBox";
import logo from "../../../assests/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { category } = useSelector((state) => state.news);
  const [categories, setCategories] = useState([]);

  const handleDropdownToggle = (index, hasSublinks) => {
    if (hasSublinks) {
      setOpenDropdown(openDropdown === index ? null : index);
    } else {
      setIsOpen(false);
      setOpenDropdown(null);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await fetchCategory();

        // Filter out the "राज्य" category
        const filteredCategories =
          categoriesData?.categories.filter(
            (cat) => cat.name.trim() !== "राज्य"
          ) || [];

        reorderCategories(filteredCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    if (category.length !== 0) {
      // Filter out the "राज्य" category from existing data
      const filteredCategories = category.filter(
        (cat) => cat.name.trim() !== "राज्य"
      );

      reorderCategories(filteredCategories);
    } else {
      fetchCategories();
    }
  }, [category]);

  const reorderCategories = (categoriesList) => {
    const fixedOrder = ["विदेश", "देश", "मनोरंजन", "खेल"];
    const orderedCategories = fixedOrder
      .map((fixedCat) =>
        categoriesList.find((cat) => cat.name.trim() === fixedCat)
      )
      .filter(Boolean);

    const remainingCategories = categoriesList.filter(
      (cat) => !fixedOrder.includes(cat.name.trim())
    );

    setCategories([...orderedCategories, ...remainingCategories]);
  };

  return (
    <nav className="bg-white border-black border ">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex">
          <Link
            to="/"
            className="hidden lg:flex lg:text-black lg:mr-3 lg:mt-[19px]"
          >
            <FaHome size={22} />
          </Link>
          <div className="hidden lg:flex lg:mt-[2px]">
            {categories.map((link, index) => (
              <div key={index} className="group relative z-50">
                <Link
                  to={`/category/${link?._id}`}
                  className="text-black flex gap-2 hover:bg-gray-100 text-[16px] font-bold hover:text-black px-3 py-4"
                  onClick={handleLinkClick}
                >
                  <img src={link?.image} alt="" className=" h-6" />
                  {link?.name}
                </Link>
                {link?.subCategories && link?.subCategories?.length > 0 && (
                  <div className="absolute left-0 top-8 text-[16px] font-bold bg-white text-black py-2 w-32 hidden group-hover:block text-start">
                    {link?.subCategories.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/subcategory/${sublink?._id}`}
                        className="block text-black hover:bg-red-100 hover:text-black px-3 py-2"
                        onClick={handleLinkClick}
                      >
                        {sublink?.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            className="text-white bg-gray-200 rounded-md p-2"
          >
            <FaSearch className="text-black" />
          </button>
          <SearchBox isOpen={isSearchOpen} toggleSearch={toggleSearch} />
        </div>
      </div>

      {/* Sidebar for Small Devices */}
      <div className="lg:hidden">
        <div className="flex justify-between px-5">
          <div>
            <img src={logo} alt="not found" className="w-16 h-12" />
          </div>
          <button
            onClick={toggleSearch}
            className="text-white bg-gray-200 rounded-md p-2"
          >
            <FaSearch className="text-black" />
          </button>
        </div>
        <SearchBox isOpen={isSearchOpen} toggleSearch={toggleSearch} />

        <div className="flex overflow-x-scroll space-x-4 p-4">
          <div className="flex gap-3">
            {" "}
            <Link
              to="/"
              className="flex lg:hidden lg:text-black lg:mr-3 lg:mt-[19px]"
            >
              <FaHome size={22} />
            </Link>
            {categories.map((link, index) => (
              <Link
                key={index}
                to={`/category/${link?._id}`}
                className="text-xl font-semibold whitespace-nowrap "
                onClick={handleLinkClick}
              >
                <div className="flex gap-3">
                  <img src={link?.image} alt="" className=" h-6" />
                  <p className="mr-5"> {link?.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
