import React from "react";
import { Accreditations } from "./accreditations";
import {
  AccreditationDescription,
  AccreditationLogo,
  AccreditationTextContainer,
  AccreditationTitle,
  PageDescription,
  PageTitle,
  ScreenWrapper,
  SingleAccreditationContainer,
  TopHeader,
} from "./styles";

export const AccreditationPage = () => {
  return (
    <ScreenWrapper>
      <TopHeader>
        <PageTitle>Ambar Systems Accreditations</PageTitle>
        <PageDescription>
          Here at Ambar Systems, we invest heavily in our accreditation
          portfolio, training our team in the latest industry legislation and
          achieving all relevant standards. These nationally recognised
          accreditations give our customers the assurance that all projects are
          completed to the highest standards.
        </PageDescription>
      </TopHeader>
      <div style={{ padding: "0em 4em 3em 4em" }}>
        {Accreditations.map(({ title, summary, image }, index) => (
          <SingleAccreditationContainer key={index}>
            <AccreditationLogo src={image} alt={title} />
            <AccreditationTextContainer>
              <AccreditationTitle>{title}</AccreditationTitle>
              <AccreditationDescription>{summary}</AccreditationDescription>
            </AccreditationTextContainer>
          </SingleAccreditationContainer>
        ))}
      </div>
    </ScreenWrapper>
  );
};
