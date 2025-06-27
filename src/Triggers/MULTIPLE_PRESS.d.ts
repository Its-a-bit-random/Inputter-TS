import { BindingInfo, Trigger } from "../Types";

export interface MULTIPLE_PRESS extends Trigger {
	new (BindingInfo: BindingInfo, PressCount: number, TimeFrame: number): MULTIPLE_PRESS;
}
