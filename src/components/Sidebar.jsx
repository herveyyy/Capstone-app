import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import { GiftIcon } from "@heroicons/react/24/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";








function SideBar() {
    return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
    flex flex-col bg-gray-900 text-white shadow ">
       
        <SideBarIcon text={"Profile"} icon={<UserCircleIcon className="h-9 w-9 " />} />
        <SideBarIcon text={"Music"} icon={<MusicalNoteIcon className="h-9 w-9 " />} />
        <SideBarIcon text={"Messages"} icon={<EnvelopeIcon className="h-9 w-9 " />} />
        <SideBarIcon text={"Donate"} icon={<GiftIcon className="h-9 w-9" />} />
        <SideBarIcon text={"Settings"} icon={<AdjustmentsHorizontalIcon className="h-9 w-9" />
} />

    </div> );
}

const SideBarIcon = ({icon, text}) => (
<div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
        {text}
    </span>
</div>
);
export default SideBar;