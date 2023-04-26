import React from 'react'

const Pippo = () => {
    const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
    ];

    return (
        <div className="users">
            {data.map(({ user}) => (
                <div className="user">{user.num}</div>
            ))}
        </div>
    );
}

export default Pippo