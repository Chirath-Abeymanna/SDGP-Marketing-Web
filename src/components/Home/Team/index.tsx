import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const developers = [
  {
    name: "Chamodya Chirath",
    role: "Product Manager & Full stack Developer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    linkedIn: "https://www.linkedin.com/in/chirath-abeymanna-990700292",
    instagram: "#!",
  },
  {
    name: "Devmina Ranasinghe",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f8d6e8b4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    linkedIn: "#!",
    instagram: "#!",
  },
  {
    name: "Renal Perera",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f8d6e8b4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    linkedIn: "#!",
    instagram: "#!",
  },
  {
    name: "Sehansa Dilsadi",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f8d6e8b4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    linkedIn: "#!",
    instagram: "#!",
  },
  {
    name: "Onel Silva",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f8d6e8b4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    linkedIn: "",
    instagram: "#!",
  },
  {
    name: "Nadini Salisha",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f8d6e8b4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    linkedIn: "#!",
    instagram: "#!",
  },
];

const ProfileCard = () => {
  return (
    <div
      id="team"
      className="mx-auto lg:w-max lg:px-32 bg-slate-100 rounded-xl dark:bg-gray-800 min-h-screen flex justify-center items-center mb-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {developers.map((developer, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] shadow-2xl p-8 pb-14 m-4 rounded-xl text-gray-800 dark:text-gray-400 overflow-hidden group hover:shadow-2xl hover:shadow-sky-500/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure className="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-sky-500 before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-sky-500 before:-z-[1] group-hover:before:scale-[2.5] motion-safe:before:transition-all motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400">
              <img
                className="rounded-full block max-w-full bg-sky-500 object-cover z-10 relative"
                src={developer.image}
                alt="Avatar"
              />
            </figure>
            <header className="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3 className="font-semibold text-2xl text-center text-sky-500 mt-6 group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                {developer.name}
              </h3>
              <p className="text-center group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                {developer.role}
              </p>
            </header>

            <footer className="relative mt-14 w-max text-center mx-auto">
              <a
                target="_blank"
                href={developer.linkedIn}
                className="bg-sky-500 flex justify-center space-x-5 text-white py-2 px-6 rounded-full text-lg hover:bg-sky-600"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 mr-5" />
                LinkedIn
              </a>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
