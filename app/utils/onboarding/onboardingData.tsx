import OnboardingOne from "../../assets/svg/onboardingOne.svg";
import OnboardingTwo from "../../assets/svg/onboardingTwo.svg";
import OnboardingThree from "../../assets/svg/onboardingThree.svg";

const onboardingData = [
  {
    id: 1,
    image: <OnboardingOne width={250} height={250} />,
    title: "Gain total control of your money",
    description: "Become your own money manager and make every cent count",
  },
  {
    id: 2,
    image: <OnboardingTwo width={250} height={250} />,
    title: "Know where your money goes",
    description:
      "Track your transaction easily with categories and financial report",
  },
  {
    id: 3,
    image: <OnboardingThree width={250} height={250} />,
    title: "Plan ahead",
    description: "Setup your budget for each category so you're in control",
  },
];

export default onboardingData;
