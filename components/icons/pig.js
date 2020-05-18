import React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

export const PigIcon = React.memo((props) => {
  return (
    <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)" fill="#fff">
        <Path d="M4.845 10.547a.592.592 0 000 1.183c.326 0 .58-.265.58-.591a.583.583 0 00-.58-.592zM10.19 0a2.933 2.933 0 00-2.93 2.93 2.933 2.933 0 002.93 2.93 2.933 2.933 0 002.93-2.93A2.933 2.933 0 0010.19 0zm0 4.688A1.76 1.76 0 018.433 2.93c0-.97.788-1.758 1.757-1.758.97 0 1.758.788 1.758 1.758a1.76 1.76 0 01-1.758 1.757zM12.534 8.203H7.847a.586.586 0 000 1.172h4.687a.586.586 0 000-1.172z" />
        <Path d="M19.465 8.89a.586.586 0 10-.829.828 1.173 1.173 0 01-.829 2h-.026a6.454 6.454 0 00-6.419-5.859H8.433c-.373 0-.8.043-1.214.119a4.06 4.06 0 00-2.966-1.29.586.586 0 00-.586.585v2.638a6.429 6.429 0 00-1.495 2.636H1.91a1.76 1.76 0 00-1.758 1.758v1.21c0 .97.789 1.755 1.758 1.755l.703.001a6.673 6.673 0 001.638 2.08c.003.778.003 2.049.003 2.063 0 .324.262.586.586.586h2.344a.586.586 0 00.586-.586v-.616c.221.02.448.03.664.03h2.93v.586c0 .324.262.586.585.586h2.344a.586.586 0 00.586-.586l.002-1.63a6.457 6.457 0 002.042-2.178 6.633 6.633 0 00.859-2.715h.027a2.346 2.346 0 002.343-2.344c0-.626-.243-1.215-.686-1.657zM14 16.95a.586.586 0 00-.292.505 725.29 725.29 0 00-.003 1.373h-1.172V17.07a.586.586 0 00-1.172 0v.586h-2.93c-.217 0-.446-.012-.663-.035v-.55a.586.586 0 00-1.172 0v1.757H5.425c0-.543-.002-1.332-.004-1.763a.586.586 0 00-.234-.465c-.699-.526-1.29-1.287-1.665-2.141a.586.586 0 00-.511-.35 61.184 61.184 0 00-1.102-.007.587.587 0 01-.586-.586v-1.211c0-.323.263-.586.586-.586h.707c.31 0 .529-.197.59-.447.023-.096.07-.292.082-.362a5.26 5.26 0 011.377-2.344.586.586 0 00.174-.417v-2.23c.663.139 1.264.51 1.703 1.066.141.179.374.26.595.207.43-.102.902-.16 1.296-.16h2.93a5.28 5.28 0 015.273 5.273c0 1.894-1.034 3.718-2.635 4.645z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M.151 0h20v20h-20z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
});