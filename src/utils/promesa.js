const esperarAlgo = (nombre) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Hola ${nombre}`);
		}, 3000);
	});
};

export { esperarAlgo };
