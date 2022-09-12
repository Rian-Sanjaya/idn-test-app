import NewsPage from "../../pages/news/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("NewsPage", () => {
  it("renders news page", () => {
    render(<NewsPage />);
    // wait test after fetching is done
    setTimeout(() => {
      expect(screen.getByTestId("article-date")).toBeInTheDocument();
      expect(screen.getByTestId("article-headline")).toBeInTheDocument();
      expect(screen.getByTestId("article-picture")).toBeInTheDocument();
      expect(screen.getByTestId("idnnews-logo")).toBeInTheDocument();
    }, 5000);
  });
});
