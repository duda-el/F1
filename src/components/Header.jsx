import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "./Header.css";
import logo from "../assets/images/f1logo.png";
import arrow from "../assets/images/arrow-drop-down-line.svg";
import f1drivers from "../assets/images/F1-drivers.jpg";
import cars from "../assets/images/cars.jpg";
import redbull from "../assets/images/bolids/red-bull.png";
import astonmartin from "../assets/images/bolids/aston-martin.png";
import ferrari from "../assets/images/bolids/ferrari.png";
import williams from "../assets/images/bolids/williams.png";
import mclaren from "../assets/images/bolids/mclaren.png";
import mercedes from "../assets/images/bolids/mercedes.png";
import rb from "../assets/images/bolids/rb.png";
import kickSauber from "../assets/images/bolids/kick-sauber.png";
import haas from "../assets/images/bolids/haas.png";
import alpine from "../assets/images/bolids/alpine.png";
import team from "../assets/images/teams.png";
import team2 from "../assets/images/teams2.jpg";
import SignInModal from "./Modal";
import RegistrationModal from "./RegistrationModal";
import racerIcon from "../assets/images/racerIcon.jpeg";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [drivers2, setDrivers2] = useState({});
  const [loading2, setLoading2] = useState(true);
  const [error, setError] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDrivers = async () => {
      if (searchTerm === "") {
        setDrivers([]);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost/Backend/search_drivers.php",
          { searchTerm }
        );
        setDrivers(response.data);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchDrivers();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const renderSearchResults = () => {
    if (loading) return <div>Loading...</div>;
    if (!drivers.length) return <div>No results found</div>;

    return (
      <ul className="space-y-2 text-white">
        {drivers.map((driver) => (
          <li
            key={driver.id}
            className="flex items-center bg-custom-black p-2 rounded-lg"
          >
            <img
              src={driver.img}
              alt={driver.name}
              className="h-14 w-14 rounded"
            />
            <div className="ml-4">
              <p
                className="text-lg font-bold"
                style={{ fontFamily: "formula1" }}
              >
                {driver.name}
              </p>
              <p className="text-sm">{driver.team}</p>
              <p className="text-sm">{driver.country}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const driverIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  useEffect(() => {
    const fetchDrivers2 = async () => {
      try {
        const fetchedDrivers2 = {};
        for (const id of driverIds) {
          const response = await axios.get(
            `http://localhost/Backend/get_drivers.php?id=${id}`
          );
          fetchedDrivers2[id] = response.data;
        }
        setDrivers2(fetchedDrivers2);
      } catch (error) {
        setError(error);
      } finally {
        setLoading2(false);
      }
    };

    fetchDrivers2();
  }, []);

  useEffect(() => {
    const signedInUser = localStorage.getItem("user");
    if (signedInUser) {
      setUser(JSON.parse(signedInUser));
      console.log(JSON.parse(signedInUser).role);
    }
  }, []);

  const closeModal = () => setIsModalOpen(false);
  const openRegistrationModal = () => {
    if (isModalOpen) {
      closeModal();
    }
    setIsRegistrationOpen(true);
  };
  const openModal = () => {
    if (isRegistrationOpen) {
      setIsRegistrationOpen(false);
    }
    setIsModalOpen(true);
  };

  if (loading2) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const navigation = {
    pages: [
      { name: "Home", href: "/" },
      { name: "Results", href: "/result" },
    ],
    categories: [
      {
        id: "drivers",
        name: "Drivers",
        featured: [
          {
            imageSrc: cars,
            imageAlt: "f1 drivers",
          },
          {
            imageSrc: f1drivers,
            imageAlt: "f1 drivers",
          },
        ],
        sections: [
          {
            items: driverIds.slice(0, 7).map((id) => ({
              name: drivers2[id]?.name || "Loading...",
              href: `/driver/${id}`,
              color: drivers2[id]?.color || "#000000",
            })),
          },
          {
            items: driverIds.slice(7, 14).map((id) => ({
              name: drivers2[id]?.name || "Loading...",
              href: `/driver/${id}`,
              color: drivers2[id]?.color || "#000000",
            })),
          },
          {
            items: driverIds.slice(14, 20).map((id) => ({
              name: drivers2[id]?.name || "Loading...",
              href: `/driver/${id}`,
              color: drivers2[id]?.color || "#000000",
            })),
          },
        ],
      },
      {
        id: "teams",
        name: "Teams",
        featured: [
          {
            imageSrc: team,
            imageAlt: "f1 teams",
          },
          {
            imageSrc: team2,
            imageAlt: "f1 teams",
          },
        ],
        sections: [
          {
            items: [
              { name: "Alpine", href: "#", imageSrc: alpine },
              { name: "Aston Martin", href: "#", imageSrc: astonmartin },
              { name: "Ferrari", href: "#", imageSrc: ferrari },
              { name: "Haas", href: "#", imageSrc: haas },
            ],
          },
          {
            items: [
              { name: "Kick Sauber", href: "#", imageSrc: kickSauber },
              { name: "McLaren", href: "#", imageSrc: mclaren },
              { name: "Mercedes", href: "#", imageSrc: mercedes },
            ],
          },
          {
            items: [
              { name: "RB", href: "#", imageSrc: rb },
              { name: "Red Bull Racing", href: "#", imageSrc: redbull },
              { name: "Williams", href: "#", imageSrc: williams },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-white" style={{ fontFamily: "TitilliumWeb-Regular" }}>
      <SignInModal isOpen={isModalOpen} onClose={closeModal} />
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <Transition show={open}>
        <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <TabGroup className="mt-2">
                  <div className="border-b border-gray-200">
                    <TabList className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-custom-red text-custom-red"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                  <TabPanels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <TabPanel
                        key={category.name}
                        className="px-4 pb-8"
                        style={{ fontFamily: "TitilliumWeb-SemiBold" }}
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <div className="flex flex-col">
                                    <div className="flex items-center">
                                      <div
                                        className="w-1 h-4 mr-2"
                                        style={{ backgroundColor: item.color }}
                                      ></div>
                                      <a
                                        href={item.href}
                                        className="-m-2 block p-2 text-black"
                                      >
                                        {item.name}
                                      </a>
                                    </div>
                                    {item.imageSrc && (
                                      <img
                                        src={item.imageSrc}
                                        alt={item.name}
                                        className="w-15 h-auto mt-4"
                                      />
                                    )}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>

                <div className="border-t border-gray-200 px-4 py-6">
                  <div href="#" className="flex items-center">
                    <button
                      className="ml-3 inline-block text-sm font-medium bg-custom-black text-white py-2 px-4 rounded"
                      onClick={openModal}
                    >
                      SIGN IN
                    </button>
                    <button
                      className="ml-3 inline-block text-sm font-medium bg-custom-red text-white py-2 px-4 rounded"
                      onClick={openRegistrationModal}
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header
        className="relative bg-white py-2 border-b-2 border-b-custom-red"
        style={{ zIndex: 23 }}
      >
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          style={{ position: "relative", zIndex: "30" }}
        >
          <div>
            <div className="flex h-16 items-center gap-8">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <img className="h-7 w-auto" src={logo} alt="" />
                </a>
              </div>

              <PopoverGroup
                className="hidden lg:ml-8 lg:block lg:self-stretch"
                style={{ fontFamily: "TitilliumWeb-SemiBold", zIndex: "20" }}
              >
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-md font-medium text-black hover:text-custom-red"
                    >
                      {page.name}
                      <img
                        src={arrow}
                        alt="dropdown"
                        className="ml-1 w-6 h-auto opacity-0"
                      />
                    </Link>
                  ))}

                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <PopoverButton
                              className={classNames(
                                open
                                  ? "border-white text-custom-red"
                                  : "border-transparent text-black hover:text-custom-red",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-md font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={open ? "#FF0000" : "currentColor"}
                                className="ml-1 w-6 h-auto transition-colors duration-200 ease-out"
                              >
                                <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" />
                              </svg>
                            </PopoverButton>
                          </div>

                          <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <PopoverPanel className="absolute inset-x-0 top-full text-sm text-black">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />
                              <div className="relative bg-custom-black mt-2">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-0 space-y-6 sm:mt-0 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex items-center"
                                              >
                                                <div
                                                  className="w-1 h-4 mr-2"
                                                  style={{
                                                    backgroundColor: item.color,
                                                  }}
                                                ></div>
                                                <div className="flex flex-col">
                                                  <a
                                                    href={item.href}
                                                    className="text-white"
                                                  >
                                                    {item.name}
                                                  </a>
                                                  {item.imageSrc && (
                                                    <img
                                                      src={item.imageSrc}
                                                      alt={item.name}
                                                      className="w-21 h-auto mt-4"
                                                    />
                                                  )}
                                                </div>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:ml-8 lg:flex">
                <div className="relative ml-10">
                    <input
                      type="text"
                      className="block w-full p-2 border border-gray-300 rounded"
                      placeholder="Search drivers"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      className="absolute right-0 top-0 mt-2.5  mr-2"
                      onClick={searchTerm}
                    >
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src=""
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    {user ? (
                      <>
                        <span
                          className="ml-3 inline-block text-md font-medium text-black py-2 px-4"
                          style={{ fontFamily: "TitilliumWeb-SemiBold" }}
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={racerIcon}
                              alt="profileIcon"
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                border: "2px solid #E10600",
                              }}
                            />
                            {/* {user.role === 1 ? (
                              <Link to="/Admin"
                               className="cursor-pointer">
                                <span>{user.name}</span>
                              </Link>
                            ) : (
                              <span>{user.name}</span>
                            )} */}
                            <Link to={user.role == 1 ? "/admin" : ""}>
                              <span>{user.name}</span>
                            </Link>
                          </div>
                        </span>
                        <button
                          className="ml-3 inline-block text-sm font-medium bg-custom-red text-white py-2 px-4 rounded"
                          onClick={() => {
                            localStorage.removeItem("user");
                            setUser(null);
                          }}
                        >
                          SIGN OUT
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="ml-3 inline-block text-sm font-medium bg-custom-black text-white py-2 px-4 rounded"
                          onClick={openModal}
                        >
                          SIGN IN
                        </button>

                        <button
                          className="ml-3 inline-block text-sm font-medium bg-custom-red text-white py-2 px-4 rounded"
                          onClick={openRegistrationModal}
                        >
                          SUBSCRIBE
                        </button>
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Search Results */}
          {searchTerm && (
            <div className="absolute w-full bg-white shadow-lg p-4 mt-1">
              {renderSearchResults()}
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}
