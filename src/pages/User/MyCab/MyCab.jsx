import React from 'react';
import useCab from '../hook/useCab';
import { Helmet } from 'react-helmet';

const MyCab = () => {
    const [cab] = useCab();
    console.log(cab);
    const total = cab.reduce((sum, item) => item.price + sum, 0)

    return (
        <div className='mx-auto'>
            <Helmet>
                <title>SA Shop | Dashboard</title>
            </Helmet>
            <div className='uppercase flex font-semibold justify-evenly'>
                <h2 className='text-2xl '> Total Item:{cab.length} </h2>
                <h2 className='text-2xl ml-5'> Total Price: TK{total} </h2>
                <button className="btn btn-warning btn-xs ml-">Pay</button>

            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        
                    </tbody>
                    

                </table>
            </div>


        </div>
    );
};

export default MyCab;