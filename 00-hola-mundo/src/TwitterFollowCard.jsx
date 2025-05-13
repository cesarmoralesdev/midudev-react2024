import { useState } from 'react';
export function TwitterFollowCard({ children, userName = 'unknown', initialIsFollowing = false }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    
    const format = (userName) => `@${userName}`;
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
                <div className='followCard-info'>
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{format(userName)}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}