import { useState } from "react";

function Dropdown({ title, options, isOpen, onToggle, onSelected }) {
    const [selectedOption, setSelectedOption] = useState(title);

    const handleSelect = (option) => {
        setSelectedOption(option);

        onSelected(option);
    };

    return (
        <section className='relative w-full'>
            <button
                className='flex items-center justify-between w-full py-2 px-3 border border-gray-300 rounded-md'
                onClick={onToggle}>
                {selectedOption || title}
                <span>
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M11.1808 15.8297L6.54199 9.20285C5.89247 8.27496 6.55629 7 7.68892 7L16.3111 7C17.4437 7 18.1075 8.27496 17.458 9.20285L12.8192 15.8297C12.4211 16.3984 11.5789 16.3984 11.1808 15.8297Z'
                            fill='#2C7B10'
                        />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <ul className='absolute w-full bg-white border border-gray-300 rounded-md z-10'>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className='p-2 hover:bg-gray-200'
                            onClick={() => handleSelect(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default Dropdown;
