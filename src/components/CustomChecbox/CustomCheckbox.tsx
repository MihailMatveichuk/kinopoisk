type Props = {
  id: string;
  type: string;
  name: string;
  handleClick: () => void;
  isChecked: boolean;
};

const CustomCheckbox = ({ id, type, name, handleClick, isChecked }: Props) => {
  return <input id={id} name={name} type={type} onChange={handleClick} checked={isChecked} />;
};

export default CustomCheckbox;
