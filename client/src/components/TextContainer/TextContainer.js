import React from "react";

import "./TextContainer.css";
import onlineIcon from "../../icons/onlineIcon.png";

const TextContainer = ({ users }) => {
    // console.log(users);

    return (
        <div className="textContainer">
            <div>
                <h1>
                    Realtime Chat Application{" "}
                    <span role="img" aria-label="emoji">
                        💬
                    </span>
                </h1>
            </div>
            {users && (
                <div>
                    <h1>People currently online:</h1>
                    <div className="activeContainer">
                        <h2>
                            {users.map(({ name }) => (
                                <div key={name} className="activeItem">
                                    {name}
                                    <img alt="Online Icon" src={onlineIcon} />
                                </div>
                            ))}
                        </h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TextContainer;
