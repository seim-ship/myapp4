import React from 'react'
import Photo from "./profil/Image";
import FullName from "./profil/fullName";
import Bio from "./profil/Bio";
import Profession from "./profil/Profession";
import image from "./profil/img/selim.png"
import {profile} from './constant/profile'

const styleObject = { color: "blue", textAlign: 'center' }



function App() {
  return (
    <div style={styleObject}>
      <Photo image={image}/>
      <FullName fullname={profile.fullnameTEXT}/>
      <Profession profession={profile.professionText}/>
      <Bio bio={profile.bioText} />


    </div>

  );
}

export default App;