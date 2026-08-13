import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center my-10">
            {subHeading && (
                <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-2">
                    {subHeading}
                </p>
            )}
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight relative inline-block pb-3.5">
                {heading}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-indigo-600 rounded-full"></span>
            </h2>
        </div>
    );
};

export default SectionTitle;