"use client";
import { useEffect } from "react";
import '@telegram-apps/telegram-ui/dist/styles.css';
import { AppRoot, Text } from '@telegram-apps/telegram-ui';// Adjust as necessary
import Deposit from "./components/Deposit/page";

import { useActivePage } from './components/ActivePageContext';



const Telegram = () => {
  const { activePage } = useActivePage();


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

              <li className="grid grid-cols-2 gap-1" style={{ borderTop: '1px solid red', borderBottom: '1px solid red' }}>
                <div className="p-2 bg-red-100">
                  <div className="p-2 block w-fit mr-auto bg-red-200">
                    <div style={{ borderRadius: '100%' }} className="relative bg-red-500 p-3 w-auto">
                      <div style={{ borderRadius: '100%' }} className="absolute top-1 right-0 bg-red-700 p-1 w-auto">

                      </div>
                    </div>
                    <div className="m-1" style={{ fontSize: '0.8rem', lineHeight: '1' }}>lorem</div>
                    <div className="m-1" style={{ fontSize: '0.8rem', lineHeight: '1' }}>lorem</div>
                  </div>
                </div>
                <div className="row-span-2 grid place-content-centert text-center gap-2 p-2 bg-red-100">
                  <div>
                    <div className="m-1" style={{ fontSize: '0.8rem', lineHeight: '1' }}>lorem</div>
                    <div className="m-1" style={{ fontSize: '0.8rem', lineHeight: '1' }}>lorem</div>
                    <div className="m-1" style={{ fontSize: '0.8rem', lineHeight: '1' }}>lorem</div>
                    <div className="m-1" style={{ fontSize: '0.8rem', lineHeight: '1' }}>lorem</div>
                  </div>
                  <button className="p-1 px-4 bg-red-200">send</button>

                </div>
                <div className="p-2 bg-red-100">
                  <button className="p-1 px-4 bg-red-200">send</button>
                  <button className="p-1 px-4 ml-4 bg-red-200">send</button>

                </div>

              </li>
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