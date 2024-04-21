import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { DropdownCategories, LineChart, BarChart } from "~/shared/ui";

export function Analytics({
  title,
  label,
  tabs,
  selectedOption,
  onChange,
}: any) {
  const options = ["Все", "Ферма", "3D"];
  const [key, setKey] = useState<string>("week");
  return (
    <>
      <div className="table-title my-4">{title}</div>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => k !== null && setKey(k)}
        unmountOnExit={true}
        mountOnEnter={true}
        transition={false}
      >
        {tabs.map((el: any, index: number) => (
          <Tab key={index} eventKey={el.key} title={el.title}>
            <div
              className="chart-block"
              style={{
                borderTopLeftRadius: 0,
              }}
            >
              {selectedOption ? (
                <DropdownCategories
                  options={options}
                  selectedOption={selectedOption}
                  onClick={onChange}
                />
              ) : (
                ""
              )}
              <LineChart
                label={label}
                labels={el.labels}
                dataset={el.dataset}
              />
              <BarChart label={label} labels={el.labels} dataset={el.dataset} />
            </div>
          </Tab>
        ))}
      </Tabs>
    </>
  );
}
