
import classes from './Layout.module.css';
import MainNav from './MainNav';

function Layout(prop){
    return (
        <div>
            <MainNav />
            <main className={classes.main}>
                {prop.children}
            </main>
        </div>
    )
}

export default Layout;