import React from "react";
import { useParams } from "react-router-dom";
import { Dropdown } from "../../components/elements/Dropdown";
import { DropdownOptions } from "../../components/elements/Dropdown/options";
import Image from "../../components/elements/Image";
import { ProductList } from "../../components/elements/ProductList";
import { ServiceInfo } from "./servicesInfo";
import {
  ColumnContainer,
  NavigationInfoContainer,
  ScreenWrapper,
  StyledHeadline,
  StyledNavigationText,
  StyledRowContainer,
  StyledSubHeadline,
} from "./styles";

export const Services = () => {
  const paragraphText = (text) => text.split("\n").map((str) => <p>{str}</p>);
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
    <>
      <ColumnContainer>
        <StyledHeadline>{service?.title}</StyledHeadline>
        <NavigationInfoContainer>
          <StyledNavigationText>Home</StyledNavigationText>
          <StyledNavigationText>{">"}</StyledNavigationText>
          <StyledNavigationText>Services</StyledNavigationText>
          <StyledNavigationText>{">"}</StyledNavigationText>
          <div>
            <Dropdown title={service?.title} options={DropdownOptions} />
          </div>
        </NavigationInfoContainer>
      </ColumnContainer>
      <ScreenWrapper>
        <StyledRowContainer>
          {false && service?.products && (
            <ProductList products={service?.products} />
          )}

          {service?.image && (
            <Image
              src={service?.image.src}
              alt={service?.image.alt}
              style={{ alignSelf: "center" }}
            />
          )}

          <div>
            <StyledSubHeadline>{service?.summary}</StyledSubHeadline>
            {service?.description && paragraphText(service?.description)}
          </div>
        </StyledRowContainer>
      </ScreenWrapper>
    </>
  );
};
