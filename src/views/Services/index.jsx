import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../../components/elements/ProductList";
import { ServiceInfo } from "./servicesInfo";

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
    <div>
      <h1>Services</h1>
      <h2>{service?.title}</h2>
      <h3>{service?.summary}</h3>
      <p>{service?.description}</p>
      {service?.products && <ProductList products={service?.products} />}
    </div>
  );
};
