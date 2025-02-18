type SelectedBadgeProps = {
  title: string;
  icon: number;
  isActive: boolean;
  value: string;
  selected: number;
  rewardDetails: string;
};

function getBadgeProps(props: SelectedBadgeProps) {
  const { title, icon, isActive, value, selected, rewardDetails } = props;
  return {
    title,
    icon,
    isActive,
    value,
    selected,
    rewardDetails,
  };
}

export default getBadgeProps;
