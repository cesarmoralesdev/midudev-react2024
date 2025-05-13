import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App() {
    const data = [
        {
            id: 1,
            userName: 'midudev',
            name: 'Miguel Angel Duran',
            isFollowing: true
        },
        {
            id: 2,
            userName: 'tester',
            name: 'Luis Sanchez',
            isFollowing: false
        },
        {
            id: 3,
            userName: 'devmidu',
            name: 'Cesar Morales',
            isFollowing: false
        },
        {
            id: 4,
            userName: 'test1',
            name: 'Ana Moran',
            isFollowing: true
        },
        {
            id: 5,
            userName: 'test2',
            name: 'Jose Ruiz',
            isFollowing: false
        },
        {
            id: 6,
            userName: 'test3',
            name: 'Ernesto Morales',
            isFollowing: false
        }
    ];
    return (
        <section className='App'>
            {data.map(({ id, userName, name, isFollowing }) => (
                <TwitterFollowCard
                    key={id}
                    userName={userName}
                    initialIsFollowing={isFollowing}>
                        {name}
                </TwitterFollowCard>
            ))}
        </section>
    );
}
