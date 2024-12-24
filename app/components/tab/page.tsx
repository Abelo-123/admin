"use client"
import { Tabbar, Text } from "@telegram-apps/telegram-ui";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { useActivePage } from "../ActivePageContext";


const Tab = () => {

    const { activePage, updateActivePage } = useActivePage();

    return (

        <>

            <Tabbar style={{ background: ' var(--tgui--bg_color)', border: '2px solid transparent', display: 'grid', margin: '0rem', placeItems: 'center', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <Tabbar.Item onClick={() => updateActivePage(1)}>
                    <div className='flex flex-col'>

                        <FontAwesomeIcon icon={faClock} style={{ color: activePage === 1 ? 'var(--tgui--link_color)' : 'var(--tgui--subtitle_text_color)', fontSize: '1.2rem' }} />
                        <Text weight="3" style={{ color: activePage === 1 ? 'var(--tgui--link_color)' : 'var(--tgui--subtitle_text_color)', fontSize: '0.82rem' }}>a</Text>
                    </div>
                </Tabbar.Item>
                <Tabbar.Item onClick={() => updateActivePage(2)}>
                    <div className='flex flex-col'>

                        <FontAwesomeIcon icon={faClock} style={{ color: activePage === 1 ? 'var(--tgui--link_color)' : 'var(--tgui--subtitle_text_color)', fontSize: '1.2rem' }} />
                        <Text weight="3" style={{ color: activePage === 1 ? 'var(--tgui--link_color)' : 'var(--tgui--subtitle_text_color)', fontSize: '0.82rem' }}>Deposit</Text>
                    </div>
                </Tabbar.Item>


            </Tabbar>

        </>
    );
}

export default Tab;