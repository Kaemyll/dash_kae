import React from "react";

import { TbError404 } from "react-icons/tb";

export default function Error() {
    return (
        <div>
            <h2 className="me-auto text-center bg-danger text-warning">
                <TbError404 /> Cette page n'existe pas !<TbError404 />
            </h2>
        </div>
    );
}
