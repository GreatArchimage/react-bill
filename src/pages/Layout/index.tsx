import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div>
            <Outlet />
        <h1>Layout</h1>
        </div>
    );
};

export default Layout;