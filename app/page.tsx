import { Container, Row, Col, Button } from "react-bootstrap";
// --- Layout ---
import PageLayout from "@/components/PageLayout";

const siteName = process.env.NEXT_PUBLIC_APP_NAME;
const current2K = "NBA 2K25";
const next2K = "NBA 2K26";
// const prev2K = "NBA 2K24";

export default function HomePage() {
  return (
    <PageLayout>
      <Container className="mt-5 mb-5 text-center">
        <h1>Craft Your Perfect {current2K} MyPlayer</h1>
        <p className="lead">
          Welcome to {siteName} &ndash; Your ultimate hub for planning, testing,
          and perfecting MyPlayer builds across NBA 2K! Get started with our
          powerful tools for {current2K} and be ready for {next2K} and beyond.
        </p>
        <Button
          variant="primary"
          size="lg"
          href={`/builder/${current2K.toLowerCase().replace(" ", "")}`}
          className="mt-3 mx-2"
        >
          Go to {current2K} Builder
        </Button>
        <Button
          variant="outline-secondary"
          size="lg"
          href={`/builder/${next2K.toLowerCase().replace(" ", "")}`}
          className="mt-3 mx-2"
          disabled
        >
          {next2K} Builder (Coming This Fall)
        </Button>
        {/* Optional: Link for previous version if you add archived data */}

        {/* <Button
          variant="outline-info"
          size="lg"
          href={`/builder/${prev2K.toLowerCase().replace(" ", "")}`}
          className="mt-3 mx-2"
        >
          View {prev2K} Data
        </Button> */}
      </Container>

      {/* Informational Block */}
      <Container className="mb-5">
        <Row className="shadow-lg p-4 bg-body rounded">
          <Col lg={10} className="mx-auto">
            <h3 className="text-center mb-3">
              Build Smarter Across Every 2K Season
            </h3>
            <p>
              Tired of wasting VC on builds that don&apos;t quite work out?{" "}
              {siteName} is designed to help you dominate the court, starting
              with our full support for {current2K}. Our comprehensive tools let
              you experiment endlessly *before* you commit your attributes
              in-game.
            </p>
            <p>
              Dive deep into attribute caps for every height, weight, and
              wingspan combination. Master the latest badge requirements,
              understand their impact, and simulate your entire build using our
              intuitive online tester. We are dedicated to providing the most
              accurate, up-to-date information for {current2K}, and crucially,{" "}
              {siteName} is built with the future in mind. We&apos;re already
              preparing our framework to support {next2K} and future releases
              right from launch day. Your journey to the perfect build starts
              and continues right here!
            </p>
            {/* Optional: Links to data specific to the current version */}
            {/* <div className="text-center mt-4">
              <Button
                variant="link"
                href={`/badges/${current2K.toLowerCase().replace(" ", "")}`}
              >
                View {current2K} Badges
              </Button>{" "}
              |{" "}
              <Button
                variant="link"
                href={`/caps/${current2K.toLowerCase().replace(" ", "")}`}
              >
                Explore {current2K} Attribute Caps
              </Button>
            </div> */}
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
