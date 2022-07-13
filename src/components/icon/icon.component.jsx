import * as HIcons from "@heroicons/react/outline";

const Icon = ({ icon, ...otherProps }) => {
  const {...icons} = HIcons

  const TheIcon = icons[icon]

  return <TheIcon {...otherProps} />
}

export default Icon