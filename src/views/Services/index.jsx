import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../../components/elements/ProductList";
import { ServiceInfo } from "./servicesInfo";
import {
  ColumnContainer,
  NavigationInfoContainer,
  ScreenWrapper,
  StyledHeadline,
  StyledNavigationText,
  StyledParagraphText,
  StyledRowContainer,
  StyledSubHeadline,
} from "./styles";

export const Services = () => {
  const serviceId = useParams().id;
  const [service, setService] = React.useState(null);
  console.log(service);

  React.useEffect(() => {
    const serviceInfo = ServiceInfo.find(
      (tempService) => tempService.id === serviceId
    );
    console.log("ServiceInfo", serviceInfo);
    setService(serviceInfo);
  }, [serviceId]);

  return (
    <ScreenWrapper>
      <ColumnContainer>
        <StyledHeadline>{service?.title}</StyledHeadline>
        <NavigationInfoContainer>
          <StyledNavigationText>Home</StyledNavigationText>
          <StyledNavigationText>{">"}</StyledNavigationText>
          <StyledNavigationText>Services</StyledNavigationText>
          <StyledNavigationText>{">"}</StyledNavigationText>
          <StyledNavigationText>{service?.title}</StyledNavigationText>
        </NavigationInfoContainer>
      </ColumnContainer>
      <StyledRowContainer>
        {service?.products && <ProductList products={service?.products} />}
        <div>
          <StyledSubHeadline>{service?.summary}</StyledSubHeadline>
          <StyledParagraphText>{service?.description}</StyledParagraphText>
        </div>
      </StyledRowContainer>
    </ScreenWrapper>
  );
};
