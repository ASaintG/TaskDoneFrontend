import React from "react";
import StaticSite from "./StaticSite";
import StaticSiteRights from "./StaticSiteRight";

const AppLayout = () => {
    return (
        <div className="AppLayout">
            <StaticSite />
            <StaticSiteRights />
        </div>
    );
};

export default AppLayout;
