import { fireEvent } from "@storybook/testing-library";
import { render, screen, RenderResult } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { DelayInput } from "./index";

describe("DelayInput", () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    jest.useFakeTimers();
    handleChange = jest.fn();
    //Inputを描画する設定
    renderResult = render(<DelayInput onChange={handleChange} />);
  });
  afterEach(() => {
    //各々のtest前に解放
    renderResult.unmount();
    jest.useFakeTimers();
  });

  it("正常_テキストが表示されているか", () => {
    const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;

    expect(spanNode).toHaveTextContent("入力したテキスト:");
  });

  it("正常_入力中と表示されているか", () => {
    const inputText = "test input text";
    const inputNode = screen.getByTestId("input-text") as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;
    expect(spanNode).toHaveTextContent("入力中...");
  });

  it("正常_入力して1秒後にテキストが表示されるか", async () => {
    const inputText = "test input text";
    const inputNode = screen.getByTestId("input-text") as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    //actを実行することで内部でtimeoutを待たずに実行されることを保証する
    await act(() => {
      jest.runAllTimers();
    });

    const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;

    expect(spanNode).toHaveTextContent(`入力したテキスト:${inputText}`);
    expect(handleChange).toHaveBeenCalled();
  });
});
