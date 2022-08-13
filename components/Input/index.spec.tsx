import { fireEvent } from "@storybook/testing-library";
import { render, screen, RenderResult } from "@testing-library/react";
import { Input } from "./index";

describe("Input", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    //Inputを描画する設定
    renderResult = render(<Input id="username" label="Username" />);
  });
  afterEach(() => {
    //各々のtest前に解放
    renderResult.unmount();
  });

  it("正常_描かれたときにから文字になっているか", () => {
    //getByLabelTextを使うことで描画されているDOMから指定した名前のラベルに対応するInputを取得する
    //labelから取得しているため型はInputElementになる(ならければならばい)
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

    expect(inputNode).toHaveValue("");
  });

  it("正常_入力した内容が表示される", () => {
    const inputText = "test input text";
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

    //changeイベントを発火させる
    fireEvent.change(inputNode, { target: { value: inputText } });

    expect(inputNode).toHaveValue(inputText);
  });

  it("正常_ボタンを押すことでテキスト内容がresetされる", () => {
    const inputText = "test input text";
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

    //changeイベントを発火させる
    fireEvent.change(inputNode, { target: { value: inputText } });

    //ボタンを取得
    //ボタンタグはroleを取得する。defaultでbuttonというroleが入るので取得。第二引数でボタンで表示しているテキストを指定
    const buttonNode = screen.getByRole("button", {
      name: "Reset",
    }) as HTMLButtonElement;

    fireEvent.click(buttonNode);

    expect(inputNode).toHaveValue("");
  });
});
