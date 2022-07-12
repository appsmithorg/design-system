import React, { useMemo } from "react";
import { ReactComponent as BagIcon } from "./icons/bag.svg";
import { ReactComponent as ProductIcon } from "./icons/product.svg";
import { ReactComponent as BookIcon } from "./icons/book.svg";
import { ReactComponent as CameraIcon } from "./icons/camera.svg";
import { ReactComponent as FileIcon } from "./icons/file.svg";
import { ReactComponent as ChatIcon } from "./icons/chat.svg";
import { ReactComponent as CalenderIcon } from "./icons/calender.svg";
import { ReactComponent as FrameIcon } from "./icons/frame.svg";
import { ReactComponent as GlobeIcon } from "./icons/globe.svg";
import { ReactComponent as ShopperIcon } from "./icons/shopper.svg";
import { ReactComponent as HeartIcon } from "./icons/heart.svg";
import { ReactComponent as FlightIcon } from "./icons/flight.svg";
import { ReactComponent as AlienIcon } from "./icons/alien.svg";
import { ReactComponent as BarGraphIcon } from "./icons/bar-graph.svg";
import { ReactComponent as BasketballIcon } from "./icons/basketball.svg";
import { ReactComponent as BicycleIcon } from "./icons/bicycle.svg";
import { ReactComponent as BirdIcon } from "./icons/bird.svg";
import { ReactComponent as BitcoinIcon } from "./icons/bitcoin.svg";
import { ReactComponent as BurgerIcon } from "./icons/burger.svg";
import { ReactComponent as BusIcon } from "./icons/bus.svg";
import { ReactComponent as AirplaneIcon } from "./icons/airplane.svg";
import { ReactComponent as CallIcon } from "./icons/call.svg";
import { ReactComponent as CarIcon } from "./icons/car.svg";
import { ReactComponent as CardIcon } from "./icons/card.svg";
import { ReactComponent as CatIcon } from "./icons/cat.svg";
import { ReactComponent as ChineseRemnibiIcon } from "./icons/chinese-remnibi.svg";
import { ReactComponent as CloudIcon } from "./icons/cloud.svg";
import { ReactComponent as CodingIcon } from "./icons/coding.svg";
import { ReactComponent as CouplesIcon } from "./icons/couples.svg";
import { ReactComponent as CricketIcon } from "./icons/cricket.svg";
import { ReactComponent as DiamondIcon } from "./icons/diamond.svg";
import { ReactComponent as DogIcon } from "./icons/dog.svg";
import { ReactComponent as DollarIcon } from "./icons/dollar.svg";
import { ReactComponent as EarthIcon } from "./icons/earth.svg";
import { ReactComponent as EmailIcon } from "./icons/email.svg";
import { ReactComponent as EurosIcon } from "./icons/euros.svg";
import { ReactComponent as FamilyIcon } from "./icons/family.svg";
import { ReactComponent as FlagIcon } from "./icons/flag.svg";
import { ReactComponent as FootballIcon } from "./icons/football.svg";
import { ReactComponent as HatIcon } from "./icons/hat.svg";
import { ReactComponent as HeadphonesIcon } from "./icons/headphones.svg";
import { ReactComponent as HospitalIcon } from "./icons/hospital.svg";
import { ReactComponent as JoystickIcon } from "./icons/joystick.svg";
import { ReactComponent as LaptopIcon } from "./icons/laptop.svg";
import { ReactComponent as LineChartIcon } from "./icons/line-chart.svg";
import { ReactComponent as LocationIcon } from "./icons/location.svg";
import { ReactComponent as LotusIcon } from "./icons/lotus.svg";
import { ReactComponent as LoveIcon } from "./icons/love.svg";
import { ReactComponent as MedalIcon } from "./icons/medal.svg";
import { ReactComponent as MedicalIcon } from "./icons/medical.svg";
import { ReactComponent as MoneyIcon } from "./icons/money.svg";
import { ReactComponent as MoonIcon } from "./icons/moon.svg";
import { ReactComponent as MugIcon } from "./icons/mug.svg";
import { ReactComponent as MusicIcon } from "./icons/music.svg";
import { ReactComponent as PantsIcon } from "./icons/pants.svg";
import { ReactComponent as PieChartIcon } from "./icons/pie-chart.svg";
import { ReactComponent as PizzaIcon } from "./icons/pizza.svg";
import { ReactComponent as PlantIcon } from "./icons/plant.svg";
import { ReactComponent as RainyWeatherIcon } from "./icons/rainy-weather.svg";
import { ReactComponent as RestaurantIcon } from "./icons/restaurant.svg";
import { ReactComponent as RocketIcon } from "./icons/rocket.svg";
import { ReactComponent as RoseIcon } from "./icons/rose.svg";
import { ReactComponent as RupeeIcon } from "./icons/rupee.svg";
import { ReactComponent as SaturnIcon } from "./icons/saturn.svg";
import { ReactComponent as ServerIcon } from "./icons/server.svg";
import { ReactComponent as ShakeHandsIcon } from "./icons/shake-hands.svg";
import { ReactComponent as ShirtIcon } from "./icons/shirt.svg";
import { ReactComponent as ShopIcon } from "./icons/shop.svg";
import { ReactComponent as SinglePersonIcon } from "./icons/single-person.svg";
import { ReactComponent as SmartphoneIcon } from "./icons/smartphone.svg";
import { ReactComponent as SnowyWeatherIcon } from "./icons/snowy-weather.svg";
import { ReactComponent as StarsIcon } from "./icons/stars.svg";
import { ReactComponent as SunflowerIcon } from "./icons/sunflower.svg";
import { ReactComponent as SystemIcon } from "./icons/system.svg";
import { ReactComponent as TeamIcon } from "./icons/team.svg";
import { ReactComponent as TreeIcon } from "./icons/tree.svg";
import { ReactComponent as UkPoundsIcon } from "./icons/uk-pounds.svg";
import { ReactComponent as WebsiteIcon } from "./icons/website.svg";
import { ReactComponent as YenIcon } from "./icons/yen.svg";
import { ReactComponent as SteamBowlIcon } from "./icons/steam-bowl.svg";
import ArrowDownIcon from "remixicon-react/ArrowDownSLineIcon";
import ArrowUpIcon from "remixicon-react/ArrowUpSLineIcon";
import ArrowLeftIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightIcon from "remixicon-react/ArrowRightSLineIcon";
import HelpIcon from "remixicon-react/QuestionLineIcon";
import OpenNewTabIcon from "remixicon-react/ShareBoxLineIcon";
import ServerLineIcon from "remixicon-react/ServerLineIcon";

import styled from "styled-components";
import { CommonComponentProps } from "../types/common";
import { Classes } from "../constants/classes";

export enum Size {
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
