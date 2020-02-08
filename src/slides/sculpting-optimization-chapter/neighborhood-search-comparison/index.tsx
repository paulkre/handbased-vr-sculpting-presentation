import React from "react";

import { InteractiveList } from "../../../components/interactive-list";
import { Table } from "../../../components/table";
import { FadeIn } from "../../../components/animation/fade-in";

export const NeighborhoodSearchComparison: React.FC = () => {
  return (
    <div style={{ paddingTop: "1vh" }}>
      <InteractiveList>
        <Table>
          <thead>
            <tr>
              <th>Algorithmus</th>
              <th>Aufwand</th>
              <th colSpan={2}>Parameter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"Naiv"</td>
              <td>O(n)</td>
              <td>n</td>
              <td>Anzahl der Knoten im Netz</td>
            </tr>
            <tr>
              <td rowSpan={2}>"Gitter"</td>
              <td rowSpan={2}>O(i + j)</td>
              <td>i</td>
              <td>Anzahl der Zellen, die mit dem Suchbereich überlappen</td>
            </tr>
            <tr>
              <td>j</td>
              <td>Anzahl der Knoten in diesen Zellen</td>
            </tr>
          </tbody>
        </Table>
        <FadeIn>
          <span className="xl">
            ⇒ In den meisten Situationen ist die Nachbarschaftssuche im Gitter
            effizienter.
          </span>
        </FadeIn>
      </InteractiveList>
    </div>
  );
};
