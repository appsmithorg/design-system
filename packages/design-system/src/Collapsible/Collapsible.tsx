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
  isExpanded: true,
});

function CollapsibleHeader(props: CollapsibleHeaderProps) {
  const { children } = props;
  const { isExpanded, onOpenChange } = useContext(CollapsibleContext);

  return (
    <StyledCollapsibleHeader
      className={CollapsibleHeaderClassName}
      onClick={() => {
        if (onOpenChange) {
          onOpenChange();
        }
      }}
    >
      <Icon
        name={isExpanded ? "arrow-up-s-line" : "arrow-down-s-line"}
        size="md"
      />

      {children}
    </StyledCollapsibleHeader>
  );
}

function CollapsibleContent(props: CollapsibleContentProps) {
  const { children } = props;
  const { isExpanded } = useContext(CollapsibleContext);

  return (
    <StyledCollapsibleContent
      className={CollapsibleContentClassName}
      isExpanded={isExpanded}
    >
      {children}
    </StyledCollapsibleContent>
  );
}

function Collapsible(props: CollapsibleProps) {
  const { children, className, isOpen, onOpenChange } = props;
  const [collapsibleState, setCollapsibleState] = useState<{
    isExpanded: boolean;
    onOpenChange?: () => void;
  }>({
    isExpanded: !!isOpen,
  });

  const handleOpenChange = () => {
    setCollapsibleState({
      ...collapsibleState,
      isExpanded: !collapsibleState.isExpanded,
    });

    if (onOpenChange) {
      onOpenChange(!collapsibleState.isExpanded);
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
