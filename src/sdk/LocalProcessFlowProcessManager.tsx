export default class LocalProcessFlowProcessManager implements Xrm.ProcessFlow.ProcessManager {
	getActiveProcess(): Xrm.ProcessFlow.Process {
		throw new Error("Method not implemented.");
	}
	setActiveProcess(processId: string, callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate | undefined): void {
		throw new Error("Method not implemented.");
	}
	getProcessInstances(callbackFunction?: Xrm.ProcessFlow.GetProcessInstancesDelegate | undefined): void {
		throw new Error("Method not implemented.");
	}
	setActiveProcessInstance(processInstanceId: string, callbackFunction?: Xrm.ProcessFlow.SetProcessInstanceDelegate | undefined): void {
		throw new Error("Method not implemented.");
	}
	getActiveStage(): Xrm.ProcessFlow.Stage {
		throw new Error("Method not implemented.");
	}
	setActiveStage(stageId: string, callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate | undefined): void {
		throw new Error("Method not implemented.");
	}
	getActivePath(): Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage> {
		throw new Error("Method not implemented.");
	}
	getEnabledProcesses(callbackFunction: (enabledProcesses: Xrm.ProcessFlow.ProcessDictionary) => void): void {
		throw new Error("Method not implemented.");
	}
	getSelectedStage(): Xrm.ProcessFlow.Stage {
		throw new Error("Method not implemented.");
	}
	addOnPreProcessStatusChange(handler: Xrm.Events.ProcessStatusChangeHandler): void {
		throw new Error("Method not implemented.");
	}
	addOnPreStageChange(handler: Xrm.Events.StageChangeEventHandler): void {
		throw new Error("Method not implemented.");
	}
	addOnProcessStatusChange(handler: Xrm.Events.ProcessStatusChangeHandler): void {
		throw new Error("Method not implemented.");
	}
	addOnStageChange(handler: Xrm.Events.StageChangeEventHandler): void {
		throw new Error("Method not implemented.");
	}
	addOnStageSelected(handler: Xrm.Events.ContextSensitiveHandler): void {
		throw new Error("Method not implemented.");
	}
	removeOnPreProcessStatusChange(handler: Xrm.Events.ProcessStatusChangeHandler): void {
		throw new Error("Method not implemented.");
	}
	removeOnPreStageChange(handler: Xrm.Events.StageChangeEventHandler): void {
		throw new Error("Method not implemented.");
	}
	removeOnProcessStatusChange(handler: Xrm.Events.ProcessStatusChangeHandler): void {
		throw new Error("Method not implemented.");
	}
	removeOnStageChange(handler: Xrm.Events.StageChangeEventHandler): void {
		throw new Error("Method not implemented.");
	}
	removeOnStageSelected(handler: Xrm.Events.StageSelectedEventHandler): void {
		throw new Error("Method not implemented.");
	}
	moveNext(callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate | undefined): void {
		throw new Error("Method not implemented.");
	}
	movePrevious(callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate | undefined): void {
		throw new Error("Method not implemented.");
	}
	getInstanceId(): string {
		throw new Error("Method not implemented.");
	}
	getInstanceName(): string {
		throw new Error("Method not implemented.");
	}
	getStatus(): Xrm.ProcessFlow.ProcessStatus {
		throw new Error("Method not implemented.");
	}
	setStatus(status: Xrm.ProcessFlow.ProcessStatus, callbackFunction?: Xrm.ProcessFlow.ProcessSetStatusDelegate | undefined): void {
		throw new Error("Method not implemented.");
	}
}