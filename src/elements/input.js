import styled from "styled-components";

export default styled.input.attrs((props) => ({
  type: props?.type ?? "text",
  name: props.name,
  placeholder: props?.placeholder ?? undefined,
  minlength: 2,
  required: !!(props?.required || ''),
}))`
  padding: 0 5px;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); 

  `;