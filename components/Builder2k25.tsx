"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Badge } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// --- Helpers ---
import { compareNumbersWithDifference } from "@/helpers/compareNumbersWithDifference";
import { get2k25Heights } from "@/helpers/builder/2k25/physicals/get2k25Heights";
import { get2k25Weights } from "@/helpers/builder/2k25/physicals/get2k25Weights";
import { get2k25Wingspans } from "@/helpers/builder/2k25/physicals/get2k25Wingspans";
import { get2k25MaxRatings } from "@/helpers/builder/2k25/get2k25MaxRatings";
import { noAttrInfoLink } from "@/helpers/builder/noAttrInfoLink";
// --- Data ---
import positions from "@/json/position.json";
// --- Styles ---
import styles from "@/public/styles/components/Builder.module.css";

function Builder2k25() {
  const [isLoading, setIsLoading] = useState(true);
  const [containerClass, setContainerClass] = useState("hidden");
  const [selectedPosition, setSelectedPosition] = useState<string>("PG");
  const [selectedHeight, setSelectedHeight] = useState<string>("6'3");
  const [selectedWeight, setSelectedWeight] = useState<string>("198");
  const [selectedWingspan, setSelectedWingspan] = useState<string>("6'7");
  const availableHeights = get2k25Heights(selectedPosition);
  const availableWeights = get2k25Weights(selectedPosition, selectedHeight);
  const possibleWingspans = get2k25Wingspans(selectedHeight);
  const [baseRatings, setBaseRatings] = useState({});
  const [maxRatings, setMaxRatings] = useState({});

  useEffect(() => {
    const ratings = get2k25MaxRatings(
      selectedPosition,
      selectedHeight,
      selectedWeight,
      selectedWingspan
    );

    setBaseRatings(ratings.baseRatings);
    setMaxRatings(ratings.maxRatings);
    setIsLoading(false);
    setContainerClass("");
  }, [selectedPosition, selectedHeight, selectedWeight, selectedWingspan]);

  const handlePositionChange = (event) => {
    setSelectedPosition(event.target.value);
    setSelectedHeight(""); // Reset height when position changes
  };

  const handleHeightChange = (event) => {
    setSelectedHeight(event.target.value);
    setSelectedWeight("");
    setSelectedWingspan("");
  };

  const handleWeightChange = (event) => {
    setSelectedWeight(event.target.value);
  };

  const handleWingspanChange = (event) => {
    setSelectedWingspan(event.target.value);
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <Container className={`${containerClass} shadow-lg p-3 bg-body rounded`}>
        <Row className="justify-content-md-center mb-4">
          <Col xs={12} md={8} lg={6} xl={3} className="text-center">
            <Form.Group controlId="positionSelect">
              <Form.Select
                aria-label="Select Position"
                onChange={handlePositionChange}
                value={selectedPosition}
              >
                <option>Select Position</option>
                {positions.map((pos) => (
                  <option key={`position-${pos.position}`} value={pos.position}>
                    {pos.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={8} lg={6} xl={3} className="text-center">
            <Form.Group controlId="heightSelect">
              <Form.Select
                aria-label="Select Height"
                disabled={!selectedPosition}
                onChange={handleHeightChange}
                value={selectedHeight || ""}
              >
                <option>
                  {selectedPosition ? "Select Height" : "Select Position First"}
                </option>
                {availableHeights.map((height) => (
                  <option key={`height-${height}`} value={height}>
                    {height}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={8} lg={6} xl={3} className="text-center">
            <Form.Group controlId="weightSelect">
              <Form.Select
                aria-label="Select Weight"
                disabled={!selectedHeight}
                onChange={handleWeightChange}
                value={selectedWeight || ""}
              >
                <option>
                  {selectedHeight ? "Select Weight" : "Select Height First"}
                </option>
                {availableWeights.map((weight) => (
                  <option key={`weight-${weight}`} value={weight}>
                    {weight}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={8} lg={6} xl={3} className="text-center">
            <Form.Group controlId="wingspanSelect">
              <Form.Select
                aria-label="Select Wingspan"
                disabled={!selectedHeight}
                onChange={handleWingspanChange}
                value={selectedWingspan || ""}
              >
                <option>
                  {selectedHeight ? "Select Wingspan" : "Select Height First"}
                </option>
                {possibleWingspans.map((wingspan) => (
                  <option key={`wingspan-${wingspan}`} value={wingspan}>
                    {wingspan}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            {maxRatings && Object.keys(maxRatings).length > 0 ? (
              <div className="table-responsive">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(maxRatings).map(([key, values]) => {
                      if (
                        typeof values === "object" &&
                        values !== null &&
                        !Array.isArray(values)
                      ) {
                        return Object.entries(values).map(
                          ([valueKey, value]) => {
                            const diff = compareNumbersWithDifference(
                              value,
                              baseRatings[key][valueKey]
                            );
                            const badgeVariant = diff.startsWith("-")
                              ? "danger"
                              : "success";

                            return (
                              <tr
                                key={valueKey}
                                className={`${
                                  styles[`row-${key}`] || ""
                                } ${`row-${key}`}`}
                              >
                                <td>{valueKey}</td>
                                <td>
                                  {value}
                                  {diff !== "0" && (
                                    <Badge className="ms-3" bg={badgeVariant}>
                                      {diff}
                                    </Badge>
                                  )}
                                </td>
                              </tr>
                            );
                          }
                        );
                      }
                    })}
                  </tbody>
                </Table>
              </div>
            ) : (
              <>
                <div
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: noAttrInfoLink(
                      "2k25",
                      selectedPosition,
                      selectedHeight,
                      selectedWeight,
                      selectedWingspan
                    ),
                  }}
                />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Builder2k25;
