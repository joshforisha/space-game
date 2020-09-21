import * as React from "react";
import styled from "styled-components";
import { Button } from "~/view/button";
import { generateWorld } from "~/data/world";
import { leftPad } from "~/lib/string";
import { randomInt } from "~/lib/number";
import { render } from "react-dom";
import { Slab } from "~/view/slab";

const Name = styled.h2`
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 1;
  margin: var(--large) 0px 0px;
`;

const Secs = styled.span`
  font-size: 0.8em;

  &:before {
    content: ".";
  }
`;

const Slabs = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Unit = styled.span`
  font-size: 0.8em;
  opacity: 0.6;
`;

const View = styled.div`
  margin: var(--large);
`;

function ClockSlab() {
  const [mhours, setMHours] = React.useState();
  const [msecs, setMSecs] = React.useState();
  React.useEffect(() => {
    function tick() {
      const now = Date.now();
      setMHours(leftPad(Math.floor((now % 1e8) / 1e5).toString(), 3, "0"));
      setMSecs(leftPad(Math.floor((now % 1e5) / 1000).toString(), 2, "0"));
      setTimeout(tick, 1000 - (now % 1000));
    }
    tick();
  }, []);
  return (
    <Slab label="Time">
      {mhours}
      <Secs>{msecs}</Secs>
    </Slab>
  );
}

function Main() {
  const [world, setWorld] = React.useState(generateWorld("Test"));
  console.log(world);
  return (
    <View>
      <Slabs>
        <ClockSlab />
        <Slab label="Credits">
          {randomInt(1000, 9999)}&thinsp;<Unit>Cr</Unit>
        </Slab>
        <Slab label="Biomass">
          {randomInt(1000, 9999)}&thinsp;<Unit>T</Unit>
        </Slab>
        <Slab label="Metal">
          {randomInt(1000, 9999)}&thinsp;<Unit>T</Unit>
        </Slab>
      </Slabs>
      <Name>{world.name}</Name>
      <Slabs>
        <Slab label="Size">{world.size}</Slab>
        <Slab label="Atmosphere">{world.atmosphere}</Slab>
        <Slab label="Gravity">{world.gravity}</Slab>
        <Slab label="Hydration">
          {world.hydration}
          <Unit>%</Unit>
        </Slab>
        <Slab label="Temperature">{world.temperature}</Slab>
        <Slab label="Vegetation">
          {world.vegetation}
          <Unit>%</Unit>
        </Slab>
        <Slab label="Biomass">
          {world.biomass}&thinsp;<Unit>T/&#273;</Unit>
        </Slab>
      </Slabs>
      <Button onClick={() => setWorld(generateWorld("Test"))}>Generate</Button>
    </View>
  );
}

render(<Main />, document.getElementById("Root"));
