import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = ({children, finishCount, inProgressCount}) => {
    return (
        <div className="flex min-h-screen bg-[#0079BF] flex-col">
            <Header/>
            <main className="flex-1">
                {children}
            </main>
            <Footer
                finishCount={finishCount}
                inProgressCount={inProgressCount}
            />
        </div>
    );
}

export default Layout;