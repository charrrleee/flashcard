import { FormEvent, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

interface SearchBarProps {
  onSubmit: (sentence: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const [validated, setValidated] = useState(false);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sentence: string = e.currentTarget.input.value;
    if (sentence.length >= 10) {
      setValidated(false);
      props.onSubmit(sentence);
    } else {
      setValidated(true);
    }
  };

  return (
    <Form
      onSubmit={handleSearch}
      noValidate
      validated={validated}
      className="d-flex flex-column mb-3"
    >
      <Form.Group className="mb-3" controlId="validationForm">
        <InputGroup hasValidation>
          <Form.Control
            name="input"
            type="text"
            placeholder="Enter a topic to begin generating flashcards"
          />
          <Form.Control.Feedback type="invalid">
            Please type at least 10 words.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      {
        validated && <Form.Label>Please Enter at least 10 words.</Form.Label>
      }
      <Button
        className={`btn btn-light ${props.isLoading ? "disabled" : ""}`}
        variant="primary"
        type="submit"
      >
        {props.isLoading && (
          <span
            className="spinner-border spinner-border-sm mr-2"
            role="status"
            aria-hidden="true"
          ></span>
        )}
        {props.isLoading ? "Loading..." : "Submit"}
      </Button>
    </Form>
  );
};

export default SearchBar;
