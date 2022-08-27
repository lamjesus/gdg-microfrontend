import React from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";
import "./index.scss";
//import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="mt-10  mx-auto max-w-2xl">
    <Header />
    <div className="px-2 md:px-6 my-3 w-full text-slate-700 dark:text-white flex flex-col items-center">
      <div className="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 md:border border-slate-300 dark:border-slate-600 rounded-xl">
        <div className="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md">
          <div
            className="rounded-t-xl w-full h-64 shadow-sm bg-cover"
            style={{
              backgroundImage:
                'url("https://apod.nasa.gov/apod/image/2208/Cartwheel_Webb_960.jpg")'
            }}
          ></div>

          <div className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
            <h1 className="text-left text-sm md:text-lg font-bold leading-normal">
              Space!
            </h1>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <div className="flex mt-4">
              <button className="transition-all duration-100 text-center p-2 rounded-md text-white w-1/2 bg-gradient-to-r from-blue-700 to-blue-500 hover:shadow-md hover:from-blue-800 hover:to-blue-600">
                View Full-Size
              </button>
              <div className="flex flex-col ml-4 w-1/2">
                <h2 className="text-center text-xs mt-1 mb-2 text-blue-600 dark:text-blue-400 font-bold uppercase">
                  Space Article
                </h2>

                <span className="self-center text-xs text-blue-700 dark:text-blue-300 -mt-2">
                  24/08/2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
