import Check from '/check.svg';

interface CheckIconProps {
    height: string
}

const CheckIcon = ({ height }: CheckIconProps) => {
  return (
    <img src={Check} height={height} alt="Check Icon"></img>
  );
};

export default CheckIcon;
