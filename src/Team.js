import React from "react";
import Member from "./Member";
import "./Team.css";
import misha from "./img/Misha.png";
import vlad from "./img/Vlad.png";
import matviy from "./img/Matviy.png";
import oleksii from "./img/Oleksii.png";
import yurii from "./img/Yurii.png";
function Team(props) {
  return (
    <div className="container section dark-flat">
      <h2 id="team" tabIndex="-1">
        Команда
      </h2>
      <div className="team">
        <Member
          src={misha}
          title="Михайло Штопко"
          txt="Співзасновник та голова організації"
          social={{
            email: "matvey.talalaevskiy@gmail.com",
            telegram: "https://t.me/Biomikee",
          }}
        />
        <Member
          src={vlad}
          title="Владлен Володавчик"
          txt="Співзасновник та заступник голови правління
          "
          social={{
            email: "v.volodavchyk@gmail.com",
            telegram: "https://t.me/volodavchyk",
            facebook: "https://m.facebook.com/100009948947014/",
          }}
        />
        <Member
          src={matviy}
          title="Матвій Талалаєвський"
          txt="Директор з комунікацій"
          social={{
            email: "matvey.talalaevskiy@gmail.com",
            telegram: "https://t.me/El_Prez",
            instagram: "https://www.instagram.com/talalaevskii/",
          }}
        />
        <Member
          src={oleksii}
          title="Олексій Шебанов"
          txt="Співзасновник та проектний директор
          "
          social={{
            email: "shebanovalex30@gmail.com",
            telegram: "https://t.me/oleksiishebanov",
            facebook: "https://www.facebook.com/profile.php?id=100035462295928",
          }}
        />
        <Member
          src={yurii}
          title="Юрій Чубенко"
          txt="Науково-технічний  директор"
          social={{
            email: "y.v.chubenko@gmail.com",
            telegram: "https://t.me/yuvchubenko",
          }}
        />
      </div>
    </div>
  );
}

export default Team;
