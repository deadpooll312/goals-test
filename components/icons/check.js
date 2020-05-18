import React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

export const CheckIcon = React.memo((props) => {
  return (
    <Svg width={7} height={7} viewBox="0 0 7 7" fill="none" {...props}>
      <Path
        d="M6.894.084c-.125-.13-.308-.107-.41.05l-3.88 5.95-2.106-2.66C.384 3.28.2 3.28.086 3.424a.44.44 0 000 .52l2.333 2.948c.054.07.129.108.206.108h.014a.275.275 0 00.211-.134L6.933.603a.437.437 0 00-.04-.519z"
        fill="#fff"
      />
    </Svg>
  )
});
