# gputemplate
## install
```
npm i gputemplate
```
## usage
```javascript
import { getGPUTemplate }  from "gputemplate";

const {
	canvas,
	context,
	adapter,
	device,
	presentationFormat,
} = await getGPUTemplate(document.querySelector("canvas#target"));
```