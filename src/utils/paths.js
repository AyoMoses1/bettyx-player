import { VscFileMedia } from "react-icons/vsc";
import { FaWarehouse } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GrUserWorker } from "react-icons/gr";
import { BiWallet } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const paths = {
  home: "/",
  login: "/login",
  upNext: "/up-next",
  featured: "/feaured",
  liveStreaming: "/live-streaming",
  baseball: "/baseball",
  football: "/football",
  basketball: "/basketball",
  soccer: "/soccer",
  golf: "/golf",
  martialArts: "/martial-arts",
  boxing: "/boxing",
  tennis: "/tennis",
  autoRacing: "/auto-racing",
  cricket: "/cricket",
};

export const NavNames = {
  upNext: "Up Next",
  featured: "Feaured",
  liveStreaming: "Live Streaming",
  baseball: "Baseball",
  football: "Football",
  basketball: "Basketball",
  soccer: "Soccer",
  golf: "Golf",
  martialArts: "Martial Arts",
  boxing: "Boxing",
  tennis: "Tennis",
  autoRacing: "Auto Racing",
  cricket: "Cricket",
};

export const pathObject = [
  {
    main: { name: NavNames.upNext, path: paths.upNext, icon: <FaWarehouse /> },
    sub: [],
  },
  {
    main: {
      name: NavNames.featured,
      path: paths.featured,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.liveStreaming,
      path: paths.liveStreaming,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.baseball,
      path: paths.baseball,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.football,
      path: paths.football,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.basketball,
      path: paths.basketball,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.soccer,
      path: paths.soccer,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.golf,
      path: paths.golf,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.martialArts,
      path: paths.martialArts,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.boxing,
      path: paths.boxing,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.tennis,
      path: paths.tennis,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.autoRacing,
      path: paths.autoRacing,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.cricket,
      path: paths.cricket,
      icon: <GrUserWorker />,
    },
    sub: [],
  },
];

export default paths;
