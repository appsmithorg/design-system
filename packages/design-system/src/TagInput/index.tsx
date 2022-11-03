import React, { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";
import { Classes, TagInput } from "@blueprintjs/core";
import {
  createMessage,
  INVITE_USERS_VALIDATION_EMAIL_LIST,
} from "Constants/messages";
import { HighlightText } from "HighlightText";

export const isEmail = (value: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};

const TagInputWrapper = styled.div`
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  position: relative;

  &&& {
    .${Classes.TAG_INPUT} {
      background-color: var(--ads-tag-input-background-color);
      min-height: 38px;
      border: 1.2px solid var(--ads-tag-input-border-color);
      border-radius: 0px;
    }
    .${Classes.TAG_INPUT}.${Classes.ACTIVE} {
      border: 1px solid var(--ads-tag-input-active-border-color);
      box-shadow: var(--ads-tag-input-active-box-shadow);
    }
    .${Classes.INPUT_GHOST} {
      color: var(--ads-tag-input-text-color);
      &::placeholder {
        color: var(--ads-tag-input-placeholder-color);
      }
    }
    .${Classes.TAG} {
      padding: 3px 10px;
      color: var(--ads-tag-input-tag-text-color);
      background-color: var(--ads-tag-input-tag-background-color);
      border-radius: 0px;
      font-size: 11px;
      letter-spacing: 0.4px;

      .${Classes.TAG_REMOVE} {
        margin-top: 0;
      }
    }
  }
`;

const SuggestionsWrapper = styled.div`
  margin-top: 4px;
  position: relative;
  left: 4px;
  width: 100%;

  svg {
    path {
      fill: var(--ads-old-color-gray-7);
    }
  }

  > div {
    position: absolute;
    border: 1px solid var(--appsmith-color-black-250);
    width: 100%;
    background: var(--appsmith-color-black-0);
    max-height: 160px;
    overflow: auto;
  }
`;

const Suggestion = styled.div`
  padding: 8px;
  cursor: pointer;
  display: flex;
  &:hover {
    background: var(--appsmith-color-black-100);
  }
`;

type TagInputProps = {
  autofocus?: boolean;
  /** TagInput Placeholder */
  placeholder: string;
  /** TagInput value and onChange handler */
  input: {
    value?: string;
    onChange?: (value: string) => void;
  };
  /** TagInput type of individual entries (HTML input types) */
  type: string;
  /** A delimiter which decides when to separate string into tags */
  separator?: string | RegExp | undefined;
  hasError?: boolean;
  customError?: (error: any, values?: any) => void;
  suggestions?: { id: string; name: string; icon?: string }[];
  suggestionLeftIcon?: ReactElement;
};

function getValues(inputValues: any, suggestions: any[]) {
  const values =
    inputValues && inputValues.length > 0 ? inputValues.split(",") : [];
  if (suggestions?.length > 0) {
    for (const i of suggestions) {
      for (const j in values) {
        if (values[j] === i.id) {
          values[j] = i.name;
        }
      }
    }
  }
  return values;
}

/**
 * TagInputComponent
 * Takes in a comma separated set of values (input.value prop) to display in tags
 * On addition or removal of tags, passes the comman separated string to input.onChange prop
 * @param props : TagInputProps
 */
function TagInputComponent(props: TagInputProps) {
  const [selectedSuggestions, setSelectedSuggestions] = useState<any[]>([]);
  const [values, setValues] = useState<string[]>(
    getValues(props?.input?.value, selectedSuggestions),
  );

  const [currentValue, setCurrentValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<
    { id: string; name: string }[]
  >(props?.suggestions || []);
  const mappedSuggestions = (showSuggestions ? suggestions : []).map(
    (each: any) => (
      <Suggestion key={each.id} onClick={() => handleSuggestionClick(each.id)}>
        {props.suggestionLeftIcon ?? null}
        <HighlightText highlight={currentValue} text={each.name} />
      </Suggestion>
    ),
  );

  useEffect(() => {
    setValues(getValues(props?.input?.value, selectedSuggestions));
  }, [props.input.value]);

  const validateEmail = (newValues: string[]) => {
    if (newValues && newValues.length > 0) {
      let error = "";
      newValues.forEach((user: any) => {
        if (!isEmail(user)) {
          error = createMessage(INVITE_USERS_VALIDATION_EMAIL_LIST);
        }
      });
      props.customError?.(error, newValues);
    } else {
      props.customError?.("");
    }
  };

  const commitValues = (newValues: string[]) => {
    setValues(newValues);
    props.input.onChange &&
      props.input.onChange(newValues.filter(Boolean).join(","));
    props.customError?.("", newValues);
    props.type === "email" && validateEmail(newValues);
  };

  const onTagsChange = (values: React.ReactNode[]) => {
    const _values = values as string[];
    if (props?.suggestions) {
      setSuggestions(props.suggestions);
    }
    commitValues(_values);
  };

  const onKeyDown = (e: any) => {
    let resetSuggestions = false;
    // Add new values to the tags on comma, return key, space and Tab press
    // only if user has typed something on input
    if (
      (e.key === "," ||
        e.key === "Enter" ||
        e.key === " " ||
        e.key === "Tab") &&
      e.target.value
    ) {
      const newValues = [...values, e.target.value];
      commitValues(newValues);
      setCurrentValue("");
      resetSuggestions = true;
      e.preventDefault();
    } else if (e.key === "Backspace") {
      if (e.target.value.length === 0) {
        const newValues = values.slice(0, -1);
        commitValues(newValues);
      }
      resetSuggestions = true;
    }
    if (resetSuggestions && props?.suggestions) {
      setSuggestions(props.suggestions);
    }
  };

  // The input text field where the user can type in needs to handle the scenario where
  // The input field is reset on adding tag.
  const handleInputChange = (e: any) => {
    if ([",", " ", "Enter"].indexOf(e.target.value) === -1) {
      setCurrentValue(e.target.value);
      if (props?.suggestions) {
        const results =
          suggestions &&
          suggestions.filter((s) => s.name?.includes(e.target.value));
        setSuggestions(results);
        setShowSuggestions(true);
      }
    } else {
      setCurrentValue("");
      if (props?.suggestions) {
        setSuggestions(props.suggestions);
      }
    }
  };

  const handleInputBlur = (e: any) => {
    if (
      (e?.target?.value?.trim() && !showSuggestions && !suggestions.length) ||
      isEmail(e.target.value)
    ) {
      const newValues = [...values, e.target.value];
      commitValues(newValues);
      setCurrentValue("");
      e.preventDefault();
    }
  };

  const handleSuggestionClick = (value: string) => {
    const getSuggestionData = props.suggestions?.find(
      (group: any) => group.id === value,
    );
    setCurrentValue("");
    setSuggestions(props?.suggestions || []);
    setShowSuggestions(false);
    props?.input?.onChange?.(
      [props?.input?.value, getSuggestionData?.id].filter(Boolean).join(","),
    );
    if (getSuggestionData) {
      setSelectedSuggestions([...selectedSuggestions, getSuggestionData]);
    }
  };

  return (
    <TagInputWrapper>
      <TagInput
        addOnPaste
        inputProps={{
          type: props.type,
          value: currentValue,
          onBlur: handleInputBlur,
          autoFocus: props.autofocus,
        }}
        large={false}
        onChange={onTagsChange}
        onInputChange={handleInputChange}
        onKeyDown={onKeyDown}
        placeholder={props.placeholder}
        separator={props.separator || ","}
        tagProps={(tag) => ({
          className: `${tag}_tag`,
          round: true,
        })}
        values={values || [""]}
      />
      {mappedSuggestions.length > 0 && (
        <SuggestionsWrapper>
          <div>{mappedSuggestions}</div>
        </SuggestionsWrapper>
      )}
    </TagInputWrapper>
  );
}

export default TagInputComponent;
