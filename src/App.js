import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

import Q21Image from "./assets/images/2.png";
import Kpop1Image from "./assets/images/KPOP.png";
import Kpop2Image from "./assets/images/KPOP.png";
import Q11Image from "./assets/images/1.png";

const LandingPage1 = styled("div")({
  backgroundColor: `rgba(242, 235, 233, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1440px`,
  height: `1080px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`
});

const Q21 = styled("img")({
  height: `47px`,
  width: `271px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `39px`,
  top: `60px`
});

const ChristmasCounter = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(43, 94, 87, 1)`,
  fontStyle: `normal`,
  fontFamily: `Kulim Park`,
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `400px`,
  height: `49px`,
  position: `absolute`,
  left: `320px`,
  top: `58px`
});

const Kpop1 = styled("img")({
  height: `471px`,
  width: `353px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1073px`,
  top: `0px`
});

const Kpop2 = styled("img")({
  height: `471px`,
  width: `353px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `790px`,
  top: `0px`
});

const Rectangle1 = styled("div")({
  backgroundColor: `rgba(43, 94, 87, 1)`,
  borderRadius: `306px`,
  width: `751px`,
  height: `892px`,
  position: `absolute`,
  left: `61px`,
  top: `140px`
});

const Merry = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Kulim Park`,
  fontWeight: `400`,
  fontSize: `128px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `495px`,
  height: `145px`,
  position: `absolute`,
  left: `189px`,
  top: `235px`
});

const Christmas = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Kulim Park`,
  fontWeight: `400`,
  fontSize: `64px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `475px`,
  height: `98px`,
  position: `absolute`,
  left: `185px`,
  top: `359px`
});

const Rectangle2 = styled("div")({
  backgroundColor: `rgba(196, 161, 106, 1)`,
  borderRadius: `45px`,
  width: `516px`,
  height: `434px`,
  position: `absolute`,
  left: `178px`,
  top: `458px`
});

const Q11 = styled("img")({
  height: `714px`,
  width: `1439px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `329px`,
  top: `318px`
});

const Q1010 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Kulim Park`,
  fontWeight: `400`,
  fontSize: `75px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `340px`,
  height: `127px`,
  position: `absolute`,
  left: `269px`,
  top: `571px`
});

const MmDd = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Kulim Park`,
  fontWeight: `400`,
  fontSize: `48px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `334px`,
  height: `81px`,
  position: `absolute`,
  left: `263px`,
  top: `698px`
});

function formatNumber(number) {
  return number.toString().padStart(2, "0");
}

function getTimeUntilChristmas() {
  const today = new Date();
  const christmasDay = new Date(today.getFullYear(), 11, 25); // December is represented by 11

  const timeDiff = christmasDay.getTime() - today.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return {
    hours,
    minutes,
    seconds: remainingSeconds
  };
}

function LandingPage() {
  const [timeUntilChristmas, setTimeUntilChristmas] = useState(
    getTimeUntilChristmas()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilChristmas(getTimeUntilChristmas());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <LandingPage1>
      <Q21 src={Q21Image} loading="lazy" alt={"2 1"} />
      <ChristmasCounter>{`CHRISTMAS COUNTER`}</ChristmasCounter>
      <Kpop1 src={Kpop1Image} loading="lazy" alt={"KPOP 1"} />
      <Kpop2 src={Kpop2Image} loading="lazy" alt={"KPOP 2"} />
      <Rectangle1></Rectangle1>
      <Merry>{`MERRY`}</Merry>
      <Christmas>{`CHRISTMAS`}</Christmas>
      <Rectangle2></Rectangle2>
      <Q11 src={Q11Image} loading="lazy" alt={"1 1"} />
      <Q1010>
        {`${formatNumber(timeUntilChristmas.hours)}:${formatNumber(
          timeUntilChristmas.minutes
        )}:${formatNumber(timeUntilChristmas.seconds)}`}
      </Q1010>
      <MmDd>{`hh:mm:ss`}</MmDd>
    </LandingPage1>
  );
}

export default LandingPage;
