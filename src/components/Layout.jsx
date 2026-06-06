import Header from './Header'
import Footer from './Footer'

const Layout = ({children, finishCount, inProgressCount}) => {
    return (
        <div className="flex min-h-screen bg-[#0079BF] flex-col">
            <Header
            />

            <main className="flex-1 max-w-[1235px] w-full m-auto ">
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