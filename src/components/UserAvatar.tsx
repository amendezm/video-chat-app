import { useMemo } from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";

const UserAvatar = () => {
  const { user } = useFirebaseAuth();
  const userPhotoUrl = useMemo(() => user?.providerData?.[0]?.photoURL, [user]);

  const userInitials = useMemo(() => {
    const displayName = user?.providerData?.[0]?.displayName;
    if (displayName) {
      const names = displayName.split(" ");
      return names
        .map((name) => name.charAt(0))
        .join("")
        .substring(0, names.length == 1 ? 1 : 2);
    }
    return user?.email.substring(0, 2);
  }, [user]);

  return (
    <div className="user-avatar">
      {userPhotoUrl ? (
        <div
          className="user-avatar-photo"
          style={{ backgroundImage: `url(${userPhotoUrl})` }}
        ></div>
      ) : (
        userInitials?.toUpperCase()
      )}
    </div>
  );
};
export { UserAvatar };
