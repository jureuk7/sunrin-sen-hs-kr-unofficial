import React from "react";
import styled from "styled-components";

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label: string;
}

const Checkbox = (props: CheckboxProps) => {
    return (
        <CheckboxContainer>
            <CheckboxInput
                type="checkbox"
                checked={props.checked}
                onChange={(e) => props.onChange(e.target.checked)}
            />
            <CheckboxLabel>{props.label}</CheckboxLabel>
        </CheckboxContainer>
    );
};

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

const CheckboxInput = styled.input`
    margin: 0;
    appearance: none;
    border: 3px solid #d0d5dc;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    cursor: pointer;
    background-image: url("images/checkboxunselect.svg");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    &:checked {
        border: none;
        background-image: url("images/checkbox.svg");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #2684f9;
    }
`;

const CheckboxLabel = styled.label`
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #6d7784;
    margin-left: 16px;
`;

export default Checkbox;
