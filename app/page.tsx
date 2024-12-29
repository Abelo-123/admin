"use client";
import '@telegram-apps/telegram-ui/dist/styles.css';
import Deposit from "./components/Deposit/page";
import { useActivePage } from './components/ActivePageContext';

import Smm from "./components/User/page";
import Orders from './components/Orders/page';
import Accounts from './components/Accounts/page';
//import WebApp from "@twa-dev/sdk";
const Telegram = () => {
  const { activePage } = useActivePage();

  return (
    <>


      <div className='w-screen' >

        <div
          id="1"
          className={`w-screen ${activePage === 1 ? '' : 'hidden'}`}>
          <Smm />
        </div>
        <div
          id="2"
          className={`w-screen ${activePage === 2 ? '' : 'hidden  '} `}><Deposit />
        </div>
        <div
          id="3"
          className={`w-screen ${activePage === 3 ? '' : 'hidden  '} `}><Orders />
        </div>
        <div
          id="4"
          className={`w-screen ${activePage === 4 ? '' : 'hidden  '} `}><Accounts />
        </div>

      </div>

    </>
  );
};



export default Telegram;