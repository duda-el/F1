import { Fragment, useState, axios, useEffect } from "react";
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

const navigation = {
  pages: [
    { name: "Home", href: "#" },
    { name: "Results", href: "#" },
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
          items: [
            { name: "Alexander Albon", href: "#", color: "#64C4FF" },
            { name: "Fernando Alonso", href: "#", color: "#229971" },
            { name: "Valtteri Bottas", href: "#", color: "#52E252" },
            { name: "Pierre Gasly", href: "#", color: "#0093CC" },
            { name: "Lewis Hamilton", href: "#", color: "#27F4D2" },
            { name: "Nico Hulkenberg", href: "#", color: "#B6BABD" },
            { name: "Charles Leclerc", href: "#", color: "#E80020" },
          ],
        },
        {
          items: [
            { name: "Kevin Magnussen", href: "#", color: "#B6BABD" },
            { name: "Lando Norris", href: "#", color: "#FF8000" },
            { name: "Esteban Ocon", href: "#", color: "#0093CC" },
            { name: "Sergio Perez", href: "#", color: "#3671C6" },
            { name: "Oscar Piastri", href: "#", color: "#FF8000" },
            { name: "Daniel Ricciardo", href: "#", color: "#6692FF" },
            { name: "George Russell", href: "#", color: "#27F4D2" },
          ],
        },
        {
          items: [
            { name: "Carlos Sainz", href: "#", color: "#E80020" },
            { name: "Logan Sargeant", href: "#", color: "#64C4FF" },
            { name: "Lance Stroll", href: "#", color: "#229971" },
            { name: "Yuki Tsunoda", href: "#", color: "#6692FF" },
            { name: "Max Verstappen", href: "#", color: "#3671C6" },
            { name: "Zhou Guanyu", href: "#", color: "#52E252" },
          ],
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false); // State for the registration modal

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

  const [user, setUser] = useState(null);

  useEffect(() => {
    const signedInUser = localStorage.getItem("user");
    if (signedInUser) {
      setUser(JSON.parse(signedInUser));
    }
  }, []);

  return (
    <div className="bg-white" style={{ fontFamily: "TitilliumWeb-Regular",}}>
      <SignInModal isOpen={isModalOpen} onClose={closeModal} />
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      {/* Mobile menu */}
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
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" >
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

                {/* Links */}
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
                              {/* <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div> */}
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
                                        style={{
                                          backgroundColor: item.color,
                                        }}
                                      ></div>
                                      <a
                                        href={item.href}
                                        className="-m-2 block p-2 text-black"
                                      >
                                        {item.name}
                                      </a>
                                    </div>
                                    {/* Team logo */}

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

                {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.page.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div> */}

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

      <header className="relative bg-white py-2 border-b-2 border-b-custom-red" style={{ zIndex: 23 }}>
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

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <img className="h-7 w-auto" src={logo} alt="" />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup
                className="hidden lg:ml-8 lg:block lg:self-stretch"
                style={{ fontFamily: "TitilliumWeb-SemiBold", zIndex: "20" }}
              >
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-md font-medium text-black hover:text-custom-red"
                    >
                      {page.name}{" "}
                      <img
                        src={arrow}
                        alt="dropdown"
                        className="ml-1 w-6 h-auto opacity-0"
                      />
                    </a>
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
                              {category.name}{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={open ? "#FF0000" : "currentColor"} // Change color on active state
                                className="ml-1 w-6 h-auto transition-colors duration-200 ease-out" // Add transition for color change
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
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
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
                                                {/* Color box */}
                                                <div
                                                  className="w-1 h-4 mr-2"
                                                  style={{
                                                    backgroundColor: item.color,
                                                  }}
                                                ></div>
                                                <div className="flex flex-col">
                                                  {/* Team name */}
                                                  <a
                                                    href={item.href}
                                                    className="text-white"
                                                  >
                                                    {item.name}
                                                  </a>
                                                  {/* Team logo */}

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

                  {/* {navigation.page.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-black hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))} */}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:ml-8 lg:flex">
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
                            {user.name}
                          </div>
                        </span>
                        <button
                          className="ml-3 inline-block text-sm font-medium bg-custom-red text-white py-2 px-4 rounded"
                          onClick={() => {
                            // Clear user data from localStorage and set user state to null
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
        </nav>
      </header>
    </div>
  );
}
