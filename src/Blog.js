import { Container,Divider } from "@material-ui/core";
import React from "react";
import {useState,useEffect} from "react";
import ReactMarkdown from "react-markdown";
import '@fontsource/roboto';
import file from "./content.md";

 function Blog() {
  const [markdown, setMarkdown] = useState("");
    // const markdown = "### Hello World";
  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div 
    className="blog"
    style={{textAlign: "left",fontFamily: "Roboto",padding: "2rem 0 5rem 0"}}
    >
    <Container maxWidth="md">
      <h2 style={{textAlign: "center"}}>How Ciphers Work?</h2>
      <Divider />
      <ReactMarkdown children={markdown} />
    </Container>
    </div>
  );
}
export default Blog;