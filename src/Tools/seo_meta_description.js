import React, { useState, useEffect, useRef } from "react";
import Header from "../Assets/Header";
import "./tools.css";
import AllTools from "../all_tools";
import Footer from "../Assets/Footer";
import Modal from "../Assets/FullScreenLoadingModal";
import { Link } from "react-router-dom";

export default function SeoMetaDescription() {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [warning, setWarning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [error, setError] = useState(false);
  const textAreaRef = useRef(null);

  const styles = {
    container: {
      marginTop: "40px",
      marginBottom: "40px",
      width: "100%",
    },
    card: {
      border: "1px solid #e3e3e3",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      marginBottom: "30px",
      backgroundColor: "#fff",
      textAlign: "center",
    },
    toolCard: {
      border: "1px solid #d1d1d1",
      borderRadius: "8px",
      padding: "15px",
      marginBottom: "20px",
      textAlign: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      color: "#333",
      backgroundColor: "#fff",
    },

    inputBox: {
      padding: "12px",
      borderRadius: "4px",
      border: "1px solid #d1d1d1",
      fontSize: "1rem",
      marginBottom: "20px",
      width: "100%",
      boxSizing: "border-box",
      outline: "none",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
    },
    button: {
      backgroundColor: "#294940",
      border: "none",
      color: "#fff",
      padding: "12px 30px",
      fontSize: "1rem",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      marginBottom: "20px",
    },
    buttonHover: {
      backgroundColor: "#1e3330",
    },
    textArea: {
      fontWeight: "500",
      backgroundColor: "#f2faf4",
      width: "100%",
      padding: "12px",
      borderRadius: "4px",
      border: "1px solid #d1d1d1",
      fontSize: "1rem",
      marginTop: "5px",
      boxSizing: "border-box",
      outline: "none",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
      resize: "none", // Prevent manual resizing
    },
    infoText: {
      width: "100%",
      backgroundColor: "#e8faec",
      padding: "20px",
      paddingBottom: "10px",
      borderRadius: "8px",
      marginTop: "30px",
      textAlign: "center",
    },
    
    wordCountWarning: {
      color: "#a6030e",
    },
    copyButton: {
      border: "none",
      background: "none",
      color: "#294940",
      padding: "0",
      fontSize: "0.9rem",
      cursor: "pointer",
      textDecoration: "none",
      bottom: "10px",
      right: "60px",
    },
  };
 
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // Reset the height
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Adjust to scroll height
    }
  }, [responseText]); // Trigger on responseText change

  setTimeout(() => {
    setIsModalOpen(false);
  }, 1000);

  useEffect(() => {
    const countWords = (text) => text.split(/\s+/).filter(Boolean).length;
    setWordCount(countWords(inputText));
  }, [inputText]);

  const generateMetaTitle = async () => {
    if (!inputText) {
      return;
    }
    setIsGenerating(true);
    setWarning(false);
    // setResponseText('Analyzing your content...');
    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:4000/seomdrmo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: inputText,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const cleanedOutput = data.output.replace(/^"|"$/g, "");
        if (cleanedOutput === "801") {
          setWarning(true);
          setResponseText("");
        } else {
          setWarning(false);
          setResponseText(cleanedOutput);
        }

        console.log("Request sent successfully");
      } catch (error) {
        console.error("Error:", error);
        setError(true);
        setTimeout(() => setError(false), 5000);
      } finally {
        setIsGenerating(false);
      }
    }, 5000); // 5-second delay
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(responseText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1200);
    });
  };

  // Reusable Tool Card Component
  const ToolCard = ({ title, description }) => (
    <div style={styles.toolCard}>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );

  return (
    <div>
      {isModalOpen && <Modal show={isModalOpen} />}
      <Header />
      {/* Hero Section */}
      <section className="topcontainerx text-center py-4">
        <div className="container">
          <h1 className="display-3 headrankmeone">SEO Meta Description</h1>
          <p className="lead headdesc">
            Generate optimized meta description for better SEO results and
            higher search rankings.
          </p>
        </div>
      </section>
      {error && (
        <p className="text-center text-danger pt-3">
          Something went wrong ! Please try again later.
        </p>
      )}
      {/* Main Content Section with Tool Cards */}
      <section style={styles.container} className="container">
        <div className="row">
          {/* Left Tools Column */}
          <div className="col-md-3 order-2 order-md-1">
            <h5 className="text-center">Related Tools</h5>
            <hr />
            <a href="/" style={{ textDecoration: "none" }}>
              <ToolCard
                title="SEO Meta Description 📜"
                description="Create compelling meta descriptions to enhance search visibility."
              />
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              <ToolCard
                title="Topical Map Generator 📑"
                description="Create a topical map to organize your content strategy efficiently."
              />
            </a>
          </div>

          {/* Main Tool Column */}
          <div className="col-md-6 order-1 order-md-2">
            <div style={styles.card}>
              {/* Text Input Box */}
              <input
                className="inputbox text-center"
                type="text"
                style={styles.inputBox}
                placeholder="Enter your topic or keywords here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <div
                className="wordCount"
                style={{
                  ...styles.wordCount,
                  ...(wordCount > 15 ? styles.wordCountWarning : {}),
                }}
              >
                {wordCount}/15
              </div>
              {warning && (
                <p className="text-center text-danger">
                  Sorry! The content you entered has some issues. Please try
                  again with different content.
                </p>
              )}
              {responseText && (
                <div>
                  <div className="">
                    <textarea
                      ref={textAreaRef}
                      className="textarea-custom-scrollbar" // Apply the custom class
                      style={styles.textArea}
                      value={responseText}
                      readOnly
                    />
                  </div>
                  <div className="copyButton">
                    <button style={styles.copyButton} onClick={copyToClipboard}>
                      {isCopied ? (
                        <p>
                          Copied <i class="bi bi-clipboard-check"></i>
                        </p>
                      ) : (
                        <p>
                          Copy <i class="bi bi-clipboard"></i>
                        </p>
                      )}
                    </button>
                  </div>
                </div>
              )}
              {/* Generate Button */}
              <div className="text-center">
                <button
                  style={styles.button}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor =
                      styles.buttonHover.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor =
                      styles.button.backgroundColor)
                  }
                  onClick={generateMetaTitle}
                  disabled={isGenerating || wordCount > 15}
                >
                  {isGenerating ? (
                    <div class="spinner-border" role="status">
                      <span class="sr-only"></span>
                    </div>
                  ) : (
                    "Generate"
                  )}
                </button>
              </div>

              {/* Response Text Area */}
            </div>
            {/* Ad space */}
            <div>{/* ad space */}</div>

            {/* Info Section */}
            <div className="infoCon" style={styles.infoText}>
              <p className="infoText">
                "Optimize your web content with our SEO Meta Description Tool. Enter
                your topic / keywords to get customized meta descriptions that enhance SEO and
                attract clicks.{" "}
                <span style={{ fontWeight: "500" }}>
                  If you see a warning, the content may be inappropriate or not
                  suitable for SEO. Please try again.
                </span>
                "
              </p>
            </div>
          </div>

          {/* Right Tools Column */}
          <div className="col-md-3 order-3">
            <h5 className="text-center">Advertisment</h5>
            <hr />
            {/* Sidebar ad. */}
            <div className="iframediv">
              <iframe
                className="iframeyt"
                src="https://www.youtube.com/embed/0KhFdIlMEG4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="YouTube video"
              ></iframe>
            </div>
            <p className="iframetitle" style={{ fontWeight: "bold" }}>
              How To Unlock Canva Pro for Free 2024 (Step By Step)
            </p>
          </div>
        </div>
      </section>

      {/* All Tools Section */}
      <AllTools />
      <Footer />
    </div>
  );
}
