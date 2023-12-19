import React, { useEffect } from "react";
import { Accreditations } from "./accreditations";
import {
  AccreditationDescription,
  AccreditationLogoLandscape,
  AccreditationLogoPortrait,
  AccreditationSectionContainer,
  AccreditationTextContainer,
  AccreditationTitle,
  PageDescription,
  PageTitle,
  ScreenWrapper,
  SingleAccreditationContainer,
  TopHeader,
} from "./styles";

export const AccreditationPage = () => {
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ScreenWrapper>
      <TopHeader>
        <PageTitle>Our Accreditations</PageTitle>
        <PageDescription>
          Here at Ambar Systems, we invest heavily in our accreditation
          portfolio, training our team in the latest industry legislation and
          achieving all relevant standards. These nationally recognised
          accreditations give our customers the assurance that all projects are
          completed to the highest standards.
        </PageDescription>
      </TopHeader>
      <AccreditationSectionContainer>
        {Accreditations.map(({ title, summary, image, isPortrait }, index) => (
          <SingleAccreditationContainer key={index}>
            {isPortrait ? (
              <AccreditationLogoPortrait
                src={image}
                alt={title}
                height="auto"
              />
            ) : (
              <AccreditationLogoLandscape
                src={image}
                alt={title}
                height="auto"
              />
            )}
            <AccreditationTextContainer>
              <AccreditationTitle>{title}</AccreditationTitle>
              <AccreditationDescription>{summary}</AccreditationDescription>
            </AccreditationTextContainer>
          </SingleAccreditationContainer>
        ))}
      </AccreditationSectionContainer>
    </ScreenWrapper>
  );
};
