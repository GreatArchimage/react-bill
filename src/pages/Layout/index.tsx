import { Outlet } from 'react-router-dom';
import { getBillList } from '@/store/moudules/billSlice';
import { useAppDispatch } from '@/store';
import { useEffect } from 'react';
import { TabBar } from "antd-mobile"
import './index.css'
import {useNavigate} from 'react-router-dom'

import {
    BillOutline,
    CalculatorOutline,
    AddCircleOutline
  } from 'antd-mobile-icons'

const tabs = [
{
    key: '/month',
    title: '月度账单',
    icon: <BillOutline />,
},
{
    key: '/new',
    title: '记账',
    icon: <AddCircleOutline />,
},
{
    key: '/year',
    title: '年度账单',
    icon: <CalculatorOutline />,
},
]

const Layout: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getBillList());
    }, [dispatch]);
    const navigate = useNavigate()
    const handleTabBarChange = (key: string) => {
        navigate(key)
    }
    return (
        <div className="layout">
            <div className="container">
            <Outlet />
            </div>
            <div className="footer">
            <TabBar onChange={handleTabBarChange}>
                {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
            </div>
      </div>
    );
};

export default Layout;