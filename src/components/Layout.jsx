import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = ({children}) => {
    return (
        <div className="grid  min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-8">
            <Header className="grid-cols-1"/>
            <main className="grid-cols-2">
                {children}
            </main>
            <Footer className="grid-cols-3"/>
        </div>
    );
}

export default Layout;