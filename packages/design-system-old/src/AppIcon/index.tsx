import React, { useMemo } from "react";
import styled from "styled-components";
import { CommonComponentProps } from "Types/common";
import { Classes } from "Constants/classes";
import { importRemixIcon, importSvg } from "Utils/icon-loadables";

const BagIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/bag.svg"),
);
const ProductIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/product.svg"),
);
const BookIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/book.svg"),
);
const CameraIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/camera.svg"),
);
const FileIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/file.svg"),
);
const ChatIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/chat.svg"),
);
const CalenderIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/calender.svg"),
);
const FrameIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/frame.svg"),
);
const GlobeIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/globe.svg"),
);
const ShopperIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/shopper.svg"),
);
const HeartIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/heart.svg"),
);
const FlightIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/flight.svg"),
);
const AlienIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/alien.svg"),
);
const BarGraphIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/bar-graph.svg"),
);
const BasketballIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/basketball.svg"),
);
const BicycleIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/bicycle.svg"),
);
const BirdIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/bird.svg"),
);
const BitcoinIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/bitcoin.svg"),
);
const BurgerIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/burger.svg"),
);
const BusIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/bus.svg"),
);
const AirplaneIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/airplane.svg"),
);
const CallIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/call.svg"),
);
const CarIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/car.svg"),
);
const CardIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/card.svg"),
);
const CatIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/cat.svg"),
);
const ChineseRemnibiIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/chinese-remnibi.svg"),
);
const CloudIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/cloud.svg"),
);
const CodingIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/coding.svg"),
);
const CouplesIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/couples.svg"),
);
const CricketIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/cricket.svg"),
);
const DiamondIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/diamond.svg"),
);
const DogIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/dog.svg"),
);
const DollarIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/dollar.svg"),
);
const EarthIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/earth.svg"),
);
const EmailIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/email.svg"),
);
const EurosIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/euros.svg"),
);
const FamilyIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/family.svg"),
);
const FlagIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/flag.svg"),
);
const FootballIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/football.svg"),
);
const HatIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/hat.svg"),
);
const HeadphonesIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/headphones.svg"),
);
const HospitalIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/hospital.svg"),
);
const JoystickIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/joystick.svg"),
);
const LaptopIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/laptop.svg"),
);
const LineChartIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/line-chart.svg"),
);
const LocationIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/location.svg"),
);
const LotusIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/lotus.svg"),
);
const LoveIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/love.svg"),
);
const MedalIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/medal.svg"),
);
const MedicalIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/medical.svg"),
);
const MoneyIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/money.svg"),
);
const MoonIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/moon.svg"),
);
const MugIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/mug.svg"),
);
const MusicIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/music.svg"),
);
const PantsIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/pants.svg"),
);
const PieChartIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/pie-chart.svg"),
);
const PizzaIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/pizza.svg"),
);
const PlantIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/plant.svg"),
);
const RainyWeatherIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/rainy-weather.svg"),
);
const RestaurantIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/restaurant.svg"),
);
const RocketIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/rocket.svg"),
);
const RoseIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/rose.svg"),
);
const RupeeIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/rupee.svg"),
);
const SaturnIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/saturn.svg"),
);
const ServerIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/server.svg"),
);
const ShakeHandsIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/shake-hands.svg"),
);
const ShirtIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/shirt.svg"),
);
const ShopIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/shop.svg"),
);
const SinglePersonIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/single-person.svg"),
);
const SmartphoneIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/smartphone.svg"),
);
const SnowyWeatherIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/snowy-weather.svg"),
);
const StarsIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/stars.svg"),
);
const SunflowerIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/sunflower.svg"),
);
const SystemIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/system.svg"),
);
const TeamIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/team.svg"),
);
const TreeIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/tree.svg"),
);
const UkPoundsIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/uk-pounds.svg"),
);
const WebsiteIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/website.svg"),
);
const YenIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/yen.svg"),
);
const SteamBowlIcon = importSvg(() =>
  import("../assets/icons/ads/app-icons/steam-bowl.svg"),
);
const PackageIcon = importSvg(() => import("../assets/icons/ads/package.svg"));
const ArrowDownIcon = importRemixIcon(() =>
  import("remixicon-react/ArrowDownSLineIcon"),
);
const ArrowUpIcon = importRemixIcon(() =>
  import("remixicon-react/ArrowUpSLineIcon"),
);
const ArrowLeftIcon = importRemixIcon(() =>
  import("remixicon-react/ArrowLeftSLineIcon"),
);
const ArrowRightIcon = importRemixIcon(() =>
  import("remixicon-react/ArrowRightSLineIcon"),
);
const HelpIcon = importRemixIcon(() =>
  import("remixicon-react/QuestionLineIcon"),
);
const OpenNewTabIcon = importRemixIcon(() =>
  import("remixicon-react/ShareBoxLineIcon"),
);
const ServerLineIcon = importRemixIcon(() =>
  import("remixicon-react/ServerLineIcon"),
);

enum Size {
  xxs = "xxs",
  xs = "xs",
  small = "small",
  medium = "medium",
  large = "large",
}

export const AppIconCollection = [
  "bag",
  "product",
  "book",
  "camera",
  "file",
  "chat",
  "calender",
  "flight",
  "frame",
  "globe",
  "shopper",
  "heart",
  "alien",
  "bar-graph",
  "basketball",
  "bicycle",
  "bird",
  "bitcoin",
  "burger",
  "bus",
  "call",
  "car",
  "card",
  "cat",
  "chinese-remnibi",
  "cloud",
  "coding",
  "couples",
  "cricket",
  "diamond",
  "dog",
  "dollar",
  "earth",
  "email",
  "euros",
  "family",
  "flag",
  "football",
  "hat",
  "headphones",
  "hospital",
  "joystick",
  "laptop",
  "line-chart",
  "location",
  "lotus",
  "love",
  "medal",
  "medical",
  "money",
  "moon",
  "mug",
  "music",
  "package",
  "pants",
  "pie-chart",
  "pizza",
  "plant",
  "rainy-weather",
  "restaurant",
  "rocket",
  "rose",
  "rupee",
  "saturn",
  "server",
  "server-line",
  "shake-hands",
  "shirt",
  "shop",
  "single-person",
  "smartphone",
  "snowy-weather",
  "stars",
  "steam-bowl",
  "sunflower",
  "system",
  "team",
  "tree",
  "uk-pounds",
  "website",
  "yen",
  "airplane",
  "arrow-down",
  "arrow-up",
  "arrow-left",
  "arrow-right",
  "help",
  "open-new-tab",
] as const;

export type AppIconName = typeof AppIconCollection[number];

type cssAttributes = {
  width: number;
  height: number;
  padding: number;
};

const appSizeHandler = (size: Size): cssAttributes => {
  let width, height, padding;
  switch (size) {
    case Size.small:
      width = 20;
      height = 20;
      padding = 5;
      break;
    case Size.medium:
      width = 32;
      height = 32;
      padding = 20;
      break;
    case Size.large:
      width = 50;
      height = 50;
      padding = 50;
      break;
    default:
      width = 20;
      height = 20;
      padding = 5;
      break;
  }
  return { width, height, padding };
};

const IconWrapper = styled.a<AppIconProps & { styledProps: cssAttributes }>`
  cursor: pointer;
  width: ${(props) => props.styledProps.width}px;
  height: ${(props) => props.styledProps.height}px;
  &:focus {
    outline: none;
  }
  svg {
    width: ${(props) => props.styledProps.width}px;
    height: ${(props) => props.styledProps.height}px;
    path {
      fill: var(--ads-app-icon-normal-color);
    }
  }
`;

export type AppIconProps = CommonComponentProps & {
  size?: Size;
  name: AppIconName;
  onClick?: (e: any) => void;
};

function AppIcon(props: AppIconProps) {
  const styledProps = useMemo(() => appSizeHandler(props.size || Size.medium), [
    props,
  ]);

  let returnIcon;
  switch (props.name) {
    case "bag":
      returnIcon = <BagIcon />;
      break;
    case "product":
      returnIcon = <ProductIcon />;
      break;
    case "book":
      returnIcon = <BookIcon />;
      break;
    case "camera":
      returnIcon = <CameraIcon />;
      break;
    case "file":
      returnIcon = <FileIcon />;
      break;
    case "chat":
      returnIcon = <ChatIcon />;
      break;
    case "calender":
      returnIcon = <CalenderIcon />;
      break;
    case "frame":
      returnIcon = <FrameIcon />;
      break;
    case "globe":
      returnIcon = <GlobeIcon />;
      break;
    case "shopper":
      returnIcon = <ShopperIcon />;
      break;
    case "heart":
      returnIcon = <HeartIcon />;
      break;
    case "flight":
      returnIcon = <FlightIcon />;
      break;
    case "alien":
      returnIcon = <AlienIcon />;
      break;
    case "bar-graph":
      returnIcon = <BarGraphIcon />;
      break;
    case "basketball":
      returnIcon = <BasketballIcon />;
      break;
    case "bicycle":
      returnIcon = <BicycleIcon />;
      break;
    case "bird":
      returnIcon = <BirdIcon />;
      break;
    case "bitcoin":
      returnIcon = <BitcoinIcon />;
      break;
    case "burger":
      returnIcon = <BurgerIcon />;
      break;
    case "bus":
      returnIcon = <BusIcon />;
      break;
    case "call":
      returnIcon = <CallIcon />;
      break;
    case "car":
      returnIcon = <CarIcon />;
      break;
    case "card":
      returnIcon = <CardIcon />;
      break;
    case "cat":
      returnIcon = <CatIcon />;
      break;
    case "chinese-remnibi":
      returnIcon = <ChineseRemnibiIcon />;
      break;
    case "cloud":
      returnIcon = <CloudIcon />;
      break;
    case "coding":
      returnIcon = <CodingIcon />;
      break;
    case "couples":
      returnIcon = <CouplesIcon />;
      break;
    case "cricket":
      returnIcon = <CricketIcon />;
      break;
    case "diamond":
      returnIcon = <DiamondIcon />;
      break;
    case "dog":
      returnIcon = <DogIcon />;
      break;
    case "airplane":
      returnIcon = <AirplaneIcon />;
      break;
    case "dollar":
      returnIcon = <DollarIcon />;
      break;
    case "earth":
      returnIcon = <EarthIcon />;
      break;
    case "email":
      returnIcon = <EmailIcon />;
      break;
    case "euros":
      returnIcon = <EurosIcon />;
      break;
    case "family":
      returnIcon = <FamilyIcon />;
      break;
    case "flag":
      returnIcon = <FlagIcon />;
      break;
    case "football":
      returnIcon = <FootballIcon />;
      break;
    case "hat":
      returnIcon = <HatIcon />;
      break;
    case "headphones":
      returnIcon = <HeadphonesIcon />;
      break;
    case "hospital":
      returnIcon = <HospitalIcon />;
      break;
    case "joystick":
      returnIcon = <JoystickIcon />;
      break;
    case "laptop":
      returnIcon = <LaptopIcon />;
      break;
    case "line-chart":
      returnIcon = <LineChartIcon />;
      break;
    case "location":
      returnIcon = <LocationIcon />;
      break;
    case "lotus":
      returnIcon = <LotusIcon />;
      break;
    case "love":
      returnIcon = <LoveIcon />;
      break;
    case "medal":
      returnIcon = <MedalIcon />;
      break;
    case "medical":
      returnIcon = <MedicalIcon />;
      break;
    case "money":
      returnIcon = <MoneyIcon />;
      break;
    case "moon":
      returnIcon = <MoonIcon />;
      break;
    case "mug":
      returnIcon = <MugIcon />;
      break;
    case "music":
      returnIcon = <MusicIcon />;
      break;
    case "pants":
      returnIcon = <PantsIcon />;
      break;
    case "pie-chart":
      returnIcon = <PieChartIcon />;
      break;
    case "package":
      returnIcon = <PackageIcon />;
      break;
    case "pizza":
      returnIcon = <PizzaIcon />;
      break;
    case "plant":
      returnIcon = <PlantIcon />;
      break;
    case "rainy-weather":
      returnIcon = <RainyWeatherIcon />;
      break;
    case "restaurant":
      returnIcon = <RestaurantIcon />;
      break;
    case "rocket":
      returnIcon = <RocketIcon />;
      break;
    case "rose":
      returnIcon = <RoseIcon />;
      break;
    case "rupee":
      returnIcon = <RupeeIcon />;
      break;
    case "saturn":
      returnIcon = <SaturnIcon />;
      break;
    case "server":
      returnIcon = <ServerIcon />;
      break;
    case "server-line":
      returnIcon = <ServerLineIcon />;
      break;
    case "shake-hands":
      returnIcon = <ShakeHandsIcon />;
      break;
    case "shirt":
      returnIcon = <ShirtIcon />;
      break;
    case "shop":
      returnIcon = <ShopIcon />;
      break;
    case "single-person":
      returnIcon = <SinglePersonIcon />;
      break;
    case "smartphone":
      returnIcon = <SmartphoneIcon />;
      break;
    case "snowy-weather":
      returnIcon = <SnowyWeatherIcon />;
      break;
    case "stars":
      returnIcon = <StarsIcon />;
      break;
    case "sunflower":
      returnIcon = <SunflowerIcon />;
      break;
    case "steam-bowl":
      returnIcon = <SteamBowlIcon />;
      break;
    case "system":
      returnIcon = <SystemIcon />;
      break;
    case "team":
      returnIcon = <TeamIcon />;
      break;
    case "tree":
      returnIcon = <TreeIcon />;
      break;
    case "uk-pounds":
      returnIcon = <UkPoundsIcon />;
      break;
    case "website":
      returnIcon = <WebsiteIcon />;
      break;
    case "yen":
      returnIcon = <YenIcon />;
      break;
    case "arrow-down":
      returnIcon = <ArrowDownIcon />;
      break;
    case "arrow-up":
      returnIcon = <ArrowUpIcon />;
      break;
    case "arrow-left":
      returnIcon = <ArrowLeftIcon />;
      break;
    case "arrow-right":
      returnIcon = <ArrowRightIcon />;
      break;
    case "help":
      returnIcon = <HelpIcon />;
      break;
    case "open-new-tab":
      returnIcon = <OpenNewTabIcon />;
      break;
    default:
      returnIcon = null;
      break;
  }
  return returnIcon ? (
    <IconWrapper
      data-cy={props.cypressSelector}
      {...props}
      className={[Classes.APP_ICON, props.className].join(" ")}
      styledProps={styledProps}
    >
      {returnIcon}
    </IconWrapper>
  ) : null;
}

export default AppIcon;
