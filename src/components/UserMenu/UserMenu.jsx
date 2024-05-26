import css from './UserMenu.module.css'

export default function UserMenu() {
    return (
        <div className={css.container}>
            <p className={css.username}>Welcome, { }</p>
            <button type='button' >Logout</button>
        </div>
    )
}

// onClick= {} 