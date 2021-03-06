import { SpectatorWithHost } from "../../lib/src";
import { createHostComponentFactory } from "../../lib/src/host";
import { AsyncInputComponent } from "./async-input.component";
import { fakeAsync, tick } from "@angular/core/testing";

describe("ZippyComponent", () => {
  let host: SpectatorWithHost<AsyncInputComponent>;

  const createHost = createHostComponentFactory(AsyncInputComponent);

  it("should work", () => {
    const { component } = createHost(`<app-async-input></app-async-input>`);
    expect(component).toBeDefined();
  });

  it("should not be visible", () => {
    host = createHost(`<app-async-input></app-async-input>`);
    host.setInput("widgets", "");
    expect(host.query("div")).not.toExist();
  });

  it(
    "should be visible",
    fakeAsync(() => {
      host = createHost(`<app-async-input></app-async-input>`, true, {
        widgets: ""
      });
      tick();
      host.detectChanges();
      expect(host.query("div")).toExist();
    })
  );
});
