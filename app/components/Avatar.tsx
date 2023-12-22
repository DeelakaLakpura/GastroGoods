import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        src={src}
        alt="Avatar"
        className="rounded-full"
        height="30"
        width="30"
      />
    );
  }
  return <img
  src="https://api.dicebear.com/7.x/micah/svg?seed=Cali"
  alt="avatar" />;
};

export default Avatar;
