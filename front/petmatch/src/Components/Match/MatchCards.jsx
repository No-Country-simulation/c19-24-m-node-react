import styles from "./MatchCards.module.css";

function MatchCards({ name, age, breed, img }) {
    return (
        <figure className={`${styles.card}`}>
            <img
                className={`${styles.card__image}`}
                src={img}
                alt={name}
                loading='lazy'
            />
            <button className={`${styles.card__button}`}>
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g opacity='0.25'>
                        <path
                            d='M13.5 4.5L4.5 13.5'
                            stroke='black'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                        <path
                            d='M4.5 4.5L13.5 13.5'
                            stroke='black'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </g>
                </svg>
            </button>
            <figcaption className='py-3 px-4'>
                <p className='font-thin capitalize flex justify-between items-center text-base'>
                    {name}
                    {age && (
                        <span className='text-sm font-semibold'>
                            {age} years
                        </span>
                    )}
                </p>
                <p className='text-sm capitalize text-gray-500'>{breed}</p>
            </figcaption>
        </figure>
    );
}

export default MatchCards;
