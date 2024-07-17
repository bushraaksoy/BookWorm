import React, { useEffect, useState } from 'react';

const Sidebar = ({ title, sidebarItems }) => {
  const [activeInx, setActiveInx] = useState(-1);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeItemIndex = sidebarItems.findIndex(
      (item) => item.ref === currentPath
    );
    setActiveInx(activeItemIndex);
  }, [sidebarItems]);

  return (
    <div className="sidebar">
      <div className="sidebar-title">{title}</div>
      <ul className="sidebar-items">
        {sidebarItems.map((item, inx) => (
          <li key={inx}>
            <a
              onClick={() => setActiveInx(inx)}
              className={inx == activeInx ? 'active' : ''}
              href={item.ref || '#'}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
