import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Container, Row, Col, Spinner } from "react-bootstrap";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import Builder2k25 from "@/components/Builder2k25";

export const metadata: Metadata = {
  title: "NBA 2K25 Builder",
  description: "",
};

export default function NBA2K25BuilderPage() {
  return (
    <PageLayout>
      <Container className="py-3">
        <h3 className="text-center">NBA 2K25 Builder</h3>
        <Row className="justify-content-center mt-3">
          <Col md={10} lg={8}>
            <Suspense
              fallback={
                <div className="text-center py-5">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading Builder...</span>
                  </Spinner>
                  <p className="mt-2">Loading Builder...</p>
                </div>
              }
            >
              <Builder2k25 />
            </Suspense>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
