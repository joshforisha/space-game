import * as React from "react";
import styled from "styled-components";
import { ClockSlab } from "~/view/clock-slab";
import { Slab, Unit } from "~/view/slab";
import { useModel } from "~/view/model";
import { withCommas } from "~/lib/number";

const Panel = styled.div`
  display: flex;
  justify-content: space-evenly;

  & ${Slab} {
    padding: 0px var(--medium);
    width: 20%;
  }
`;

export function ResourcesPanel(): React.FC {
  const [{ biomass, credits, energy, metal }] = useModel();

  return (
    <Panel>
      <ClockSlab />
      <Slab label="Credits">
        {withCommas(credits)}&thinsp;<Unit>Cr</Unit>
      </Slab>
      <Slab label="Biomass">
        {withCommas(biomass)}&thinsp;<Unit>t</Unit>
      </Slab>
      <Slab label="Energy">
        {withCommas(energy)}&thinsp;<Unit>W</Unit>
      </Slab>
      <Slab label="Metal">
        {withCommas(metal)}&thinsp;<Unit>t</Unit>
      </Slab>
    </Panel>
  );
}
