import Header from './header';

const layout = ({children}) => {
    return (
        <>
            <Header />
            <div>
                { children }
            </div>
        </>
    )
}

export default layout;