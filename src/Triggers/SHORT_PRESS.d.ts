import { BindingInfo, Trigger } from "../Types";

export interface SHORT_PRESS extends Trigger {
	new (BindingInfo: BindingInfo, MaxPressTime: number): SHORT_PRESS;
}
