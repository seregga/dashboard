import React from "react";
import { SenchaGrid, Column } from "@sencha/sencha-grid";
import "@sencha/sencha-grid/dist/themes/grui.css";

export default class Supplys extends React.Component {
    render() {
        const data = [
            { col1: "value1", col2: "data1", col3: 1.01 },
            { col1: "value2", col2: "data2", col3: 1.02 },
            { col1: "value3", col2: "data3", col3: 1.03 },
        ];

        return (
            < SenchaGrid data={data} style={{ width: "100%", height: "100%" }}>
                < Column field="col1" text="Column 1" flex="1" />
                < Column field="col2" text="Column 2" />
                < Column field="col3" text="Column 3" align="right" />
            </SenchaGrid>
        );
    }
}