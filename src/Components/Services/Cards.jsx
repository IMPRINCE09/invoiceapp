import React from "react";

const projectteam = [
  {
    img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1723546999~exp=1723550599~hmac=dc6f712d13395ccbf8e354bed9d09482466228b32c43cc8758b5ae13a778bd11&w=826",
    details:
      "widespread species of primate, and the last surviving species of the genus Homo. They are great apes characterized by their hairlessness, bipedalism, and high intelligence.",
    name: "Prince Kumar Patel",
  },
  {
    img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1723546999~exp=1723550599~hmac=dc6f712d13395ccbf8e354bed9d09482466228b32c43cc8758b5ae13a778bd11&w=826",
    details:
      "widespread species of primate, and the last surviving species of the genus Homo. They are great apes characterized by their hairlessness, bipedalism, and high intelligence.",
    name: "Prince Kumar Patel",
  },
  {
    img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1723546999~exp=1723550599~hmac=dc6f712d13395ccbf8e354bed9d09482466228b32c43cc8758b5ae13a778bd11&w=826",
    details:
      "widespread species of primate, and the last surviving species of the genus Homo. They are great apes characterized by their hairlessness, bipedalism, and high intelligence.",
    name: "Prince Kumar Patel",
  },
  {
    img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1723546999~exp=1723550599~hmac=dc6f712d13395ccbf8e354bed9d09482466228b32c43cc8758b5ae13a778bd11&w=826",
    details:
      "widespread species of primate, and the last surviving species of the genus Homo. They are great apes characterized by their hairlessness, bipedalism, and high intelligence.",
    name: "Prince Kumar Patel",
  },
];

const allteam = [
  {
    img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1723546999~exp=1723550599~hmac=dc6f712d13395ccbf8e354bed9d09482466228b32c43cc8758b5ae13a778bd11&w=826",
    details:
      "widespread species of primate, and the last surviving species of the genus Homo. They are great apes characterized by their hairlessness, bipedalism, and high intelligence.",
    name: "Prince Kumar Patel",
  },

  {
    img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1723546999~exp=1723550599~hmac=dc6f712d13395ccbf8e354bed9d09482466228b32c43cc8758b5ae13a778bd11&w=826",
    details:
      "widespread species of primate, and the last surviving species of the genus Homo. They are great apes characterized by their hairlessness, bipedalism, and high intelligence.",
    name: "Prince Kumar Patel",
  },
  {
    img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1723546999~exp=1723550599~hmac=dc6f712d13395ccbf8e354bed9d09482466228b32c43cc8758b5ae13a778bd11&w=826",
    details:
      "widespread species of primate, and the last surviving species of the genus Homo. They are great apes characterized by their hairlessness, bipedalism, and high intelligence.",
    name: "Prince Kumar Patel",
  },
  {
    img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1723546999~exp=1723550599~hmac=dc6f712d13395ccbf8e354bed9d09482466228b32c43cc8758b5ae13a778bd11&w=826",
    details:
      "widespread species of primate, and the last surviving species of the genus Homo. They are great apes characterized by their hairlessness, bipedalism, and high intelligence.",
    name: "Prince Kumar Patel",
  },
];

function Cardabout() {
  return (
    <div className="">
      <div className="">
        {projectteam.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <img src={item.img}></img>
                <h2>{item.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        {allteam.map((item, index) => {
          <div key={index}>
            <img src={item.img}></img>
            <h2>{item.name}</h2>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Cardabout;
