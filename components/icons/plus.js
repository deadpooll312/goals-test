import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export const PlusIcon = React.memo((props) => {
  return (
    <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
      <Circle
        cx={10.151}
        cy={10}
        r={9.25}
        fill="#121212"
        stroke="#121212"
        strokeWidth={1.5}
      />
      <Path
        d="M10.473 10.322h3.223a.322.322 0 100-.644h-3.223V6.456a.322.322 0 10-.644 0v3.222H6.607a.322.322 0 100 .644H9.83v3.222a.321.321 0 00.322.322.322.322 0 00.322-.322v-3.222z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </Svg>
  )
});
