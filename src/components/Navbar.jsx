import React from 'react'

function Navbar() {
    return (
        <div className='flex justify-between items-center py-2'>
            <h2 className="uppercase text-[2vw] font-bold text-center text-white">Joseph</h2>
            <div className="flex gap-[1.5vw]">
                <ul className='flex gap-[1.5vw]'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                </ul>
                <a href="">Let's Talk</a>
            </div>
        </div>
    )
}

export default Navbar