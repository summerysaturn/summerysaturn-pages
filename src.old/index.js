import ReactDOM from "react-dom";
import React from "react";
import logo from "./logo.png";

import {
  Card,
  Container,
  Badge,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaCoffee,
} from "react-icons/fa";

import "./index.css";

var seedrandom = require("seedrandom");
var hsluv = require("hsluv");

function colorHash(string) {
  let hue = seedrandom(string + "-").quick();
  console.log(hsluv);
  return hsluv.hsluvToHex([120 + hue * 240, 80, 65]);
}

class SocialButtons extends React.Component {
  constructor(props) {
    super(props);

    this.Links = [
      {
        name: "Instagram",
        icon: <FaInstagram />,
        url: "https://www.instagram.com/summerysaturn/",
      },
      {
        name: "Twitter",
        icon: <FaTwitter />,
        url: "https://twitter.com/summerysaturn",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/summerysaturn",
      },
      {
        name: "Ko-Fi",
        icon: <FaCoffee />,
        url: "https://ko-fi.com/summerysaturn",
      },
    ];
  }

  render() {
    return (
      <div className="d-flex">
        {this.Links.map((e) => (
          <SocialButton url={e.url}>
            {e.icon}
            <span className="sr-only">{e.name} Link</span>
          </SocialButton>
        ))}

        <DiscordButton />
      </div>
    );
  }
}

class SocialButton extends React.Component {
  render() {
    return (
      <a href={this.props.url} className="m-2 socialButton">
        {this.props.children}
      </a>
    );
  }
}

class DiscordButton extends React.Component {
  render() {
    return (
      <OverlayTrigger
        placement="bottom"
        trigger="click"
        overlay={
          <Tooltip>
            <strong>lyla#1123</strong>
          </Tooltip>
        }
      >
        <div className="m-2 socialButton">
          <FaDiscord />
        </div>
      </OverlayTrigger>
    );
  }
}

class Heading extends React.Component {
  render() {
    return (
      <div className="hr">
        <hr data-content={this.props.children} className="hr-text" />
      </div>
    );
  }
}

class LanguageDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.languages = [
      "Git",
      "Shell",
      "*nix",
      "Java",
      "C#",
      "Python",
      "Lua & LÖVE2D",
      "JavaScript",
      "jQuery",
      "NodeJS",
      "ReactJS",
      "Unity3D",
      "Google Cloud Platform",
    ];
  }

  render() {
    return (
      <h2>
        {this.languages.map((e) => (
          <LanguageBadge>{e}</LanguageBadge>
        ))}
      </h2>
    );
  }
}

class LanguageBadge extends React.Component {
  render() {
    return (
      <Badge
        className="m-1"
        style={{
          color: "white",
          backgroundColor: colorHash(this.props.children),
        }}
      >
        {this.props.children}
      </Badge>
    );
  }
}

class RepoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restData: [] };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/summerysaturn/repos")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          restData: data,
        });
      });
  }

  render() {
    return (
      <div className="card-columns">
        {this.state.restData.map((e) => (
          <RepoCard key={"card-" + e.full_name} repoData={e} />
        ))}
      </div>
    );
  }
}

class RepoCard extends React.Component {
  constructor(props) {
    super(props);
    this.url = "";
    this.state = { img: "" };
  }

  componentDidMount() {
    this.url =
      "https://raw.githubusercontent.com/" +
      this.props.repoData.full_name +
      "/" +
      this.props.repoData.default_branch +
      "/" +
      ".github/preview.png";

    this.img = fetch(this.url)
      .then((res) => res.blob())
      .then((data) => {
        if (data.type === "image/png") {
          this.setState({ img: URL.createObjectURL(data) });
        }
      })
      .catch((error) => console.log("Image not found:", error));
  }

  render() {
    return (
      <Card>
        <a href={this.props.repoData.html_url} className="text-reset">
          {this.state.img && (
            <img
              src={this.state.img}
              className="card-img-top"
              alt={this.props.repoData.name}
            />
          )}
          {!this.state.img && (
            <img
              src={process.env.PUBLIC_URL + "/placeholder.png"}
              className="card-img-top"
              alt={this.props.repoData.name}
            />
          )}
          <Card.Body>
            <h6>{this.props.repoData.name}</h6>
            <p>{this.props.repoData.description}</p>
            <Badge
              style={{
                color: "white",
                backgroundColor: colorHash(this.props.repoData.language),
              }}
            >
              {this.props.repoData.language}
            </Badge>
          </Card.Body>
        </a>
      </Card>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="position-relative">
          <img src={logo} className="App-logo" alt="Logo" />
          <h1 className="display-1 App-Title font-weight-bold">
            summerysaturn
          </h1>
        </div>

        <h4>Student / Developer / Artist</h4>

        <SocialButtons />
      </header>

      <Container className="mb-5">
        <Heading>Skills</Heading>
        <LanguageDisplay />

        <Heading>GitHub Repos</Heading>
        <RepoDisplay />
      </Container>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
