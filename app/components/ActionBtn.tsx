import { IconType } from "react-icons";

interface ActionBtnProps {
  icon: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const ActionBtn: React.FC<ActionBtnProps> = ({
  icon: Icon,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex
        items-center
        justify-center
        rounded
        cursor-pointer
        w-[40px]
        h-[30px]
        text-slate-700
        border
        border-slate-400
        ${disabled && "opacity-50 cursor-not-allowed"}
    `}
    >
      <Icon size={18} />
    </button>
  );
};

export default ActionBtn;
