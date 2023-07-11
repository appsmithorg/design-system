import React, { useContext, useEffect, useState } from "react";
import {
  CollapsibleHeaderProps,
  CollapsibleContentProps,
  CollapsibleProps,
  CollapsibleContextType,
} from "./Collapsible.types";
import {
  StyledCollapsibleContainer,
  StyledCollapsibleContent,
  StyledCollapsibleHeader,
} from "./Collapsible.styles";
import {
  CollapsibleClassName,
  CollapsibleContentClassName,
  CollapsibleHeaderClassName,
} from "./Collapsible.constants";
import { Icon } from "Icon";
import { createContext } from "react";
import clsx from "classnames";

export const CollapsibleContext = createContext<CollapsibleContextType>({
  isOpen: true,
});

function CollapsibleHeader(props: CollapsibleHeaderProps) {
  const { children, isCollapsibleArrowVisible } = props;
  const { isOpen, onOpenChange } = useContext(CollapsibleContext);

  return (
    <StyledCollapsibleHeader
      className={CollapsibleHeaderClassName}
      onClick={() => {
        if (onOpenChange) {
          onOpenChange();
        }
      }}
    >
      {isCollapsibleArrowVisible && (
        <Icon
          name={isOpen ? "arrow-down-s-line" : "arrow-up-s-line"}
          size="md"
        />
      )}

      {children}
    </StyledCollapsibleHeader>
  );
}

function CollapsibleContent(props: CollapsibleContentProps) {
  const { children } = props;
  const { isOpen } = useContext(CollapsibleContext);

  return (
    <StyledCollapsibleContent
      className={CollapsibleContentClassName}
      isOpen={isOpen}
    >
      {children}
    </StyledCollapsibleContent>
  );
}

function Collapsible(props: CollapsibleProps) {
  const { children, className, onOpenChange, open } = props;
  const [collapsibleState, setCollapsibleState] = useState<{
    isOpen: boolean;
    onOpenChange?: () => void;
  }>({
    isOpen: !!open,
  });

  const handleOpenChange = () => {
    setCollapsibleState({
      ...collapsibleState,
      isOpen: !collapsibleState.isOpen,
    });

    if (onOpenChange) {
      onOpenChange(!collapsibleState.isOpen);
    }
  };

  useEffect(() => {
    setCollapsibleState({
      ...collapsibleState,
      onOpenChange: handleOpenChange,
    });
  }, [onOpenChange]);

  return (
    <CollapsibleContext.Provider value={collapsibleState}>
      <StyledCollapsibleContainer
        className={clsx(CollapsibleClassName, className)}
      >
        {children}
      </StyledCollapsibleContainer>
    </CollapsibleContext.Provider>
  );
}

Collapsible.displayName = "Collapsible";
CollapsibleHeader.displayName = "CollapsibleHeader";
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleHeader, CollapsibleContent };
