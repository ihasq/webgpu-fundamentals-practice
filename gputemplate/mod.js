/**
 * 
 * @param { HTMLCanvasElement | OffscreenCanvas } canvas
 * 
 * @returns {{
 * 	canvas: HTMLCanvasElement | OffscreenCanvas
 * 	context: GPUCanvasContext
 * 	adapter: GPUAdapter,
 * 	device: GPUDevice,
 * 	presentationFormat: string,
 * }}
 * 
 */

export async function getGPUTemplate(canvas) {

	if(!("gpu" in navigator)) {
		return undefined;
	};

	const init = Object.create(null);

	init.adapter = await navigator.gpu?.requestAdapter();
	init.device = await init.adapter?.requestDevice();
	init.presentationFormat = navigator.gpu?.getPreferredCanvasFormat();

	if(canvas && canvas instanceof (HTMLCanvasElement || OffscreenCanvas)) {
		init.canvas = canvas;
		init.context = init.canvas.getContext("webgpu");
		init.context.configure({
			device: init.device,
			format: init.presentationFormat
		});

		if(canvas instanceof HTMLCanvasElement) {
			Object.assign(init.canvas, {
				width: init.canvas.clientWidth,
				height: init.canvas.clientHeight,
			});
		};

	};

	return init;

};