import React, {useState} from 'react';
import {useNavigate, Outlet, useLocation} from 'react-router-dom';
import CX from 'classnames';
import {observer} from 'mobx-react-lite';
import {Button} from '@/components';

import './index.less';

interface LinkItem {
  name: string;
  link: string;
}

function Home() {
  const navigate = useNavigate();
  const params = useLocation();
  const {pathname} = params;
  console.log('🚀 ~ file: index.tsx:7 ~ Tab ~ navigate:', pathname);

  const [activeLink, setActiveLink] = useState<string>(pathname);

  const MenuLink = [
    {name: 'HomeOne', link: '/home/one'},
    {name: 'HomeThree', link: '/home/three'},
    {name: 'Mobx 数据更新', link: '/home/mobx'},
    {name: 'Phosphor 图标库', link: '/home/four'}
  ];

  const handleClickLink = (link: string) => {
    setActiveLink(link);
    navigate(link);
  };

  const homeClasses = CX('home-root', {
    'home-root-no-bg': activeLink === '/home/order'
  });

  return (
    <div className={homeClasses}>
      <div className='home-tab'>
        <div className='github-icon'></div>
        {MenuLink.map((item: LinkItem) => (
          <div key={item.name} className='btn-wrap'>
            <Button
              type='text'
              className='text-btn'
              active={activeLink === item.link}
              onClick={() => handleClickLink(item.link)}
            >
              <span className='link-text'>{item.name}</span>
            </Button>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default observer(Home);
