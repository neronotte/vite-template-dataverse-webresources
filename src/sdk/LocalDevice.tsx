export default class LocalDevice implements Xrm.Device {
	captureAudio(): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse> {
		throw new Error("Method not implemented.");
	}
	captureImage(imageOptions?: Xrm.Device.CaptureImageOptions | undefined): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse> {
		throw new Error("Method not implemented.");
	}
	captureVideo(): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse> {
		throw new Error("Method not implemented.");
	}
	getBarcodeValue(): Xrm.Async.PromiseLike<string> {
		throw new Error("Method not implemented.");
	}
	getCurrentPosition(): Xrm.Async.PromiseLike<Xrm.Device.GetCurrentPositionResponse> {
		throw new Error("Method not implemented.");
	}
	pickFile(pickFileOptions?: Xrm.Device.PickFileOptions | undefined): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse[]> {
		throw new Error("Method not implemented.");
	}
}