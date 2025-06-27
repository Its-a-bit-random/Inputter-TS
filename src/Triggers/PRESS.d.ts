import { BindingInfo, Trigger } from "../Types";

export interface PRESS extends Trigger {
	new (BindingInfo: BindingInfo): PRESS;
}
