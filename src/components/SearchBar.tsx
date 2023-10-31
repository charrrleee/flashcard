import { FormEvent, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

interface SearchBarProps {
  onSubmit: (sentence: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const [validated, setValidated] = useState(false);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sentence: string = e.currentTarget.input.value;
    const form = e.currentTarget;
    console.log("testst", "run", sentence.length < 10, form.checkValidity());
    // const form = e.currentTarget;
    // if (sentence.length < 10) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // } else {

    props.onSubmit(e.currentTarget.input.value);
    setValidated(true);
    // }
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SearchBar;
