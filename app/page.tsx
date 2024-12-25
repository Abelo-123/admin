"use client";
import { useEffect, useState } from "react";
import '@telegram-apps/telegram-ui/dist/styles.css';
import { AppRoot } from '@telegram-apps/telegram-ui';// Adjust as necessary
import Deposit from "./components/Deposit/page";
import { supabase } from "./lib/supabaseClient";
import { useActivePage } from './components/ActivePageContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons/faSortDown";


const Telegram = () => {
  const { activePage } = useActivePage();
  const [showDetail, setShowDetail] = useState(0)
  const [showBox, setShowBox] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Load the Telegram Web App JavaScript SDK
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js?2";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const Telegram = window.Telegram;

      if (window.Telegram && window.Telegram.WebApp) {
        Telegram.WebApp.expand() // Get the app version

      }

    };

    const fetchUser = async () => {
      const { data, error } = await supabase
        .from("users")
        .select('*'); // Pass 100 as a string
      if (error) {
        console.error(error)
      } else {
        setUsers(data)

      }


    }
    fetchUser()


    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <>

      <AppRoot>
        <div className='w-screen' >

          <div
            id="1"
            className={`w-screen ${activePage === 1 ? '' : 'hidden'}`}>
            <ul>
              {users.map((items, index) => (
                <li key={index} className="block p-2 " style={{ borderTop: '1px solid var(--tgui--header_bg_color)', borderBottom: '1px solid var(--tgui--header_bg_color)' }}>
                  <div className="flex">
                    <div className="p-2 block w-fit  ">
                      <div style={{ borderRadius: '100%' }} className="relative bg-red-500 p-4 ml-2 w-fit">
                        <div style={{ borderRadius: '100%' }} className="absolute bottom-0 right-0 bg-red-700 p-2 w-auto">

                        </div>
                      </div>
                      <div className="m-1" style={{ fontSize: '0.8rem', lineHeight: '1' }}>
                        <strong>{items.name}</strong></div>
                      <div className="m-1" style={{ fontSize: '0.8rem', lineHeight: '1' }}>{items.id}</div>
                    </div>
                    <div className="grid ml-6 w-full gap-2 place-content-center grid-cols-4">
                      <button className="p-1 h-fit w-fit px-4 rounded-lg ">
                        <FontAwesomeIcon className=" mr-2 mb-1" icon={faSortDown} />
                        chat</button>
                      <button className="p-1  h-fit w-fit px-4 rounded-lg  "><FontAwesomeIcon className=" mr-2 mb-1" icon={faSortDown} />
                        message</button>
                      <button style={{
                        opacity: showBox === items.id ? 'var(--tgui--accent_text_color)' : ''
                      }} className="p-1 h-fit w-fit px-4 rounded-lg " onClick={() => {
                        setShowBox((prev) => (prev === items.id ? 0 : items.id))
                        setShowDetail(0)
                      }}> <FontAwesomeIcon className=" mr-2 mb-1" icon={faSortDown} />
                        update

                      </button>
                      <button className="p-1 h-fit  w-fit rounded-lg  px-4" onClick={() => {
                        setShowDetail((prev) => (prev === items.id ? 0 : items.id))
                        setShowBox(0)
                      }} // Toggle logic
                      > <FontAwesomeIcon className=" mr-2 mb-1" icon={faSortDown} />

                        Detail

                      </button>
                    </div>
                  </div>
                  {showDetail == items.id && (
                    <div style={{ background: 'var(--tgui--subtitle_text_color)', color: 'var(--tgui--button_text_color)' }} className="ml-auto w-full rounded-lg m-2 p-2 inline-block">
                      <p>Balance: {items.balance}</p>
                      <p>Phone: {items.phone}</p>
                      <p>username: @{items.username}</p>
                    </div>
                  )}
                  {showBox == items.id && (
                    <div className="flex">
                      <input type="text" className="bg-gray-100 w-11/12 m-2 p-1" />
                      <button className=" px-4 h-fit rounded-lg py-2 my-auto">update</button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            id="2"
            className={`w-screen ${activePage === 2 ? '' : 'hidden  '} `}><Deposit />
          </div>

        </div>

      </AppRoot >
    </>
  );
};



export default Telegram;