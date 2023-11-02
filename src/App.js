import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";
import Welcome from "./components/Welcome";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";
// Importing all icons from react-icons
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
// To import dummy data from a separate file
import { amazonData, flipkartData, shopifyData } from "./Data/Data";

function App() {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState(shopifyData);
  const [selectedOption, setSelectedOption] = useState("1");
  const [openModal, setOpenModal] = useState(false);
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value == "1") setData(shopifyData);
    else if (e.target.value == "2") setData(amazonData);
    else if (e.target.value == "3") setData(flipkartData);
  };
  const closeModal = () => {
    setOpen((open) => !open);
  };
  const ModalContent = () => {
    return (
      <span className="inline-block">
        <span className="font-semibold">Book a free introductory call </span>{" "}
        <span className="font-thin text-gray-300">
          Learn more about Zorp and how it can help your business
        </span>
      </span>
    );
  };

  const SidebarContent = ({ heading, displayCounter }) => {
    return (
      <>
        <div className=" cursor-pointer text-white text-sm flex items-center justify-between hover:bg-blue-900 px-3 py-2 rounded-md">
          <p className="flex items-center">
            <BsGraphUpArrow className="text-white mr-3" />
            <span>{heading}</span>
          </p>
          {displayCounter && (
            <span className="inline-block px-2 rounded-lg bg-white text-gray-600 ">
              10
            </span>
          )}
        </div>
      </>
    );
  };
  const FiltersContent = () => {
    return (
      <>
        <div className="portrait:flex portrait:flex-col portrait:gap-3">
          <select
            name=""
            id=""
            className="border-2 p-2 px-3 text-sm rounded-md border-slate-300 font-bold"
            value={selectedOption}
            onChange={handleChange}
          >
            <option value="1">
              <div>
                <p>Shopify E-Commerce</p>
              </div>
            </option>
            <option value="2">Amazon E-Commerce</option>
            <option value="3">Flipkart E-Commerce</option>
          </select>
          <button className="p-2 px-3 landscape:mx-3 border-2 border-slate-300 rounded-md duration-300 hover:bg-blue-800 hover:text-white hover:border-blue-800">
            <div className="flex items-center text-sm justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
                alt=""
                className="w-3 h-3 mr-2"
                href="https://app.slack.com/client/T063VEZCHK4/C063VC4UKGT"
                target="_blank"
              />
              <a
                href="https://app.slack.com/client/T063VEZCHK4/C063VC4UKGT"
                target="_blank"
                className="font-bold"
              >
                Slack
              </a>
            </div>
          </button>
        </div>

        <div className="flex portrait:flex-col portrait:gap-3  ">
          <div className="landscape:flex landscape:p-2 landscape:px-3 portrait:mt-3 portrait:mx-3 items-center font-bold ">
            <FiSettings className="mx-2 portrait:inline-block" /> Manage Active
            Alerts
          </div>
          <button className="flex items-center border-2 font-bold rounded-md mr-3 px-3 p-2 border-slate-300 hover:bg-blue-800 hover:text-white hover:border-blue-800 duration-300">
            <BsPlusLg className="mx-1" />
            Create From Scratch
          </button>
          <button className="flex items-center justify-center border-2 font-bold rounded-md px-3 p-2 bg-blue-600 text-white border-blue-600 duration-300 hover:bg-blue-800 hover:text-white hover:border-blue-800">
            Next
            <AiOutlineArrowRight className="mx-1" />
          </button>
        </div>
      </>
    );
  };
  return (
    <div className="App flex">
      <Sidebar open={openModal} setOpen={setOpenModal}>
        <SidebarContent heading="Monitors" displayCounter={true} />
        <SidebarContent heading="Products" displayCounter={false} />
        <SidebarContent heading="Customer" displayCounter={false} />
        <SidebarContent heading="Transactions" displayCounter={false} />
      </Sidebar>
      <div
        className={`mx-10 py-5 h-screen overflow-y-scroll ${
          openModal ? "blur-sm -z-50" : ""
        }`}
      >
        <Welcome />
        {open && (
          <Modal closeModal={closeModal}>
            <ModalContent />
          </Modal>
        )}
        <Filters>
          <FiltersContent />
        </Filters>
        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-12">
          {data.map((data) => {
            return (
              <ProductCard
                heading={data.heading}
                content={data.content}
                category={data.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
