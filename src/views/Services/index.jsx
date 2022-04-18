import React from "react";
import { useParams } from "react-router-dom";
import { ServiceInfo } from "./servicesInfo";

export const Services = () => {
  const serviceId = useParams().id;
  const [service, setService] = React.useState(null);

  React.useEffect(() => {
    setService(ServiceInfo.find((tempService) => tempService.id === serviceId));
  }, [serviceId]);

  return (
    <div>
      <h1>Services</h1>
      <h2>{service?.title}</h2>
      <h3>{service?.summary}</h3>
      <p>{service?.description}</p>
    </div>
  );
};
