import { useMemo, useRef, useState } from "react";
import { useClassNames } from "../hooks/useClassNames";
import { useOutsideClick } from "../hooks/useOutsideClick";

import { useFirebaseAuth } from "./../hooks/useFirebaseAuth";
import { UserAvatar } from "./../components/UserAvatar";

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { user, logout } = useFirebaseAuth();
  const menuRef = useRef();
  const classNames = useClassNames();

  const handleLogout = () => {
    logout();
  };

  const hideMenu = () => {
    setIsMenuVisible(false);
  };

  useOutsideClick(menuRef, hideMenu);

  return (
    <div
      ref={menuRef}
      className={classNames("menu", { active: isMenuVisible })}
    >
      <div
        className="menu-trigger"
        onClick={() => {
          setIsMenuVisible((visibleMenu) => !visibleMenu);
        }}
      >
        <UserAvatar />
      </div>
      {isMenuVisible && (
        <div className="menu-body">
          <div className="menu-body_user">
            <div className="menu-body_user-photo">
              <UserAvatar />
            </div>
            <div className="menu-body_user-name">{user?.displayName}</div>
            <div className="menu-body_user-email">{user?.email}</div>
          </div>

          <button
            className="logout-button"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
export { Menu };
