import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/WhatshotOutlined'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'

import './Sidebar.css'


class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <SidebarRow selected Icon={ HomeIcon } title="Home" />
                <SidebarRow Icon={ WhatshotIcon } title="Trending" />
                <SidebarRow Icon={ SubscriptionsIcon } title="Subscriptions" />
                <hr />
                <SidebarRow Icon={ HomeIcon } title="Library" />
                <SidebarRow Icon={ WhatshotIcon } title="History" />
                <SidebarRow Icon={ SubscriptionsIcon } title="Your videos" />
                <SidebarRow Icon={ HomeIcon } title="Watch Later" />
                <SidebarRow Icon={ WhatshotIcon } title="Liked video" />
                <SidebarRow Icon={ SubscriptionsIcon } title="Show more" />

            </div>
        )
    }  
}

export default Sidebar