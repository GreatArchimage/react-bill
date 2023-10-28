import { Outlet } from 'react-router-dom';
import { getBillList } from '@/store/moudules/billSlice';
import { useAppDispatch } from '@/store';
import { useEffect } from 'react';


const Layout: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getBillList());
    }, [dispatch]);
    return (
        <div>
            <Outlet />
        <h1>Layout</h1>
        </div>
    );
};

export default Layout;