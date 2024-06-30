# react-msw-example-app Architectural Decisions Record (ADR)

Having an Architectural Decision Record (ADR) in any software project is beneficial both for the current team members as it will be for future newcommers. An ADR is a document that describes a choice the team makes about a significant aspect of the software architecture they're planning to build. Each ADR describes the architectural decision, its context, and its consequences.

This project uses Log4Brains as a docs-as-code knowledge base for its development. The key features are:

-   Understand past technical decisions and their context.
-   Take new decisions with confidence.
-   Always have a up-to-date technical documentation and training material available.
-   Onboard new developers quicker.
-   Set up a better collaborative decision process.

Also, Log4Brains performs Static Site Generation from the existing markdown files.

## Usage

Start the web UI to preview your architecture knowledge base:

```
npx log4brains preview
```

Use the CLI to create a new ADR:

```
npx log4brains adr new
```

For further information, please read the official documentation here: [https://jamstack.org/generators/log4brains/](https://jamstack.org/generators/log4brains/)
