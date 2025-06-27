import { BindingInfo, Trigger } from "../Types";

export interface HOLD extends Trigger {
	new (BindingInfo: BindingInfo, HoldTime: number): HOLD;
}
