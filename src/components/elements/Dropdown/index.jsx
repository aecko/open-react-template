import React, { useState } from "react";
import DropdownMenu from "@atlaskit/dropdown-menu";
import { Link } from "react-router-dom";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { DropdownItemWrapper } from "./styles";

export const Dropdown = ({ title, options, dropDownRight }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <DropdownMenu
        isOpen={isOpen}
        onOpenChange={(attrs) => {
          setIsOpen(attrs.isOpen);
        }}
        trigger={({ triggerRef, ...props }) => (
          <Link
            ref={triggerRef}
            {...props}
            style={{ display: "flex", flexDirection: "row", gap: "0.3em" }}
          >
            {title} {isOpen ? <VscChevronUp /> : <VscChevronDown />}
          </Link>
        )}
        placement={dropDownRight ? "right-start" : ""}
      >
        {options.map((option) => {
          if (option.options) {
            return (
              <DropdownItemWrapper>
                <Dropdown
                  title={option.title}
                  options={option.options}
                  dropDownRight
                />
              </DropdownItemWrapper>
            );
          } else {
            return (
              <DropdownItemWrapper>
                <div
                  key={option.title}
                  onClick={() => {
                    //alert(`You clicked ${option.title}`);
                    //TODO: use react-router instead
                    window.location.href = option.route;
                  }}
                >
                  {option.title}
                </div>
              </DropdownItemWrapper>
            );
          }
        })}
      </DropdownMenu>
    </div>
  );
};
