import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/originals/e3/0e/ab/e30eab9378746747bd380a8b3abbb2f0.jpg"
        profileSrc="https://scontent.fdel9-1.fna.fbcdn.net/v/t31.0-8/28947528_1594493664004611_6876330418720716409_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=ZRfwiLvCxjgAX8ecMsj&_nc_ht=scontent.fdel9-1.fna&oh=2d5ea43888fadf4fb0ca910ba92f6ba5&oe=5F8B633A"
        title="Udit Balyan"
      />
      <Story
        image="https://www.motortrend.com/uploads/sites/5/2018/06/2019-Ferrari-488-Pista-front-three-quarter-02.jpg"
        profileSrc="https://c.ndtvimg.com/2019-07/iq5e0q5_vettel-_625x300_26_July_19.jpg?q=60&imwidth=555"
        title="Seb. Vettel"
      />
      <Story
        image="https://holrmagazine.com/wp-content/uploads/2020/04/kendall-jenner-europacorp-getty.jpg"
        profileSrc="https://i.insider.com/5d0268f6daa48233bf55e354?width=1100&format=jpeg&auto=webp"
        title="Varnika"
      />
      <Story
        image="https://wallpapercave.com/wp/wp7306821.png"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLtCmWx_JK4rl8tdilxp-ZJoTWvbsQU8YskQ&usqp=CAU"
        title="Karan Uniyal"
      />
      <Story
        image="https://cdn.shopify.com/s/files/1/0019/9049/2207/articles/Rolex-Submariner-Calibre-3235-126618LV-Rolex-Baselworld-2020-Rolex-2020-Predictions_1024x.jpg?v=1594653721"
        profileSrc="https://media3.s-nbcnews.com/i/newscms/2019_02/2712321/190111-mackenzie-bezos-mn-0830_b806d14051811a6655b6bdb60c2b7a82.jpg"
        title="Jeff Bezos"
      />
    </div>
  );
}

export default StoryReel;
